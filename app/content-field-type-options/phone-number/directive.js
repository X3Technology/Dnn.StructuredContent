﻿app.directive('contentFieldTypeOptionsPhoneNumber', function () {
    return {
        templateUrl: '/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/phone-number/template.html',
        controller: 'contentFieldTypeOptionsPhoneNumberController',
        scope: {
            contentField: '='
        }
    };
});
