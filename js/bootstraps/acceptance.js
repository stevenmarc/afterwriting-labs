require(['dependencies', 'bootstrap', 'bootstraps/dev-config', '../test/acceptance/setup'], function (_, Bootstrap, DevConfig, AcceptanceTestsSetup) {
    var setup = AcceptanceTestsSetup.create(Bootstrap, DevConfig);
    setup.run();
});