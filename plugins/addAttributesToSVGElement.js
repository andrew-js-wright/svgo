'use strict';

exports.type = 'full';

exports.active = true;

exports.description = 'adds attributes to an outer <svg> element';

/**
 * Add classnames to an outer <svg> element.
 *
 * @author Andrew Wright
 */
exports.fn = function(data, params) {

    var attributes = params.attributes || [ params.attribute ];
    var svg = data.content[0];

    if (svg.isElem('svg')) {
        for(var i = 0; i < attributes.length; i++) {
            var attribute = attributes[i];
            svg.addAttr({
                name: attribute.name,
                value: attribute.value,
                prefix: '',
                local: attribute.name
            });
        }
    }

    return data;

};
