'use strict';

define('dummy/tests/app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var Promise = Ember.RSVP.Promise;
});
define('dummy/tests/helpers/module-for-acceptance.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var run = Ember.run;
  var merge = Ember.merge;
  function startApp(attrs) {
    var application = void 0;

    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    run(function () {
      application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['ember-qunit', 'ember-cli-qunit', 'dummy/tests/helpers/resolver'], function (_emberQunit, _emberCliQunit, _resolver) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/test-helper.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/mixins/router-scroll-test', ['ember-router-scroll', 'qunit'], function (_emberRouterScroll, _qunit) {
  'use strict';

  var run = Ember.run;
  var next = Ember.run.next;
  var EmberObject = Ember.Object;


  (0, _qunit.module)('mixin:router-scroll');

  function getSchedulerMock() {
    return {
      scheduleWork: function scheduleWork(eventName, callback) {
        callback();
      }
    };
  }

  (0, _qunit.test)('when the application is FastBooted', function (assert) {
    assert.expect(1);

    var done = assert.async();
    var RouterScrollObject = EmberObject.extend(_emberRouterScroll.default);
    var subject = RouterScrollObject.create({
      isFastBoot: true,
      scheduler: getSchedulerMock(),
      updateScrollPosition: function updateScrollPosition() {
        assert.notOk(true, 'it should not call updateScrollPosition.');
        done();
      }
    });

    run(function () {
      subject.didTransition();
      next(function () {
        assert.ok(true, 'it should not call updateScrollPosition.');
        done();
      });
    });
  });

  (0, _qunit.test)('when the application is not FastBooted', function (assert) {
    assert.expect(1);

    var done = assert.async();
    var RouterScrollObject = EmberObject.extend(_emberRouterScroll.default);
    var subject = RouterScrollObject.create({
      isFastBoot: false,
      scheduler: getSchedulerMock(),
      updateScrollPosition: function updateScrollPosition() {
        assert.ok(true, 'it should call updateScrollPosition.');
        done();
      }
    });

    run(function () {
      subject.didTransition();
    });
  });
});
define('dummy/tests/unit/mixins/router-scroll-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/mixins/router-scroll-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/router-scroll-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/services/router-scroll-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  var set = Ember.set;
  var get = Ember.get;


  (0, _emberQunit.moduleFor)('service:router-scroll');

  // Replace this with your real tests.
  (0, _emberQunit.test)('it inits `scrollMap` and `key`', function init(assert) {
    var service = this.subject();
    assert.deepEqual(get(service, 'scrollMap'), {});
    assert.deepEqual(get(service, 'key'), null);
  });

  (0, _emberQunit.test)('updating will set `scrollMap` to the current scroll position', function scrollMap(assert) {
    var service = this.subject();

    var expected = { x: window.scrollX, y: window.scrollY };
    set(service, 'key', '123');
    service.update();
    assert.deepEqual(get(service, 'scrollMap'), { 123: expected });
  });

  (0, _emberQunit.test)('updating will not set `scrollMap` to the current scroll position if `key` is not yet set', function scrollMapCurrentPos(assert) {
    var service = this.subject();

    service.update();
    assert.deepEqual(get(service, 'scrollMap'), {});
  });

  (0, _emberQunit.test)('computing the position for an existing state uuid return the coords', function existingUUID(assert) {
    var service = this.subject();
    window.history.replaceState({ uuid: '123' }, null);

    var expected = { x: 1, y: 1 };
    set(service, 'scrollMap.123', expected);
    assert.deepEqual(get(service, 'position'), expected);
  });

  (0, _emberQunit.test)('computing the position for a state without a cached scroll position returns default', function cachedScroll(assert) {
    var service = this.subject();
    var state = window.history.state;
    window.history.replaceState({ uuid: '123' }, null);

    var expected = { x: 0, y: 0 };
    assert.deepEqual(get(service, 'position'), expected);
    window.history.replaceState(state, null);
  });

  (0, _emberQunit.test)('computing the position for a non-existant state returns default', function nonExistantState(assert) {
    var service = this.subject();

    var expected = { x: 0, y: 0 };
    assert.deepEqual(get(service, 'position'), expected);
  });
});
define('dummy/tests/unit/services/router-scroll-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/services/router-scroll-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/router-scroll-test.js should pass jshint.');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
