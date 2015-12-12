import EditableLabel = require('components/editable-label/editable-label');
import EditableController= require('components/editable-label/EditableController');
import NoteEditor = require('components/note-editor/note-editor');
import MovablePopup = require('components/movable-popup/movable-popup');
import MovablePopupService = require('components/movable-popup/MovablePopupService');
import TestComponent = require('components/test-component/test-component');
import TestComponent2 = require('components/test-component/test-component2');
import NoteService = require('components/note-editor/NoteService');

let application = angular.module('app',[])
            .controller('EditableController',EditableController)
            .directive('editableLabel',EditableLabel)
            .directive('movablePopup',MovablePopup)
            .directive('testComponent',TestComponent)
            .directive('testComponentb',TestComponent2)
            .service('NoteService',NoteService)
            .service('MovablePopupService',MovablePopupService)
            .directive('noteEditor',NoteEditor)
 
export = application;