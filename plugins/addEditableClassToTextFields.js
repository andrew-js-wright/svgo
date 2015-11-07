'use strict';

exports.type = 'perItem';

exports.active = true;

exports.description = 'adds editable class to all text elements';

/**
 * Add editable class to all text elements
 *
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Andrew Wright
 */
exports.fn = function(item, params) {

    if (item.isElem('text')) {
        if (item.hasAttr('class')) {
            item.attr('class').value =
                item.attr('class').value
                    .split(' ')
                    .concat('editable')
                    .join(' ');
        } else {
            item.addAttr({
                name: 'class',
                value: 'editable',
                prefix: '',
                local: 'class'
            });
        }
    }
};
