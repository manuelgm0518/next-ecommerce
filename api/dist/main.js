"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("./core/services");
const services_2 = require("./integrations/authentication/services");
const services_3 = require("./modules/users/services");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const environment = app.get(services_1.EnvironmentService);
    const version = environment.get('VERSION');
    app.enableCors();
    app.setGlobalPrefix('api');
    app.enableVersioning({ type: common_1.VersioningType.URI, defaultVersion: version.toString() });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('E-Commerce - Backend')
        .setDescription('API methods and schemas documentation')
        .setVersion(version.toFixed(1))
        .addBearerAuth()
        .setExternalDoc('Postman Collection', '/docs-json')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(environment.get('PORT'));
    console.log(`Server ready at ${await app.getUrl()}`);
    const authService = app.get(services_2.AuthenticationService);
    const sessionService = app.get(services_3.SessionService);
    authService.syncAuthRoles();
    sessionService.testAdmin();
}
bootstrap();
//# sourceMappingURL=main.js.map