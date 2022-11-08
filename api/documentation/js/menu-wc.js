'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">next-ecommerce documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-4c01786f1c25f2f7938d673de30a5835bf04ccccd7f6d8b5b841203267a506f92998f76061cdcec9f3a0a38b6f8875b52c5e746ca9ea9e7936f0bec929a8f0e4"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-4c01786f1c25f2f7938d673de30a5835bf04ccccd7f6d8b5b841203267a506f92998f76061cdcec9f3a0a38b6f8875b52c5e746ca9ea9e7936f0bec929a8f0e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-4c01786f1c25f2f7938d673de30a5835bf04ccccd7f6d8b5b841203267a506f92998f76061cdcec9f3a0a38b6f8875b52c5e746ca9ea9e7936f0bec929a8f0e4"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-4c01786f1c25f2f7938d673de30a5835bf04ccccd7f6d8b5b841203267a506f92998f76061cdcec9f3a0a38b6f8875b52c5e746ca9ea9e7936f0bec929a8f0e4"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtAuthStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAuthStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalAuthStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalAuthStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-cf3cafde7d5d5c3ec8cbf4534865dc0c37669f560110d13a675a655557f4f8144e7f4d61770ce3c0436fdad6dc84eb446ad466ce2743e0d14606fd080e6e59b7"' : 'data-target="#xs-injectables-links-module-CoreModule-cf3cafde7d5d5c3ec8cbf4534865dc0c37669f560110d13a675a655557f4f8144e7f4d61770ce3c0436fdad6dc84eb446ad466ce2743e0d14606fd080e6e59b7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-cf3cafde7d5d5c3ec8cbf4534865dc0c37669f560110d13a675a655557f4f8144e7f4d61770ce3c0436fdad6dc84eb446ad466ce2743e0d14606fd080e6e59b7"' :
                                        'id="xs-injectables-links-module-CoreModule-cf3cafde7d5d5c3ec8cbf4534865dc0c37669f560110d13a675a655557f4f8144e7f4d61770ce3c0436fdad6dc84eb446ad466ce2743e0d14606fd080e6e59b7"' }>
                                        <li class="link">
                                            <a href="injectables/EnvironmentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnvironmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-867e5c2c2cecf6b42e569892a4b4222d1d63fb35a9852bfe70644813671d9a5468b235ac9294728dced8596e1e4a207b16ca7ebb780d2cba801231ccf3cf9b80"' : 'data-target="#xs-controllers-links-module-ProductsModule-867e5c2c2cecf6b42e569892a4b4222d1d63fb35a9852bfe70644813671d9a5468b235ac9294728dced8596e1e4a207b16ca7ebb780d2cba801231ccf3cf9b80"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-867e5c2c2cecf6b42e569892a4b4222d1d63fb35a9852bfe70644813671d9a5468b235ac9294728dced8596e1e4a207b16ca7ebb780d2cba801231ccf3cf9b80"' :
                                            'id="xs-controllers-links-module-ProductsModule-867e5c2c2cecf6b42e569892a4b4222d1d63fb35a9852bfe70644813671d9a5468b235ac9294728dced8596e1e4a207b16ca7ebb780d2cba801231ccf3cf9b80"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-867e5c2c2cecf6b42e569892a4b4222d1d63fb35a9852bfe70644813671d9a5468b235ac9294728dced8596e1e4a207b16ca7ebb780d2cba801231ccf3cf9b80"' : 'data-target="#xs-injectables-links-module-ProductsModule-867e5c2c2cecf6b42e569892a4b4222d1d63fb35a9852bfe70644813671d9a5468b235ac9294728dced8596e1e4a207b16ca7ebb780d2cba801231ccf3cf9b80"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-867e5c2c2cecf6b42e569892a4b4222d1d63fb35a9852bfe70644813671d9a5468b235ac9294728dced8596e1e4a207b16ca7ebb780d2cba801231ccf3cf9b80"' :
                                        'id="xs-injectables-links-module-ProductsModule-867e5c2c2cecf6b42e569892a4b4222d1d63fb35a9852bfe70644813671d9a5468b235ac9294728dced8596e1e4a207b16ca7ebb780d2cba801231ccf3cf9b80"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-977baaa81ac1ff5d3974b2f47f5fa086c342cd88e059a4a6996dd438c7509c1716661bd999ab6259c4265cb329aeea275fe33676f27c6df2b5bdd2a961daaf1c"' : 'data-target="#xs-controllers-links-module-UsersModule-977baaa81ac1ff5d3974b2f47f5fa086c342cd88e059a4a6996dd438c7509c1716661bd999ab6259c4265cb329aeea275fe33676f27c6df2b5bdd2a961daaf1c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-977baaa81ac1ff5d3974b2f47f5fa086c342cd88e059a4a6996dd438c7509c1716661bd999ab6259c4265cb329aeea275fe33676f27c6df2b5bdd2a961daaf1c"' :
                                            'id="xs-controllers-links-module-UsersModule-977baaa81ac1ff5d3974b2f47f5fa086c342cd88e059a4a6996dd438c7509c1716661bd999ab6259c4265cb329aeea275fe33676f27c6df2b5bdd2a961daaf1c"' }>
                                            <li class="link">
                                                <a href="controllers/SessionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-977baaa81ac1ff5d3974b2f47f5fa086c342cd88e059a4a6996dd438c7509c1716661bd999ab6259c4265cb329aeea275fe33676f27c6df2b5bdd2a961daaf1c"' : 'data-target="#xs-injectables-links-module-UsersModule-977baaa81ac1ff5d3974b2f47f5fa086c342cd88e059a4a6996dd438c7509c1716661bd999ab6259c4265cb329aeea275fe33676f27c6df2b5bdd2a961daaf1c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-977baaa81ac1ff5d3974b2f47f5fa086c342cd88e059a4a6996dd438c7509c1716661bd999ab6259c4265cb329aeea275fe33676f27c6df2b5bdd2a961daaf1c"' :
                                        'id="xs-injectables-links-module-UsersModule-977baaa81ac1ff5d3974b2f47f5fa086c342cd88e059a4a6996dd438c7509c1716661bd999ab6259c4265cb329aeea275fe33676f27c6df2b5bdd2a961daaf1c"' }>
                                        <li class="link">
                                            <a href="injectables/SessionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SessionController.html" data-type="entity-link" >SessionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Authentication.html" data-type="entity-link" >Authentication</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Product.html" data-type="entity-link" >Product</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Role.html" data-type="entity-link" >Role</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthenticationSignUpDto.html" data-type="entity-link" >AuthenticationSignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthTokenResponse.html" data-type="entity-link" >AuthTokenResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariables.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCreateDto.html" data-type="entity-link" >ProductCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductUpdateDto.html" data-type="entity-link" >ProductUpdateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAuthTokenDto.html" data-type="entity-link" >UserAuthTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCreateDto.html" data-type="entity-link" >UserCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogInDto.html" data-type="entity-link" >UserLogInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSignUpDto.html" data-type="entity-link" >UserSignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUpdateDto.html" data-type="entity-link" >UserUpdateDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link" >DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnvironmentService.html" data-type="entity-link" >EnvironmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthStrategy.html" data-type="entity-link" >JwtAuthStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthStrategy.html" data-type="entity-link" >LocalAuthStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionService.html" data-type="entity-link" >SessionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SessionGuard.html" data-type="entity-link" >SessionGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ApiMethodParams.html" data-type="entity-link" >ApiMethodParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDecodedToken.html" data-type="entity-link" >IDecodedToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHttpResponse.html" data-type="entity-link" >IHttpResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});