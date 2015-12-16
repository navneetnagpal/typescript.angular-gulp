import DatePickerController = require('controllers/DatePickerCtrl');
import EditableLabel = require('components/editable-label/editable-label');
import EditableController= require('components/editable-label/EditableController');
import NoteEditor = require('components/note-editor/note-editor');
import MovablePopup = require('components/movable-popup/movable-popup');
import MovablePopupService = require('components/movable-popup/MovablePopupService');
import TestComponent = require('components/test-component/test-component');
import ModalTest = require('components/modal-test/modal-test');
import ModalInstanceCtrl = require('components/modal-test/ModalInstanceCtrl');
import TestComponent2 = require('components/test-component/test-component2');
import NoteService = require('components/note-editor/NoteService');

let application = angular.module('app',['ui.bootstrap'])
            .controller('DatePickerCtrl',DatePickerController)
            .controller('ModalInstanceCtrl',ModalInstanceCtrl)
            .controller('EditableController',EditableController)
            .directive('editableLabel',EditableLabel)
            .directive('movablePopup',MovablePopup)
            .directive('testComponent',TestComponent)
            .directive('testComponentb',TestComponent2)
            .directive('modalTest',ModalTest)
            .service('NoteService',NoteService)
            .service('MovablePopupService',MovablePopupService)
            .directive('noteEditor',NoteEditor)
 
export = application;