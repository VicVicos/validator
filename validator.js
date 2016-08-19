var jVal = {
                'valName' : function(elem){
                        elem.removeClass('successValid errorValid');
                        var valElem = elem.val();
                        var pattern = /^[a-zA-Z|а-яА-Я][a-zA-Z0-9-_\.|а-яА-Я0-9-_\.]{1,20}$/g;
                        var result = pattern.test(valElem);
                        jVal.valError($('input.pushbutton-wide'));
                        return result;
                },
                'valEmail' : function(elem){
                        elem.removeClass('successValid errorValid');
                        var valElem = elem.val();
                        var pattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/g;
                        var result = pattern.test(valElem);
                        jVal.valError($('input.pushbutton-wide'));
                        return result;
                },
                'valTel' : function(elem){
                        elem.removeClass('successValid errorValid');
                        var valElem = elem.val();
                        var pattern = /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/g;
                        var result = pattern.test(valElem);
                        jVal.valError($('input.pushbutton-wide'));
                        return result;
                },
                'valText' : function(elem){
                        elem.removeClass('successValid errorValid');
                        var valElem = elem.val();
                        var pattern = /[A-Za-zА-Яа-яЁё]/g;
                        var result = pattern.test(valElem);
                        jVal.valError($('input.pushbutton-wide'));
                        return result;
                },
                'valError' : function(elem){
                        var elemError = $('.errorValid').length;
                        if (elemError !== 0) {
                                elem.prop("disabled", true).addClass('btn-disabled');
                        } else {
                                elem.removeAttr('disabled').removeClass('btn-disabled');
                        }
                        console.log(elemError);
                },
                'valBirthDay' : function(elem){
                        elem.removeClass('successValid errorValid');
                        var valElem = elem.val();
                        var pattern = /(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d/g;                       
                        var result = pattern.test(valElem);
                        jVal.valError(jQuery('input.pushbutton-wide'));
                        return result;
                }
        };
        // console.log(jVal.valName());
        $('#inputName').on('blur mouseleave', function(event) {
                var res = jVal.valName($(this));
                if (res === true) {
                        $(this).addClass('successValid');
                } else {
                        $(this).addClass('errorValid');
                }
        });
        $('#inputEmail').on('blur mouseleave', function(event) {
                var res = jVal.valEmail($(this));
                if (res === true) {
                        $(this).addClass('successValid');
                } else {
                        $(this).addClass('errorValid');
                }
        });
        $('#inputTel').on('blur mouseleave', function(event) {
                var res = jVal.valTel($(this));
                if (res === true) {
                        $(this).addClass('successValid');
                } else {
                        $(this).addClass('errorValid');
                }
        });
        $('#contact-form-comment-message').on('blur mouseleave', function(event) {
                var res = jVal.valText($(this));
                if (res === true) {
                        $(this).addClass('successValid');
                } else {
                        $(this).addClass('errorValid');
                }
        });
