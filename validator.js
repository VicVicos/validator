var jVal = {
    'btnSubmit' : function () {
        return $('#sendReview');
    },
    'valName' : function(elem, allowEmpty) {
        var pattern = /^[a-zA-Z|а-яА-Я][a-zA-Z0-9-_\.|а-яА-Я0-9-_\.]{1,20}$/g;
        this.valElem(elem, pattern, allowEmpty);
    },
    'valEmail' : function(elem, allowEmpty) {
        var pattern = /(^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$)/g;
        this.valElem(elem, pattern, allowEmpty);
    },
    'valTel' : function(elem, allowEmpty) {
        var pattern = /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/g;
        this.valElem(elem, pattern, allowEmpty);
    },
    'valText' : function(elem, allowEmpty) {
        var pattern = /[A-Za-zА-Яа-яЁё]/g;
        this.valElem(elem, pattern, allowEmpty);
    },
    'valBirthDay' : function(elem, allowEmpty) {
        var pattern = /(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d/g;
        this.valElem(elem, pattern, allowEmpty);
    },
    'valElem' : function (elem, pattern, allowEmpty) {
        allowEmpty = this.allowEmpty(allowEmpty);
        elem.removeClass('successValid errorValid');
        var valElem = elem.val();
        var result = pattern.test(valElem);

        if (allowEmpty) {
            this.validElem(elem, true);
        } else {
            jVal.valError();
            this.validElem(elem, result);
        }
    },
    'valError' : function() {
        var elemError = $('.errorValid').length;
        var required = this.valRequired();

        if (elemError !== 0 && required === true) {
            this.btnSubmit().prop("disabled", true).addClass('btn-disabled');
        } else {
            this.btnSubmit().removeAttr('disabled').removeClass('btn-disabled');
        }
        return elemError;
    },
    'valRequired' : function (elem) {
        var form = $(elem).parents('form');
        var required = true;

        $(form).find('.required').each(function (index, elem) {
            var val = $(elem).find('input').val();
            if (val === '') {
                required = false;
            }
        });
        return required;
    },
    'validElem' : function (elem, result) {
        if (result === true) {
            $(elem).addClass('successValid');
        } else {
            $(elem).addClass('errorValid');
        }
    },
    'validForm' : function (form) {
        var elemRequired = $(form).find('.required');
        $(elemRequired).each(function (index, elem) {
            $(elem).find('input, textarea').trigger('focus');
        });
    },
    'allowEmpty' : function (val) {
        if (val === undefined) {
            return false;
        } else {
            return true;
        }
    }
};
