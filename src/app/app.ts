import EditableLabel = require('components/editable-label/editable-label');
import EditableController= require('components/editable-label/EditableController');
import HelloWorld = require('components/hello-world/hello-world');

let application = angular.module('app',[])
            .controller('EditableController',EditableController)
            .directive('editableLabel',EditableLabel)
            .directive('helloWorld',HelloWorld);

export = application;