var _0x4920b6 = _0x31dd;
function _0x31dd(_0x34151d, _0x32ba3f) {
    var _0x2c4608 = _0x1948();
    return _0x31dd = function(_0x3d3d0, _0x58e9f4) {
        _0x3d3d0 = _0x3d3d0 - 0x1ab;
        var _0x10fbaa = _0x2c4608[_0x3d3d0];
        return _0x10fbaa;
    }
    ,
    _0x31dd(_0x34151d, _0x32ba3f);
}
(function(_0x1e9c05, _0x3f7007) {
    var _0x1f4361 = _0x31dd
      , _0x17e746 = _0x1e9c05();
    while (!![]) {
        try {
            var _0x5addb3 = -parseInt(_0x1f4361(0x504)) / 0x1 * (-parseInt(_0x1f4361(0x83a)) / 0x2) + parseInt(_0x1f4361(0x65f)) / 0x3 * (-parseInt(_0x1f4361(0x522)) / 0x4) + -parseInt(_0x1f4361(0x6a3)) / 0x5 + -parseInt(_0x1f4361(0x69e)) / 0x6 * (parseInt(_0x1f4361(0x2f8)) / 0x7) + parseInt(_0x1f4361(0x5aa)) / 0x8 * (parseInt(_0x1f4361(0x2cf)) / 0x9) + parseInt(_0x1f4361(0x6a1)) / 0xa * (parseInt(_0x1f4361(0x7d7)) / 0xb) + parseInt(_0x1f4361(0x711)) / 0xc;
            if (_0x5addb3 === _0x3f7007)
                break;
            else
                _0x17e746['push'](_0x17e746['shift']());
        } catch (_0x27bdd4) {
            _0x17e746['push'](_0x17e746['shift']());
        }
    }
}(_0x1948, 0xf2c5f));
var GoogleAuth, zE;
window[_0x4920b6(0x70d)] = {
    'settings': {
        'lineWidth': 0.15,
        'lineColor': 0xff0000,
        'lineAlpha': 0.3,
        'backgroundColor': 0x0,
        'backgroundAlpha': 0.6,
        'sectorTextStyle': {
            'fontFamily': _0x4920b6(0x45e),
            'fontSize': 0xe,
            'fill': 0xffffff
        },
        'quarterTextStyle': {
            'fontFamily': _0x4920b6(0x45e),
            'fontSize': 0x14,
            'fill': 0xffffff
        },
        'showLines': !![]
    },
    'state': {
        'container': null,
        'graphics': null,
        'isActive': ![],
        'currentMode': null,
        'texts': [],
        'initialized': ![],
        'renderContainer': null,
        'restored': ![]
    },
    'findRenderContainer': function() {
        var _0x4d3d94 = _0x4920b6;
        if (this[_0x4d3d94(0x828)][_0x4d3d94(0x238)])
            return this['state']['renderContainer'];
        if (window[_0x4d3d94(0x808)]?.[_0x4d3d94(0x75b)])
            return this['state'][_0x4d3d94(0x238)] = window[_0x4d3d94(0x808)][_0x4d3d94(0x75b)],
            this[_0x4d3d94(0x828)][_0x4d3d94(0x238)];
        if (window[_0x4d3d94(0x4c3)]?.['Mh']?.['Lh']?.['Wf'])
            return this[_0x4d3d94(0x828)]['renderContainer'] = window['ooo']['Mh']['Lh']['Wf'],
            this['state'][_0x4d3d94(0x238)];
        const _0x3e61e5 = (_0x21576f, _0x5ca1ba=new Set(), _0x42a7e8=0x0) => {
            var _0x112cf1 = _0x4d3d94;
            if (!_0x21576f || typeof _0x21576f !== 'object' || _0x42a7e8 > 0x3 || _0x5ca1ba['has'](_0x21576f))
                return null;
            _0x5ca1ba[_0x112cf1(0x598)](_0x21576f);
            if (_0x21576f['Wf']instanceof PIXI[_0x112cf1(0x683)])
                return this[_0x112cf1(0x828)][_0x112cf1(0x238)] = _0x21576f['Wf'],
                _0x21576f['Wf'];
            for (let _0x1fe7c3 in _0x21576f) {
                if (_0x1fe7c3 !== _0x112cf1(0x75b) && _0x1fe7c3 !== 'children' && _0x21576f[_0x1fe7c3] && typeof _0x21576f[_0x1fe7c3] === _0x112cf1(0x216)) {
                    const _0x234858 = _0x3e61e5(_0x21576f[_0x1fe7c3], _0x5ca1ba, _0x42a7e8 + 0x1);
                    if (_0x234858)
                        return _0x234858;
                }
            }
            return null;
        }
        ;
        return _0x3e61e5(window['ooo']);
    },
    'cachedRadius': 0x0,
    'lastRadiusTime': 0x0,
    'getRadius': function() {
        var _0x5a95de = _0x4920b6;
        const _0x409aa8 = Date['now']();
        return _0x409aa8 - this['lastRadiusTime'] > 0x3e8 && (this['cachedRadius'] = window['ooo']?.['Mh']?.['Qh']?.['gh'] || window['ooo']?.['Mh']?.['Lh']?.['Qh']?.['gh'] || 0x1f4,
        this[_0x5a95de(0x72f)] = _0x409aa8),
        this[_0x5a95de(0x233)];
    },
    'clearTexts': function() {
        var _0x41fdf2 = _0x4920b6;
        this[_0x41fdf2(0x828)][_0x41fdf2(0x664)][_0x41fdf2(0x588)](_0x48e09f => {
            var _0xcd61dd = _0x41fdf2;
            _0x48e09f && _0x48e09f[_0xcd61dd(0x75b)] && _0x48e09f[_0xcd61dd(0x75b)][_0xcd61dd(0x82d)](_0x48e09f);
        }
        ),
        this[_0x41fdf2(0x828)][_0x41fdf2(0x664)] = [];
    },
    'initDrawing': function(_0x12f217) {
        var _0x3b1bc2 = _0x4920b6;
        return this[_0x3b1bc2(0x432)](),
        this[_0x3b1bc2(0x828)][_0x3b1bc2(0x879)]['clear'](),
        this[_0x3b1bc2(0x828)][_0x3b1bc2(0x879)][_0x3b1bc2(0x2db)](this['settings'][_0x3b1bc2(0x6d9)], this['settings'][_0x3b1bc2(0x41c)], this[_0x3b1bc2(0x85f)][_0x3b1bc2(0x297)]),
        this[_0x3b1bc2(0x828)][_0x3b1bc2(0x879)][_0x3b1bc2(0x531)](this[_0x3b1bc2(0x85f)]['backgroundColor'], this[_0x3b1bc2(0x85f)][_0x3b1bc2(0x4fc)]),
        this[_0x3b1bc2(0x828)][_0x3b1bc2(0x879)][_0x3b1bc2(0x1da)](0x0, 0x0, _0x12f217),
        this['state'][_0x3b1bc2(0x879)][_0x3b1bc2(0x51a)](),
        _0x12f217;
    },
    'drawSectors': function() {
        var _0x4f0678 = _0x4920b6;
        const _0xf82b4f = this['initDrawing'](this[_0x4f0678(0x40c)]())
          , _0x236864 = _0xf82b4f / 0x3;
        if (this[_0x4f0678(0x85f)][_0x4f0678(0x540)]) {
            for (let _0xd69eba = 0x1; _0xd69eba < 0x3; _0xd69eba++) {
                this['state']['graphics'][_0x4f0678(0x1da)](0x0, 0x0, _0xf82b4f - _0xd69eba * _0x236864);
            }
            for (let _0x36afa9 = 0x0; _0x36afa9 < 0x4; _0x36afa9++) {
                const _0x56f29b = _0x36afa9 * Math['PI'] / 0x2;
                this[_0x4f0678(0x828)]['graphics'][_0x4f0678(0x244)](0x0, 0x0),
                this[_0x4f0678(0x828)]['graphics'][_0x4f0678(0x27d)](Math[_0x4f0678(0x572)](_0x56f29b) * _0xf82b4f, Math['sin'](_0x56f29b) * _0xf82b4f);
            }
        }
        for (let _0x496fa4 = 0x0; _0x496fa4 < 0x4; _0x496fa4++) {
            const _0x36459b = _0x496fa4 * Math['PI'] / 0x2;
            for (let _0x36a50a = 0x0; _0x36a50a < 0x3; _0x36a50a++) {
                const _0x43dbba = _0xf82b4f - (_0x36a50a * _0x236864 + _0x236864 / 0x2)
                  , _0x272c78 = _0x36459b + Math['PI'] / 0x4
                  , _0xa8f658 = ['S', 'D', 'F'][_0x36a50a] + (_0x496fa4 + 0x1)
                  , _0x4c538e = new PIXI[(_0x4f0678(0x2fe))](_0xa8f658,this[_0x4f0678(0x85f)]['sectorTextStyle']);
                _0x4c538e['anchor'][_0x4f0678(0x25b)](0.5),
                _0x4c538e['position'][_0x4f0678(0x25b)](Math[_0x4f0678(0x572)](_0x272c78) * _0x43dbba, Math[_0x4f0678(0x55e)](_0x272c78) * _0x43dbba),
                this[_0x4f0678(0x828)]['container'][_0x4f0678(0x812)](_0x4c538e),
                this[_0x4f0678(0x828)]['texts'][_0x4f0678(0x23c)](_0x4c538e);
            }
        }
    },
    'drawQuarters': function() {
        var _0x4fbebc = _0x4920b6;
        const _0x18416e = this[_0x4fbebc(0x60d)](this[_0x4fbebc(0x40c)]());
        this[_0x4fbebc(0x85f)][_0x4fbebc(0x540)] && (this[_0x4fbebc(0x828)]['graphics'][_0x4fbebc(0x244)](-_0x18416e, 0x0),
        this[_0x4fbebc(0x828)][_0x4fbebc(0x879)][_0x4fbebc(0x27d)](_0x18416e, 0x0),
        this[_0x4fbebc(0x828)]['graphics'][_0x4fbebc(0x244)](0x0, -_0x18416e),
        this[_0x4fbebc(0x828)][_0x4fbebc(0x879)][_0x4fbebc(0x27d)](0x0, _0x18416e)),
        [{
            'n': _0x4fbebc(0x412),
            'x': 0x1,
            'y': -0x1
        }, {
            'n': _0x4fbebc(0x4c2),
            'x': -0x1,
            'y': -0x1
        }, {
            'n': _0x4fbebc(0x7ca),
            'x': -0x1,
            'y': 0x1
        }, {
            'n': 'WFT\x204',
            'x': 0x1,
            'y': 0x1
        }][_0x4fbebc(0x588)](_0xe7fe45 => {
            var _0x34e12f = _0x4fbebc;
            const _0x13662f = new PIXI[(_0x34e12f(0x2fe))](_0xe7fe45['n'],this[_0x34e12f(0x85f)][_0x34e12f(0x395)]);
            _0x13662f['anchor']['set'](0.5),
            _0x13662f[_0x34e12f(0x791)][_0x34e12f(0x25b)](_0xe7fe45['x'] * _0x18416e / 0x3, _0xe7fe45['y'] * _0x18416e / 0x3),
            this[_0x34e12f(0x828)]['container'][_0x34e12f(0x812)](_0x13662f),
            this[_0x34e12f(0x828)]['texts'][_0x34e12f(0x23c)](_0x13662f);
        }
        );
    },
    'initGraphics': function() {
        var _0x24240f = _0x4920b6;
        if (this['state'][_0x24240f(0x2d4)])
            return !![];
        const _0x7bce89 = this[_0x24240f(0x3fa)]();
        if (!_0x7bce89)
            return ![];
        return this[_0x24240f(0x828)][_0x24240f(0x75d)] = new PIXI[(_0x24240f(0x683))](),
        this[_0x24240f(0x828)][_0x24240f(0x879)] = new PIXI[(_0x24240f(0x73f))](),
        this['state']['container'][_0x24240f(0x812)](this[_0x24240f(0x828)][_0x24240f(0x879)]),
        _0x7bce89['addChild'](this[_0x24240f(0x828)][_0x24240f(0x75d)]),
        this['state']['container'][_0x24240f(0x21f)] = 0xa,
        this[_0x24240f(0x828)][_0x24240f(0x75d)][_0x24240f(0x62d)] = ![],
        this['state']['initialized'] = !![],
        !![];
    },
    'toggleMode': function(_0x398695) {
        var _0x507767 = _0x4920b6;
        if (!this[_0x507767(0x370)]())
            return;
        if (this[_0x507767(0x828)][_0x507767(0x30d)] && this[_0x507767(0x828)][_0x507767(0x708)] === _0x398695) {
            this[_0x507767(0x828)][_0x507767(0x75d)][_0x507767(0x62d)] = ![],
            this[_0x507767(0x828)]['isActive'] = ![],
            this[_0x507767(0x828)][_0x507767(0x708)] = null;
            document[_0x507767(0x657)]('sector_system_toggle') && (document[_0x507767(0x657)](_0x507767(0x6c2))[_0x507767(0x69a)] = ![]);
            this[_0x507767(0x246)]();
            return;
        }
        this[_0x507767(0x828)][_0x507767(0x30d)] = !![],
        this[_0x507767(0x828)][_0x507767(0x708)] = _0x398695,
        this[_0x507767(0x828)][_0x507767(0x75d)][_0x507767(0x62d)] = !![],
        document['getElementById'](_0x507767(0x6c2)) && (document[_0x507767(0x657)](_0x507767(0x6c2))[_0x507767(0x69a)] = !![]),
        _0x398695 === _0x507767(0x7c8) ? this[_0x507767(0x701)]() : this[_0x507767(0x74d)](),
        this[_0x507767(0x246)]();
    },
    'setupKeyboardEvents': function() {
        var _0x1f4323 = _0x4920b6;
        const _0x11cf70 = {
            0x53: () => this[_0x1f4323(0x594)](_0x1f4323(0x7c8)),
            0xbb: () => this[_0x1f4323(0x594)](_0x1f4323(0x7c8)),
            0x3d: () => this[_0x1f4323(0x594)](_0x1f4323(0x7c8)),
            0x58: () => this[_0x1f4323(0x594)]('quarters')
        };
        document[_0x1f4323(0x81b)](_0x1f4323(0x836), _0x4c4bb0 => {
            var _0x391e9a = _0x1f4323;
            const _0x59d4ac = _0x4c4bb0[_0x391e9a(0x4ec)] || _0x4c4bb0[_0x391e9a(0x29b)];
            _0x11cf70[_0x59d4ac] && (_0x11cf70[_0x59d4ac](),
            typeof this[_0x391e9a(0x820)] === _0x391e9a(0x3fb) && this[_0x391e9a(0x820)]());
        }
        );
    },
    'saveSettings': function() {
        var _0x1ed011 = _0x4920b6;
        try {
            localStorage['setItem'](_0x1ed011(0x3ef), JSON[_0x1ed011(0x880)](this[_0x1ed011(0x85f)])),
            localStorage[_0x1ed011(0x39f)](_0x1ed011(0x511), this[_0x1ed011(0x828)]['isActive'] ? '1' : '0'),
            this[_0x1ed011(0x828)][_0x1ed011(0x708)] && localStorage[_0x1ed011(0x39f)]('sectorSystemMode', this[_0x1ed011(0x828)][_0x1ed011(0x708)]),
            console[_0x1ed011(0x399)]('Saved\x20sector\x20system\x20state:', {
                'active': this['state'][_0x1ed011(0x30d)],
                'mode': this[_0x1ed011(0x828)][_0x1ed011(0x708)]
            });
        } catch (_0x582623) {
            console[_0x1ed011(0x5ad)](_0x1ed011(0x481), _0x582623);
        }
    },
    'loadSettings': function() {
        var _0x4888ac = _0x4920b6;
        try {
            const _0x2d36d4 = JSON[_0x4888ac(0x762)](localStorage[_0x4888ac(0x65e)](_0x4888ac(0x3ef)));
            _0x2d36d4 && (this[_0x4888ac(0x85f)] = {
                ...this['settings'],
                ..._0x2d36d4
            });
            const _0x263951 = localStorage[_0x4888ac(0x65e)](_0x4888ac(0x511)) === '1';
            let _0xf60201 = localStorage['getItem']('sectorSystemMode');
            !_0xf60201 && (_0xf60201 = 'sectors'),
            this[_0x4888ac(0x726)] = {
                'isActive': _0x263951,
                'currentMode': _0xf60201
            };
        } catch (_0x5d4336) {
            console[_0x4888ac(0x5ad)]('Error\x20loading\x20sector\x20system\x20settings:', _0x5d4336);
        }
    },
    'applySettings': function() {
        var _0x448515 = _0x4920b6;
        this[_0x448515(0x828)][_0x448515(0x30d)] && this[_0x448515(0x828)][_0x448515(0x708)] && (this[_0x448515(0x828)][_0x448515(0x708)] === _0x448515(0x7c8) ? this[_0x448515(0x701)]() : this[_0x448515(0x74d)]());
    },
    'init': function() {
        var _0x46f5e4 = _0x4920b6;
        if (typeof PIXI === _0x46f5e4(0x799)) {
            setTimeout( () => this['init'](), 0x3e8);
            return;
        }
        this[_0x46f5e4(0x60c)]();
        const _0x3636a4 = this[_0x46f5e4(0x370)]();
        this[_0x46f5e4(0x35c)]();
        if (!_0x3636a4) {
            setTimeout( () => this[_0x46f5e4(0x884)](), 0x3e8);
            return;
        }
        setTimeout( () => {
            var _0x5e2cea = _0x46f5e4;
            this['savedState'] && this[_0x5e2cea(0x726)][_0x5e2cea(0x30d)] && (this[_0x5e2cea(0x828)][_0x5e2cea(0x30d)] = !![],
            this['state'][_0x5e2cea(0x708)] = this[_0x5e2cea(0x726)][_0x5e2cea(0x708)],
            this[_0x5e2cea(0x828)]['container']['visible'] = !![],
            this[_0x5e2cea(0x828)][_0x5e2cea(0x708)] === _0x5e2cea(0x7c8) ? this['drawSectors']() : this[_0x5e2cea(0x74d)](),
            document[_0x5e2cea(0x657)](_0x5e2cea(0x6c2)) && (document[_0x5e2cea(0x657)]('sector_system_toggle')[_0x5e2cea(0x69a)] = !![]),
            this['state'][_0x5e2cea(0x46a)] = !![],
            $(_0x5e2cea(0x1b5))[_0x5e2cea(0x2a1)] > 0x0 && this[_0x5e2cea(0x820)]());
        }
        , 0x3e8);
    },
    'initUserInterface': function() {
        var _0x97d051 = _0x4920b6;
        function _0x59bf95(_0x51985d) {
            var _0x510114 = _0x31dd;
            return '#' + _0x51985d[_0x510114(0x436)](0x10)[_0x510114(0x34f)](0x6, '0');
        }
        function _0x4b7a43(_0x5f16a1) {
            return parseInt(_0x5f16a1['replace']('#', ''), 0x10);
        }
        !this[_0x97d051(0x828)]['restored'] && this[_0x97d051(0x726)] && this['savedState'][_0x97d051(0x30d)] && (console[_0x97d051(0x399)](_0x97d051(0x5d5)),
        this[_0x97d051(0x594)](this['savedState'][_0x97d051(0x708)] || 'sectors'),
        this['state']['restored'] = !![]);
        const _0x4385df = () => {
            var _0x439534 = _0x97d051;
            $('#sector_system_toggle')[_0x439534(0x226)](_0x439534(0x69a), this[_0x439534(0x828)][_0x439534(0x30d)]),
            $(_0x439534(0x212))[_0x439534(0x467)](this[_0x439534(0x828)]['currentMode'] || _0x439534(0x7c8)),
            $(_0x439534(0x416))[_0x439534(0x467)](_0x59bf95(this['settings'][_0x439534(0x5e7)])),
            $(_0x439534(0x5ff))[_0x439534(0x467)](_0x59bf95(this[_0x439534(0x85f)][_0x439534(0x41c)])),
            $('#sector_bg_opacity')['val'](this[_0x439534(0x85f)][_0x439534(0x4fc)] * 0x64),
            $(_0x439534(0x5e3))[_0x439534(0x440)](Math[_0x439534(0x728)](this[_0x439534(0x85f)][_0x439534(0x4fc)] * 0x64) + '%'),
            $('#sector_line_opacity')[_0x439534(0x467)](this[_0x439534(0x85f)]['lineAlpha'] * 0x64),
            $('#sector_line_opacity_value')[_0x439534(0x440)](Math[_0x439534(0x728)](this[_0x439534(0x85f)][_0x439534(0x297)] * 0x64) + '%'),
            $(_0x439534(0x82c))['prop']('checked', this[_0x439534(0x85f)][_0x439534(0x540)]),
            !this[_0x439534(0x85f)][_0x439534(0x540)] ? $(_0x439534(0x7f8))['slideUp'](0xc8) : $(_0x439534(0x7f8))[_0x439534(0x303)](0xc8),
            this[_0x439534(0x828)][_0x439534(0x30d)] ? $('#sector_settings_panel')['slideDown'](0x12c) : $(_0x439534(0x815))[_0x439534(0x70c)](0xc8);
        }
        ;
        $(_0x97d051(0x1b5))[_0x97d051(0x47e)](_0x97d051(0x85b))['on'](_0x97d051(0x85b), function() {
            var _0xc86a31 = _0x97d051;
            const _0x518705 = $(this)[_0xc86a31(0x226)](_0xc86a31(0x69a));
            if (_0x518705) {
                const _0x513aad = $(_0xc86a31(0x212))[_0xc86a31(0x467)]() || _0xc86a31(0x7c8);
                window[_0xc86a31(0x70d)][_0xc86a31(0x594)](_0x513aad);
            } else
                window[_0xc86a31(0x70d)][_0xc86a31(0x828)]['isActive'] && window[_0xc86a31(0x70d)]['toggleMode'](window['sectorSystem'][_0xc86a31(0x828)][_0xc86a31(0x708)]);
            _0x4385df();
        }),
        $(_0x97d051(0x212))['off'](_0x97d051(0x85b))['on']('change', function() {
            var _0x1d64b0 = _0x97d051;
            const _0x33f435 = $(this)[_0x1d64b0(0x467)]();
            window['sectorSystem'][_0x1d64b0(0x828)][_0x1d64b0(0x30d)] && (window[_0x1d64b0(0x70d)]['toggleMode'](window['sectorSystem'][_0x1d64b0(0x828)][_0x1d64b0(0x708)]),
            window[_0x1d64b0(0x70d)][_0x1d64b0(0x594)](_0x33f435),
            _0x4385df());
        }),
        $(_0x97d051(0x416))[_0x97d051(0x47e)]('change')['on']('change', function() {
            var _0x4ea76f = _0x97d051;
            window[_0x4ea76f(0x70d)][_0x4ea76f(0x85f)][_0x4ea76f(0x5e7)] = _0x4b7a43($(this)[_0x4ea76f(0x467)]()),
            window[_0x4ea76f(0x70d)][_0x4ea76f(0x452)](),
            window[_0x4ea76f(0x70d)]['saveSettings']();
        }),
        $(_0x97d051(0x5ff))['off'](_0x97d051(0x85b))['on'](_0x97d051(0x85b), function() {
            var _0x2146e1 = _0x97d051;
            window[_0x2146e1(0x70d)]['settings']['lineColor'] = _0x4b7a43($(this)[_0x2146e1(0x467)]()),
            window['sectorSystem'][_0x2146e1(0x452)](),
            window[_0x2146e1(0x70d)][_0x2146e1(0x246)]();
        }),
        $(_0x97d051(0x392))[_0x97d051(0x47e)](_0x97d051(0x64a))['on'](_0x97d051(0x64a), function() {
            var _0x5e7e2a = _0x97d051;
            const _0x22c336 = parseInt($(this)[_0x5e7e2a(0x467)]()) / 0x64;
            window[_0x5e7e2a(0x70d)][_0x5e7e2a(0x85f)][_0x5e7e2a(0x4fc)] = _0x22c336,
            $(_0x5e7e2a(0x5e3))['text'](Math[_0x5e7e2a(0x728)](_0x22c336 * 0x64) + '%'),
            window[_0x5e7e2a(0x70d)]['applySettings'](),
            window['sectorSystem'][_0x5e7e2a(0x246)]();
        }),
        $('#sector_line_opacity')['off'](_0x97d051(0x64a))['on'](_0x97d051(0x64a), function() {
            var _0x2cc147 = _0x97d051;
            const _0x46ba45 = parseInt($(this)['val']()) / 0x64;
            window[_0x2cc147(0x70d)][_0x2cc147(0x85f)][_0x2cc147(0x297)] = _0x46ba45,
            $(_0x2cc147(0x4ab))[_0x2cc147(0x440)](Math[_0x2cc147(0x728)](_0x46ba45 * 0x64) + '%'),
            window[_0x2cc147(0x70d)][_0x2cc147(0x452)](),
            window['sectorSystem'][_0x2cc147(0x246)]();
        }),
        $(_0x97d051(0x82c))[_0x97d051(0x47e)](_0x97d051(0x85b))['on']('change', function() {
            var _0x504e2a = _0x97d051;
            window[_0x504e2a(0x70d)][_0x504e2a(0x85f)]['showLines'] = $(this)[_0x504e2a(0x226)](_0x504e2a(0x69a)),
            !window[_0x504e2a(0x70d)]['settings'][_0x504e2a(0x540)] ? $(_0x504e2a(0x7f8))[_0x504e2a(0x70c)](0xc8) : $(_0x504e2a(0x7f8))[_0x504e2a(0x303)](0xc8),
            window[_0x504e2a(0x70d)][_0x504e2a(0x452)](),
            window[_0x504e2a(0x70d)][_0x504e2a(0x246)]();
        }),
        _0x4385df();
    }
};
var StoreSkinID;
$(document)[_0x4920b6(0x359)](function() {
    var _0x12233d = _0x4920b6;
    $(_0x12233d(0x6af))[_0x12233d(0x2a1)] && ($(_0x12233d(0x6af))[_0x12233d(0x294)]('<div\x20id=\x22idReplaceSkin\x22></div>'),
    StoreSkinID = $('#idReplaceSkin'));
});
var myGameSettings = {
    'unlimitedRespawn': ![],
    'respawnDelay': 0x32
};
window[_0x4920b6(0x4e6)] = {
    'enabled': ![],
    'color': 0xffd700,
    'opacity': 0.5,
    'thickness': 0.1
},
window['laserGraphics'] = null;
const ctx = {
    'fontStyle': {
        'blanco': new PIXI[(_0x4920b6(0x65c))]({
            'align': _0x4920b6(0x57b),
            'fill': '#FF0000',
            'fontSize': 0xe,
            'fontWeight': _0x4920b6(0x60e),
            'lineJoin': _0x4920b6(0x728),
            'stroke': _0x4920b6(0x4f9),
            'strokeThickness': 1.5,
            'whiteSpace': _0x4920b6(0x7a2),
            'wordWrap': !![]
        })
    }
};
ctx[_0x4920b6(0x397)] = new PIXI[(_0x4920b6(0x683))]();
let lastKnownCoords = {
    'x': null,
    'y': null
}
  , blinkTimerId = null
  , removeMarkTimerId = null;
const createCircle = function() {
    var _0x2f62b0 = _0x4920b6;
    if (!window[_0x2f62b0(0x462)] || typeof window['coords'][_0x2f62b0(0x2c1)] === 'undefined' || typeof window['coords'][_0x2f62b0(0x521)] === _0x2f62b0(0x799))
        return;
    let _0x541b45 = _0x2f62b0(0x5b3);
    if (lastKnownCoords['x'] !== null) {
        const _0x492ac1 = Math[_0x2f62b0(0x4a9)](Math[_0x2f62b0(0x30b)](window[_0x2f62b0(0x462)][_0x2f62b0(0x2c1)] - lastKnownCoords['x'], 0x2) + Math[_0x2f62b0(0x30b)](window['coords'][_0x2f62b0(0x521)] - lastKnownCoords['y'], 0x2));
        _0x492ac1 > 0x64 && (ctx[_0x541b45] && (ctx[_0x2f62b0(0x397)] && ctx['pointsContainer'][_0x2f62b0(0x665)]['includes'](ctx[_0x541b45]) && ctx['pointsContainer'][_0x2f62b0(0x82d)](ctx[_0x541b45]),
        ctx[_0x541b45] = null),
        blinkTimerId && (clearInterval(blinkTimerId),
        blinkTimerId = null),
        removeMarkTimerId && (clearTimeout(removeMarkTimerId),
        removeMarkTimerId = null));
    }
    lastKnownCoords['x'] = window[_0x2f62b0(0x462)][_0x2f62b0(0x2c1)],
    lastKnownCoords['y'] = window[_0x2f62b0(0x462)][_0x2f62b0(0x521)];
    if (!ctx[_0x541b45]) {
        ctx[_0x541b45] = new PIXI['Text']('X',ctx[_0x2f62b0(0x794)][_0x2f62b0(0x3e1)]),
        ctx[_0x541b45][_0x2f62b0(0x21f)] = 0x2,
        ctx[_0x541b45][_0x2f62b0(0x494)] = 0.9,
        ctx[_0x541b45][_0x2f62b0(0x716)]['set'](0.5, 0.5);
        ctx[_0x2f62b0(0x397)] && (ctx[_0x2f62b0(0x397)][_0x2f62b0(0x473)] = !![],
        ctx['pointsContainer'][_0x2f62b0(0x21f)] = 0x2);
        if (!blinkTimerId) {
            let _0x13efe8 = !![];
            blinkTimerId = setInterval( () => {
                ctx[_0x541b45] ? (_0x13efe8 = !_0x13efe8,
                ctx[_0x541b45]['visible'] = _0x13efe8) : (clearInterval(blinkTimerId),
                blinkTimerId = null);
            }
            , 0x1f4);
        }
        !removeMarkTimerId && (removeMarkTimerId = setTimeout( () => {
            var _0x17aeb4 = _0x2f62b0;
            ctx[_0x541b45] && (ctx[_0x17aeb4(0x397)] && ctx[_0x17aeb4(0x397)][_0x17aeb4(0x665)][_0x17aeb4(0x5b5)](ctx[_0x541b45]) && ctx[_0x17aeb4(0x397)][_0x17aeb4(0x82d)](ctx[_0x541b45]),
            ctx[_0x541b45] = null),
            blinkTimerId && (clearInterval(blinkTimerId),
            blinkTimerId = null),
            removeMarkTimerId = null;
        }
        , 0x4e20));
    }
    ctx[_0x541b45] && (ctx[_0x541b45]['x'] = window[_0x2f62b0(0x462)][_0x2f62b0(0x2c1)],
    ctx[_0x541b45]['y'] = window[_0x2f62b0(0x462)][_0x2f62b0(0x521)],
    ctx['pointsContainer'] && !ctx[_0x2f62b0(0x397)]['children'][_0x2f62b0(0x5b5)](ctx[_0x541b45]) && ctx[_0x2f62b0(0x397)][_0x2f62b0(0x812)](ctx[_0x541b45])),
    window[_0x2f62b0(0x4c3)] && ooo['Xg'] && ooo['Xg']['Kf'] && ooo['Xg']['Kf']['Wg'] && ooo['Xg']['Kf']['Wg']['Ah'] && ooo['Xg']['Kf']['Wg']['Ah']['Sh'] && (ooo['Xg']['Kf']['Wg']['Ah']['Sh'][_0x2f62b0(0x21f)] = 0x270f,
    ooo['Xg']['Kf']['Wg']['Ah'][_0x2f62b0(0x473)] !== !![] && (ooo['Xg']['Kf']['Wg']['Ah']['sortableChildren'] = !![]),
    ooo['Xg']['Kf']['Wg'][_0x2f62b0(0x473)] !== !![] && (ooo['Xg']['Kf']['Wg'][_0x2f62b0(0x473)] = !![]));
};
function _typeof(_0x3b26fc) {
    var _0x5ca28f = _0x4920b6;
    return (_typeof = typeof Symbol == _0x5ca28f(0x3fb) && typeof Symbol[_0x5ca28f(0x4a3)] == _0x5ca28f(0x477) ? function(_0x1f03c7) {
        return typeof _0x1f03c7;
    }
    : function(_0x6b1106) {
        var _0x47dfd2 = _0x5ca28f;
        return _0x6b1106 && typeof Symbol == _0x47dfd2(0x3fb) && _0x6b1106['constructor'] === Symbol && _0x6b1106 !== Symbol['prototype'] ? 'symbol' : typeof _0x6b1106;
    }
    )(_0x3b26fc);
}
function _0x1948() {
    var _0x5dc02e = ['fontStyle', 'settings-show-names-switch', '\x22\x20id=\x22btn_in_t\x22\x20style=\x22display:none;\x22/>', '#volume_value', 'siblings', 'undefined', 'cpuSamples', 'outerWidth', '</span>', 'beforeunload', 'hide', 'https://wormx.store/images/arkaplan/bg1.jpg', 'Mesh', 'Cloudscape', 'normal', '/get_store.phpitem=moi_2.png', 'd_5', '/sdk.js', '.servers-', 'version', 'wormate-io_970x250', 'hatInfoText', '#wear-tint-chooser', '\x22\x20src=\x22', '#loading-progress-bar', 'click.ddslick', 'c_1', 'insertAfter', 'glassesUnknown', '#headshot_show_name', 'green-dot', 'return\x20(function()\x20', 'en_US', 'Turkey', 'HAT', 'slice', '<img\x20src=\x22', 'json', '#portion_size_slider', '360px', 'mozRequestFullScreen', 'showKillName', '0x3', '/images/confetti-valday2024.png', '<span\x20class=\x22score-display\x20', 'showHeadshotName', '/images/cors-proxy.phpimg=cursors/26.png', '#ffffff', 'Beetle\x20Cursor', 'translate(-50%,\x20-50%)', 'dsg', 'default', 'sectors', '#portion_size_value', 'WFT\x203', '.wormate.io', '\x22\x20title=\x22', 'flx', '\x20<input\x20class=\x22dd-option-value\x22\x20type=\x22hidden\x22\x20value=\x22', 'substr', '{2}', '#mm-skin-over', 'id_token', 'zoomSpeed', 'reverse', 'data:image/png;base64,', 'rgba(255,\x20255,\x20255,\x200.1)', '22UnklBO', '#joystick_mode', '/get_store.phpitem=moo_4.png', 'data-server-name', '/images/skins/', 'wss://', 'Rectangle', 'regular', 'fadeOut', 'skins', 'mm-action-play', '/get_store.phpitem=close_q.png', 'startMonitoring', '..4\x20..', 'openHatFavorites', 'expires_in', 'server-name', '/pub/healthCheck/ping', 'frameCount', '#popup-logout-container', '\x27).then(()=>\x20alert(\x27Your\x20ID\x20', 'openSettingsModal', 'wss://wormmedia.xyz:9800', 'sessionsPlayed', '#popup-view', 'concat', 'Press\x20\x27(\x201\x20)\x27\x20to\x20toggle\x20skins\x20during\x20gameplay', 'Rose\x20Branch\x20Cursor', '#settings-sfx-enabled-switch', 'values', '_skin_g', '#wftiq', 'USA', '#sector_lines_options', 'img_pf_1', 'died', 'mode', 'some', 'lightblue', '#delete-account-no', 'readAsText', '#profile-stat-headshots', 'false', '#mm-params-nickname', '..5\x20..', 'WFT\x20Game\x20modifications\x20applied\x20successfully!', 'wftObjects', 'nickname', 'nodeName', 'laserGraphics', '#toaster-stack', 'onload', '999', '..7\x20..', 'getInt16', '.dd-selected-text', 'https://wormx.store/store/index.php', '#profile-username', 'style', 'addChild', '#mm-coins-box', 'label_kill', '#sector_settings_panel', '#adbl-3', '#error-gateway-connection-retry', '.toaster-levelup-close', 'value1_hs', '&nbsp;', 'addEventListener', 'pwrFlex', 'fillRect', '.dd-pointer', 'setInt8', 'initUserInterface', 'PortionTransparent', 'scrollTop', 'note', '\x20ha\x20muerto.', 'https://wormx.store/2025/css/gamenew.css', 'skinId', 'bkgnd0.png', 'state', 'startsWith', 'eyesUnknown', 'filter', '#sector_show_lines', 'removeChild', 'https://wormx.store/2025/excel/name_banned_text.php', '<link\x20href=\x27https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\x27\x20rel=\x27stylesheet\x27/>\x0a<link\x20rel=\x22stylesheet\x22\x20href=\x22https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\x22>\x0a<button\x20id=\x22btn_crsw\x22\x20style=\x22display:\x20none;\x22>💡</button>\x20\x0a<button\x20id=\x22op_wft\x22\x20class=\x22op_wft\x22>⚙️\x20Settings</button>\x20\x0a<div\x20id=\x22modal_wft\x22\x20class=\x22modal\x22>\x20\x0a\x20\x20<div\x20class=\x22modal-content\x22>\x20\x0a\x20\x20\x20\x20<div\x20class=\x22modal-header\x22>\x20\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22close\x22>&times;</span>\x20\x0a\x20\x20\x20\x20\x20\x20<h2\x20class=\x22modal-title\x22>GAME\x20SETTINGS</h2>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<div\x20id=\x22modal_wft_body\x22\x20class=\x22modal-body\x22>\x0a\x20\x20\x20\x20\x20\x20<!--\x20Settings\x20layout\x20with\x20sidebar\x20and\x20content\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-layout\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sidebar\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-sidebar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x20active\x22\x20data-tab=\x22game-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M14.7\x206.3a1\x201\x200\x200\x200\x200\x201.4l1.6\x201.6a1\x201\x200\x200\x200\x201.4\x200l3.77-3.77a6\x206\x200\x200\x201-7.94\x207.94l-6.91\x206.91a2.12\x202.12\x200\x200\x201-3-3l6.91-6.91a6\x206\x200\x200\x201\x207.94-7.94l-3.76\x203.76z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Game\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22mobile-settings\x22\x20id=\x22mobile-tab-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x225\x22\x20y=\x222\x22\x20width=\x2214\x22\x20height=\x2220\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2218\x22\x20x2=\x2212\x22\x20y2=\x2218\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Mobile\x20Controls</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22sound-laser-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M22\x2012h-4l-3\x209L9\x203l-3\x209H2\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Laser\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22power-ups\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x2212\x206\x2012\x2012\x2016\x2014\x22></polyline>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Power-ups\x20&\x20Zoom</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22messages\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M21\x2015a2\x202\x200\x200\x201-2\x202H7l-4\x204V5a2\x202\x200\x200\x201\x202-2h14a2\x202\x200\x200\x201\x202\x202z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22backgrounds\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x223\x22\x20y=\x223\x22\x20width=\x2218\x22\x20height=\x2218\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x228.5\x22\x20cy=\x228.5\x22\x20r=\x221.5\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x2221\x2015\x2016\x2010\x205\x2021\x22></polyline>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Backgrounds</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22cursors\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203l7.07\x2016.97\x202.51-7.39\x207.39-2.51L3\x203z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M13\x2013l6\x206\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Cursors</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sidebar-item\x22\x20data-tab=\x22about\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<circle\x20cx=\x2212\x22\x20cy=\x2212\x22\x20r=\x2210\x22></circle>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x2216\x22\x20x2=\x2212\x22\x20y2=\x2212\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<line\x20x1=\x2212\x22\x20y1=\x228\x22\x20x2=\x2212\x22\x20y2=\x228\x22></line>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>About</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Content\x20Area\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Game\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22game-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_server\x22\x20style=\x22position:\x20absolute;\x20opacity:\x200;\x20top:\x20-9999px;\x20left:\x20-9999px;\x20pointer-events:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22sel_server\x22>Country</label>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_country\x22></select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Game\x20Options\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Game\x20Options</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Fast\x20Eating\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bolt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Fast\x20Eating</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22eating_speed_toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20ZigZag\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_zigzag\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-eye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20ZigZag</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:\x2018px;\x22\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=img/zigzag.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22zigzagup\x22\x20value=\x22true\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Show\x20Speed\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_speed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-tachometer-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20Speed</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x22height:\x2018px;\x22\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=img/speed.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wftspeed\x22\x20value=\x22true\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Total\x20Kill-Headshot\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_save\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crosshairs\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22saveGame\x22>Total\x20Kill/Headshot</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22saveGame\x22\x20value=\x22true\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Show\x20FPS/CPU\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-microchip\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Show\x20FPS/CPU</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22performance-monitor-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Visual\x20Pulse\x20Effects\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_pulse_effects\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-wave-square\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Visual\x20Pulse\x20Effects</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22pulse_effects_enabled\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Screen\x20Mode\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_w1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-desktop\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Screen\x20Mode</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_sc\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x220\x22>100%</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x221\x22>75%</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x222\x22>Center</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Smooth\x20Level\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-sliders-h\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Smooth\x20movement</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2220\x22>Normal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22>High</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Top\x20Players\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-item\x22\x20id=\x22div_top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-trophy\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Top\x20Players</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sel_top\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x220\x22>0</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x221\x22>1</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x222\x22>2</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x223\x22>3</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x224\x22>4</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x225\x22>5</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x226\x22>6</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x227\x22>7</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x228\x22>8</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x229\x22>9</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22>10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sound\x20Settings\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-settings-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22settings-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sound\x20Effects\x20Label\x20on\x20Left\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-volume-up\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-effects-title\x22>Sound\x20Effects</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Headshot\x20Sound\x20Selector\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sound_effect_selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/hs_2.mp3\x22>Default\x20Headshot</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\x22>Headshot\x20Sound</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/emaat.mp3\x22>Emaat</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/sniper-shot.mp3\x22>Sniper\x20Shot</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/headshot_6.mp3\x22>Headshot\x202</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\x22>Alqm</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\x22>Bye\x20Bye</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/Aelo-Adi.MP3\x22>Adelo\x20Adi</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/alalobee.mp3\x22>Ala\x20Loby</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/laugh.mp3\x22>Laugh</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/mario-jump.mp3\x22>Mario\x20Jump</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/pew.mp3\x22>Pew</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/pingo.mp3\x22>Pingo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/wak-wak.mp3\x22>Wak\x20Wak</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x2010th\x20Headshot\x20Sound\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22monster_kill_selector\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://wormx.store/video/monster-kill-hahaha.MP3\x22>Monster\x20Kill</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/mk.mp3\x22>Monster\x20Kill\x202</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22https://www.myinstants.com/media/sounds/hea-hea-headshot.mp3\x22>Monster\x20Kill\x203</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Volume\x20Control\x20without\x20label\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22volume-slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22volume_slider\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x221\x22\x20value=\x2240\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22volume_value\x22\x20class=\x22slider-value\x22>40</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Toggle\x20Switch\x20on\x20far\x20right\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sound-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wftsound\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x20round\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Custom\x20Skin\x20Upload\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Custom\x20Skin</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22\x20id=\x22div_crsw\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-file-image\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Skin\x20File....\x20Only\x20(skin.json)</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20flex-grow:\x201;\x20gap:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22file\x22\x20accept=\x22.json\x22\x20id=\x22fileSkin\x22\x20style=\x22flex-grow:\x201;\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_clear_file\x22>Clear</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Audio\x20elements\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22s_h\x22><source\x20src=\x22https://wormx.store/video/hs_2.mp3\x22\x20type=\x22audio/mpeg\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22monster_kill_sound\x22><source\x20src=\x22https://wormx.store/video/monster-kill-hahaha.MP3\x22\x20type=\x22audio/mpeg\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<audio\x20id=\x22sound_test_audio\x22></audio>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Mobile\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22mobile-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Mobile\x20Controls</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>Joystick\x20Settings</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-gamepad\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_checked\x22>Enable\x20Joystick</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22joystick_checked\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_color\x22>Joystick\x20Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_color\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22red\x22>Red</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22blue\x22>Blue</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22green\x22>Green</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22yellow\x22>Yellow</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22purple\x22>Purple</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22orange\x22>Orange</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-cog\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_mode\x22>Joystick\x20Mode</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_mode\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22static\x22>Static</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22dynamic\x22>Dynamic</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-map-marker-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_position\x22>Position</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22joystick_position\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22L\x22>Left</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22R\x22>Right</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-expand-arrows-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_size\x22>Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22joystick_size\x22\x20min=\x2250\x22\x20max=\x22150\x22\x20step=\x2210\x22\x20value=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22joystick_size_value\x22\x20class=\x22slider-value\x22>100</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22joystick_pxy\x22>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22joystick_pxy\x22\x20min=\x2250\x22\x20max=\x22150\x22\x20step=\x2210\x22\x20value=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22joystick_pxy_value\x22\x20class=\x22slider-value\x22>100</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22config_mobile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Additional\x20mobile\x20settings\x20will\x20be\x20loaded\x20here\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Laser\x20Settings\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sound-laser-settings-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Laser\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Laser\x20Settings</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22\x20id=\x22div_Laser\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bullseye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22Laserup\x22>Enable\x20Laser</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22Laserup\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22laser_color_picker\x22>Color</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22laser_color_picker\x22\x20value=\x22#FFD700\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22laser_opacity_slider\x22>Opacity</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22laser_opacity_slider\x22\x20min=\x2210\x22\x20max=\x22100\x22\x20step=\x2210\x22\x20value=\x2250\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22laser_opacity_value\x22\x20class=\x22slider-value\x22>50</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22reset_laser_settings\x22\x20class=\x22reset-btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Keyboard\x20Shortcuts:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22flex-grow:\x201;\x20text-align:\x20right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>L</strong>\x20-\x20Toggle\x20laser</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>O</strong>\x20-\x20Increase\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-left:\x2010px;\x22><strong>P</strong>\x20-\x20Decrease\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22power-ups-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Power-ups\x20&\x20Zoom\x20Settings</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Advanced\x20Controls</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Spin\x20Fast\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-sync-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22spin_fast_slider\x22>Spin\x20Fast</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22spin_fast_slider\x22\x20min=\x220.3\x22\x20max=\x220.6\x22\x20step=\x220.1\x22\x20value=\x220.5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22spin_fast_value\x22\x20class=\x22slider-value\x22>0.5</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22spin_fast\x22\x20data-default=\x220.5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Size\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-expand\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22portion_size_slider\x22>Power-ups\x20Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22portion_size_slider\x22\x20min=\x221\x22\x20max=\x226\x22\x20step=\x221\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22portion_size_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22portion_size\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Power-ups\x20Aura\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-radiation-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22portion_aura_slider\x22>Power-ups\x20Aura</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22portion_aura_slider\x22\x20min=\x221.2\x22\x20max=\x223.2\x22\x20step=\x220.2\x22\x20value=\x221.2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22portion_aura_value\x22\x20class=\x22slider-value\x22>1.2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22portion_aura\x22\x20data-default=\x221.2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Food\x20Size\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-apple-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22food_size_slider\x22>Food\x20Size</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22food_size_slider\x22\x20min=\x220.5\x22\x20max=\x223\x22\x20step=\x220.5\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22food_size_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22food_size\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Food\x20Shadow\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-moon\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22food_shadow_slider\x22>Food\x20Shadow</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22food_shadow_slider\x22\x20min=\x220.5\x22\x20max=\x223\x22\x20step=\x220.5\x22\x20value=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22food_shadow_value\x22\x20class=\x22slider-value\x22>2</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22food_shadow\x22\x20data-default=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Zoom\x20Controls</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Zoom\x20Speed\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-search-plus\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22zoom_speed_slider\x22>Zoom\x20Speed</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22zoom_speed_slider\x22\x20min=\x220.001\x22\x20max=\x220.01\x22\x20step=\x220.001\x22\x20value=\x220.003\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22zoom_speed_value\x22\x20class=\x22slider-value\x22>0.003</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22reset-btn\x22\x20data-reset=\x22zoom_speed\x22\x20data-default=\x220.003\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x2012a9\x209\x200\x201\x200\x209-9\x209.75\x209.75\x200\x200\x200-6.74\x202.74L3\x208\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M3\x203v5h5\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_game_enhancements\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Messages\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22messages-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Messages</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Default\x20Kill&Headshot\x20Toggle\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-with-toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Kill&Headshot\x20Settings</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toggle-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-skull\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Default\x20Kill&Headshot</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22wftiq\x22\x20value=\x22true\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20New\x20Messages\x20Layout\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-header\x22>Messages</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22messages-container\x22\x20id=\x22custom-messages-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Left\x20side:\x20Kill\x20Messages\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-column\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crosshairs\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Kill\x20Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-select-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22kill_msg\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22KILLED\x22>KILLED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22WASTED\x22>WASTED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22ELIMINATED\x22>ELIMINATED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22DESTROYED\x22>DESTROYED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22FINISHED\x22>FINISHED</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22Well\x20Done!\x22>Well\x20Done!</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Show\x20Player\x20Name</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x20small-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22kill_show_name\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22kill_name_position\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22after\x22>After\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22before\x22>Before\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22kill_custom_text\x22\x20class=\x22custom-label\x22>Custom\x20Message</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22kill_custom_text\x22\x20maxlength=\x2220\x22\x20placeholder=\x22Maximum\x2020\x20characters\x22\x20class=\x22custom-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Right\x20side:\x20Headshot\x20Messages\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-column\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-bullseye\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Headshot\x20Messages</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-select-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22headshot_msg\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22HEADSHOT\x22>HEADSHOT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22BOOM!\x20HEADSHOT\x22>BOOM!\x20HEADSHOT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22PERFECT\x20AIM\x22>PERFECT\x20AIM</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22CRITICAL\x20HIT\x22>CRITICAL\x20HIT</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22BULLSEYE\x22>BULLSEYE</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>Show\x20Player\x20Name</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22switch\x20small-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22headshot_show_name\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-option\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22headshot_name_position\x22\x20class=\x22message-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22after\x22>After\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22before\x22>Before\x20Message</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-custom\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22headshot_custom_text\x22\x20class=\x22custom-label\x22>Custom\x20Message</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22headshot_custom_text\x22\x20maxlength=\x2220\x22\x20placeholder=\x22Maximum\x2020\x20characters\x22\x20class=\x22custom-input\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_messages\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Backgrounds\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22backgrounds-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Backgrounds</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Sector\x20System\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22section-title\x22>Sector\x20System</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-system-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-toggle-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-th-large\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22toggle-label\x22>Enable\x20Sector\x20System</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22toggle-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22sector_system_toggle\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Settings\x20Panel\x20-\x20Hidden\x20until\x20enabled\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sector_settings_panel\x22\x20class=\x22sector-settings-panel\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-main-settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-grip-horizontal\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Display\x20Mode</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22sector_display_mode\x22\x20class=\x22sector-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sectors\x22>Sectors\x20(12)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22quarters\x22>Quarters\x20(4)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20Settings\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-fill-drip\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Background\x20Color</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22sector_bg_color\x22\x20value=\x22#000000\x22\x20class=\x22color-picker\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20Opacity\x20-\x20Always\x20visible\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-adjust\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Background\x20Opacity</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x20opacity-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22sector_bg_opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x225\x22\x20value=\x2260\x22\x20class=\x22small-slider\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-value\x22\x20id=\x22sector_bg_opacity_value\x22>60%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-border-style\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Show\x20Lines</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22toggle-switch\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22sector_show_lines\x22\x20checked>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toggle-slider\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Lines\x20Options\x20-\x20Hidden\x20when\x20Show\x20Lines\x20is\x20off\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22sector_lines_options\x22\x20class=\x22sector-lines-options\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-palette\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Line\x20Color</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22color\x22\x20id=\x22sector_line_color\x22\x20value=\x22#FF0000\x22\x20class=\x22color-picker\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-low-vision\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-label\x22>Line\x20Opacity</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-control\x20opacity-control\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22range\x22\x20id=\x22sector_line_opacity\x22\x20min=\x220\x22\x20max=\x22100\x22\x20step=\x225\x22\x20value=\x2230\x22\x20class=\x22small-slider\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22slider-value\x22\x20id=\x22sector_line_opacity_value\x22>30%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sector-shortcuts\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22shortcuts-title\x22>Keyboard\x20Shortcuts:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22shortcuts-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22shortcut-item\x22><strong>S</strong>\x20or\x20<strong>=</strong>\x20-\x20Toggle\x20Sectors</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22shortcut-item\x22><strong>X</strong>\x20-\x20Toggle\x20Quarters</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Background\x20items\x20will\x20be\x20added\x20dynamically\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20Cursors\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22cursors-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>Game\x20Cursors</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20العنوان\x20في\x20سطر\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-mouse-pointer\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>Cursor\x20Selection</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20الزر\x20في\x20سطر\x20منفصل\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x20cursor-controls\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22default-cursor-btn\x22\x20class=\x22secondary-button\x22>Default\x20Cursor</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22current-cursor-name\x22>Current:\x20Electrical\x20Plug\x20Cursor</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cursor-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20المؤشرات\x20ستضاف\x20ديناميكياً\x20هنا\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_cursors\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20About\x20Tab\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22about-tab\x22\x20class=\x22tab-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3>About\x20WFT</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22about-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-info-circle\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20WFT:\x20Enhance\x20Your\x20Wormate.io\x20Experience\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[WFT]\x20is\x20a\x20Chrome\x20extension\x20designed\x20to\x20improve\x20your\x20wormate.io\x20gameplay.\x20Quickly\x20select\x20rooms,\x20customize\x20your\x20worm\x20with\x20vibrant\x20skin\x20colors,\x20and\x20enjoy\x20extra\x20features\x20to\x20enhance\x20your\x20experience.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-calendar-alt\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Release\x20Date:\x2030/03/2025.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-code-branch\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Version:\x202.0.1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22button-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22resetScript\x22\x20class=\x22reset-button\x22>Versiyon\x20Change</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-users\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Designed\x20by:\x20\x20WFT-Team\x20Team\x20!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-keyboard\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>Keyboard\x20Shortcuts:</strong><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>L</strong>\x20-\x20Toggle\x20laser</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>O</strong>\x20-\x20Increase\x20laser\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20inline-block;\x20margin-right:\x2015px;\x20margin-top:\x205px;\x22><strong>P</strong>\x20-\x20Decrease\x20laser\x20opacity</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20User\x20ID\x20Section\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-group-content\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22setting-row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22theo-game-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-id-card\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22id_customer\x22>ID:\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20value=\x22', 'dispose', 'GIF\x20SKIN', 'unbind', '#mm-event-text', 'dropShadow', '#cursors-tab,\x20.cursor-container,\x20.cursor-item', 'keydown', '.dd-click-off-close', 'not_empty', 'code', '4qTDcId', 'cookie', '/get_store.phpitem=mp_1.png', 'event', 'rgba(0,\x200,\x200,\x200.5)', 'glassesDict', 'Japan', 'monster_kill_sound', 'enemyNameHs', 'op_wft', 'buttonMode', 'canvastext', 'attach', '8px', 'loginUser', 'atan', 'contextmenu', 'decoder', '\x22\x20data-bg=\x22', 'clip', '#portion_aura_slider', 'base', '_display', 'size', 'SaveGamewft', 'onwheel', 'playerDeath', 'pageY', 'min', '#final-message', 'oco', 'timestamp', 'No\x20conectado,\x20esperando\x20a\x20que\x20se\x20restablezca\x20la\x20conexión...', 'change', 'blendMode', '.favorites-popup', 'removeData', 'settings', '/images/cors-proxy.phpimg=cursors/13.png', 'onchange', 'Name\x20Error*', 'cachedServers', 'then', 'img_3', 'caches', 'CPU\x20monitoring\x20stopped\x20because\x20it\x20was\x20disabled', 'authResponse', 'render', 'VjI5eWJXRjBaUzVwYnc9PQ==', 'index', 'glassesVariantArray', 'not_connect', 'timing', 'constructor', '#ff2222', 'logout', 'soundEffect', 'خطأ\x20في\x20حفظ\x20اسم\x20السيرفر:', 's_kill', 'musicEnabled', 'mouseenter', '..9\x20..', 'fast', 'graphics', 'btn_crsw', 'cpuDisplay', 'nonbuyable', 'servers-mexico', 'Current:\x20Default', '</button>\x20\x0a\x20\x20\x20\x20<div\x20id=\x22modal_wft\x22\x20class=\x22modal\x22>\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x20wft-modal\x22\x20style=\x22max-width:\x20360px\x20!important;\x20width:\x20360px\x20!important;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22center\x20wft-header\x22\x20style=\x22background-color:\x20#ff8a18;\x20background:\x20linear-gradient(145deg,\x20rgb(255,\x20141,\x200),\x20rgb(255,\x20102,\x200));\x20padding:\x200\x2015px;\x20height:\x2036px;\x20line-height:\x2036px;\x20border-radius:\x208px\x208px\x200\x200;\x20position:\x20relative;\x20text-align:\x20center;\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22close\x22\x20style=\x22position:\x20absolute;\x20left:\x2015px;\x20top:\x206px;\x20color:\x20white;\x20font-size:\x2024px;\x20font-weight:\x20bold;\x20cursor:\x20pointer;\x22>×</span>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22modal-title\x22\x20style=\x22margin:\x200;\x20font-size:\x2018px;\x20color:\x20white;\x22>Settings</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22modal_wft_body\x22\x20class=\x22modal-body\x20wft-body\x22\x20style=\x22padding:\x2015px;\x20background-color:\x20#1e2339;\x20color:\x20#fff;\x20border-radius:\x200\x200\x208px\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20سيتم\x20تحديث\x20المحتوى\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20', 'stringify', 'please\x20don\x27t\x20copy\x20my\x20code', 'outerHeight', '#spin_fast_slider', 'init', 'relative', '\x22\x20style=\x22color:\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22background-item\x20', 'each', '5px', 'UAE', '\x27></div>', 'attr', 'hasOwnProperty', 'url', 'Galaxy-Star.png', 'onerror', '#final-share-fb', 'source', 'accessToken', 'opera', 'imagePosition', 'stop', 'server-image-with-link', '861926850619051', '16px', 'port_id_s', '#leaders-button-level', 'test', '#custom-tooltip', 'index.game.popup.menu.store.locked', 'MULTIPLY', 'selectText', 'list', '<div\x20class=\x22table-row\x22><span>', '#sector_system_toggle', 'data-skin-id', '#mobile-tab-item', 'warn', 'PortionSize', 'touchend', 'index.game.popup.menu.settings.tab', 'trigger', '</small>', '/get_store.phpitem=mp_3.png', '/get_store.phpitem=moo_2.png', ';\x20border-radius:\x208px;\x20overflow:\x20hidden;\x20margin:\x205px;\x20background-color:\x20#232339;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', '<div\x20id=\x27final-replay\x27>Replay</div>', '_blank', 'padEnd', '</span><span>', '\x20copied!\x27));\x22>Copy</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20الخط\x20الفاصل\x20الأول\x20فقط\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-top:\x201px\x20solid\x20#3a4061;\x20margin:\x2015px\x200;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20طريقة\x20تفعيل\x20الاشتراك\x20الرئيسية\x20-\x20رابط\x20الاتصال\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x2010px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:\x20white;\x20margin:\x200\x200\x208px\x200;\x20font-size:\x2016px;\x22>Premium\x20Activation\x20-\x20تفعيل\x20الاشتراك\x20المميز</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://wormatefriendsturkey.com/contact\x22\x20target=\x22_blank\x22\x20style=\x22display:\x20block;\x20background-color:\x20#4CAF50;\x20color:\x20white;\x20padding:\x2012px;\x20text-decoration:\x20none;\x20border-radius:\x206px;\x20font-weight:\x20bold;\x20margin:\x2010px\x20auto;\x20width:\x2080%;\x20max-width:\x20280px;\x20box-shadow:\x200\x204px\x208px\x20rgba(0,0,0,0.2);\x20transition:\x20all\x200.3s;\x20border:\x202px\x20solid\x20#65d269;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x2016px;\x22>🔗\x20Click\x20Here\x20To\x20Activate</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x2014px;\x20margin-top:\x204px;\x22>اضغط\x20هنا\x20للتفعيل</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20صورة\x20البريميم\x20قبل\x20زر\x20الديسكورد\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x2015px\x20auto\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://wormx.store/images/cors-proxy.php?img=img/premium_features.png\x22\x20alt=\x22Premium\x20Features\x22\x20style=\x22max-width:\x20150px;\x20height:\x20auto;\x20border-radius:\x204px;\x20display:\x20block;\x20margin:\x200\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20خيار\x20الانضمام\x20للديسكورد\x20كخيار\x20ثانوي\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x2010px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://discord.gg/NHWXgJpE\x22\x20target=\x22_blank\x22\x20style=\x22display:\x20inline-block;\x20background-color:\x20#5865F2;\x20color:\x20white;\x20padding:\x208px\x2012px;\x20text-decoration:\x20none;\x20border-radius:\x204px;\x20font-weight:\x20bold;\x20box-shadow:\x200\x202px\x205px\x20rgba(0,0,0,0.2);\x20transition:\x20background-color\x200.3s;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20style=\x22width:\x2016px;\x20height:\x2016px;\x20margin-right:\x206px;\x20display:\x20inline-block;\x20vertical-align:\x20middle;\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22white\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M20.317\x204.3698a19.7913\x2019.7913\x200\x2000-4.8851-1.5152.0741.0741\x200\x2000-.0785.0371c-.211.3753-.4447.8648-.6083\x201.2495-1.8447-.2762-3.68-.2762-5.4868\x200-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077\x200\x2000-.0785-.037\x2019.7363\x2019.7363\x200\x2000-4.8852\x201.515.0699.0699\x200\x2000-.0321.0277C.5334\x209.0458-.319\x2013.5799.0992\x2018.0578a.0824.0824\x200\x2000.0312.0561c2.0528\x201.5076\x204.0413\x202.4228\x205.9929\x203.0294a.0777.0777\x200\x2000.0842-.0276c.4616-.6304.8731-1.2952\x201.226-1.9942a.076.076\x200\x2000-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077\x200\x2001-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743\x200\x2001.0776-.0105c3.9278\x201.7933\x208.18\x201.7933\x2012.0614\x200a.0739.0739\x200\x2001.0785.0095c.1202.099.246.1981.3728.2924a.077.077\x200\x2001-.0066.1276\x2012.2986\x2012.2986\x200\x2001-1.873.8914a.0766.0766\x200\x2000-.0407.1067c.3604.698.7719\x201.3628\x201.225\x201.9932a.076.076\x200\x2000.0842.0286c1.961-.6067\x203.9495-1.5219\x206.0023-3.0294a.077.077\x200\x2000.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061\x200\x2000-.0312-.0286zM8.02\x2015.3312c-1.1825\x200-2.1569-1.0857-2.1569-2.419\x200-1.3332.9555-2.4189\x202.157-2.4189\x201.2108\x200\x202.1757\x201.0952\x202.1568\x202.419\x200\x201.3332-.9555\x202.4189-2.1569\x202.4189zm7.9748\x200c-1.1825\x200-2.1569-1.0857-2.1569-2.419\x200-1.3332.9554-2.4189\x202.1569-2.4189\x201.2108\x200\x202.1757\x201.0952\x202.1568\x202.419\x200\x201.3332-.946\x202.4189-2.1568\x202.4189Z\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Join\x20Our\x20Discord\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x200.8em;\x20margin-top:\x202px;\x22>انضم\x20إلى\x20مجتمعنا\x20على\x20Discord</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin-top:\x208px;\x20color:\x20#aaa;\x20font-size:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Get\x20premium\x20features\x20by\x20joining\x20our\x20Discord\x20server\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20block;\x20font-size:\x200.9em;\x20margin-top:\x202px;\x22>للحصول\x20على\x20الميزات\x20المميزة\x20عبر\x20Discord</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#ddd;\x20font-size:\x2014px;\x20margin:\x205px\x200;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fas\x20fa-crown\x22\x20style=\x22color:\x20#ffbb00;\x22></i>\x20Premium\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'offset', 'fps', '#leaders-button-highscore', '&eyesId=', 'ddslick', 'ARENA', 'Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20all\x20favorite\x20skins?', 'portionUnknown', ');\x20}', '#mm-player-avatar', 'app', '#skin-group-description-text', '#final-place', 'index.game.result.placeInBoard', '/images/cors-proxy.phpimg=cursors/24.png', '#pulse_effects_enabled', 'textureDict', '1\x20/\x20span\x202', 'food_size', 'Mesaj\x20işleme\x20hatası:', 'drawCircle', '#final-score', '#profile-stat-highScore', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'Indonesia', 'feed', 'pCc', 'mouthUnknown', 'requestFullScreen', '\x22\x20class=\x22toaster\x20toaster-levelup\x22><img\x20class=\x22toaster-levelup-img\x22\x20alt=\x22Wormate\x20Level\x20Up\x20Star\x22\x20src=\x22/images/level-star.svg\x22\x20/><div\x20class=\x22toaster-levelup-val\x22>', 'top', 'flag\x20', 'server-score', 'wssServer', '#loa831pibur0w4gv', 'appId', 'btn_in_t', '#mm-skin-over-button-list', '#fff009', 'lineHeight', 'Strawberry\x20Candy\x20Cursor', '#backgroundArena', 'France', 'opacity\x200.3s\x20ease-in-out', 'def_skin_glow', '<div></div>', 'iscustom', 'cssText', '#profile-stat-registrationDate', 'fillText', 'img_f', 'selectedItem', 'webWidget', '.sidebar-item.active', '#FF0000', 'eyesDict', 'index.game.antiadblocker.msg4', 'index.game.popup.menu.skins.tab', '✅\x20تم\x20تعديل\x20دالة\x20عرض\x20اسم\x20السيرفر\x20بنجاح', 'gold', 'fill', '.close', 'Sprite', 'messenger', '_start', '#current-cursor-name', 'WebSocket', 'epx_time', '0x1', 'translate(-50%,\x20-50%)\x20scale(', '\x20=\x20v2;\x20}', '#modal_backdrop', 'Thailand', 'https://wormx.store/2025/check/check2.php', 'loa831pibur0w4gv', '#volume_slider', '#sector_display_mode', '#custom-messages-container', 'index.game.antiadblocker.msg1', 'mouthId', 'object', 'monsterKillSound', 'Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20all\x20favorite\x20hats?', '#popup-delete-account-container', '500px', '/images/cors-proxy.phpimg=flg/mx.png', 'servers-canada', 'pulseEnabled', 'keyup', 'zIndex', 'description', 'signOut', 'magnet_ability', 'bind', 'show', 'ccg_0', 'prop', '#zigzagup', 'Prism', 'Strawberry\x20and\x20Chocolate\x20Ice\x20Cream\x20Cursor', '🧠\x20Player\x20state:', 'https://i.imgur.com/LFiCido.png', '#error-game-connection-retry', 'eat_animation', 'v14.0', 'user_data', '100%', 'delete', 'index.game.main.menu.unlockSkins.comeAndPlay', 'cachedRadius', 'visibility', 'Pink\x20Hearts\x20Cursor', 'monitor-element', 'modalFixed', 'renderContainer', '<div><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22\x20x=\x220\x22\x20y=\x220\x22\x20viewBox=\x220\x200\x20456\x20456\x22\x20xml:\x20space=\x22preserve\x22><rect\x20x=\x220\x22\x20y=\x220\x22\x20width=\x22456\x22\x20height=\x22456\x22\x20fill=\x22#517AD1\x22/><path\x20d=\x22M242.7\x20456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9\x2035.6-79.5\x2079.5-79.5h62v64.6h-44.4c-13.9\x200-25.3\x2011.3-25.3\x2025.3v50h68.5l-9.5\x2071.9h-59.1V456z\x22\x20fill=\x22#fff\x22/></svg><span>', 'status', 'mobile', 'push', '470px', 'popup', 'index.game.toaster.consent.text', 'servers-australia', 'SCREEN', 'onmessage', '\x22\x20data-cursor=\x22', 'moveTo', 'port_id', 'saveSettings', 'body', 'isInitialized', 'bg_sky_7.png', 'game-wrap', '<input\x20type=\x22hidden\x22\x20id=\x22port_id\x22\x20value=\x22\x22>', '#settings-music-enabled-switch', '-5px', '#btn_copy', '/images/cors-proxy.phpimg=flg/us.png', 'data', 'forceUseLocalImages', '#server-link-tooltip', ':visible', '#mm-player-info', 'savedGame', 'data-server-image', '\x22\x20style=\x22max-width:\x20300px;\x20width:\x20350px\x20!important;\x20height:\x2022px\x20!important;\x20border-radius:\x206px;\x20font-size:\x2014px;\x20text-align:\x20center;\x20background-color:\x20#fff;\x20color:\x20#0a6928;\x20font-weight:\x20630;\x20display:\x20inline-block;\x20margin-right:\x2010px;\x22/>', 'REPEAT', 'Stopping\x20FPS\x20monitoring\x20completely', '#final-caption', 'set', 'interactive', '/get_store.phpitem=z_i.png', 'hatId', 'color', '0xffffff', '#store-buy-coins_7000', '.dd-selected-description', 'transition', 'fillStyle', 'https://wormmedia.xyz:4000/api/live-scores?t=', '#headshot_msg', 'index.game.toaster.consent.iAccept', '\x20dd-selected-description-truncated', '\x22\x20style=\x22width:\x2032px;\x20height:\x2032px;\x20margin-top:\x2014px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'pageX', '5px\x2010px', 'get_group.phpimg=Group_show_gif.png', 'classPrefix', 'closest', '.ddslick', 'restore', 'canvas', 'WFT', '#store-buy-coins_1250', 'flex_ability', '/dynamic/assets/registry.json', 'coins_3250', 'ccg_2', 'startCpuMonitoring', '<button>', 'eie', 'headshot', 'banner', 'lineTo', 'before', 'async', 'absolute', 'img', 'isCustom', 'pxy', 'joystick_checked', 'trace', 'space-between', '</span><a\x20class=\x22toaster-consent-accepted-link\x22\x20href=\x22/privacy-policy\x22>', '/images/', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '0x0', 'timmap', 'Brazil', '_request', 'resource', ';\x20vec2\x20mul\x20=\x200.5\x20*\x20vec2(ScreenParams.x\x20*\x20(ScreenParams.w\x20-\x201.0)\x20+\x201.0,\x20ScreenParams.y\x20*\x20(ScreenParams.z\x20-\x201.0)\x20+\x201.0);\x20vec2\x20v2\x20=\x20uv\x20*\x20vec2(1.0,\x201.0);\x20v2\x20=\x20v2\x20*\x20vec2(1.0,\x201.0);\x20', ';\x20uniform\x20mat3\x20', 'game', 'files', '/images/cors-proxy.phpimg=cursors/7.png', 'append', 'after', 'image', 'lineAlpha', 'pointer', 'PTSans', '/images/cors-proxy.phpimg=cursors/25.png', 'which', 'option', 'coins', 'lastCpuTime', '\x22\x20alt=\x22', '1px\x205px', 'length', 'revokeObjectURL', 'setInt16', 'a1_', 'querySelector', '/get_store.phpitem=moo_3.png', 'string', 'prototype', 'selectedIndex', '/images/cors-proxy.phpimg=flg/fr.png', 'img_clock', '.fav-buttons-container', 'reload', 'font', '/pub/wuid/guest/start?gameMode=', '#modal_wft\x20.modal-content', 'util.time.min', 'flex', 'Cherries\x20Cursor', '.toaster-coins-close', '-10px', 't_wft_', '#popup-logout', 'setAttribute', 'd_1', '#backgroundArena-value', '</div>', 'sel_sc', 'merge', 'server-status', '#store-view-canv', '/images/cors-proxy.phpimg=cursors/2.png', 'playerX', 'cpuSampleSize', 'replaceAll', 'baseVal', '\x20se\x20movió\x20a\x20(', 'showHeadshotMessage', 'pk0', 'touches', '\x20*\x20vec3(', '.cursor-item', 'Player', 'favorites-grid', 'get_skin.php', 'https://graph.facebook.com/me?access_token=', '17370AtaaOR', '<div\x20style=\x22border-color:\x20', '{0}', 'u5_', 'border-color', 'initialized', '\x20dd-image-right', '/images/cors-proxy.phpimg=cursors/16.png', 'util.time.sec', '/images/cors-proxy.phpimg=flg/default-server.png', '.dd-option', '<div\x20id=\x22', 'lineStyle', '.tab-content', 'players', 'pk1', '#delete-account-yes', 'update', '#joystick_position', '#store-item-price', 'joystick_pxy', 'stopAllMonitoring', '#skin-info-text', '270px', '/get_store.phpitem=mpf_1.png', '#backgrounds-tab,\x20.background-grid,\x20.background-item', 'volume', 'data:', 'TEAM2', 'KILL', '\x20page', '/get_store.phpitem=bg_sky_10.png', 'now', '10px', 's_w', 'touchstart', 'getLoginStatus', 'https://resources.wormate.io', 'className', 'soundEnabled', '🛑\x20Pozisyon\x20güncellemesi\x20yapılmadı:\x20teamCode\x20yok.', '5721485Spjhel', 'databases', 'Skin\x20list\x20not\x20found\x20in\x20game\x20data', 'unregister', '.ui-tab', 'You\x20don\x27t\x20have\x20any\x20favorite\x20hats\x20yet.', 'Text', 'head', 'bg_sky__5.png', 'ltmolilci1iurq1i', 'touchmove', 'slideDown', 'play', 'latitude', '_animFrameId', 'GLASSES', 'ابوك', '#coins-view', '.settings-sidebar,\x20.settings-layout,\x20.settings-content,\x20.settings-grid,\x20.tab-content,\x20.sidebar-item', 'pow', 'CLOSING', 'isActive', 'join', 'onclickServer', 'success', 'Web\x20SQL\x20otomatik\x20olarak\x20JavaScript\x20ile\x20temizlenemez.', 'Mexico', 'bg_sky_9.png', 'consented', 'messages-disabled', 'performance-monitor-toggle', 'Wormx\x20Error\x202', '\x22\x20id=\x22btnFullScreen\x22/><input\x20type=\x22button\x22\x20value=\x22', 'modal_wft', '<div\x20style=\x27text-align:center;padding:10px;color:#aaa;margin:20px\x200;grid-column:1/span\x202;\x27>You\x20don\x27t\x20have\x20any\x20favorite\x20skins\x20yet.</div>', 'embedCSS', 'displayNumber', '/get_store.phpitem=mo_3.png', 'Continue\x20(Home)', 'data-descriptione', 'playMonsterSound', '/consent/change?value=', '#aaa', '#00a8ff', 'de_DE', 'favoriteSkins', 'Default', 'beginPath', 'port_name_s', 'fontSize', '..2\x20..', '#markup-wrap', 'indexOf', '_originalFontSize', 'million', 'aqnvgcpz05orkobh', 'PIXI', 'changedTouches', '-tab', 'wrapMode', '#Laserup', 'Error\x20saving\x20wft\x20settings:', 'Modernizr', 'England', '_originalColor', 'atan2', 'unlimitedRespawn', 'selectedCursor', 'auto', 'Error\x20processing\x20file:', 'expToNext', 'Visit\x20', 'serverUrl', 'selectSala', 'div_killmsg', 'opacity', '\x20/\x20', 'document', 'addClass', 'uk_UA', '#joystick_color', 'skinGroupArrayDict', 'WRAP_MODES', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;\x20padding:20px;\x20color:#aaa;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20No\x20servers\x20available\x20in\x20this\x20region\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '0x2', '82px', '#mm-line-top', 'padStart', 'Pink\x20Dolphin\x20Cursor', 'btnRePlay', 'GET', '/images/cors-proxy.phpimg=flg/de.png', 'skinUnknown', 'replaceWith', '<li><a\x20class=\x22dd-option\x22>', 'toLowerCase', 'd_4', 'ready', '/get_store.phpitem=close_z.png', '#wftsound', 'setupKeyboardEvents', 'playHeadshotSound', '[id^=\x27skin-info-text\x27]', 'region', 'div_speed', '.dd-options', 'container_count', '#4CAF50', 'hatFavoritesButton', 'joystick', 'joystick_mode', 'clearRect', 'restricted', '#popup-login-fb', 'baseTexture', '/images/cors-proxy.phpimg=cursors/10.png', 'teamCode', ';\x20void\x20main(){vec4\x20color=texture2D(', 'resize', '#store-go-coins-button', 'initGraphics', 'vendor', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20object-fit:\x20contain;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'location', 'userId', 'deleteDatabase', '75px', 'textureCache', '#wftspeed', '#zoom_speed_value', '#reset_laser_settings', 'preset', 'transparent', 'killMsgType', 'Customer', 'key', 'POST', 'servers-peru', 'currentUser', '50px', '#toaster-view', 'coins_16000', '32px', 'mouseup', 'server-number', ';\x20uniform\x20vec4\x20', 'Nebula', 'text/javascript', 'block', '<div\x20class=\x22div_FullScreen\x22><input\x20type=\x22button\x22\x20value=\x22', '#port_id_s', 'index.game.result.share', '#background-canvas', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', '#sector_bg_opacity', 'globalGameData', 'left', 'quarterTextStyle', '#mm-menu-cont', 'pointsContainer', '//connect.facebook.net/', 'log', 'Favorite\x20Hats', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-message\x22\x20style=\x22background:\x20', 'true', '#profile-experience-val', 'https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54', 'setItem', ',\x20Kill:\x20', 'addAttribute', '[By\x20YıLdo\x20OWNER]', 'server-region', '#wear-description-text', '0000', '#333333', 'player', '/images/cors-proxy.phpimg=cursors/19.png', 'onclose', 'TeamWFT', 'preroll', 'c_v', '#FFD700', 'URL', 'handleNicknameChange', '#leaders-button-kills', '#headshot_name_position', '#final-replay', '9999', 'CLOSED', '420px', 'transform', ';\x20uniform\x20sampler2D\x20', 'data-imageSrc', '/wormy', '/pub/wuid/', 'isSignedIn', 'createElement', 'killMsg', '/images/cors-proxy.phpimg=cursors/1.png', 'sfxEnabled', 'precision\x20mediump\x20float;\x20attribute\x20vec2\x20', '/get_store.phpitem=bkgnd0.png', 'getImageData', 'load', 'Stardust', '\x22wear\x22:', 'teamwft', 'custom', 'img_1', 'id_customer', '/get_store.phpitem=open_w.png', 'Error\x20loading\x20banned\x20words:', '#sort-toggle', 'radian', 'window', 'wft-modal', 'AIP_REMOVE', 'https://wormate.io', 'uri', 'lastBackground', '#wear-item-price', '/deleteAccount', 'globalHatTextureCache', '<h3>', '/images/cors-proxy.phpimg=cursors/21.png', '959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com', '#adbl-2', 'guest', 'match', '/images/cors-proxy.phpimg=cursors/12.png', '#mm-player-exp-val', 'btnFullScreen', 'get_group.phpimg=Group_customer.png', 'blanco', '#profile-view', ';\x20void\x20main()\x20{\x20gl_FragColor\x20=\x20texture2D(', 'cmd', '<button\x20id=\x22btn_copy\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#fff;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x22\x20onclick=\x22navigator.clipboard.writeText(\x27', 'getContext', 'closeSettingsModal', 'highScore', 'rotation', 'max', 'pwr_flex', 'view', 'call', '/images/cors-proxy.phpimg=cursors/20.png', 'sectorSystemSettings', 'Cambodia', '/images/bg-obstacle.png', '-</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22name\x22>', '(^|\x5cs)', '000000', '</span><span><img\x20src=\x22', 'miniclip', 'Pizza\x20Slice\x20Cursor\x20', 'propertyList', ';\x20gl_Position=vec4((', 'findRenderContainer', 'function', '#game-canvas', 'has', 'crossorigin', 'updateDisplays', 'coins_7000', 'Game\x20data\x20not\x20available', 'index.game.result.your', 'fpsDisplay', 'gameMode', 'c_white', '#markup-footer', 'servers-eeuu', 'BLEND_MODES', 'Desert', 'gray', 'price', 'getRadius', 'WRM_wormate-io_300x250', 'width', 'done', '.cursor-container', 'wftit', 'WFT\x201', '/get_store.phpitem=z_o.png', 'translationMatrix', 'username', '#sector_bg_color', '.error,\x20.alert,\x20.modal,\x20.popup,\x20.notification', '#skins-view', 'total', 'servers-japon', '#default-cursor-btn', 'lineColor', 'background-color', '/images/server-flags/tur.png', '/get_store.phpitem=bg_sky__6.png', '_pulseStarted', 'querySelectorAll', ';\x20void\x20main(){', 'index.game.social.shareResult.caption', '#food_shadow_value', '<style\x20id=\x22css-ddslick\x22\x20type=\x22text/css\x22>.dd-select{\x20border-radius:2px;\x20border:solid\x201px\x20#ccc;\x20position:relative;\x20cursor:pointer;}.dd-desc\x20{\x20color:#aaa;\x20display:block;\x20overflow:\x20hidden;\x20font-weight:normal;\x20line-height:\x201.4em;\x20}.dd-selected{\x20overflow:hidden;\x20display:block;\x20padding:2px;\x20font-weight:bold;}.dd-pointer{\x20width:0;\x20height:0;\x20position:absolute;\x20right:10px;\x20top:50%;\x20margin-top:-3px;}.dd-pointer-down{\x20border:solid\x205px\x20transparent;\x20border-top:solid\x205px\x20#000;\x20}.dd-pointer-up{border:solid\x205px\x20transparent\x20!important;\x20border-bottom:solid\x205px\x20#000\x20!important;\x20margin-top:-8px;}.dd-options{\x20border:solid\x201px\x20#ccc;\x20border-top:none;\x20list-style:none;\x20box-shadow:0px\x201px\x205px\x20#ddd;\x20display:none;\x20position:absolute;\x20z-index:2000;\x20margin:0;\x20padding:0;background:#fff;\x20overflow:auto;}.dd-option{\x20padding:2px;\x20display:block;\x20border-bottom:solid\x201px\x20#ddd;\x20overflow:hidden;\x20text-decoration:none;\x20color:#333;\x20cursor:pointer;-webkit-transition:\x20all\x200.25s\x20ease-in-out;\x20-moz-transition:\x20all\x200.25s\x20ease-in-out;-o-transition:\x20all\x200.25s\x20ease-in-out;-ms-transition:\x20all\x200.25s\x20ease-in-out;\x20}\x20ul.dd-options\x20{height:\x20130px;}\x20.dd-options\x20>\x20li:last-child\x20>\x20.dd-option{\x20border-bottom:none;}.dd-option:hover{\x20background:#f3f3f3;\x20color:#000;}.dd-selected-description-truncated\x20{\x20text-overflow:\x20ellipsis;\x20white-space:nowrap;\x20}.dd-option-selected\x20{\x20background:#f6f6f6;\x20}.dd-option-image,\x20.dd-selected-image\x20{\x20vertical-align:middle;\x20float:left;\x20margin-right:5px;\x20max-width:64px;}.dd-image-right\x20{\x20float:right;\x20margin-right:15px;\x20margin-left:5px;}.dd-container{display:\x20inline-block;\x20position:relative;}​\x20.dd-selected-text\x20{\x20font-weight:bold}​</style>', 'hatCyclingInitialized', 'wftsle', 'target', 'img_o_3', '/get_store.phpitem=mof_1.png', 'replace', 'setSelectionRange', '#adbl-continue', 'c_4', 'coins_50000', '.flag', '.dd-option-description', 'clearTexts', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:center;\x20padding:20px;\x20color:#aaa;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Loading\x20servers...\x20Please\x20wait.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20', '/get_store.phpitem=bg_sky__2.png', 'اخوك', 'toString', 'mousedown', '<button\x20id=\x22resetScript\x22\x20style=\x22width:\x20120px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#2196F3;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x20margin-left:\x2010px;\x22\x20onclick=\x22resetScript();\x22>Version\x20🔁</button>', 'http', '30%', '</div><div\x20class=\x22toaster-levelup-text\x22>', 'websockets', '/images/cors-proxy.phpimg=flg/jp.png', 'count', '\x22\x20height=\x2240\x22\x20/>', 'text', '#error-game-connection-view', '#f44336', 'JDHnkHtYwyXyVgG9', 'loading', '#profile-experience-bar', 'writeText', 'black', 'EYES', 'pDc', 'def_mouth', 'sel_top', 'main', '<button\x20id=\x27open-favorites-btn\x27\x20class=\x27favorites-button\x27>عرض\x20السكنات\x20المفضلة</button>', 'Australia', 'rgba(0,\x200,\x200,\x200.7)', 'arc', 'ZDI5eWJYVnc=', 'applySettings', '#store-view-next', 'putImageData', 'enableJSClass', 'from', '#wear-mouths-button', '#profile-stat-totalTimeSpent', 'charCodeAt', 'documentElement', '6px', 'bg_sky__6.png', 'hatButtonContainer', 'Arial', 'index.game.toaster.consent.link', '#final-board', '#e74a94', 'coords', 'abs', 'byKillsAndHeadShots', '#leaders-view', '_hasSetupKeyboardControls', 'val', '&nickname=', 'message', 'restored', 'fromCharCode', '.sidebar-item', '.performance-monitor-container', '#mm-skin-canv', '#popup-withdraw-consent', 'div_sm', '2px\x202px\x204px\x20rgba(0,\x200,\x200,\x200.7)', '#ffcc00', 'sortableChildren', 'bg_sky_10.png', 'textAlign', '#joystick_size_value', 'symbol', 'playerDisconnect', 'eyesVariantArray', 'خطأ\x20في\x20تحديث\x20عرض\x20اسم\x20السيرفر:', '#store-buy-coins_16000', 'zoom_speed', '#markup-header', 'off', 'اختك', '#mm-coins-val', 'Error\x20saving\x20sector\x20system\x20settings:', 'Germany', 'programmer', 'adplayer', '__proto__', '.switch,\x20.slider-control,\x20.section-title', ',\x201.0)).xy,\x200.0,\x201.0);\x20vec4\x20ScreenParams\x20=\x20', '#joystick_pxy_value', 'FoodShadow', 'Shader', 'https://wormx.store/video/hs_2.mp3', 'index.game.antiadblocker.continue', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '/images/cors-proxy.phpimg=cursors/9.png', 'colorDict', 'TikTok\x20Cursor', '\x22\x20class=\x22toaster\x20toaster-coins\x22><img\x20class=\x22toaster-coins-img\x22\x20alt=\x22Wormate\x20Coin\x22\x20src=\x22/images/coin_320.png\x22\x20/><div\x20class=\x22toaster-coins-val\x22>', 'tint', 'setTime', 'alpha', 'startPreRoll', 'not', 'fadeIn', 'Beach\x20Umbrella\x20Cursor', 'avatarUrl', '.settings-sidebar,\x20.settings-layout,\x20.settings-content', '\x22></div>', 'textContent', '#mm-loading-progress-text', '#mm-action-guest', 'value2_hs', 'value', '#wear-view-prev', 'none', 'iterator', 'Error\x20loading\x20laser\x20options:', 'index.game.popup.menu.consent.tab', 'playerUpdate', ';\x20varying\x20vec2\x20', '/get_store.phpitem=mo_4.png', 'sqrt', 'return\x20', '#sector_line_opacity_value', 'div_top', '#profile-avatar', 'send', '\x22\x20/>', 'Electrical\x20Plug\x20Cursor', 'Yellow\x20Cheese\x20Cursor', 'resolution', '#mm-player-username', '15px\x2020px', '#spin_fast_value', '_pulseFunctionInstalled', 'dropShadowColor', '[data-index]', 'background', 'nome', 'get', 'mm-params-nickname', '<div\x20class=\x22dd-select\x22><input\x20class=\x22dd-selected-value\x22\x20id=\x22backgroundArena-value\x22\x20type=\x22hidden\x22\x20/><a\x20class=\x22dd-selected\x22></a><span\x20class=\x22dd-pointer\x20dd-pointer-down\x22></span></div>', '#port_name', 'label_hs', ';\x20uniform\x20vec2\x20', 'onopen', 'WFT\x202', 'ooo', 'كلب', '\x22\x20style=\x22cursor:\x20pointer;\x20border:\x202px\x20solid\x20', '#store-go-wear-button', 'img_i_3', 'I18N_MESSAGES', '#adbl-4', 'selectedHats', 'shift', 'preventDefault', 'Float32Array', 'client_id', '<input\x20type=\x22hidden\x22\x20id=\x22port_name_s\x22\x20value=\x22\x22>', 'ctrl', 'value2_kill', '#game-settings-tab', 'hatToggleButton', 'select', '/images/cors-proxy.phpimg=flg/gb.png', 'pk5', '#delete-account-view', '#loading-progress-text', 'portion', '❌\x20خطأ\x20في\x20تعديل\x20دالة\x20عرض\x20اسم\x20السيرفر:', '<style>#open-favorites-btn\x20{\x20position:\x20absolute;\x20top:\x2010px;\x20right:\x2010px;\x20background:\x20#4CAF50;\x20color:\x20white;\x20border:\x20none;\x20padding:\x205px\x2010px;\x20border-radius:\x205px;\x20cursor:\x20pointer;\x20z-index:\x201000;\x20}#open-favorites-btn:hover\x20{\x20background:\x20#45a049;\x20}</style>', '#mm-store', 'isIPInEEA', '#333', '#mm-player-exp-bar', 'sort', 'portion_size', 'new', 'kill', 's_n', 'teamDict', 'laserOptions', 'textDict', 'imagesrc', '/images/def-look.png', ':selected', 'https://gateway.wormate.io', 'keyCode', '#store-locked-bar', 'a2_', '#f8d968', '#mm-loading-progress-bar', '</div><div\x20class=\x22toaster-levelup-close\x22>', 'Player_', '❌\x20WebSocket\x20bağlantısı\x20kesildi.\x20Tekrar\x20bağlanılacak...', 'hidden', 'search', '.server-score', '18px\x20Arial', '\x0a<div\x20class=\x22title-wormate-server\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20W\x20O\x20R\x20M\x20A\x20T\x20E\x20F\x20R\x20İ\x20E\x20N\x20D\x20S\x20T\x20U\x20R\x20K\x20E\x20Y\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22description-text-hiep\x22>\x0a\x20\x0a\x20\x20\x20\x20<div\x20style=\x22position:sticky;\x20top:0;\x20z-index:100;\x20background:#242424;\x22>\x0a\x20\x20\x20\x20<BR>\x0a\x20\x20\x20\x20<ul\x20style=\x22margin-top:5px\x22\x20class=\x22ui-tabs-nav\x22>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive0\x20ui-tab-active\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20br\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/server-flags/tur.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive1\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20mx\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/mx.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive2\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20us\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/us.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive3\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20ca\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/ca.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive4\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20de\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/de.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive5\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20fr\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/fr.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive6\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20sg\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/sg.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive7\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20jp\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/jp.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive8\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20au\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/au.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20<li\x20class=\x22ui-tabs-tab\x20ui-tab\x20ui-tab-inactive9\x22\x20style=\x22margin:-5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a><span\x20class=\x22flag\x20gb\x22\x20value=\x22\x27\x20+\x20gameSettings.s_l\x20+\x20\x27/images/cors-proxy.phpimg=flg/gb.png\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<!--\x20زر\x20التبديل\x20أسفل\x20الأعلام\x20مباشرة\x20-->\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x202px\x200;\x20padding:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22sort-toggle\x22\x20style=\x22font-size:\x2010px;\x20padding:\x201px\x206px;\x20background-color:\x20#333;\x20color:\x20#ddd;\x20border:\x201px\x20solid\x20#666;\x20border-radius:\x203px;\x20cursor:\x20pointer;\x20outline:\x20none;\x22>Timmap\x20Servers</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22server-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-name\x22>SERVER</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-region\x22>REGION</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-status\x22>STATUS</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22header-score\x22>SCORE</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22gachngang\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<!--\x20إضافة\x20صورة\x20الخلفية\x20هنا\x20قبل\x20حاوية\x20السيرفرات\x20-->\x0a\x20\x20\x20\x20<div\x20class=\x22background-image-container\x22>\x0a\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\x22\x20class=\x22background-image\x22>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<div\x20class=\x22servers-container\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-peru\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-mexico\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-eeuu\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-canada\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-germania\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-francia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-singapur\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-japon\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-australia\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22servers-granbretana\x22\x20style=\x22display:none\x22></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a\x20\x20', '#FFFFFF', 'VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09', '#fff', 'backgroundAlpha', '/get_store.phpitem=bg_sky_9.png', 'arraybuffer', 'index.game.result.title', 'Skin\x20not\x20found', 'Mushroom\x20Cursor', '#FFF', 'img_2', '781285ZxKkjL', 'game-view', '/get_store.phpitem=bg_sky_8.png', 'myGameSettings', 'file', '/images/cors-proxy.phpimg=cursors/23.png', '#kill_name_position', '.servers-peru,\x20.servers-mexico,\x20.servers-eeuu,\x20.servers-canada,\x20.servers-germania,\x20.servers-francia,\x20.servers-singapur,\x20.servers-japon,\x20.servers-australia,\x20.servers-granbretana', '_config', 'map', '/get_store.phpitem=bg_sky_12.png', 'طيبة', 's_l', 'sectorSystemActive', 'u6_', 'mouthVariantArray', '_init', 'PortionAura', '#btn_clear_file', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22score\x22>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ui-tabs-nav\x20.ui-tab:hover,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ui-tabs-nav\x20.ui-tab.ui-tab-active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.ui-tabs-nav\x20.ui-tab\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20white\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'antiadblocker', 'endFill', '0\x200\x200\x205px', 'FoodSize', 'https://apis.google.com/js/platform.js', '.dd-selected-value', '#chat-input', '&gh=', 'playerY', '85604UvXxtQ', 'substring', 'month', 'cloneNode', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'PerformanceMonitor', 'reduce', 'headshotMsg', 'pk4', 'abilityUnknown', '\x22/></span><span>', '#port_name_s', 'skinData', 'src', 'wormate.io', 'beginFill', 'defer', '1\x20/\x20span\x203', 'empty', '_frame', '</span></a>', ';path=/', 'Texture', 'country', 'No\x20Name\x20Player', 'img_p_3', 'precision\x20highp\x20float;\x20varying\x20vec2\x20', 'isCpuVisible', 'getCurrentPosition', 'SKIN', 'showLines', '#2196F3', '★\x20Add', 'div_w1', 'options', 'PREROLL_ELEM', '#portion_aura_value', 'toFixed', 'skin', ';\x20attribute\x20vec2\x20', 'glassesId', 'div_save', 'exitFullscreen', 'data-index', 'cursor', 'headshotMsgType', 'isFpsVisible', '<div>', 'revision', 'catch', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'unshift', 'Red\x20Pepper\x20Cursor', 'totalPlayTimeSec', '\x20desconectado.', '#wear-view', 'streamer', '#loading-view', 'anApp', 'DataView', 'sin', 'random', 'text/css', 'ccc', 'getInt32', 'tooltip', 'WebSocket\x20bağlı\x20değil.', 'performance', 'fixed', '&skinId=', '☰\x20Favorites', '#d4db19', 'killNamePos', '#settings-view', 'favorites-dialog', 'offsetHeight', 'nowrap', 'currentFavSkinIndex', 'Name\x20Error', 'c_3', 'cos', '..1\x20..', 'loaded', 'headshotCustomText', '.favorites-content', ';\x20vec2\x20uv\x20=\x20', '#mm-params-game-mode', 'pk3', '/get_store.phpitem=open_q.png', 'center', 'currentHatIndex', 'removeHatButtons', '\x20\x20\x20\x20<button\x20id=\x22op_wft\x22\x20class=\x22op_wft\x22>', 'server_url', 'portion_aura', 'util.time.hours', '.ui-tabs-nav\x20.ui-tab', 'sel_country', 'html', '<div\x20id=\x27modal_backdrop\x27></div>', 'img_o_4', 'portionDict', 'forEach', 'toggle', 'd_3', 'div_background', '</div><div\x20class=\x22toaster-coins-close\x22>', 'aliases', '#store-buy-button', 'locale', 'hat-button-container', 'identifier', 'wftsw', 'charAt', 'toggleMode', 'original', 'appendChild', 'hatDict', 'add', '#laser_opacity_slider', '.selectSala[value=\x22', '.profile-user', 'year', '0\x205px', 'antialias', 'https://wormx.store/2025/check/index.php', 'dd-option-selected', 'hasClickHandler', 'account_type', 'white', 'realServerName', 'saveGame', '..3\x20..', '.dd-selected', '#joystick_pxy', 'img_i_2', '2536hgkuPN', 'relativePath', '#final-continue', 'error', 'console', 'score', '#monster_kill_selector', 'positionMode', 'binaryType', 'm_2', '#fileSkin', 'includes', 'kills', 'clientY', '#highscore-table', 'facebook-jssdk', '#withdraw-consent-view', '_cpuMonitoringInterval', 'servers-germania', '#css-ddslick', 'pk6', 'enableClasses', '#profile-level', 'headShots', '\x22\x20class=\x22toaster\x20toaster-consent-accepted\x22><img\x20class=\x22toaster-consent-accepted-logo\x22\x20src=\x22', '/images/cors-proxy.phpimg=cursors/8.png', 'https://lh3.googleusercontent.com', '#saveGame', 'dynamic', 'altKey', 'https://wormate.io/images/og-share-img-new.jpg', 'save', 'measureCpuUsage', '<input\x20type=\x22button\x22\x20value=\x22', 'Renderer', 'listVariant', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin:\x2010px\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22id_customer\x22\x20style=\x22display:\x20block;\x20margin-bottom:\x205px;\x20font-weight:\x20bold;\x20color:\x20#ddd;\x20text-align:\x20center;\x22>User\x20ID</label>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20margin:\x200\x20auto;\x20justify-content:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20value=\x22', 'type', '#popup-menu-coins-val', '-moz-transform', '.close-favorites', 'clipboard', 'isConsentGiven', 'Restoring\x20state\x20from\x20UI\x20initialization', 'svg', 'showFavoritesDialog', 'fbAsyncInit', '.settings-sidebar', '#headshot_custom_text', '#adbl-continue\x20span', '#mm-player-level', '50%', '#manage-favorites-skin', 'href', '<img>', 'scale', 'deltaY', '#sector_bg_opacity_value', 'div_sound', ':</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>', ';\x20border-radius:\x208px;\x20overflow:\x20hidden;\x20text-align:\x20center;\x20background-color:\x20#232339;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22', 'backgroundColor', 'apply', 'texture', '.dd-select', '#joystick_size', 'activeFlex', 'column', 'display', 'zero', 'Hexvoid', 'clickOffToClose', 'domComplete', 'Red\x20Lipstick\x20Cursor', 'Zoom\x20changing\x20from', '#store-buy-coins_3250', '/images/cors-proxy.phpimg=flg/sg.png', 'lastRespawnTime', 'expOnLevel', '0lt2', 'nonbuyableCause', '#contact-support', '/images/bg-pattern-pow2-TEAM2.png', '</table>', '3px', '#sector_line_color', 'There\x20was\x20a\x20problem\x20connecting!', '_end', 'util.time.days', 'data-hat-id', 'FoodTransparent', '#wear-glasses-button', 'custom_skin', 'img_o_2', 'isFinite', 'split', 'SRV\x20UP', '#game-cont,\x20#game-canvas,\x20body', 'loadSettings', 'initDrawing', 'bold', 'selectedServerInfo', '\x22\x20style=\x22max-width:\x20200px;\x20width:\x20200px\x20!important;\x20height:\x2022px\x20!important;\x20border-radius:\x206px;\x20font-size:\x2014px;\x20text-align:\x20center;\x20background-color:\x20#fff;\x20color:\x20#0a6928;\x20font-weight:\x20630;\x20margin-right:\x2010px;\x22\x20type=\x22text\x22\x20id=\x22id_customer\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_copy\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#fff;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x22\x20onclick=\x22navigator.clipboard.writeText(\x27', 'White\x20Mouse\x20Pointer', 'WHITE', '#joystick_checked', '🎯\x20HS\x20Güncelleme:\x20', '[id^=\x22div_\x22]', 'link', 'removeClass', 'scroll', '</a></div><div\x20class=\x22toaster-consent-close\x22>', '/images/cors-proxy.phpimg=cursors/14.png', 'consent_state_2', '#food_size_slider', 'hover', 'wfti', 'splice', 'no-js(\x5cs|$)', '0lt1', 'showPlayerNames', '.background-grid', ',\x20Kill\x20', '#store-go-skins-button', 'mo2', 'WormWorld\x20Servers', 'mousemove', 'Current:\x20', 'soundVolume', 'stopPropagation', 'index.game.toaster.levelup', 'visible', '#5dade6', '#modal_wft_body', 'fuck', 'cpuUsage', '#myTooltip', 'login', '#store-groups', '#favorites-dialog,\x20#favorites-overlay', '_pulseInterval', '#store-buy-coins_50000', '#laser_color_picker', '#mm-bottom-buttons', 'enabled', '#f9cc0b', '/images/cors-proxy.phpimg=cursors/17.png', 'Watermelon\x20Cursor', '/pub/leaders', 'clientX', '/js/nipplejs.min.js', 'keys', 'teamColor', 'disableFlex', 's_h', 'Stopping\x20CPU\x20monitoring\x20completely', 'c_5', 'headshotNamePos', '#mm-advice-cont', '.description-text', 'input', 'WellDone\x20!!', '<ul\x20class=\x22dd-options\x22></ul>', 'pop', 'Server\x20', 'id_user', '_tick', '/static/assets/', 'skinArrayDict', '#wear-locked-bar-text', '<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22rank\x22>', 'value1_kill', 'fullscreen', 'getElementById', 'hatUnknown', 'close', 'index.game.popup.menu.leaders.tab', 'xfbml', 'TextStyle', 'https://wormate.io/images/confetti-valday2025.png', 'getItem', '267WvpmOJ', 'skin-info-text', '.toaster-consent-close', '#kill_custom_text', '12px', 'texts', 'children', 'projectionMatrix', 'FPS:\x20', 'pk2', '<table>', '-o-transform', 'orig', '#store-view', 'ui-tab-active', '<br/>', '#eating_speed_toggle,\x20#performance-monitor-toggle,\x20#wftspeed,\x20#saveGame,\x20#pulse_effects_enabled', '4px', '.background-item', 'index.game.popup.menu.delete.tab', 'spin_fast', 'lastTime', 'API\x20error:', '.favorites-grid', 'div', 'data-region-name', 'servers', '*vec3(', 'bg_sky__1.png', 'class', '.server-number', 'hskill', 'v_z', '#div_server,\x20#div_save,\x20#div_sound,\x20#div_speed,\x20#div_zigzag,\x20#div_w1,\x20#div_top,\x20#div_killmsg,\x20#div_sm,\x20#div_pulse_effects,\x20#div_messages,\x20#div_background,\x20#div_game_enhancements,\x20#config_mobile,\x20#div_Laser,\x20#div_crsw', 'trim', 'tab', 'Container', '#stretch-box', '#mm-action-buttons', 'data-server-number', '#op_wft', '#sound-laser-settings-tab,\x20#sound_effect_selector,\x20#monster_kill_selector,\x20#volume_slider', 'joystick_color', '_complete', 'audio', 'click', 'item', 'savedData', 'امك', 'Jugador\x20', '<input\x20type=\x22text\x22\x20value=\x22', 'img_4', '/get_store.phpitem=Galaxy-Star.png', '<div\x20id=\x27', 'mo1', 'selected', 'onreadystatechange', 'glow', '#mm-skin-next', 'checked', 'img_p_1', '/buyProperty?id=', 'fail', '6FbGzuQ', 'Api_listServer', 'imageSrc', '7126620iRyoUL', 'createObjectURL', '6469855cdcOrx', '#sound_effect_selector', 'showFpsCpu', 'mouseleave', '\x22\x20alt=\x22User\x20Icon\x22\x20style=\x22width:\x2020px;\x20height:\x2020px;\x20margin-right:\x205px;\x20border-radius:\x2050%;\x22>', 'expires=', '</div></div>', 'Octopus\x20Glove\x20Cursor', 'eyesId', 'currentTime', 'readyState', '\x20no\x20tiene\x20teamCode.\x20No\x20se\x20enviará\x20la\x20actualización\x20de\x20posición.', '.store-view-cont', 'startAllMonitoring', 'addSelectedHatButton', 'right', '#252538', 'getTime', '0\x204px\x208px\x20rgba(0,\x200,\x200,\x200.5)', 'active', '#main-menu-view', '#port_id', '\x20ha\x20enviado\x20un\x20mensaje:\x20', '.close-button', 'inline-block', 'customer', 'Spray\x20Can\x20Cursor', 'u4_', '99999', '#mm-action-play', 'pause', 'sector_system_toggle', 'create', '.player-tooltip', 'wear', '#mm-skin-prev', 'hatHelp', 'نظيف', 'performance-monitor-container', 'game-cont', '20px\x200', '_lastPulseTime', 'utils', '#laser_opacity_value', 'Galaxy\x20Star', 'open', 'performance-monitor-style', 'Timmap\x20Servers', 'data-region-flag', 'config', 'level', 'addTest', '<div\x20class=\x27favorites-popup\x27\x20style=\x27display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px\x20solid\x20#333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0\x204px\x208px\x20rgba(0,0,0,0.5);color:white;\x27><div\x20style=\x27padding:15px\x2020px;background-color:#252538;border-bottom:1px\x20solid\x20#333345;position:relative;display:flex;justify-content:space-between;align-items:center;\x27><button\x20class=\x27close-favorites\x27\x20style=\x27position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0\x205px;line-height:1;font-weight:bold;\x27>&times;</button><h3\x20style=\x27margin:0\x200\x200\x205px;font-size:18px;color:white;padding-left:15px;\x27>Favorite</h3><button\x20class=\x27clear-all-favorites\x27\x20style=\x27padding:4px\x208px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;\x27>Clear\x20All</button></div><div\x20class=\x27favorites-content\x27\x20style=\x27padding:15px\x2020px;overflow-y:auto;max-height:330px;\x27><div\x20class=\x27favorites-grid\x27\x20style=\x27display:grid;grid-template-columns:1fr\x201fr;gap:15px;padding:0;margin:0;\x27></div></div></div>', '110px', 'lineWidth', '#please-wait-view', 'removeItem', 'csg', 'El\x20jugador\x20', 'no-', '#modal_wft', '\x22\x20style=\x22width:\x20100%;\x20height:\x2065px;\x20object-fit:\x20cover;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding:\x205px;\x20font-size:\x2010px;\x20color:\x20#ffffff;\x22>', 'clear', 'VkdWaGJWVlE=', 'OPEN', 'shown', 'fn_o', 'ze-snippet', '2px', 'toUTCString', 'favorites-content', 'auth2', 'textShadow', 'createElementNS', 'headshot-message', 'css', 'application/json', 'Crystalblue', 'height', 'Flame\x20Cursor', '<span></span>', 'ccg', '#social-buttons', '..10\x20..', 'getElementsByTagName', 'Error\x20loading\x20wft\x20settings:', 'remove', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.performance-monitor-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20Arial,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.monitor-element\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,\x200,\x200,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x201px\x201px\x202px\x20rgba(0,0,0,0.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 's11', '#relojHelp', '✅\x20WebSocket\x20bağlı', 'fr_FR', 'hsKillUpdate', 'TextureCache', 'drawSectors', 'userAgent', 'index.game.popup.menu.store.tab', 'index.game.toaster.continue', '#fdbf5f', 'smoothCamera', 'red', 'currentMode', 'name', 'img_p_2', 'custom_wear', 'slideUp', 'sectorSystem', '\x20copied!\x27));\x22>Copy</button>', 'reset', '1eaom01c3pxu9wd3', '16928520RNBhqB', 'angle', 'velocity_ability', 'onSelected', '#popup-menu-coins-box', 'anchor', '//apis.google.com/js/platform.js', '#f00', 'pressed', 'bg_sky_11.png', 'u3_', '#e03e42', '/images/bg-pattern-pow2-ARENA.png', 'Clear\x20All', 'prerollCount', 's_headshot', 'getAuthResponse', '</span></div>', 'lengthComputable', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#settings-show-names-switch', 'savedState', 'geolocation', 'round', '#div_customer', 'wftPulseEnabled', 'Dagger\x20Cursor', '#popup-menu-label', 'webkitRequestFullScreen', '</a></li>', 'lastRadiusTime', 'extension', 'containerImgS', 'LOADING_TEXT', 'table', 'rel', '#profile-stat-bestSurvivalTime', 'webWidget:\x20on', 'F_bg', '/get_store.phpitem=open_z.png', 'drawImage', 'SaveGameXT', 'getInt8', 'removeChildren', 'gdprConsent', 'showSelectedHTML', 'Graphics', '#mm-settings', '#food_shadow_slider', 'sha256', '&type=', 'index.game.main.menu.unlockSkins.share', 'title', 'es_ES', '&hatId=', 'abilityDict', 'updateToggleButton', '#kill_show_name', 'https://wormx.store/store/check2.php', 's_wft_', 'drawQuarters', '.setting-item', '/start?gameMode=', 'isArray', 'floor', 'c_2', 'currentDisplayMode', '/get_store.phpitem=bg_sky__5.png', 'destroy', 'ccg_1', ';\x20const\x20float\x20ROT_ANGLE_DEG\x20=\x207.5;\x20const\x20float\x20ROT_COS\x20=\x20cos(ROT_ANGLE_DEG/180.0*3.14159265358979);\x20const\x20float\x20ROT_SIN\x20=\x20sin(ROT_ANGLE_DEG/180.0*3.14159265358979);\x20void\x20main()\x20{\x20', '.background-item[data-bg=\x22', '#config_mobile', 'extend', 'parent', 'pointer-events', 'container', 'Magic\x20Wand\x20with\x20Golden\x20Star\x20Cursor', 'appendTo', '#wear-hats-button', 'flag', 'parse', 'selectedData', 'mapText', '#wear-eyes-button', 'index.game.result.continue', '🟡\x20sendHSKillUpdate\x20çağrıldı', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>', '{1}', '#store-view-prev', 'find', 'Wormx\x20Error\x203', '#div_Laser,\x20#Laserup,\x20#laser_color_picker,\x20#laser_opacity_slider', 'dd-pointer-up', '#chat-history', '.selectSala', 'hat-toggle-button', '#profile-stat-kills', '#zoom_speed_slider', '#unl6wj4czdl84o9b', '/images/cors-proxy.phpimg=cursors/22.png', 'serviceWorker', 'index.game.social.shareResult.messNorm', 'move', '<div\x20id=\x22custom-tooltip\x22\x20style=\x22display:\x20none;\x20position:\x20absolute;\x20z-index:\x209999;\x20background:\x20rgba(0,0,0,0.9);\x20padding:\x205px\x2010px;\x20border-radius:\x204px;\x20font-size:\x2010px;\x20pointer-events:\x20none;\x20text-align:\x20center;\x22><div\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x22><span\x20style=\x22color:\x20#ffd700;\x20text-align:\x20right;\x22>TimMap\x20Servers\x20</span><span\x20style=\x22color:\x20white;\x20margin:\x200\x205px;\x22>⟷\x20</span><span\x20style=\x22color:\x20#ffd700;\x20text-align:\x20left;\x22>WormWorld\x20Servers</span></div></div>', 'signIn', 'default_icon.png', '#performance-monitor-toggle', '9998', 'fontWeight', 'index.game.popup.menu.wear.tab', 'offsetWidth', 'd_2', 'killCustomText', 'v1_', 'defaultSelectedIndex', 'wormworld', 'Mensaje\x20desconocido:', 'Your\x20account\x20has\x20been\x20locked.', 'index.game.antiadblocker.msg3', 'initialState', 'ajax', 'day', '.green-dot', 'regionDict', '87px', 'MOUTH', 'prime', 'position', 'Headshot', 'setupToggleButton'];
    _0x1948 = function() {
        return _0x5dc02e;
    }
    ;
    return _0x1948();
}
(function() {
    var _0x214384 = _0x4920b6
      , _0x3fe4c1 = (function() {
        var _0x382acd = !![];
        return function(_0x1377a0, _0x5e5ee7) {
            var _0x5576a4 = _0x382acd ? function() {
                if (_0x5e5ee7) {
                    var _0x175fc4 = _0x5e5ee7['apply'](_0x1377a0, arguments);
                    return _0x5e5ee7 = null,
                    _0x175fc4;
                }
            }
            : function() {}
            ;
            return _0x382acd = ![],
            _0x5576a4;
        }
        ;
    }())
      , _0xa4c71a = _0x3fe4c1(this, function() {
        var _0x21b303 = _0x31dd, _0x1333b8;
        try {
            var _0x228738 = Function(_0x21b303(0x7b3) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            _0x1333b8 = _0x228738();
        } catch (_0x469349) {
            _0x1333b8 = window;
        }
        var _0x4f53ab = _0x1333b8[_0x21b303(0x5ae)] = _0x1333b8['console'] || {}
          , _0xd87b0b = [_0x21b303(0x399), _0x21b303(0x1b8), 'info', _0x21b303(0x5ad), 'exception', _0x21b303(0x733), 'trace'];
        for (var _0x16e824 = 0x0; _0x16e824 < _0xd87b0b[_0x21b303(0x2a1)]; _0x16e824++) {
            var _0x5eabda = _0x3fe4c1['constructor'][_0x21b303(0x2a8)][_0x21b303(0x223)](_0x3fe4c1)
              , _0xcc1d30 = _0xd87b0b[_0x16e824]
              , _0x5bf678 = _0x4f53ab[_0xcc1d30] || _0x5eabda;
            _0x5eabda[_0x21b303(0x485)] = _0x3fe4c1[_0x21b303(0x223)](_0x3fe4c1),
            _0x5eabda['toString'] = _0x5bf678[_0x21b303(0x436)][_0x21b303(0x223)](_0x5bf678),
            _0x4f53ab[_0xcc1d30] = _0x5eabda;
        }
    });
    _0xa4c71a();
    var _0xa8b9d9 = {}
      , _0x4cd94d = {}
      , _0xbc3655 = {}
      , _0x148283 = {};
    _0xbc3655['a'] = function(_0x491987) {
        var _0x57b251 = _0x31dd
          , _0x5befa9 = new String()
          , _0x3bd393 = parseInt(_0x491987[_0x57b251(0x523)](0x0, 0x2), 0x10);
        for (var _0x14184d = 0x2; _0x14184d < _0x491987[_0x57b251(0x2a1)]; _0x14184d += 0x2) {
            var _0x5e27e2 = parseInt(_0x491987['substring'](_0x14184d, _0x14184d + 0x2), 0x10);
            _0x5befa9 += String[_0x57b251(0x46b)](_0x5e27e2 ^ (_0x3bd393 = 0xed1 + _0x3bd393 * 0x11a1 & 0xff));
        }
        ;return _0x5befa9;
    }
    ,
    _0xbc3655['b'] = function(_0x47aed8) {
        var _0x32e434 = _0x31dd;
        return Function(_0x32e434(0x4aa) + _0x47aed8 + ';\x20')();
    }
    ,
    _0xa8b9d9['c'] = _0xbc3655['b'](_0x214384(0x3ce)),
    _0xa8b9d9['d'] = _0xa8b9d9['c'][_0x214384(0x345)],
    _0xbc3655['e'] = function() {
        return _0xa8b9d9['c']['devicePixelRatio'] || 0x1;
    }
    ,
    _0xa8b9d9['c'][_0x214384(0x81b)]('load', function() {
        var _0x434858 = _0x214384;
        let _0x276741 = {
            'eie': null,
            'joystick': {
                'positionMode': 'L',
                'checked': !![],
                'size': 0x5a,
                'mode': _0x434858(0x5c6),
                'position': {
                    'left': _0x434858(0x6d8),
                    'bottom': _0x434858(0x6d8)
                },
                'color': _0x434858(0x707),
                'pxy': 0x6e
            },
            'on': ![],
            'vj': null,
            'uj': null,
            'm': null,
            'n': null
        };
        var _0x725516 = {
            'id_user': '',
            'nickname': _0x434858(0x272),
            'enemyNameHs': _0x434858(0x53a),
            'teamCode': '',
            'playerX': 0x0,
            'playerY': 0x0,
            'hs': 0x0,
            'kill': 0x0,
            'message': '',
            'teamColor': localStorage[_0x434858(0x65e)](_0x434858(0x642)) || _0x434858(0x260),
            'wssServer': ''
        };
        let _0x5f11b8 = 0x0;
        const _0x4c430a = 0x3e8;
        function _0x436a0d(_0x5c29c0) {
            var _0x423ff1 = _0x434858;
            const _0x1eeabd = Date[_0x423ff1(0x2ef)]();
            _0x1eeabd - _0x5f11b8 > _0x4c430a && (debugLog(_0x5c29c0),
            _0x5f11b8 = _0x1eeabd);
        }
        let _0x92aa90;
        const _0x5c6465 = {
            'players': new Map()
        };
        function _0x50b83a() {
            var _0x789630 = _0x434858;
            _0x92aa90 && _0x92aa90[_0x789630(0x6ad)] !== WebSocket[_0x789630(0x3b4)] && (debugLog('Eski\x20bağlantı\x20kapatılıyor...'),
            _0x92aa90[_0x789630(0x659)]()),
            _0x92aa90 = new WebSocket(_0x789630(0x7ed)),
            _0x92aa90[_0x789630(0x81b)](_0x789630(0x6d0), () => {
                var _0x2476d8 = _0x789630;
                _0x91383f = !![],
                debugLog(_0x2476d8(0x6fd));
            }
            ),
            _0x92aa90[_0x789630(0x81b)](_0x789630(0x659), () => {
                var _0x4d407d = _0x789630;
                _0x91383f = ![],
                debugLog(_0x4d407d(0x4f3)),
                _0x495f93();
            }
            ),
            _0x92aa90[_0x789630(0x81b)](_0x789630(0x469), async _0x26b1e9 => {
                var _0x2d521a = _0x789630;
                try {
                    const _0x468932 = _0x26b1e9[_0x2d521a(0x250)]instanceof Blob ? JSON[_0x2d521a(0x762)](await _0x26b1e9[_0x2d521a(0x250)]['text']()) : JSON[_0x2d521a(0x762)](_0x26b1e9['data']);
                    _0x468932['type'] === _0x2d521a(0x6ff) && (_0x5c6465[_0x2d521a(0x2dd)][_0x2d521a(0x25b)](_0x468932[_0x2d521a(0x64f)], {
                        'nickname': _0x468932[_0x2d521a(0x806)],
                        'hskill': _0x468932[_0x2d521a(0x67e)],
                        'teamColor': _0x468932['teamColor'] || 0xffffff
                    }),
                    updateTop8Hs()),
                    _0x1f57d1(_0x468932);
                } catch (_0x5d965a) {
                    console[_0x2d521a(0x5ad)](_0x2d521a(0x1d9), _0x5d965a);
                }
            }
            );
        }
        let _0x91383f = ![];
        const _0x9ec9f5 = 0x1388;
        function _0x495f93() {
            !_0x91383f && setTimeout( () => {
                _0x50b83a();
            }
            , _0x9ec9f5);
        }
        _0x50b83a(),
        window[_0x434858(0x81b)](_0x434858(0x79d), () => {
            var _0x173bcf = _0x434858;
            _0x92aa90 && _0x92aa90[_0x173bcf(0x6ad)] === WebSocket['OPEN'] && _0x92aa90[_0x173bcf(0x659)]();
        }
        );
        function _0x1f57d1(_0x80b6c) {
            var _0x392e43 = _0x434858;
            _0x80b6c[_0x392e43(0x64f)] === 'gg_116823912010482082044' && (createServerMessage(_0x392e43(0x3a2), _0x80b6c[_0x392e43(0x469)]),
            debugLog('Servidor\x20' + _0x80b6c['id_user'] + _0x392e43(0x6b9) + _0x80b6c[_0x392e43(0x469)]));
            if (_0x80b6c[_0x392e43(0x1e7)] !== _0x725516['wssServer'])
                return;
            switch (_0x80b6c[_0x392e43(0x5cf)]) {
            case _0x392e43(0x789):
                _0x360f5c(_0x80b6c[_0x392e43(0x2dd)]);
                break;
            case _0x392e43(0x4a6):
                _0x2253d2(_0x80b6c);
                break;
            case 'hsKillUpdate':
                _0x1c9e60(_0x80b6c);
                break;
            case _0x392e43(0x854):
                _0x903d50(_0x80b6c);
                break;
            case _0x392e43(0x478):
                _0x5cec90(_0x80b6c['id']);
                break;
            default:
                debugLog(_0x392e43(0x786), _0x80b6c);
            }
        }
        function _0x51b1d1() {
            var _0xf3170b = _0x434858;
            if (!_0x91383f) {
                debugLog(_0xf3170b(0x85a));
                return;
            }
            const _0x47ea0f = $(_0xf3170b(0x51f))[_0xf3170b(0x467)]()[_0xf3170b(0x681)]();
            if (_0x47ea0f === '')
                return;
            const _0x4d4e31 = _0x725516['nickname'][_0xf3170b(0x523)](0x0, 0x10)
              , _0x50f263 = getUserData(_0x725516[_0xf3170b(0x64f)])
              , _0x423ebd = {
                'type': 'chatMessage',
                'id_user': _0x725516[_0xf3170b(0x64f)],
                'nickname': _0x4d4e31,
                'message': _0x47ea0f,
                'wssServer': _0x725516[_0xf3170b(0x1e7)],
                'color': _0x50f263 ? _0x50f263['color'] : _0xf3170b(0x7d6),
                'image': _0x50f263 ? _0x50f263['image'] : _0xf3170b(0x77b)
            };
            _0x92aa90[_0xf3170b(0x4ae)](JSON[_0xf3170b(0x880)](_0x423ebd)),
            _0x19e8b3(_0x4d4e31, _0x47ea0f, _0x725516[_0xf3170b(0x64f)], _0x423ebd[_0xf3170b(0x25f)], _0x423ebd[_0xf3170b(0x296)], !![]),
            $(_0xf3170b(0x51f))[_0xf3170b(0x467)]('');
        }
        function _0x19e8b3(_0xd4fc12, _0x4159c1, _0x10bb65, _0x2e885f, _0xc30915, _0x3f94c8=![]) {
            var _0x3c1a25 = _0x434858;
            const _0x11cf66 = _0xc30915 ? '<img\x20src=\x22' + _0xc30915 + _0x3c1a25(0x6a7) : ''
              , _0x197356 = _0x3f94c8 ? _0x3c1a25(0x7fd) : _0x3c1a25(0x5a3)
              , _0x5b6bc5 = _0x3c1a25(0x39b) + (_0x2e885f || _0x3c1a25(0x7d6)) + _0x3c1a25(0x724) + _0x11cf66 + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20id=\x22' + _0x10bb65 + _0x3c1a25(0x886) + _0x197356 + '\x22>' + _0xd4fc12 + _0x3c1a25(0x5e5) + _0x4159c1 + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
            $(_0x3c1a25(0x76f))[_0x3c1a25(0x294)](_0x5b6bc5)[_0x3c1a25(0x822)]($(_0x3c1a25(0x76f))[0x0]['scrollHeight']);
        }
        function _0x360f5c(_0x5dbb52) {
            var _0x2d9965 = _0x434858;
            _0x5dbb52['forEach'](_0x44b847 => _0x5c6465[_0x2d9965(0x2dd)][_0x2d9965(0x25b)](_0x44b847[_0x2d9965(0x64f)], _0x44b847)),
            debugLog('Estado\x20inicial\x20recibido:', _0x5dbb52);
        }
        function _0x2253d2(_0x5d366d) {
            var _0x45064e = _0x434858;
            _0x5c6465['players'][_0x45064e(0x25b)](_0x5d366d[_0x45064e(0x64f)], {
                ..._0x5d366d
            }),
            updateTop8Hs(),
            _0x5d366d['teamCode'] === _0x725516[_0x45064e(0x36c)] && (createTeamUbication(_0x5d366d['teamCode'], _0x5d366d[_0x45064e(0x642)]),
            createTeamMessage(_0x5d366d['teamCode'], _0x5d366d[_0x45064e(0x806)], _0x5d366d[_0x45064e(0x469)]));
        }
        function _0x1c9e60(_0x5d02b3) {
            var _0x1ae6da = _0x434858;
            debugLog(_0x1ae6da(0x614) + _0x5d02b3[_0x1ae6da(0x806)]);
            const _0x52fe4f = _0x5c6465['players'][_0x1ae6da(0x4bb)](_0x5d02b3['id_user']);
            _0x52fe4f ? (_0x52fe4f[_0x1ae6da(0x67e)]['hs'] += _0x5d02b3[_0x1ae6da(0x67e)]['hs'],
            _0x52fe4f['hskill'][_0x1ae6da(0x4e3)] += _0x5d02b3[_0x1ae6da(0x67e)][_0x1ae6da(0x4e3)]) : _0x5c6465['players'][_0x1ae6da(0x25b)](_0x5d02b3[_0x1ae6da(0x64f)], {
                ..._0x5d02b3,
                'hskill': {
                    ..._0x5d02b3['hskill']
                },
                'position': {
                    'x': 0x0,
                    'y': 0x0
                }
            });
            const _0x171f2a = _0x5c6465['players']['get'](_0x5d02b3['id_user']);
            debugLog(_0x1ae6da(0x22a), _0x171f2a),
            updateTop8Hs();
        }
        function _0x903d50(_0xd4d75b) {
            var _0x409585 = _0x434858;
            _0x5c6465[_0x409585(0x2dd)][_0x409585(0x231)](_0xd4d75b['id_user']),
            debugLog(_0x409585(0x6dd) + _0xd4d75b['nickname'] + _0x409585(0x824)),
            updateTop8Hs(),
            clearTeamUbication();
        }
        function _0x5cec90(_0x2c5818) {
            var _0x369b1e = _0x434858;
            _0x5c6465['players'][_0x369b1e(0x231)](_0x2c5818),
            debugLog(_0x369b1e(0x690) + _0x2c5818 + _0x369b1e(0x558));
        }
        function _0x4f192c(_0x18e3c1, _0x273429={}) {
            var _0x471f11 = _0x434858;
            if (!_0x91383f) {
                debugLog(_0x471f11(0x564));
                return;
            }
            if (_0x18e3c1 === 'playerUpdate' && (!_0x725516[_0x471f11(0x36c)] || _0x725516[_0x471f11(0x36c)] === '')) {
                debugLog(_0x471f11(0x2f7));
                return;
            }
            const _0x2ba4dd = {
                'type': _0x18e3c1,
                'id_user': _0x725516[_0x471f11(0x64f)],
                'nickname': _0x725516[_0x471f11(0x806)],
                'enemyNameHs': _0x725516[_0x471f11(0x842)],
                'hskill': {
                    'hs': _0x725516['hs'],
                    'kill': _0x725516['kill']
                },
                'position': {
                    'x': _0x725516[_0x471f11(0x2c1)],
                    'y': _0x725516[_0x471f11(0x521)]
                },
                'message': _0x725516[_0x471f11(0x469)],
                'teamCode': _0x725516[_0x471f11(0x36c)],
                'teamColor': _0x725516[_0x471f11(0x642)],
                'wssServer': _0x725516[_0x471f11(0x1e7)],
                ..._0x273429
            };
            debugLog('📤\x20Veri\x20gönderiliyor:', _0x2ba4dd),
            _0x92aa90[_0x471f11(0x4ae)](JSON['stringify'](_0x2ba4dd));
        }
        let _0x3a65a2 = 0x0
          , _0x4b8b81 = [];
        const _0x1b592b = 0x64
          , _0x50cc65 = 0xa;
        function _0x3c9624() {
            var _0x208e49 = _0x434858;
            if (_0x4b8b81[_0x208e49(0x2a1)] > 0x0) {
                const _0x171c70 = _0x4b8b81[_0x208e49(0x61f)](0x0, _0x50cc65);
                _0x4f192c(_0x208e49(0x4a6), {
                    'batch': _0x171c70
                });
            }
        }
        setInterval( () => {
            _0x3c9624();
        }
        , _0x1b592b);
        function _0x1f3cdc(_0x4bcf93, _0x5eaf7f) {
            var _0x3c6a7b = _0x434858;
            const _0x56ba6d = Date[_0x3c6a7b(0x2ef)]();
            if (_0x56ba6d - _0x3a65a2 < 0x64)
                return;
            _0x3a65a2 = _0x56ba6d;
            if (!_0x725516['teamCode'] || _0x725516[_0x3c6a7b(0x36c)] === '') {
                debugLog(_0x3c6a7b(0x690) + _0x725516[_0x3c6a7b(0x64f)] + _0x3c6a7b(0x6ae));
                return;
            }
            _0x725516[_0x3c6a7b(0x2c1)] = _0x4bcf93,
            _0x725516['playerY'] = _0x5eaf7f,
            _0x4b8b81['push']({
                'x': _0x4bcf93,
                'y': _0x5eaf7f
            }),
            debugLog(_0x3c6a7b(0x690) + _0x725516[_0x3c6a7b(0x64f)] + _0x3c6a7b(0x2c5) + _0x4bcf93 + ',\x20' + _0x5eaf7f + ')');
        }
        function _0x1aa3ce(_0x360976, _0x2e434d) {
            var _0xbbbbcf = _0x434858;
            _0x4f192c('playerDeath', {
                'hskill': {
                    'hs': _0x360976,
                    'kill': _0x2e434d
                }
            }),
            debugLog(_0xbbbbcf(0x690) + _0x725516['id_user'] + '\x20ha\x20muerto.');
        }
        function _0x4840f9(_0x44fdc9, _0x3c2cd6) {
            var _0x586b94 = _0x434858;
            debugLog(_0x586b94(0x767)),
            _0x4f192c(_0x586b94(0x6ff), {
                'hskill': {
                    'hs': _0x44fdc9,
                    'kill': _0x3c2cd6
                }
            }),
            debugLog('🟢\x20Gönderildi\x20HS:\x20' + _0x44fdc9 + _0x586b94(0x3a0) + _0x3c2cd6),
            debugLog('Jugador\x20' + _0x725516[_0x586b94(0x64f)] + '\x20HS/Kill\x20actualizado:\x20HS\x20' + _0x44fdc9 + _0x586b94(0x624) + _0x3c2cd6);
        }
        var _0x5c7da4;
        let _0x389039 = {
            's_l': 'https://wormx.store',
            'fullscreen': null,
            'headshot': 0x0,
            's_headshot': 0x0,
            'mobile': ![],
            'mo': 0x1,
            'mo1': {
                'x': -0x1,
                'y': -0x1
            },
            'mo2': {
                'x': -0x1,
                'y': -0x1
            },
            's_kill': 0x0,
            'kill': 0x0,
            'died': 0x0,
            'saveGame': ![],
            'forceUseLocalImages': ![],
            'localStorageEnabled': !![],
            'pm': {},
            'joystick': _0x276741['joystick'],
            'j': null,
            'pk': 0x0,
            'pk0': '',
            'pk1': '',
            'pk2': '',
            'pk3': '',
            'pk4': '',
            'pk5': '',
            'pk6': '',
            'z': 0x1,
            'c_v': 0xde,
            'c_1': _0x434858(0x272),
            'c_2': _0x434858(0x3aa),
            'c_3': _0x434858(0x3c6),
            'c_4': _0x434858(0x530),
            'c_5': _0x434858(0x881),
            'd_1': 'VlZBPQ==',
            'd_2': _0x434858(0x6e2),
            'd_3': _0x434858(0x451),
            'd_4': _0x434858(0x86a),
            'd_5': _0x434858(0x4fa),
            'a': 0x0,
            'b': 0x0,
            'c': 0x0,
            'd': 0x0,
            'e': 0x0,
            'f': '',
            'g': 0x24,
            's_w': ![],
            's_n': '',
            'v_z': 0x0,
            'h': ![],
            'sn': !![],
            's': ![],
            'hz': ![],
            'fz': !![],
            'tt': ![],
            'vh': ![],
            'vp': ![],
            'iq': ![],
            'ctrl': ![],
            'r1': !![],
            'sc': 0x0,
            'wi': 0x0,
            'to': 0xa,
            'sm': 0x14,
            'pi': '',
            'pn': '',
            'se': {
                'a': [],
                'b': [],
                'c': [],
                'd': [],
                'e': [],
                'f': [],
                'g': [],
                'h': [],
                'i': [],
                'j': [],
                'k': []
            },
            'st': ![],
            'hh': 0x0,
            'sh': [],
            'ws': [],
            'we': [],
            'wm': [],
            'wg': [],
            'wh': [],
            'sg': [],
            'gg': null,
            'ig': -0x1,
            'so': 0x1,
            're': ![],
            'dg': null
        }
          , _0x44d959 = localStorage[_0x434858(0x65e)]('SaveGamewft');
        if (_0x44d959 && _0x44d959 !== 'null') {
            let _0x4722dd = JSON[_0x434858(0x762)](_0x44d959);
            for (let _0x2723c7 in _0x4722dd) {
                _0x389039[_0x2723c7] = _0x4722dd[_0x2723c7];
            }
        }
        ;!_0x389039[_0x434858(0x325)] && (_0x389039[_0x434858(0x325)] = [],
        localStorage[_0x434858(0x39f)]('SaveGamewft', JSON[_0x434858(0x880)](_0x389039)));
        _0x389039[_0x434858(0x56f)] === undefined && (_0x389039[_0x434858(0x56f)] = 0x0,
        localStorage[_0x434858(0x39f)]('SaveGamewft', JSON[_0x434858(0x880)](_0x389039)));
        !_0x389039[_0x434858(0x4ca)] && (_0x389039[_0x434858(0x4ca)] = [],
        localStorage['setItem'](_0x434858(0x852), JSON[_0x434858(0x880)](_0x389039)));
        _0x389039[_0x434858(0x57c)] === undefined && (_0x389039[_0x434858(0x57c)] = 0x0,
        localStorage[_0x434858(0x39f)](_0x434858(0x852), JSON['stringify'](_0x389039)));
        !window[_0x434858(0x3d6)] && (window['globalHatTextureCache'] = {});
        try {
            if (localStorage[_0x434858(0x73a)]) {
                const _0x1ea1ed = JSON[_0x434858(0x762)](localStorage[_0x434858(0x73a)]);
                for (const _0x4bab76 in _0x1ea1ed) {
                    wftObjects['hasOwnProperty'](_0x4bab76) && (wftObjects[_0x4bab76] = _0x1ea1ed[_0x4bab76]);
                }
            }
        } catch (_0x154fab) {
            console[_0x434858(0x5ad)]('Error\x20loading\x20settings:', _0x154fab);
        }
        ;function _0x130a0a() {
            var _0x330c21 = _0x434858;
            try {
                if (typeof localStorage === 'undefined')
                    return console[_0x330c21(0x5ad)](_0x330c21(0x76c)),
                    ![];
                var _0x364c97 = localStorage[_0x330c21(0x65e)](_0x330c21(0x61e))
                  , _0xf7df0b = localStorage[_0x330c21(0x65e)](_0x330c21(0x411));
                return _0x364c97 && _0xf7df0b ? (typeof _0x389039 !== _0x330c21(0x799) && (_0x389039[_0x330c21(0x67f)] = _0xf7df0b,
                _0x389039[_0x330c21(0x251)] = !![],
                localStorage['setItem']('SaveGamewft', JSON[_0x330c21(0x880)](_0x389039))),
                !![]) : (console['log'](_0x330c21(0x317)),
                ![]);
            } catch (_0x1631a0) {
                return console['error']('Wormx\x20Error\x201', _0x1631a0),
                ![];
            }
        }
        _0x130a0a();
        let _0x41e416 = function() {
            var _0x5b8fbb = _0x434858;
            let _0x187f4b = ![];
            _0x389039['mobile'] = ![];
            var _0x4addab = navigator[_0x5b8fbb(0x702)] || navigator[_0x5b8fbb(0x371)] || window[_0x5b8fbb(0x894)];
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i[_0x5b8fbb(0x1ae)](_0x4addab) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i[_0x5b8fbb(0x1ae)](_0x4addab[_0x5b8fbb(0x7cf)](0x0, 0x4))) && (_0x187f4b = !![],
            _0x389039[_0x5b8fbb(0x23b)] = !![]),
            _0x187f4b;
        }
          , _0x21e4cb = _0x389039['z'] || 0x1
          , _0x307422 = _0x389039['z'];
        Object['defineProperty'](_0x389039, 'z', {
            'get': function() {
                return _0x307422;
            },
            'set': function(_0x116ae1) {
                var _0x58ccbc = _0x434858;
                Math[_0x58ccbc(0x463)](_0x116ae1 - _0x307422) > 0.1 && (console[_0x58ccbc(0x399)](_0x58ccbc(0x5f4), _0x307422, 'to', _0x116ae1),
                console[_0x58ccbc(0x285)]()),
                _0x307422 = _0x116ae1;
            }
        });
        let _0x37f1df = function(_0x3c1704) {
            var _0x9c201a = _0x434858;
            _0x389039[_0x9c201a(0x365)] ||= _0x276741[_0x9c201a(0x365)],
            _0x389039[_0x9c201a(0x365)]['checked'] = _0x3c1704[_0x9c201a(0x69a)],
            localStorage[_0x9c201a(0x39f)](_0x9c201a(0x852), JSON[_0x9c201a(0x880)](_0x389039));
        }
          , _0x5a3b3c = function(_0x5cebaa) {
            var _0x2fc14a = _0x434858;
            _0x389039[_0x2fc14a(0x365)] ||= _0x276741['joystick'],
            _0x389039[_0x2fc14a(0x365)][_0x2fc14a(0x25f)] = _0x5cebaa['value'],
            localStorage[_0x2fc14a(0x39f)]('SaveGamewft', JSON[_0x2fc14a(0x880)](_0x389039));
        }
          , _0x2ef35f = function(_0x3fd22f) {
            var _0x4d346b = _0x434858;
            _0x389039[_0x4d346b(0x365)] ||= _0x276741['joystick'],
            _0x389039[_0x4d346b(0x365)][_0x4d346b(0x7fb)] = _0x3fd22f['value'],
            localStorage[_0x4d346b(0x39f)]('SaveGamewft', JSON[_0x4d346b(0x880)](_0x389039));
        }
          , _0x882233 = function(_0x2bf624) {
            var _0x2f6773 = _0x434858;
            _0x389039['joystick'] ||= _0x276741[_0x2f6773(0x365)],
            _0x389039[_0x2f6773(0x365)]['position'] = {
                'left': '75px',
                'bottom': '75px'
            },
            _0x2bf624[_0x2f6773(0x4a0)] === 'R' && (_0x389039[_0x2f6773(0x365)][_0x2f6773(0x791)] = {
                'right': _0x2f6773(0x376),
                'bottom': _0x2f6773(0x376)
            }),
            _0x389039[_0x2f6773(0x365)][_0x2f6773(0x5b1)] = _0x2bf624[_0x2f6773(0x4a0)],
            localStorage[_0x2f6773(0x39f)]('SaveGamewft', JSON[_0x2f6773(0x880)](_0x389039));
        }
          , _0x4be72a = function(_0x4b914d) {
            var _0x4fa82e = _0x434858;
            _0x389039[_0x4fa82e(0x365)] ||= _0x276741[_0x4fa82e(0x365)],
            _0x389039[_0x4fa82e(0x365)][_0x4fa82e(0x791)] = {
                'left': (parseInt(_0x4b914d[_0x4fa82e(0x4a0)]) + 0xa)[_0x4fa82e(0x436)]() + 'px',
                'bottom': _0x4b914d[_0x4fa82e(0x4a0)] + 'px'
            },
            _0x389039[_0x4fa82e(0x365)][_0x4fa82e(0x5b1)] === 'R' && (_0x389039[_0x4fa82e(0x365)][_0x4fa82e(0x791)] = {
                'right': (parseInt(_0x4b914d['value']) + 0xa)[_0x4fa82e(0x436)]() + 'px',
                'bottom': _0x4b914d[_0x4fa82e(0x4a0)] + 'px'
            }),
            _0x389039['joystick']['pxy'] = _0x4b914d[_0x4fa82e(0x4a0)],
            localStorage[_0x4fa82e(0x39f)](_0x4fa82e(0x852), JSON[_0x4fa82e(0x880)](_0x389039));
        }
          , _0x3a2ffa = function(_0x1328d4) {
            var _0x12432a = _0x434858;
            _0x389039[_0x12432a(0x365)] ||= _0x276741[_0x12432a(0x365)],
            _0x389039['joystick']['size'] = _0x1328d4[_0x12432a(0x4a0)],
            localStorage[_0x12432a(0x39f)](_0x12432a(0x852), JSON[_0x12432a(0x880)](_0x389039));
        }
          , _0x5a70dc = function(_0x757a74, _0x282a41, _0x1febb0, _0x36bd7a, _0x5482b0, _0x71921d) {
            var _0x6a7a3d = _0x434858;
            let _0x5164e8 = {
                'a': '',
                'b': 0x0,
                'c': ''
            };
            _0x757a74 > _0x389039['g'] * 0x64 + 0x64 || _0x757a74 < _0x389039['g'] * 0xa || _0x757a74 === undefined ? (_0x389039['a'] = _0x757a74,
            _0x757a74 === undefined && (_0x389039['a'] = Math[_0x6a7a3d(0x751)](Math[_0x6a7a3d(0x55f)]() * (_0x389039['g'] / 0x9) + (_0x389039['g'] - _0x389039['g'] / 0x9))),
            _0x5164e8['a'] = '00') : (_0x389039['a'] = _0x757a74 - _0x389039['g'] * 0xa,
            _0x5164e8['b'] = _0x389039['a'],
            _0x389039['a'] = _0x389039['a'] % (_0x389039['g'] / 0x9),
            _0x5164e8['b'] = (_0x5164e8['b'] - _0x389039['a']) / (_0x389039['g'] / 0x9) + 0x1,
            _0x389039['a'] = _0x389039['a'] + (_0x389039['g'] - _0x389039['g'] / 0x9),
            _0x5164e8['a'] = _0x5164e8['b'][_0x6a7a3d(0x436)](_0x389039['g'])[_0x6a7a3d(0x34f)](0x2, 0x0));
            _0x282a41 > _0x389039['g'] * 0x14 || _0x282a41 < _0x389039['g'] / 0x9 * 0x64 || _0x282a41 === undefined ? _0x282a41 > _0x389039['g'] * 0x14 && _0x282a41 < _0x389039['g'] * 0x1e ? (_0x389039['b'] = _0x282a41 - _0x389039['g'] * 0x14,
            _0x5164e8['a'] = _0x5164e8['a'] + _0x389039['b'][_0x6a7a3d(0x436)](_0x389039['g']),
            _0x389039['b'] = 0x0,
            _0x5164e8['c'] = _0x5164e8['c'] + '1') : (_0x389039['b'] = _0x282a41,
            _0x282a41 === undefined && (_0x389039['b'] = 0x0),
            _0x5164e8['a'] = _0x5164e8['a'] + '0',
            _0x5164e8['c'] = _0x5164e8['c'] + '0') : (_0x389039['b'] = _0x282a41 - _0x389039['g'] / 0x9 * 0x64 + _0x389039['g'] / _0x389039['g'],
            _0x5164e8['a'] = _0x5164e8['a'] + _0x389039['b']['toString'](_0x389039['g']),
            _0x389039['b'] = 0x0,
            _0x5164e8['c'] = _0x5164e8['c'] + '0');
            _0x1febb0 > _0x389039['g'] * 0x14 || _0x1febb0 < _0x389039['g'] / 0x9 * 0x64 || _0x1febb0 === undefined ? _0x1febb0 > _0x389039['g'] * 0x14 && _0x1febb0 < _0x389039['g'] * 0x1e ? (_0x389039['c'] = _0x1febb0 - _0x389039['g'] * 0x14,
            _0x5164e8['a'] = _0x5164e8['a'] + _0x389039['c']['toString'](_0x389039['g']),
            _0x389039['c'] = 0x0,
            _0x5164e8['c'] = _0x5164e8['c'] + '1') : (_0x389039['c'] = _0x1febb0,
            _0x1febb0 === undefined && (_0x389039['c'] = 0x0),
            _0x5164e8['a'] = _0x5164e8['a'] + '0',
            _0x5164e8['c'] = _0x5164e8['c'] + '0') : (_0x389039['c'] = _0x1febb0 - _0x389039['g'] / 0x9 * 0x64 + _0x389039['g'] / _0x389039['g'],
            _0x5164e8['a'] = _0x5164e8['a'] + _0x389039['c'][_0x6a7a3d(0x436)](_0x389039['g']),
            _0x389039['c'] = 0x0,
            _0x5164e8['c'] = _0x5164e8['c'] + '0');
            _0x36bd7a > _0x389039['g'] * 0x14 || _0x36bd7a < _0x389039['g'] / 0x9 * 0x64 || _0x36bd7a === undefined ? _0x36bd7a > _0x389039['g'] * 0x14 && _0x36bd7a < _0x389039['g'] * 0x1e ? (_0x389039['d'] = _0x36bd7a - _0x389039['g'] * 0x14,
            _0x389039['d'][_0x6a7a3d(0x436)](_0x389039['g']) === 'N' ? _0x5164e8['a'] = _0x5164e8['a'] + '0' : _0x5164e8['a'] = _0x5164e8['a'] + _0x389039['d'][_0x6a7a3d(0x436)](_0x389039['g']),
            _0x389039['d'] = 0x0,
            _0x5164e8['c'] = _0x5164e8['c'] + '1') : (_0x389039['d'] = _0x36bd7a,
            _0x36bd7a === undefined && (_0x389039['d'] = 0x0),
            _0x5164e8['a'] = _0x5164e8['a'] + '0',
            _0x5164e8['c'] = _0x5164e8['c'] + '0') : (_0x389039['d'] = _0x36bd7a - _0x389039['g'] / 0x9 * 0x64 + _0x389039['g'] / _0x389039['g'],
            _0x389039['d']['toString'](_0x389039['g']) === 'N' ? _0x5164e8['a'] = _0x5164e8['a'] + '0' : _0x5164e8['a'] = _0x5164e8['a'] + _0x389039['d'][_0x6a7a3d(0x436)](_0x389039['g']),
            _0x389039['d'] = 0x0,
            _0x5164e8['c'] = _0x5164e8['c'] + '0');
            if (_0x5482b0 > _0x389039['g'] * 0x14 || _0x5482b0 < _0x389039['g'] / 0x9 * 0x64 || _0x5482b0 === undefined) {
                if (_0x5482b0 > _0x389039['g'] * 0x14 && _0x5482b0 < _0x389039['g'] * 0x1e) {
                    _0x5164e8['b'] = _0x389039['g'] / _0x389039['g'];
                    if (_0x5482b0 <= _0x389039['g'] * 0x14 + (_0x389039['g'] - 0x1))
                        _0x389039['e'] = _0x5482b0 - _0x389039['g'] * 0x14;
                    else {
                        if (_0x5482b0 <= _0x389039['g'] * 0x14 + (_0x389039['g'] - 0x1) * 0x2)
                            _0x5164e8['b'] = _0x5164e8['b'] * 0x2,
                            _0x389039['e'] = _0x5482b0 - _0x389039['g'] * 0x14 - (_0x389039['g'] - 0x1);
                        else {
                            if (_0x5482b0 <= _0x389039['g'] * 0x14 + (_0x389039['g'] - 0x1) * 0x3)
                                _0x389039['e'] = _0x5482b0 - _0x389039['g'] * 0x14 - (_0x389039['g'] - 0x1) * 0x2;
                            else
                                _0x5482b0 <= _0x389039['g'] * 0x14 + (_0x389039['g'] - 0x1) * 0x4 ? (_0x5164e8['b'] = _0x5164e8['b'] * 0x2,
                                _0x389039['e'] = _0x5482b0 - _0x389039['g'] * 0x14 - (_0x389039['g'] - 0x1) * 0x3) : _0x389039['e'] = 0x0;
                        }
                    }
                    _0x389039['e'] >= _0x389039['g'] && (_0x5164e8['b'] = 0x2,
                    _0x389039['e'] = _0x389039['e'] - (_0x389039['g'] - 0x1)),
                    _0x5164e8['a'] = _0x5164e8['a'] + _0x389039['e'][_0x6a7a3d(0x436)](_0x389039['g']),
                    _0x389039['e'] = 0x0,
                    _0x5164e8['c'] = _0x5164e8['c'] + '1';
                } else
                    _0x389039['e'] = _0x5482b0,
                    _0x5482b0 === undefined && (_0x389039['e'] = 0x0),
                    _0x5164e8['a'] = _0x5164e8['a'] + '0',
                    _0x5164e8['c'] = _0x5164e8['c'] + '0',
                    _0x5164e8['b'] = 0x0;
            } else
                _0x5164e8['b'] = _0x389039['g'] / _0x389039['g'],
                _0x5482b0 - _0x389039['g'] / 0x9 * 0x64 + 0x1 >= _0x389039['g'] ? (_0x389039['e'] = _0x5482b0 - (_0x389039['g'] / 0x9 * 0x64 + (_0x389039['g'] - 0x1)),
                _0x5164e8['b'] = _0x5164e8['b'] * 0x2) : _0x389039['e'] = _0x5482b0 - _0x389039['g'] / 0x9 * 0x64 + _0x5164e8['b'],
                _0x5164e8['a'] = _0x5164e8['a'] + _0x389039['e'][_0x6a7a3d(0x436)](_0x389039['g']),
                _0x389039['e'] = 0x0,
                _0x5164e8['c'] = _0x5164e8['c'] + '0';
            if (_0x5164e8['a'] == _0x6a7a3d(0x3f4))
                _0x389039['f'] = _0x71921d[_0x6a7a3d(0x7cf)](0x0, 0x16)[_0x6a7a3d(0x1c3)](0x16);
            else {
                let _0x3fb8ef = parseInt(_0x5164e8['c'], 0x2);
                _0x5482b0 > 0x316 && _0x5482b0 <= 0x35c && (_0x3fb8ef += 0x10),
                _0x5164e8['b'] <= 0x1 ? _0x5164e8['a'] = _0x5164e8['a'][_0x6a7a3d(0x7cf)](0x0, 0x5) + '.' + _0x5164e8['a']['substr'](0x5, 0x1) : _0x5164e8['a'] = _0x5164e8['a'][_0x6a7a3d(0x7cf)](0x0, 0x4) + '.' + _0x5164e8['a'][_0x6a7a3d(0x7cf)](0x4, 0x2),
                _0x71921d == '' && (_0x71921d = '.\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.'),
                _0x5164e8['c'] == _0x6a7a3d(0x3a5) ? (_0x71921d['substr'](0x17, 0x1) == '.' && (_0x71921d = _0x71921d['substr'](0x0, 0x17)[_0x6a7a3d(0x1c3)](0x17) + '\x20' + _0x71921d['substr'](0x18, 0x1)[_0x6a7a3d(0x1c3)](0x1)),
                _0x389039['f'] = (_0x71921d['length'] >= 0x20 ? _0x71921d[_0x6a7a3d(0x7cf)](0x0, 0x19) : _0x71921d[_0x6a7a3d(0x7cf)](0x0, 0x19)['padEnd'](0x19)) + _0x5164e8['a']) : _0x389039['f'] = (_0x71921d[_0x6a7a3d(0x2a1)] >= 0x20 ? _0x71921d[_0x6a7a3d(0x7cf)](0x0, 0x17) : _0x71921d[_0x6a7a3d(0x7cf)](0x0, 0x17)[_0x6a7a3d(0x1c3)](0x17)) + '.' + _0x3fb8ef['toString'](_0x389039['g']) + _0x5164e8['a'],
                _0x389039['f'] = _0x389039['f'][_0x6a7a3d(0x2c3)]('\x20', '_');
            }
        }
          , _0x1e0ff2 = function(_0xc602eb) {
            var _0x29076f = _0x434858;
            let _0x42a48c;
            try {
                return _0x389039[_0x29076f(0x365)] ||= _0x276741[_0x29076f(0x365)],
                _0x41e416() && _0xc602eb && _0x389039[_0x29076f(0x365)][_0x29076f(0x69a)] && (_0x42a48c = nipplejs[_0x29076f(0x6c3)](_0x389039[_0x29076f(0x365)]))['on'](_0x29076f(0x778), function(_0x3c2c78, _0x351c68) {
                    var _0x309235 = _0x29076f;
                    _0x276741[_0x309235(0x27a)]['fo'] = _0x351c68[_0x309235(0x712)][_0x309235(0x3cd)] <= Math['PI'] ? _0x351c68[_0x309235(0x712)][_0x309235(0x3cd)] * -0x1 : Math['PI'] - (_0x351c68[_0x309235(0x712)][_0x309235(0x3cd)] - Math['PI']);
                }),
                _0x42a48c;
            } catch (_0x434a71) {
                console[_0x29076f(0x5ad)](_0x434a71);
            }
        }
          , _0x3c357d = function(_0x3f7b51) {
            var _0x45ef96 = _0x434858;
            let _0x98506d = {
                'a': 0x0,
                'b': 0x0,
                'c': 0x0,
                'd': 0x0,
                'e': 0x0,
                'f': '',
                'g': 0x0,
                'h': '',
                'i': ''
            }
              , _0x53dfe8 = 0x0;
            _0x98506d['h'] = _0x3f7b51[_0x45ef96(0x7cf)](-0x9);
            if (_0x98506d['h'][_0x45ef96(0x7cf)](0x0, 0x1) != '.')
                _0x98506d['i'] = _0x45ef96(0x3a5);
            else
                (_0x53dfe8 = parseInt(_0x98506d['h'][_0x45ef96(0x7cf)](0x1, 0x1), _0x389039['g'])) > 0xf ? (_0x53dfe8 -= 0x10,
                _0x98506d['i'] = _0x53dfe8[_0x45ef96(0x436)](0x2)[_0x45ef96(0x34f)](0x4, 0x0)) : (_0x98506d['i'] = _0x53dfe8['toString'](0x2)[_0x45ef96(0x34f)](0x4, 0x0),
                _0x53dfe8 = 0x0);
            return _0x98506d['f'] = _0x3f7b51[_0x45ef96(0x7cf)](-0x7),
            _0x98506d['f']['substr'](0x0, 0x2) != '00' && (_0x98506d['a'] = parseInt(_0x98506d['f']['substr'](0x0, 0x2), _0x389039['g']),
            _0x98506d['a'] = (_0x98506d['a'] - 0x1) * (_0x389039['g'] / 0x9) + _0x389039['g'] * 0xa - (_0x389039['g'] - 0x4)),
            _0x98506d['f'][_0x45ef96(0x7cf)](0x5, 0x1) == '.' ? _0x98506d['f']['substr'](0x6, 0x1) != '0' && (_0x98506d['e'] = parseInt(_0x98506d['f']['substr'](0x6, 0x1), _0x389039['g']),
            _0x98506d['i'][_0x45ef96(0x7cf)](0x3, 0x1) != '0' ? _0x53dfe8 > 0x0 ? _0x98506d['e'] = _0x98506d['e'] + _0x389039['g'] * 0x14 + (_0x389039['g'] - 0x1) * 0x2 : _0x98506d['e'] = _0x98506d['e'] + _0x389039['g'] * 0x14 : _0x98506d['e'] = _0x98506d['e'] - 0x1 + _0x389039['g'] / 0x9 * 0x64) : (_0x98506d['e'] = parseInt(_0x98506d['f'][_0x45ef96(0x7cf)](0x6, 0x1), _0x389039['g']),
            _0x98506d['i']['substr'](0x3, 0x1) != '0' ? _0x53dfe8 > 0x0 ? _0x98506d['e'] = _0x98506d['e'] + _0x389039['g'] * 0x14 + (_0x389039['g'] - 0x1) * 0x3 : _0x98506d['e'] = _0x98506d['e'] + _0x389039['g'] * 0x14 + (_0x389039['g'] - 0x1) : _0x98506d['e'] = _0x98506d['e'] + (_0x389039['g'] / 0x9 * 0x64 + (_0x389039['g'] - 0x1))),
            _0x98506d['f'] = _0x98506d['f']['replace']('.', ''),
            _0x98506d['f']['substr'](0x2, 0x1) != '0' && (_0x98506d['b'] = parseInt(_0x98506d['f']['substr'](0x2, 0x1), _0x389039['g']),
            _0x98506d['i']['substr'](0x0, 0x1) != '0' ? _0x98506d['b'] = _0x98506d['b'] + _0x389039['g'] * 0x14 : _0x98506d['b'] = _0x98506d['b'] - 0x1 + _0x389039['g'] / 0x9 * 0x64),
            _0x98506d['f'][_0x45ef96(0x7cf)](0x3, 0x1) != '0' && (_0x98506d['c'] = parseInt(_0x98506d['f'][_0x45ef96(0x7cf)](0x3, 0x1), _0x389039['g']),
            _0x98506d['i']['substr'](0x1, 0x1) != '0' ? _0x98506d['c'] = _0x98506d['c'] + _0x389039['g'] * 0x14 : _0x98506d['c'] = _0x98506d['c'] - 0x1 + _0x389039['g'] / 0x9 * 0x64),
            _0x98506d['f'][_0x45ef96(0x7cf)](0x4, 0x1) != '0' && (_0x98506d['d'] = parseInt(_0x98506d['f'][_0x45ef96(0x7cf)](0x4, 0x1), _0x389039['g']),
            _0x98506d['i'][_0x45ef96(0x7cf)](0x2, 0x1) != '0' ? _0x98506d['d'] = _0x98506d['d'] + _0x389039['g'] * 0x14 : _0x98506d['d'] = _0x98506d['d'] - 0x1 + _0x389039['g'] / 0x9 * 0x64),
            _0x98506d;
        }
          , _0x74cd51 = function(_0x4378c9) {
            return !(_0x4378c9 > _0x389039['g'] * 0x1e) && !(_0x4378c9 < _0x389039['g'] / 0x9 * 0x64) || _0x4378c9 == 0x0;
        }
          , _0xfe42cc = function(_0x3fdc3e) {
            var _0x4f25d3 = _0x434858;
            return /^(.{25})(\w{5}\.\w{1})$/[_0x4f25d3(0x1ae)](_0x3fdc3e) || /^(.{25})(\w{4}\.\w{2})$/[_0x4f25d3(0x1ae)](_0x3fdc3e);
        }
          , _0x16ed1a = function(_0x44f466) {
            var _0x1b87ac = _0x434858;
            _0x44f466 = _0x44f466[_0x1b87ac(0x2c3)]('_', '\x20');
            if (/^(.{25})(\w{7})$/[_0x1b87ac(0x1ae)](_0x44f466)) {
                for (_0x44f466 = _0x44f466['substr'](0x0, 0xf)[_0x1b87ac(0x681)](); _0x44f466[_0x1b87ac(0x7cf)](_0x44f466[_0x1b87ac(0x2a1)] - 0x1, 0x1) == '.'; ) {
                    _0x44f466 = _0x44f466[_0x1b87ac(0x7cf)](0x0, _0x44f466['length'] - 0x1);
                }
                ;return _0x44f466;
            }
            ;return /^(.{25})(\w{5}\.\w{1})$/[_0x1b87ac(0x1ae)](_0x44f466) || /^(.{25})(\w{4}\.\w{2})$/[_0x1b87ac(0x1ae)](_0x44f466) ? _0x44f466[_0x1b87ac(0x7cf)](-0x9)['substr'](0x0, 0x1) != '.' ? _0x44f466[_0x1b87ac(0x7cf)](0x0, 0x19)[_0x1b87ac(0x681)]() : _0x44f466[_0x1b87ac(0x7cf)](0x0, 0x17)['trim']() : _0x44f466;
        };
        _0x389039[_0x434858(0x444)] = !![];
        var _0x50f988 = localStorage[_0x434858(0x65e)](_0x434858(0x858));
        localStorage['setItem']('ccg_0', 'Kill\x20and\x20Headshot\x20stats\x20will\x20be\x20removed?'),
        localStorage['setItem'](_0x434858(0x756), _0x434858(0x600)),
        localStorage[_0x434858(0x39f)](_0x434858(0x277), _0x434858(0x787));
        var _0x34c395 = localStorage['getItem'](_0x434858(0x592))
          , _0x30ad82 = localStorage[_0x434858(0x65e)](_0x434858(0x61e)) != null ? localStorage[_0x434858(0x65e)](_0x434858(0x61e))[_0x434858(0x609)](',') : localStorage[_0x434858(0x65e)](_0x434858(0x61e))
          , _0x167e83 = localStorage[_0x434858(0x65e)](_0x434858(0x411))
          , _0x4d7543 = localStorage[_0x434858(0x65e)]('custom_wear')
          , _0x214f6d = localStorage[_0x434858(0x65e)]('custom_skin');
        $(_0x434858(0x24b))[_0x434858(0x7af)](_0x434858(0x649)),
        $('<input\x20type=\x22hidden\x22\x20id=\x22port_id_s\x22\x20value=\x22\x22>')[_0x434858(0x7af)](_0x434858(0x649)),
        $('<input\x20type=\x22hidden\x22\x20id=\x22port_name\x22\x20value=\x22\x22>')[_0x434858(0x7af)]('.description-text'),
        $(_0x434858(0x4cf))['insertAfter'](_0x434858(0x649)),
        $(_0x434858(0x685))[_0x434858(0x61d)](function() {
            var _0x5e6804 = _0x434858;
            $(_0x5e6804(0x6b8))['val'](''),
            $(_0x5e6804(0x4be))[_0x5e6804(0x467)]('');
        }),
        $(_0x434858(0x891))[_0x434858(0x6ee)](_0x434858(0x5ee), 'none'),
        $(_0x434858(0x774))[_0x434858(0x6ee)](_0x434858(0x5ee), _0x434858(0x4a2)),
        $(_0x434858(0x49e))[_0x434858(0x6ee)](_0x434858(0x5ee), _0x434858(0x4a2)),
        $(_0x434858(0x396))[_0x434858(0x6ee)]('display', 'block'),
        $(_0x434858(0x639))[_0x434858(0x6ee)]('display', _0x434858(0x38c)),
        $(_0x434858(0x254))[_0x434858(0x6ee)](_0x434858(0x5ee), 'block'),
        $(_0x434858(0x1cf))['after'](),
        $('#mm-player-info')[_0x434858(0x6ee)](_0x434858(0x5ee), _0x434858(0x38c)),
        $(_0x434858(0x6fc))[_0x434858(0x6ee)](_0x434858(0x791), _0x434858(0x280)),
        $('#relojHelp')[_0x434858(0x6ee)](_0x434858(0x1e4), _0x434858(0x663)),
        $(_0x434858(0x6fc))[_0x434858(0x6ee)](_0x434858(0x394), _0x434858(0x889)),
        $(_0x434858(0x4d7))[_0x434858(0x6ee)](_0x434858(0x5ee), _0x434858(0x4a2));
        var _0xc56d6c = null
          , _0x5e88be = null
          , _0x3d6d54 = ![]
          , _0x2c1a8a = 0x37
          , _0x19955e = 0x1
          , _0x3d8998 = !![];
        if (_0x30ad82 && _0x167e83 && _0x167e83 == _0x389039[_0x434858(0x67f)])
            ;
        else
            fetch(_0x434858(0x80f), {
                'headers': {
                    'Content-Type': _0x434858(0x6ef)
                },
                'method': _0x434858(0x380),
                'body': JSON[_0x434858(0x880)]({
                    'img': 'i2'
                })
            })[_0x434858(0x864)](async function(_0x4301c) {
                var _0x5a3713 = _0x434858;
                _0x30ad82 = (_0x4301c = await _0x4301c['json']())['i']['split']('.'),
                localStorage[_0x5a3713(0x39f)]('wfti', _0x30ad82),
                localStorage[_0x5a3713(0x39f)](_0x5a3713(0x411), _0x4301c['vs']),
                _0x389039[_0x5a3713(0x67f)] = _0x4301c['vs'],
                window[_0x5a3713(0x373)][_0x5a3713(0x2ad)]();
            })[_0x434858(0x553)](function(_0x1c45c5) {});
        ;var _0x127c3e = PIXI[_0x434858(0x538)][_0x434858(0x456)](_0x389039['s_l'] + _0x434858(0x7e2))
          , _0xc4d0ac = PIXI['Texture']['from'](_0x389039['s_l'] + _0x434858(0x57a))
          , _0x33d9a2 = PIXI['Texture']['from'](_0x389039[_0x434858(0x510)] + '/get_store.phpitem=close_w.png')
          , _0x1f0c02 = PIXI[_0x434858(0x538)]['from'](_0x389039['s_l'] + _0x434858(0x3ca))
          , _0x5edd49 = PIXI[_0x434858(0x538)][_0x434858(0x456)](_0x389039[_0x434858(0x510)] + _0x434858(0x35a))
          , _0x468615 = PIXI[_0x434858(0x538)][_0x434858(0x456)](_0x389039[_0x434858(0x510)] + _0x434858(0x738))
          , _0x5cb2b0 = PIXI['Texture']['from'](_0x389039[_0x434858(0x510)] + _0x434858(0x25d))
          , _0x13bc21 = PIXI[_0x434858(0x538)][_0x434858(0x456)](_0x389039[_0x434858(0x510)] + _0x434858(0x413))
          , _0x2806ed = new PIXI[(_0x434858(0x204))](_0x127c3e);
        _0x2806ed[_0x434858(0x844)] = !![],
        _0x2806ed[_0x434858(0x716)][_0x434858(0x25b)](0.5),
        _0x2806ed['x'] = -0x41,
        _0x2806ed['y'] = 0x19,
        _0x2806ed['interactive'] = !![],
        _0x2806ed[_0x434858(0x844)] = !![];
        var _0x18ec3d = new PIXI[(_0x434858(0x204))](_0x33d9a2);
        _0x18ec3d[_0x434858(0x844)] = !![],
        _0x18ec3d[_0x434858(0x716)]['set'](0.5),
        _0x18ec3d['x'] = -0x21,
        _0x18ec3d['y'] = 0x19,
        _0x18ec3d['interactive'] = !![],
        _0x18ec3d['buttonMode'] = !![];
        var _0x1ba984 = new PIXI[(_0x434858(0x204))](_0x5edd49);
        _0x1ba984[_0x434858(0x844)] = !![],
        _0x1ba984[_0x434858(0x716)][_0x434858(0x25b)](0.5),
        _0x1ba984['x'] = -0x1,
        _0x1ba984['y'] = 0x19,
        _0x1ba984[_0x434858(0x25c)] = !![],
        _0x1ba984['buttonMode'] = !![];
        var _0x159a27 = new PIXI[(_0x434858(0x204))](_0x13bc21);
        _0x159a27[_0x434858(0x844)] = !![],
        _0x159a27['anchor'][_0x434858(0x25b)](0.5),
        _0x159a27['x'] = -0x1,
        _0x159a27['y'] = 0x19,
        _0x159a27[_0x434858(0x25c)] = !![],
        _0x159a27[_0x434858(0x844)] = !![];
        var _0x4aa56d = new PIXI['Sprite'](_0x5cb2b0);
        _0x4aa56d[_0x434858(0x844)] = !![],
        _0x4aa56d[_0x434858(0x716)][_0x434858(0x25b)](0.5),
        _0x4aa56d['x'] = -0x21,
        _0x4aa56d['y'] = 0x19,
        _0x4aa56d[_0x434858(0x25c)] = !![],
        _0x4aa56d[_0x434858(0x844)] = !![],
        _0x18ec3d[_0x434858(0x494)] = 0.25,
        _0x2806ed[_0x434858(0x494)] = 0.25,
        _0x1ba984[_0x434858(0x494)] = 0.25,
        _0x4aa56d[_0x434858(0x494)] = 0.25,
        _0x159a27[_0x434858(0x494)] = 0.25;
        var _0xaa345f = new PIXI[(_0x434858(0x2fe))](_0x434858(0x60a),{
            'fontFamily': _0x434858(0x299),
            'fill': _0x434858(0x1ec),
            'fontSize': 0xc
        });
        _0xaa345f[_0x434858(0x716)]['x'] = 0.5,
        _0xaa345f[_0x434858(0x791)]['x'] = 0x6e;
        var _0x41e1aa = document[_0x434858(0x657)](_0x434858(0x6ca))
          , _0x5c6e52 = document[_0x434858(0x657)](_0x434858(0x505))
          , _0x6aa58 = $(_0x434858(0x578));
        _0xa8b9d9['d'][_0x434858(0x657)](_0x434858(0x24a))[_0x434858(0x811)][_0x434858(0x5ee)] = _0x434858(0x38c),
        function(_0x3564ef, _0x80ce07, _0x4cfcd1) {
            var _0x23c0b8 = _0x434858;
            function _0x1181ab(_0x2d13ff, _0x5bb60f) {
                return _typeof(_0x2d13ff) === _0x5bb60f;
            }
            function _0x30a4b7() {
                var _0xd663ca = _0x31dd;
                if (_typeof(_0x80ce07[_0xd663ca(0x3bc)]) != 'function')
                    return _0x80ce07[_0xd663ca(0x3bc)](arguments[0x0]);
                else
                    return _0x3a83f4 ? _0x80ce07[_0xd663ca(0x6ec)][_0xd663ca(0x3ed)](_0x80ce07, 'http://www.w3.org/2000/svg', arguments[0x0]) : _0x80ce07[_0xd663ca(0x3bc)][_0xd663ca(0x5e8)](_0x80ce07, arguments);
            }
            var _0x54f839 = []
              , _0x244f7c = []
              , _0x308088 = {
                '_version': '3.3.1',
                '_config': {
                    'classPrefix': '',
                    'enableClasses': !![],
                    'enableJSClass': !![],
                    'usePrefixes': !![]
                },
                '_q': [],
                'on': function(_0x106c88, _0x23dd6e) {
                    var _0x3c8671 = this;
                    setTimeout(function() {
                        _0x23dd6e(_0x3c8671[_0x106c88]);
                    }, 0x0);
                },
                'addTest': function(_0x2945c, _0x4e98b8, _0x2ba706) {
                    var _0x451ee9 = _0x31dd;
                    _0x244f7c[_0x451ee9(0x23c)]({
                        'name': _0x2945c,
                        'fn': _0x4e98b8,
                        'options': _0x2ba706
                    });
                },
                'addAsyncTest': function(_0x1722b6) {
                    _0x244f7c['push']({
                        'name': null,
                        'fn': _0x1722b6
                    });
                }
            };
            function _0x1e6253() {}
            _0x1e6253[_0x23c0b8(0x2a8)] = _0x308088,
            _0x1e6253 = new _0x1e6253();
            var _0x2d7164 = ![];
            try {
                _0x2d7164 = 'WebSocket'in _0x3564ef && _0x3564ef[_0x23c0b8(0x208)][_0x23c0b8(0x30c)] === 0x2;
            } catch (_0x240347) {}
            ;_0x1e6253['addTest'](_0x23c0b8(0x43c), _0x2d7164);
            var _0x8bc16a = _0x80ce07['documentElement']
              , _0x3a83f4 = _0x8bc16a[_0x23c0b8(0x807)]['toLowerCase']() === _0x23c0b8(0x5d6);
            _0x1e6253['addTest']('canvas', function() {
                var _0x26f45a = _0x30a4b7('canvas');
                return !!_0x26f45a['getContext'] && !!_0x26f45a['getContext']('2d');
            }),
            _0x1e6253[_0x23c0b8(0x6d6)](_0x23c0b8(0x845), function() {
                var _0x3a75be = _0x23c0b8;
                return _0x1e6253['canvas'] !== ![] && _typeof(_0x30a4b7(_0x3a75be(0x271))[_0x3a75be(0x3e6)]('2d')[_0x3a75be(0x1f7)]) == _0x3a75be(0x3fb);
            }),
            (function() {
                var _0x3430f7 = _0x23c0b8, _0x18f944, _0x527c17, _0x721eb6, _0x20cac4, _0x52b418, _0x438869, _0x49fc4d;
                for (var _0x3949ce in _0x244f7c) {
                    if (_0x244f7c['hasOwnProperty'](_0x3949ce)) {
                        _0x18f944 = [];
                        if ((_0x527c17 = _0x244f7c[_0x3949ce])[_0x3430f7(0x709)] && (_0x18f944[_0x3430f7(0x23c)](_0x527c17[_0x3430f7(0x709)]['toLowerCase']()),
                        _0x527c17[_0x3430f7(0x544)] && _0x527c17[_0x3430f7(0x544)][_0x3430f7(0x58d)] && _0x527c17['options'][_0x3430f7(0x58d)][_0x3430f7(0x2a1)]))
                            for (_0x721eb6 = 0x0; _0x721eb6 < _0x527c17[_0x3430f7(0x544)][_0x3430f7(0x58d)][_0x3430f7(0x2a1)]; _0x721eb6++) {
                                _0x18f944[_0x3430f7(0x23c)](_0x527c17[_0x3430f7(0x544)][_0x3430f7(0x58d)][_0x721eb6]['toLowerCase']());
                            }
                        ;_0x20cac4 = _0x1181ab(_0x527c17['fn'], 'function') ? _0x527c17['fn']() : _0x527c17['fn'],
                        _0x52b418 = 0x0;
                        for (; _0x52b418 < _0x18f944['length']; _0x52b418++) {
                            (_0x49fc4d = (_0x438869 = _0x18f944[_0x52b418])[_0x3430f7(0x609)]('.'))[_0x3430f7(0x2a1)] === 0x1 ? _0x1e6253[_0x49fc4d[0x0]] = _0x20cac4 : (!!_0x1e6253[_0x49fc4d[0x0]] && !(_0x1e6253[_0x49fc4d[0x0]]instanceof Boolean) && (_0x1e6253[_0x49fc4d[0x0]] = new Boolean(_0x1e6253[_0x49fc4d[0x0]])),
                            _0x1e6253[_0x49fc4d[0x0]][_0x49fc4d[0x1]] = _0x20cac4),
                            _0x54f839['push']((_0x20cac4 ? '' : _0x3430f7(0x6de)) + _0x49fc4d[_0x3430f7(0x30e)]('-'));
                        }
                    }
                }
            }()),
            function(_0xc32420) {
                var _0x4df316 = _0x23c0b8
                  , _0x755d68 = _0x8bc16a['className']
                  , _0x34e389 = _0x1e6253[_0x4df316(0x50c)][_0x4df316(0x26d)] || '';
                _0x3a83f4 && (_0x755d68 = _0x755d68[_0x4df316(0x2c4)]);
                if (_0x1e6253[_0x4df316(0x50c)][_0x4df316(0x455)]) {
                    var _0x45251c = RegExp(_0x4df316(0x3f3) + _0x34e389 + _0x4df316(0x620));
                    _0x755d68 = _0x755d68[_0x4df316(0x42b)](_0x45251c, '$1' + _0x34e389 + 'js$2');
                }
                ;_0x1e6253['_config'][_0x4df316(0x5bf)] && (_0x755d68 += '\x20' + _0x34e389 + _0xc32420[_0x4df316(0x30e)]('\x20' + _0x34e389),
                _0x3a83f4 ? _0x8bc16a['className'][_0x4df316(0x2c4)] = _0x755d68 : _0x8bc16a[_0x4df316(0x2f5)] = _0x755d68);
            }(_0x54f839),
            delete _0x308088['addTest'],
            delete _0x308088['addAsyncTest'];
            for (var _0x50cdf4 = 0x0; _0x50cdf4 < _0x1e6253['_q'][_0x23c0b8(0x2a1)]; _0x50cdf4++) {
                _0x1e6253['_q'][_0x50cdf4]();
            }
            ;_0x3564ef[_0x23c0b8(0x336)] = _0x1e6253;
        }(window, document);
        if (!Modernizr[_0x434858(0x43c)] || !Modernizr[_0x434858(0x271)] || !Modernizr[_0x434858(0x845)]) {
            _0xa8b9d9['d'][_0x434858(0x657)]('error-view')[_0x434858(0x811)][_0x434858(0x5ee)] = _0x434858(0x38c);
            return;
        }
        ;_0x148283['f'] = {
            'g': function(_0x19ca82, _0x2e0f86, _0x26c237) {
                var _0x16c20f = _0x434858;
                _0x19ca82[_0x16c20f(0x896)](),
                _0x19ca82[_0x16c20f(0x497)](_0x2e0f86, _0x26c237);
            },
            'h': function(_0x5423c7, _0x7ca48c, _0x10156e) {
                var _0xd9a0c3 = _0x434858;
                _0x5423c7[_0xd9a0c3(0x896)](),
                _0x5423c7['fadeOut'](_0x7ca48c, _0x10156e);
            }
        },
        _0x148283['i'] = _0xbc3655['b'](_0x434858(0x208)),
        _0x148283['j'] = _0xbc3655['b'](_0x434858(0x4cd)),
        _0x3d714e = (_0x2f883d = _0xbc3655['b'](_0x434858(0x330)))[_0x434858(0x408)],
        _0x553d86 = _0x2f883d[_0x434858(0x34a)],
        _0x148283['k'] = {
            'l': _0x2f883d[_0x434858(0x683)],
            'm': _0x2f883d['BaseTexture'],
            'n': _0x2f883d[_0x434858(0x538)],
            'o': _0x2f883d[_0x434858(0x5cc)],
            'p': _0x2f883d[_0x434858(0x73f)],
            'q': _0x2f883d[_0x434858(0x48a)],
            'r': _0x2f883d[_0x434858(0x7dd)],
            's': _0x2f883d[_0x434858(0x204)],
            't': _0x2f883d[_0x434858(0x2fe)],
            'u': _0x2f883d['Geometry'],
            'v': _0x2f883d[_0x434858(0x7a0)],
            'w': {
                'z': _0x3d714e['ADD'],
                'A': _0x3d714e[_0x434858(0x241)],
                'B': _0x3d714e[_0x434858(0x1b1)]
            },
            'C': {
                'D': _0x553d86[_0x434858(0x258)]
            },
            'F': {
                'G': function(_0x570b15) {
                    var _0x311cf4 = _0x570b15['parent'];
                    _0x311cf4 != null && _0x311cf4['removeChild'](_0x570b15);
                }
            }
        },
        _0x4cd94d['H'] = {
            'I': _0xa8b9d9['c']['runtimeHash'],
            'J': _0x434858(0x4eb),
            'K': _0x434858(0x2f4),
            'L': '/images/linelogo-valday2024.png',
            'M': '/images/guest-avatar-valday2024.png',
            'N': _0x434858(0x7bf),
            'O': _0x434858(0x391)
        },
        _0x4cd94d['H']['P'] = ((_0x35b18e = _0xa8b9d9['c']['I18N_LANG']) || (_0x35b18e = 'en'),
        _0x35b18e),
        _0x4cd94d['H']['Q'] = (function() {
            var _0x2972f1 = _0x434858, _0x4f1994;
            switch (_0x4cd94d['H']['P']) {
            case 'uk':
                _0x4f1994 = _0x2972f1(0x347);
                break;
            case 'de':
                _0x4f1994 = _0x2972f1(0x324);
                break;
            case 'fr':
                _0x4f1994 = _0x2972f1(0x6fe);
                break;
            case 'es':
                _0x4f1994 = _0x2972f1(0x746);
                break;
            default:
                _0x4f1994 = _0x2972f1(0x7b4);
            }
            ;return _0x4f1994;
        }()),
        moment[_0x434858(0x58f)](_0x4cd94d['H']['Q']),
        ooo = null,
        _0x4cd94d['S'] = 6.283185307179586,
        _0x4cd94d['T'] = 3.141592653589793,
        _0x1c9487 = _0xa8b9d9['c'][_0x434858(0x4c8)],
        _0xbc3655['U'] = function(_0x3e6075) {
            return _0x1c9487[_0x3e6075];
        }
        ,
        _0xbc3655['V'] = function(_0x5def94) {
            if (_0x5def94[_0x4cd94d['H']['P']])
                return _0x5def94[_0x4cd94d['H']['P']];
            else
                return _0x5def94['en'] ? _0x5def94['en'] : _0x5def94['x'];
        }
        ,
        _0xbc3655['W'] = function(_0x416485) {
            return encodeURI(_0x416485);
        }
        ,
        _0xbc3655['X'] = function(_0x4c10b4, _0x2e00be) {
            return setInterval(_0x4c10b4, _0x2e00be);
        }
        ,
        _0xbc3655['Y'] = function(_0x21da40, _0x55d4b1) {
            return setTimeout(_0x21da40, _0x55d4b1);
        }
        ,
        _0xbc3655['Z'] = function(_0xa34b9e) {
            clearTimeout(_0xa34b9e);
        }
        ,
        _0xbc3655['$'] = function(_0xb1f4be) {
            var _0xfdbcdb = _0x434858
              , _0x422eda = (_0xbc3655['_'](_0xb1f4be) % 0x3c)[_0xfdbcdb(0x436)]()
              , _0x50f1a2 = (_0xbc3655['_'](_0xb1f4be / 0x3c) % 0x3c)[_0xfdbcdb(0x436)]()
              , _0x2e9df1 = (_0xbc3655['_'](_0xb1f4be / 0xe10) % 0x18)['toString']()
              , _0x418374 = _0xbc3655['_'](_0xb1f4be / 0x15180)[_0xfdbcdb(0x436)]()
              , _0x65daa0 = _0xbc3655['U'](_0xfdbcdb(0x602))
              , _0x587d0b = _0xbc3655['U'](_0xfdbcdb(0x581))
              , _0x19bf36 = _0xbc3655['U'](_0xfdbcdb(0x2b1))
              , _0x3a042e = _0xbc3655['U'](_0xfdbcdb(0x2d7));
            if (_0x418374 > 0x0)
                return _0x418374 + '\x20' + _0x65daa0 + '\x20' + _0x2e9df1 + '\x20' + _0x587d0b + '\x20' + _0x50f1a2 + '\x20' + _0x19bf36 + '\x20' + _0x422eda + '\x20' + _0x3a042e;
            else {
                if (_0x2e9df1 > 0x0)
                    return _0x2e9df1 + '\x20' + _0x587d0b + '\x20' + _0x50f1a2 + '\x20' + _0x19bf36 + '\x20' + _0x422eda + '\x20' + _0x3a042e;
                else
                    return _0x50f1a2 > 0x0 ? _0x50f1a2 + '\x20' + _0x19bf36 + '\x20' + _0x422eda + '\x20' + _0x3a042e : _0x422eda + '\x20' + _0x3a042e;
            }
        }
        ,
        _0xbc3655['aa'] = function(_0x587080) {
            var _0x54b4a7 = _0x434858;
            return _0x587080[_0x54b4a7(0x5b5)](_0x54b4a7(0x5df)) ? _0x587080[_0x54b4a7(0x2c3)](_0x54b4a7(0x5df), 'target=\x22_black\x22\x20href') : _0x587080;
        }
        ,
        _0xbc3655['ba'] = function(_0x50bcad, _0x14ecce, _0x48f995) {
            var _0x574e2b = _0x434858
              , _0x55d873 = _0xa8b9d9['d']['createElement']('script')
              , _0x4505bb = !![];
            _typeof(_0x14ecce) !== _0x574e2b(0x799) && _0x14ecce !== null && (_typeof(_0x14ecce['id']) !== _0x574e2b(0x799) && (_0x55d873['id'] = _0x14ecce['id']),
            _typeof(_0x14ecce[_0x574e2b(0x27f)]) !== 'undefined' && _0x14ecce['async'] && (_0x55d873['async'] = _0x574e2b(0x27f)),
            _typeof(_0x14ecce[_0x574e2b(0x532)]) !== 'undefined' && _0x14ecce[_0x574e2b(0x532)] && (_0x55d873[_0x574e2b(0x532)] = _0x574e2b(0x532)),
            _typeof(_0x14ecce[_0x574e2b(0x3fe)]) !== _0x574e2b(0x799) && (_0x55d873[_0x574e2b(0x3fe)] = _0x14ecce['crossorigin'])),
            _0x55d873[_0x574e2b(0x5cf)] = _0x574e2b(0x38b),
            _0x55d873[_0x574e2b(0x52f)] = _0x50bcad,
            _0x48f995 && (_0x55d873['onload'] = _0x55d873[_0x574e2b(0x697)] = function() {
                var _0x75c5a0 = _0x574e2b;
                _0x4505bb = ![];
                try {
                    _0x48f995();
                } catch (_0x459a26) {}
                ;_0x55d873['onload'] = _0x55d873[_0x75c5a0(0x697)] = null;
            }
            ),
            (_0xa8b9d9['d'][_0x574e2b(0x2ff)] || _0xa8b9d9['d'][_0x574e2b(0x6f7)](_0x574e2b(0x2ff))[0x0])[_0x574e2b(0x596)](_0x55d873);
        }
        ,
        _0xbc3655['ca'] = function(_0x2e6fa8, _0x8aeb94) {
            var _0x1f1bcf = _0x434858
              , _0x1a6d49 = _0x8aeb94;
            return _0x1a6d49[_0x1f1bcf(0x2a8)] = Object['create'](_0x2e6fa8['prototype']),
            _0x1a6d49[_0x1f1bcf(0x2a8)][_0x1f1bcf(0x86f)] = _0x1a6d49,
            _0x1a6d49['parent'] = _0x2e6fa8,
            _0x1a6d49;
        }
        ,
        _0xbc3655['da'] = function(_0x2c8462) {
            return (_0x2c8462 %= _0x4cd94d['S']) < 0x0 ? _0x2c8462 + _0x4cd94d['S'] : _0x2c8462;
        }
        ,
        _0xbc3655['ea'] = function(_0x2889cc, _0x52f759, _0x240107) {
            return _0xbc3655['fa'](_0x240107, _0x2889cc, _0x52f759);
        }
        ,
        _0xbc3655['fa'] = function(_0x5e2974, _0x1bbac0, _0x43a1d8) {
            var _0x67050a = _0x434858;
            if (_0x5e2974 > _0x43a1d8)
                return _0x43a1d8;
            else {
                if (_0x5e2974 < _0x1bbac0)
                    return _0x1bbac0;
                else
                    return Number[_0x67050a(0x608)](_0x5e2974) ? _0x5e2974 : (_0x1bbac0 + _0x43a1d8) * 0.5;
            }
        }
        ,
        _0xbc3655['ga'] = function(_0x1edcc4, _0x3af89e, _0x380fd4, _0x5bce3a) {
            return _0x3af89e > _0x1edcc4 ? _0xbc3655['ha'](_0x3af89e, _0x1edcc4 + _0x380fd4 * _0x5bce3a) : _0xbc3655['ia'](_0x3af89e, _0x1edcc4 - _0x380fd4 * _0x5bce3a);
        }
        ,
        _0xbc3655['ja'] = function(_0x10cf40, _0x475593, _0x421798, _0x383828, _0x5e9d58) {
            var _0x3b5c86 = _0x434858;
            return _0x475593 + (_0x10cf40 - _0x475593) * Math[_0x3b5c86(0x30b)](0x1 - _0x383828, _0x421798 / _0x5e9d58);
        }
        ,
        _0xbc3655['ka'] = function(_0x5a932c, _0x515108, _0x228bcb) {
            return _0x5a932c - (_0x5a932c - _0x515108) * _0x228bcb;
        }
        ,
        _0xbc3655['la'] = function(_0x308f43, _0x18f60f) {
            var _0x3b694e = _0x434858;
            return Math[_0x3b694e(0x4a9)](_0x308f43 * _0x308f43 + _0x18f60f * _0x18f60f);
        }
        ,
        _0xbc3655['ma'] = function() {
            var _0x51f403 = _0x434858;
            return Math[_0x51f403(0x55f)]();
        }
        ,
        _0xbc3655['_'] = function(_0x113f5f) {
            var _0x1d4145 = _0x434858;
            return Math[_0x1d4145(0x751)](_0x113f5f);
        }
        ,
        _0xbc3655['na'] = function(_0x2f94fe) {
            return Math['abs'](_0x2f94fe);
        }
        ,
        _0xbc3655['ha'] = function(_0x139f5f, _0x331693) {
            var _0x5b3d8e = _0x434858;
            return Math[_0x5b3d8e(0x856)](_0x139f5f, _0x331693);
        }
        ,
        _0xbc3655['ia'] = function(_0x491355, _0x413e80) {
            var _0x37c944 = _0x434858;
            return Math[_0x37c944(0x3ea)](_0x491355, _0x413e80);
        }
        ,
        _0xbc3655['oa'] = function(_0x109fb3) {
            var _0x3d847e = _0x434858;
            return Math[_0x3d847e(0x55e)](_0x109fb3);
        }
        ,
        _0xbc3655['pa'] = function(_0x15a14b) {
            var _0x31621b = _0x434858;
            return Math[_0x31621b(0x572)](_0x15a14b);
        }
        ,
        _0xbc3655['qa'] = function(_0xd42159) {
            return Math['sqrt'](_0xd42159);
        }
        ,
        _0xbc3655['ra'] = function(_0x58d799, _0x284de) {
            var _0x9e40e7 = _0x434858;
            return Math[_0x9e40e7(0x30b)](_0x58d799, _0x284de);
        }
        ,
        _0xbc3655['sa'] = function(_0xbfab13) {
            var _0x467ea9 = _0x434858;
            return Math[_0x467ea9(0x849)](_0xbfab13);
        }
        ,
        _0xbc3655['ta'] = function(_0x24c380, _0x3889d4) {
            var _0xda51f0 = _0x434858;
            return Math[_0xda51f0(0x339)](_0x24c380, _0x3889d4);
        }
        ,
        _0xbc3655['ua'] = function(_0x2f62b3, _0x2a4c03, _0x54eef5, _0xf64bd1) {
            var _0x3e16ca = _0x434858
              , _0x30c6b5 = _0x2a4c03 + _0xf64bd1;
            if (_0x2f62b3 == null)
                throw TypeError();
            ;var _0x19c84e = _0x2f62b3['length'] >>> 0x0
              , _0x266615 = _0x54eef5 >> 0x0
              , _0x72466 = _0x266615 < 0x0 ? Math[_0x3e16ca(0x3ea)](_0x19c84e + _0x266615, 0x0) : Math['min'](_0x266615, _0x19c84e)
              , _0x5eda6d = _0x2a4c03 >> 0x0
              , _0x4b8730 = _0x5eda6d < 0x0 ? Math[_0x3e16ca(0x3ea)](_0x19c84e + _0x5eda6d, 0x0) : Math[_0x3e16ca(0x856)](_0x5eda6d, _0x19c84e)
              , _0x5a4407 = _0x30c6b5 === undefined ? _0x19c84e : _0x30c6b5 >> 0x0
              , _0x4e5f4a = Math[_0x3e16ca(0x856)]((_0x5a4407 < 0x0 ? Math['max'](_0x19c84e + _0x5a4407, 0x0) : Math[_0x3e16ca(0x856)](_0x5a4407, _0x19c84e)) - _0x4b8730, _0x19c84e - _0x72466)
              , _0xc1c824 = 0x1;
            for (_0x4b8730 < _0x72466 && _0x72466 < _0x4b8730 + _0x4e5f4a && (_0xc1c824 = -0x1,
            _0x4b8730 += _0x4e5f4a - 0x1,
            _0x72466 += _0x4e5f4a - 0x1); _0x4e5f4a > 0x0; ) {
                _0x4b8730 in _0x2f62b3 ? _0x2f62b3[_0x72466] = _0x2f62b3[_0x4b8730] : delete _0x2f62b3[_0x72466],
                _0x4b8730 += _0xc1c824,
                _0x72466 += _0xc1c824,
                _0x4e5f4a--;
            }
            ;return _0x2f62b3;
        }
        ,
        _0xbc3655['va'] = function(_0x364a86, _0x31001a) {
            return _0x364a86 + (_0x31001a - _0x364a86) * _0xbc3655['ma']();
        }
        ,
        _0xbc3655['wa'] = function(_0x354a2d) {
            return _0x354a2d[parseInt(_0xbc3655['ma']() * _0x354a2d['length'])];
        }
        ,
        _0x11a067 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'][_0x434858(0x50d)](function(_0x1a1e7d) {
            var _0x5d4291 = _0x434858;
            return _0x1a1e7d[_0x5d4291(0x459)](0x0);
        }),
        _0xbc3655['xa'] = function(_0x3cfe70) {
            var _0x39dd18 = _0x434858;
            _typeof(_0x3cfe70) == 'undefined' && (_0x3cfe70 = 0x10);
            var _0x3e6933 = '';
            for (var _0x556a6f = 0x0; _0x556a6f < _0x3cfe70; _0x556a6f++) {
                _0x3e6933 += String[_0x39dd18(0x46b)](_0x11a067[_0xbc3655['_'](_0xbc3655['ma']() * _0x11a067['length'])]);
            }
            ;return _0x3e6933;
        }
        ,
        _0xbc3655['ya'] = function(_0x4526ec, _0x3c41c, _0x4328ab) {
            var _0x4bdcc1 = _0x434858
              , _0x5af904 = _0x4328ab * (0x1 - _0x3c41c * 0.5)
              , _0x55bf3c = Math[_0x4bdcc1(0x856)](_0x5af904, 0x1 - _0x5af904);
            return _0xbc3655['za'](_0x4526ec, _0x55bf3c ? (_0x4328ab - _0x5af904) / _0x55bf3c : 0x0, _0x5af904);
        }
        ,
        _0xbc3655['za'] = function(_0x18464e, _0x4bc412, _0x17298b) {
            var _0x36a790 = (0x1 - _0xbc3655['na'](_0x17298b * 0x2 - 0x1)) * _0x4bc412
              , _0x44a143 = _0x36a790 * (0x1 - _0xbc3655['na'](_0x18464e / 0x3c % 0x2 - 0x1))
              , _0x47e6cc = _0x17298b - _0x36a790 / 0x2;
            if (_0x18464e >= 0x0 && _0x18464e < 0x3c)
                return [_0x47e6cc + _0x36a790, _0x47e6cc + _0x44a143, _0x47e6cc];
            else {
                if (_0x18464e >= 0x3c && _0x18464e < 0x78)
                    return [_0x47e6cc + _0x44a143, _0x47e6cc + _0x36a790, _0x47e6cc];
                else {
                    if (_0x18464e >= 0x78 && _0x18464e < 0xb4)
                        return [_0x47e6cc, _0x47e6cc + _0x36a790, _0x47e6cc + _0x44a143];
                    else {
                        if (_0x18464e >= 0xb4 && _0x18464e < 0xf0)
                            return [_0x47e6cc, _0x47e6cc + _0x44a143, _0x47e6cc + _0x36a790];
                        else
                            return _0x18464e >= 0xf0 && _0x18464e < 0x12c ? [_0x47e6cc + _0x44a143, _0x47e6cc, _0x47e6cc + _0x36a790] : [_0x47e6cc + _0x36a790, _0x47e6cc, _0x47e6cc + _0x44a143];
                    }
                }
            }
        }
        ,
        _0xbc3655['Aa'] = function(_0x35c7da, _0x452785, _0x2214e5) {
            var _0x35f9e2 = _0x434858;
            $[_0x35f9e2(0x4bb)](_0x35c7da)[_0x35f9e2(0x69d)](_0x452785)['done'](_0x2214e5);
        }
        ,
        _0xbc3655['Ba'] = function(_0x3bcce2, _0xf44ff2, _0x109abf, _0x4a35b8) {
            var _0x1aa1a4 = _0x434858
              , _0x50ec5c = {
                'type': 'GET',
                'url': _0x3bcce2
            }
              , _0x215d45 = {
                'responseType': _0x1aa1a4(0x4fe)
            };
            _0x215d45['onprogress'] = function(_0x24dae3) {
                var _0x452e48 = _0x1aa1a4;
                _0x24dae3[_0x452e48(0x723)] && _0x4a35b8(_0x24dae3[_0x452e48(0x574)] / _0x24dae3[_0x452e48(0x419)] * 0x64);
            }
            ,
            _0x50ec5c['xhrFields'] = _0x215d45,
            $[_0x1aa1a4(0x78a)](_0x50ec5c)[_0x1aa1a4(0x69d)](_0xf44ff2)[_0x1aa1a4(0x40f)](_0x109abf);
        }
        ,
        _0xbc3655['Ca'] = function() {
            return Date['now']();
        }
        ,
        _0xbc3655['Da'] = function(_0x539660, _0x386c53) {
            var _0xcd4af7 = _0x434858;
            for (var _0x3b212c in _0x539660) {
                _0x539660[_0xcd4af7(0x88d)](_0x3b212c) && _0x386c53(_0x3b212c, _0x539660[_0x3b212c]);
            }
        }
        ,
        _0xbc3655['Ea'] = function(_0x2948ca) {
            var _0x1d0d9d = _0x434858;
            for (var _0x30218d = _0x2948ca[_0x1d0d9d(0x2a1)] - 0x1; _0x30218d > 0x0; _0x30218d--) {
                var _0x550e5e = _0xbc3655['_'](_0xbc3655['ma']() * (_0x30218d + 0x1))
                  , _0x2f77cb = _0x2948ca[_0x30218d];
                _0x2948ca[_0x30218d] = _0x2948ca[_0x550e5e],
                _0x2948ca[_0x550e5e] = _0x2f77cb;
            }
            ;return _0x2948ca;
        }
        ,
        _0xa8b9d9['Fa'] = _0xbc3655['b']('ArrayBuffer'),
        _0xa8b9d9['Ga'] = _0xbc3655['b'](_0x434858(0x55d)),
        _0xa8b9d9['Ha'] = (function() {
            var _0x3a19b2 = _0x434858;
            function _0x3351a1(_0x1cb013) {
                this['Ia'] = _0x1cb013,
                this['Ja'] = 0x0;
            }
            var _0x21dc4f = _0x3a19b2(0x73b);
            _0x3351a1['prototype']['Ka'] = function() {
                var _0x558ea1 = this['Ia'][_0x21dc4f](this['Ja']);
                return this['Ja'] += 0x1,
                _0x558ea1;
            }
            ;
            var _0x18eef8 = _0x3a19b2(0x80d);
            _0x3351a1[_0x3a19b2(0x2a8)]['La'] = function() {
                var _0x12fd6b = this['Ia'][_0x18eef8](this['Ja']);
                return this['Ja'] += 0x2,
                _0x12fd6b;
            }
            ;
            var _0x513ee4 = _0x3a19b2(0x562);
            _0x3351a1[_0x3a19b2(0x2a8)]['Ma'] = function() {
                var _0x1b3e13 = this['Ia'][_0x513ee4](this['Ja']);
                return this['Ja'] += 0x4,
                _0x1b3e13;
            }
            ;
            var _0x1db197 = 'getFloat32';
            return _0x3351a1[_0x3a19b2(0x2a8)]['Na'] = function() {
                var _0x2d2a86 = this['Ia'][_0x1db197](this['Ja']);
                return this['Ja'] += 0x4,
                _0x2d2a86;
            }
            ,
            _0x3351a1;
        }()),
        _0xa8b9d9['Oa'] = (function() {
            var _0x196509 = _0x434858;
            function _0x1c6fc7(_0x17357c) {
                this['Ia'] = _0x17357c,
                this['Ja'] = 0x0;
            }
            var _0x4114c4 = _0x196509(0x81f);
            _0x1c6fc7[_0x196509(0x2a8)]['Pa'] = function(_0x17a4ad) {
                this['Ia'][_0x4114c4](this['Ja'], _0x17a4ad),
                this['Ja'] += 0x1;
            }
            ;
            var _0x1d09a4 = _0x196509(0x2a3);
            return _0x1c6fc7['prototype']['Qa'] = function(_0x1968fe) {
                this['Ia'][_0x1d09a4](this['Ja'], _0x1968fe),
                this['Ja'] += 0x2;
            }
            ,
            _0x1c6fc7;
        }()),
        _0xbc3655['Ra'] = function() {
            var _0x2d6b4b = _0x434858
              , _0x46c0ee = ![];
            function _0x26f6ca() {}
            var _0x2b6715 = {}
              , _0x55e975 = _0x2d6b4b(0x710)
              , _0x4070bd = $('#' + _0x55e975)
              , _0x23cd90 = _0x2d6b4b(0x443)
              , _0x568eff = $('#' + _0x23cd90);
            return $(_0x2d6b4b(0x42d))[_0x2d6b4b(0x68c)](function() {
                _0x568eff['fadeOut'](0x1f4),
                _0x26f6ca(![]);
            }),
            _0x2b6715['Sa'] = function(_0xa3a99a) {
                var _0x4e4944 = _0x2d6b4b;
                _0x26f6ca = _0xa3a99a;
                if (!_0x46c0ee)
                    try {
                        aiptag[_0x4e4944(0x3e4)][_0x4e4944(0x3a7)][_0x4e4944(0x23c)](function() {
                            var _0x4fd360 = _0x4e4944
                              , _0x578829 = {
                                'AD_WIDTH': 0x3c0,
                                'AD_HEIGHT': 0x21c,
                                'AD_FULLSCREEN': !![],
                                'AD_CENTERPLAYER': ![]
                            };
                            _0x578829[_0x4fd360(0x732)] = 'loading\x20advertisement',
                            _0x578829[_0x4fd360(0x545)] = function() {
                                var _0x5c8fe9 = _0x4fd360;
                                return _0xa8b9d9['d'][_0x5c8fe9(0x657)](_0x55e975);
                            }
                            ,
                            _0x578829['AIP_COMPLETE'] = function(_0x2588bc) {
                                var _0x9dbbe2 = _0x4fd360;
                                _0x26f6ca(!![]),
                                _0x148283['f']['h'](_0x4070bd, 0x1),
                                _0x148283['f']['h'](_0x568eff, 0x1);
                                try {
                                    ga('send', _0x9dbbe2(0x83d), _0x9dbbe2(0x3ab), _0x4cd94d['H']['I'] + '_complete');
                                } catch (_0x4acf4f) {}
                            }
                            ,
                            _0x578829[_0x4fd360(0x3d0)] = function() {}
                            ,
                            aiptag[_0x4fd360(0x484)] = new aipPlayer(_0x578829);
                        }),
                        _0x46c0ee = !![];
                    } catch (_0x525c3e) {}
            }
            ,
            _0x2b6715['Ta'] = function() {
                var _0x5c7e9a = _0x2d6b4b;
                if (_typeof(aiptag[_0x5c7e9a(0x484)]) !== _0x5c7e9a(0x799)) {
                    try {
                        ga(_0x5c7e9a(0x4ae), _0x5c7e9a(0x83d), _0x5c7e9a(0x3ab), _0x4cd94d['H']['I'] + _0x5c7e9a(0x28d));
                    } catch (_0x2c8735) {}
                    ;_0x148283['f']['g'](_0x4070bd, 0x1),
                    !_0x276741['on'] && aiptag['cmd'][_0x5c7e9a(0x3a7)]['push'](function() {
                        var _0x23dda6 = _0x5c7e9a;
                        aiptag[_0x23dda6(0x484)][_0x23dda6(0x495)]();
                    });
                } else {
                    try {
                        ga(_0x5c7e9a(0x4ae), 'event', 'antiadblocker', _0x4cd94d['H']['I'] + _0x5c7e9a(0x206));
                    } catch (_0x554ef4) {}
                    ;(function _0x2a204d() {
                        var _0x4883a1 = _0x5c7e9a;
                        $('#adbl-1')[_0x4883a1(0x440)](_0xbc3655['U'](_0x4883a1(0x214))),
                        $(_0x4883a1(0x3da))[_0x4883a1(0x440)](_0xbc3655['U']('index.game.antiadblocker.msg2')),
                        $(_0x4883a1(0x816))[_0x4883a1(0x440)](_0xbc3655['U'](_0x4883a1(0x788))),
                        $('#adbl-4')[_0x4883a1(0x440)](_0xbc3655['U']('index.game.antiadblocker.msg4')['replace'](_0x4883a1(0x2d1), 0xa)),
                        $(_0x4883a1(0x5db))[_0x4883a1(0x440)](_0xbc3655['U'](_0x4883a1(0x48c))),
                        _0x148283['f']['h']($(_0x4883a1(0x42d)), 0x1),
                        _0x148283['f']['g'](_0x568eff, 0x1f4);
                        var _0x2be124 = 0xa;
                        for (var _0x5a79d5 = 0x0; _0x5a79d5 < 0xa; _0x5a79d5++) {
                            _0xbc3655['Y'](function() {
                                var _0x2fdca8 = _0x4883a1;
                                _0x2be124--,
                                $(_0x2fdca8(0x4c9))[_0x2fdca8(0x440)](_0xbc3655['U'](_0x2fdca8(0x1fe))['replace'](_0x2fdca8(0x2d1), _0x2be124));
                                if (_0x2be124 === 0x0) {
                                    try {
                                        ga(_0x2fdca8(0x4ae), _0x2fdca8(0x83d), _0x2fdca8(0x519), _0x4cd94d['H']['I'] + _0x2fdca8(0x68a));
                                    } catch (_0x155448) {}
                                    ;_0x148283['f']['g']($(_0x2fdca8(0x42d)), 0xc8);
                                }
                            }, (_0x5a79d5 + 0x1) * 0x3e8);
                        }
                    }());
                }
            }
            ,
            _0x2b6715;
        }
        ,
        _0xbc3655['Ua'] = function(_0x430add, _0x3959d2) {
            var _0x1bf0e7 = $('#' + _0x430add)
              , _0x30932f = _0x3959d2
              , _0x23e29c = {}
              , _0x157ee7 = ![];
            return _0x23e29c['Sa'] = function() {
                var _0x1de655 = _0x31dd;
                if (!_0x157ee7) {
                    _0x1bf0e7[_0x1de655(0x534)](),
                    _0x1bf0e7[_0x1de655(0x294)](_0x1de655(0x694) + _0x30932f + _0x1de655(0x88b));
                    try {
                        try {
                            ga('send', _0x1de655(0x83d), _0x1de655(0x27c), _0x4cd94d['H']['I'] + _0x1de655(0x850));
                        } catch (_0x124895) {}
                        ;!_0x276741['on'] && aiptag[_0x1de655(0x3e4)][_0x1de655(0x5ee)]['push'](function() {
                            var _0x3ca9bf = _0x1de655;
                            aipDisplayTag[_0x3ca9bf(0x5ee)](_0x30932f);
                        }),
                        _0x157ee7 = !![];
                    } catch (_0x28b212) {}
                }
            }
            ,
            _0x23e29c['Va'] = function() {
                var _0x32a6a0 = _0x31dd;
                try {
                    try {
                        ga('send', _0x32a6a0(0x83d), _0x32a6a0(0x27c), _0x4cd94d['H']['I'] + '_refresh');
                    } catch (_0x445239) {}
                    ;!_0x276741['on'] && aiptag[_0x32a6a0(0x3e4)][_0x32a6a0(0x5ee)]['push'](function() {
                        var _0x320517 = _0x32a6a0;
                        aipDisplayTag[_0x320517(0x5ee)](_0x30932f);
                    });
                } catch (_0xa9cdb2) {}
            }
            ,
            _0x23e29c;
        }
        ,
        _0xa8b9d9['Wa'] = (function() {
            var _0x155a1b = _0x434858;
            function _0x14124b(_0xf93a6d, _0x421127, _0x3674fb, _0x39ace2, _0x273705, _0x2e44ea, _0x54b30c, _0x500e29, _0x5b25ba, _0xcec8fb) {
                this['Xa'] = _0xf93a6d,
                this['Ya'] = _0x421127,
                this['Za'] = null,
                this['$a'] = ![],
                this['_a'] = _0x3674fb,
                this['ab'] = _0x39ace2,
                this['bb'] = _0x273705,
                this['cb'] = _0x2e44ea,
                this['db'] = _0x54b30c || (_0x5b25ba || _0x273705) / 0x2,
                this['eb'] = _0x500e29 || (_0xcec8fb || _0x2e44ea) / 0x2,
                this['fb'] = _0x5b25ba || _0x273705,
                this['gb'] = _0xcec8fb || _0x2e44ea,
                this['hb'] = 0.5 - (this['db'] - this['fb'] * 0.5) / this['bb'],
                this['ib'] = 0.5 - (this['eb'] - this['gb'] * 0.5) / this['cb'],
                this['jb'] = this['bb'] / this['fb'],
                this['kb'] = this['cb'] / this['gb'];
            }
            return _0x14124b['lb'] = function() {
                return new _0x14124b('',null,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0);
            }
            ,
            _0x14124b['mb'] = function(_0x1e60dd, _0x4ed37a, _0x3fce9d) {
                return new _0x14124b(_0x1e60dd,_0x4ed37a,_0x3fce9d['x'],_0x3fce9d['y'],_0x3fce9d['w'],_0x3fce9d['h'],_0x3fce9d['px'],_0x3fce9d['py'],_0x3fce9d['pw'],_0x3fce9d['ph']);
            }
            ,
            _0x14124b[_0x155a1b(0x2a8)]['nb'] = function() {
                return !this['$a'] && (this['Ya'] != null && (this['Za'] = new _0x148283['k']['n'](this['Ya'],new _0x148283['k']['r'](this['_a'],this['ab'],this['bb'],this['cb']))),
                this['$a'] = !![]),
                this['Za'];
            }
            ,
            _0x14124b[_0x155a1b(0x2a8)]['ob'] = function() {
                var _0x394598 = _0x155a1b;
                this['Za'] != null && this['Za'][_0x394598(0x755)]();
            }
            ,
            _0x14124b;
        }()),
        _0xa8b9d9['pb'] = (function() {
            var _0x167182 = _0x434858;
            function _0xf0ce4e(_0x5c15c1, _0x444f85, _0x22ee9d, _0x481634, _0x3e2303, _0x2f8814, _0x454b57, _0x579a97, _0x76c351, _0x3ca884, _0x91d84d, _0x23ef27, _0x4d616b, _0x141048, _0x404e80, _0x2c5ce3, _0x1729ab, _0x2ae378) {
                this['qb'] = _0x5c15c1,
                this['rb'] = _0x444f85,
                this['sb'] = _0x22ee9d,
                this['tb'] = _0x481634,
                this['ub'] = _0x3e2303,
                this['vb'] = _0x2f8814,
                this['wb'] = _0x454b57,
                this['xb'] = _0x579a97,
                this['yb'] = _0x76c351,
                this['zb'] = _0x3ca884,
                this['Ab'] = _0x91d84d,
                this['Bb'] = _0x23ef27,
                this['Cb'] = _0x4d616b,
                this['Db'] = _0x141048,
                this['Eb'] = _0x404e80,
                this['Fb'] = _0x2c5ce3,
                this['Gb'] = _0x1729ab,
                this['Hb'] = _0x2ae378;
            }
            return _0xf0ce4e['prototype']['ob'] = function() {
                var _0x58ea1f = _0x31dd;
                for (var _0x1f04b7 = 0x0; _0x1f04b7 < this['qb'][_0x58ea1f(0x2a1)]; _0x1f04b7++) {
                    this['qb'][_0x1f04b7][_0x58ea1f(0x830)](),
                    this['qb'][_0x1f04b7][_0x58ea1f(0x755)]();
                }
                ;this['qb'] = [];
                for (var _0x2eedd2 = 0x0; _0x2eedd2 < this['rb'][_0x58ea1f(0x2a1)]; _0x2eedd2++) {
                    this['rb'][_0x2eedd2]['ob']();
                }
                ;this['rb'] = [];
            }
            ,
            _0xf0ce4e['lb'] = function() {
                var _0x17f879 = _0x31dd
                  , _0x3ba4bc = new _0xf0ce4e['Ib'](_0xa8b9d9['Kb']['Jb'],_0xa8b9d9['Kb']['Jb'])
                  , _0x2834f3 = new _0xf0ce4e['Lb'](_0x17f879(0x7c3),[_0xa8b9d9['Kb']['Jb']],[_0xa8b9d9['Kb']['Jb']]);
                return new _0xf0ce4e([],[],{},_0x3ba4bc,{},new _0xf0ce4e['Mb'](_0xa8b9d9['Kb']['Jb']),{},_0x2834f3,{},new _0xf0ce4e['Nb']('',_0x2834f3,_0x3ba4bc),{},new _0xf0ce4e['Ob']([_0xa8b9d9['Kb']['Jb']]),{},new _0xf0ce4e['Ob']([_0xa8b9d9['Kb']['Jb']]),{},new _0xf0ce4e['Ob']([_0xa8b9d9['Kb']['Jb']]),{},new _0xf0ce4e['Ob']([_0xa8b9d9['Kb']['Jb']]));
            }
            ,
            _0xf0ce4e['Pb'] = function(_0x1a83f7, _0x488e3f, _0x292577, _0x461010) {
                var _0x2801b1 = new _0xf0ce4e['Ib'](_0xa8b9d9['Kb']['Jb'],_0xa8b9d9['Kb']['Jb'])
                  , _0x115476 = new _0xf0ce4e['Lb']('#ffffff',[_0x1a83f7],[_0x488e3f]);
                return new _0xf0ce4e([],[],{},_0x2801b1,{},new _0xf0ce4e['Mb'](_0xa8b9d9['Kb']['Jb']),{},_0x115476,{},new _0xf0ce4e['Nb']('',_0x115476,_0x2801b1),{},new _0xf0ce4e['Ob']([_0x292577]),{},new _0xf0ce4e['Ob']([_0x461010]),{},new _0xf0ce4e['Ob']([_0xa8b9d9['Kb']['Jb']]),{},new _0xf0ce4e['Ob']([_0xa8b9d9['Kb']['Jb']]));
            }
            ,
            _0xf0ce4e['Qb'] = function(_0x490c51, _0x1b3f57, _0x30b6e2, _0x6d2bf4) {
                var _0x378e32 = _0x31dd
                  , _0x4d822d = {};
                _0xbc3655['Da'](_0x490c51[_0x378e32(0x48f)], function(_0x366ec5, _0x3a7866) {
                    _0x4d822d[_0x366ec5] = '#' + _0x3a7866;
                });
                var _0x6240b9 = {};
                for (var _0x3f8cd1 = 0x0; _0x3f8cd1 < _0x490c51['skinArrayDict'][_0x378e32(0x2a1)]; _0x3f8cd1++) {
                    var _0x536aea = _0x490c51['skinArrayDict'][_0x3f8cd1];
                    _0x6240b9[_0x536aea['id']] = new _0xf0ce4e['Lb'](_0x4d822d[_0x536aea[_0x378e32(0x790)]],_0x536aea[_0x378e32(0x84f)][_0x378e32(0x50d)](function(_0x5e6780) {
                        return _0x1b3f57[_0x5e6780];
                    }),_0x536aea[_0x378e32(0x698)][_0x378e32(0x50d)](function(_0x51a990) {
                        return _0x1b3f57[_0x51a990];
                    }));
                }
                ;var _0xc37566, _0x34efd3 = _0x490c51[_0x378e32(0x354)];
                _0xc37566 = new _0xf0ce4e['Lb'](_0x4d822d[_0x34efd3[_0x378e32(0x790)]],_0x34efd3[_0x378e32(0x84f)][_0x378e32(0x50d)](function(_0x4899b7) {
                    return _0x1b3f57[_0x4899b7];
                }),_0x34efd3['glow'][_0x378e32(0x50d)](function(_0x5326ec) {
                    return _0x1b3f57[_0x5326ec];
                }));
                var _0x50ef0c = {};
                _0xbc3655['Da'](_0x490c51[_0x378e32(0x1fd)], function(_0x24d00a, _0x347df7) {
                    var _0x37fa16 = _0x378e32;
                    _0x50ef0c[parseInt(_0x24d00a)] = new _0xf0ce4e['Ob'](_0x347df7[_0x37fa16(0x84f)]['map'](function(_0x2cd04d) {
                        return _0x1b3f57[_0x2cd04d['region']];
                    }));
                });
                var _0x368594 = new _0xf0ce4e['Ob'](_0x490c51[_0x378e32(0x82a)]['base'][_0x378e32(0x50d)](function(_0x1a4e77) {
                    return _0x1b3f57[_0x1a4e77['region']];
                }))
                  , _0x2dfb0c = {};
                _0xbc3655['Da'](_0x490c51['mouthDict'], function(_0x32a8ad, _0x3137bf) {
                    var _0x134433 = _0x378e32;
                    _0x2dfb0c[parseInt(_0x32a8ad)] = new _0xf0ce4e['Ob'](_0x3137bf['base'][_0x134433(0x50d)](function(_0xf88a82) {
                        var _0x22ba7f = _0x134433;
                        return _0x1b3f57[_0xf88a82[_0x22ba7f(0x35f)]];
                    }));
                });
                var _0x1b4809 = new _0xf0ce4e['Ob'](_0x490c51[_0x378e32(0x1e1)][_0x378e32(0x84f)][_0x378e32(0x50d)](function(_0x829878) {
                    var _0x1f9dff = _0x378e32;
                    return _0x1b3f57[_0x829878[_0x1f9dff(0x35f)]];
                }))
                  , _0x375651 = {};
                _0xbc3655['Da'](_0x490c51[_0x378e32(0x597)], function(_0xe28e25, _0x5ec386) {
                    var _0x285995 = _0x378e32;
                    _0x375651[parseInt(_0xe28e25)] = new _0xf0ce4e['Ob'](_0x5ec386[_0x285995(0x84f)]['map'](function(_0x48f8d8) {
                        var _0xdee736 = _0x285995;
                        return _0x1b3f57[_0x48f8d8[_0xdee736(0x35f)]];
                    }));
                });
                var _0x38d643 = new _0xf0ce4e['Ob'](_0x490c51[_0x378e32(0x658)]['base'][_0x378e32(0x50d)](function(_0x29694c) {
                    return _0x1b3f57[_0x29694c['region']];
                }))
                  , _0x1c5053 = {};
                _0xbc3655['Da'](_0x490c51['glassesDict'], function(_0x35feea, _0x2b19d3) {
                    var _0x58820f = _0x378e32;
                    _0x1c5053[parseInt(_0x35feea)] = new _0xf0ce4e['Ob'](_0x2b19d3[_0x58820f(0x84f)]['map'](function(_0x166560) {
                        var _0x39db67 = _0x58820f;
                        return _0x1b3f57[_0x166560[_0x39db67(0x35f)]];
                    }));
                });
                var _0x2858b1 = new _0xf0ce4e['Ob'](_0x490c51[_0x378e32(0x7b0)][_0x378e32(0x84f)]['map'](function(_0x2fce23) {
                    var _0x50fcbf = _0x378e32;
                    return _0x1b3f57[_0x2fce23[_0x50fcbf(0x35f)]];
                }))
                  , _0x1f3020 = {};
                _0xbc3655['Da'](_0x490c51[_0x378e32(0x587)], function(_0x588671, _0x295e17) {
                    var _0x4d466d = _0x378e32;
                    _0x1f3020[_0x588671 = parseInt(_0x588671)] = new _0xf0ce4e['Ib'](_0x1b3f57[_0x295e17[_0x4d466d(0x84f)]],_0x1b3f57[_0x295e17[_0x4d466d(0x698)]]);
                });
                var _0x1c820f, _0x1e724a = _0x490c51[_0x378e32(0x1cd)];
                _0x1c820f = new _0xf0ce4e['Ib'](_0x1b3f57[_0x1e724a[_0x378e32(0x84f)]],_0x1b3f57[_0x1e724a[_0x378e32(0x698)]]);
                var _0x33c3da = {};
                _0xbc3655['Da'](_0x490c51[_0x378e32(0x748)], function(_0x5e5e80, _0xf45de3) {
                    var _0x5845ff = _0x378e32;
                    _0x33c3da[_0x5e5e80 = parseInt(_0x5e5e80)] = new _0xf0ce4e['Mb'](_0x1b3f57[_0xf45de3[_0x5845ff(0x84f)]]);
                });
                var _0xe0ca35, _0x14dcb4 = _0x490c51[_0x378e32(0x52b)];
                _0xe0ca35 = new _0xf0ce4e['Mb'](_0x1b3f57[_0x14dcb4[_0x378e32(0x84f)]]);
                var _0x116527 = {};
                _0xbc3655['Da'](_0x490c51[_0x378e32(0x4e5)], function(_0x56e293, _0x1d2279) {
                    var _0x2df143 = _0x378e32;
                    _0x116527[_0x56e293 = parseInt(_0x56e293)] = new _0xf0ce4e['Nb'](_0x1d2279[_0x2df143(0x745)],new _0xf0ce4e['Lb'](_0x4d822d[_0x1d2279[_0x2df143(0x548)]['prime']],null,_0x1d2279['skin']['glow'][_0x2df143(0x50d)](function(_0x5b141c) {
                        return _0x1b3f57[_0x5b141c];
                    })),new _0xf0ce4e['Ib'](null,_0x1b3f57[_0x1d2279[_0x2df143(0x4d9)]['glow']]));
                });
                var _0x388f11 = new _0xf0ce4e['Nb']({},_0xc37566,_0x1c820f);
                return new _0xf0ce4e(_0x30b6e2,_0x6d2bf4,_0x1f3020,_0x1c820f,_0x33c3da,_0xe0ca35,_0x6240b9,_0xc37566,_0x116527,_0x388f11,_0x50ef0c,_0x368594,_0x2dfb0c,_0x1b4809,_0x375651,_0x38d643,_0x1c5053,_0x2858b1);
            }
            ,
            _0xf0ce4e[_0x167182(0x2a8)]['Rb'] = function(_0x4fff39) {
                var _0x2c131c = _0x167182
                  , _0x4d8ff6 = _0xbc3655['Ea'](Object[_0x2c131c(0x641)](this['wb']))[_0x2c131c(0x7b7)](0x0, _0x4fff39)
                  , _0x5f56f9 = _0xbc3655['Ea'](Object[_0x2c131c(0x641)](this['Ab']))[_0x2c131c(0x7b7)](0x0, _0x4fff39)
                  , _0x171af3 = _0xbc3655['Ea'](Object[_0x2c131c(0x641)](this['Cb']))[_0x2c131c(0x7b7)](0x0, _0x4fff39)
                  , _0x2d7201 = _0xbc3655['Ea'](Object[_0x2c131c(0x641)](this['Eb']))[_0x2c131c(0x7b7)](0x0, _0x4fff39)
                  , _0x56a925 = _0xbc3655['Ea'](Object[_0x2c131c(0x641)](this['Gb']))[_0x2c131c(0x7b7)](0x0, _0x4fff39)
                  , _0x2168c8 = [];
                for (var _0x2b9b25 = 0x0; _0x2b9b25 < _0x4fff39; _0x2b9b25++) {
                    var _0x32413e = _0x4d8ff6[_0x2c131c(0x2a1)] > 0x0 ? _0x4d8ff6[_0x2b9b25 % _0x4d8ff6[_0x2c131c(0x2a1)]] : 0x0
                      , _0x1c45a4 = _0x5f56f9['length'] > 0x0 ? _0x5f56f9[_0x2b9b25 % _0x5f56f9['length']] : 0x0
                      , _0x3d4e98 = _0x171af3['length'] > 0x0 ? _0x171af3[_0x2b9b25 % _0x171af3[_0x2c131c(0x2a1)]] : 0x0
                      , _0x1d786a = _0x2d7201[_0x2c131c(0x2a1)] > 0x0 ? _0x2d7201[_0x2b9b25 % _0x2d7201[_0x2c131c(0x2a1)]] : 0x0
                      , _0x344c38 = _0x56a925['length'] > 0x0 ? _0x56a925[_0x2b9b25 % _0x56a925[_0x2c131c(0x2a1)]] : 0x0;
                    _0x2168c8[_0x2c131c(0x23c)](new _0xa8b9d9['Sb'](_0x32413e,_0x1c45a4,_0x3d4e98,_0x1d786a,_0x344c38));
                }
                ;return _0x2168c8;
            }
            ,
            _0xf0ce4e['prototype']['Tb'] = function(_0x4cd9f0) {
                var _0x15ad70 = _0x167182;
                return this['wb'][_0x15ad70(0x88d)](_0x4cd9f0) ? this['wb'][_0x4cd9f0] : this['xb'];
            }
            ,
            _0xf0ce4e[_0x167182(0x2a8)]['Ub'] = function(_0x40a5d3) {
                var _0x2eb5d5 = _0x167182;
                return this['yb'][_0x2eb5d5(0x88d)](_0x40a5d3) ? this['yb'][_0x40a5d3] : this['zb'];
            }
            ,
            _0xf0ce4e[_0x167182(0x2a8)]['Vb'] = function(_0x1df999) {
                var _0x1b8cc1 = _0x167182;
                return this['Ab'][_0x1b8cc1(0x88d)](_0x1df999) ? this['Ab'][_0x1df999] : this['Bb'];
            }
            ,
            _0xf0ce4e[_0x167182(0x2a8)]['Wb'] = function(_0xe1981a) {
                var _0x3c7e40 = _0x167182;
                return this['Cb'][_0x3c7e40(0x88d)](_0xe1981a) ? this['Cb'][_0xe1981a] : this['Db'];
            }
            ,
            _0xf0ce4e['prototype']['Xb'] = function(_0x2c3883) {
                var _0x32ab0d = _0x167182;
                return this['Gb'][_0x32ab0d(0x88d)](_0x2c3883) ? this['Gb'][_0x2c3883] : this['Hb'];
            }
            ,
            _0xf0ce4e[_0x167182(0x2a8)]['Yb'] = function(_0x26fc10) {
                return this['Eb']['hasOwnProperty'](_0x26fc10) ? this['Eb'][_0x26fc10] : this['Fb'];
            }
            ,
            _0xf0ce4e[_0x167182(0x2a8)]['Zb'] = function(_0x542ac9) {
                var _0x3310a7 = _0x167182;
                return this['sb'][_0x3310a7(0x88d)](_0x542ac9) ? this['sb'][_0x542ac9] : this['tb'];
            }
            ,
            _0xf0ce4e[_0x167182(0x2a8)]['$b'] = function(_0x345c0e) {
                return this['ub']['hasOwnProperty'](_0x345c0e) ? this['ub'][_0x345c0e] : this['vb'];
            }
            ,
            _0xf0ce4e['Nb'] = function _0x2307e6(_0x405046, _0x361949, _0x27ae12) {
                this['_b'] = _0x405046,
                this['ac'] = _0x361949,
                this['bc'] = _0x27ae12;
            }
            ,
            _0xf0ce4e['Lb'] = function _0xd8e6ed(_0x5df12d, _0x3bdec9, _0x4344a8) {
                this['cc'] = _0x5df12d,
                this['dc'] = _0x3bdec9,
                this['ec'] = _0x4344a8;
            }
            ,
            _0xf0ce4e['Ob'] = function _0x48253a(_0x33e2e1) {
                this['dc'] = _0x33e2e1;
            }
            ,
            _0xf0ce4e['Ib'] = function _0x1ef1b8(_0x145ed2, _0x4c96dd) {
                this['dc'] = _0x145ed2,
                this['ec'] = _0x4c96dd;
            }
            ,
            _0xf0ce4e['Mb'] = function _0x30f58e(_0x41d9f5) {
                this['dc'] = _0x41d9f5;
            }
            ,
            _0xf0ce4e;
        }()),
        _0xa8b9d9['Kb'] = (function() {
            var _0x51eb4c = _0x434858;
            function _0x5ea232() {
                var _0xf84bef = _0x31dd
                  , _0xb2abf1 = _0x148283['k']['m'][_0xf84bef(0x456)]('/images/wear-ability.png');
                this['fc'] = new _0xa8b9d9['Wa'](_0xf84bef(0x222),_0xb2abf1,0x9e,0x56,0x43,0x7c,0x94,63.5,0x80,0x80),
                this['gc'] = new _0xa8b9d9['Wa'](_0xf84bef(0x713),_0xb2abf1,0x9e,0x4,0x57,0x4a,0xcb,63.5,0x80,0x80),
                this['hc'] = new _0xa8b9d9['Wa'](_0xf84bef(0x274),_0xb2abf1,0x4,0x4,0x92,0x92,63.5,63.5,0x80,0x80);
                var _0x27680c = _0x148283['k']['m']['from'](_0xf84bef(0x22b));
                this[_0xf84bef(0x81c)] = new _0xa8b9d9['Wa'](_0xf84bef(0x274),_0x27680c,0x9c,0x8c,0x57,0x3c,0xaa,128.5,0x80,0x80);
                var _0x17f482, _0x424590 = _0x148283['k']['m']['from'](_0xf84bef(0x4e9)), _0xd48e8b = new _0xa8b9d9['Wa']('def_eyes',_0x424590,0x0,0x0,0x2a,0x50,0x4b,0x40,0x80,0x80), _0x1882b0 = new _0xa8b9d9['Wa'](_0xf84bef(0x44a),_0x424590,0x2e,0x0,0x14,0x30,0x6d,0x3f,0x80,0x80), _0x2ec858 = new _0xa8b9d9['Wa'](_0xf84bef(0x1f2),_0x424590,0x46,0x0,0x20,0x20,0x0,0x0,0x0,0x0), _0x1ef32a = new _0xa8b9d9['Wa']('def_skin_base',_0x424590,0x2e,0x34,0x40,0x40,0x0,0x0,0x0,0x0), _0x32907b = _0xa8b9d9['pb']['Pb'](_0x1ef32a, _0x2ec858, _0xd48e8b, _0x1882b0);
                this['ic'] = new _0xa8b9d9['jc']({},_0x32907b),
                this['kc'] = -0x2710,
                this['lc'] = -0x2710,
                this['mc'] = ((_0x17f482 = _0xa8b9d9['c'][_0xf84bef(0x345)]['createElement'](_0xf84bef(0x271)))['width'] = 0x50,
                _0x17f482[_0xf84bef(0x6f1)] = 0x50,
                {
                    'nc': _0x17f482,
                    'oc': _0x17f482[_0xf84bef(0x3e6)]('2d'),
                    'Za': new _0x148283['k']['n'](_0x148283['k']['m'][_0xf84bef(0x456)](_0x17f482))
                }),
                this['pc'] = null,
                this['qc'] = [];
            }
            return _0x5ea232['Jb'] = _0xa8b9d9['Wa']['lb'](),
            _0x5ea232[_0x51eb4c(0x2a8)]['Sa'] = function() {}
            ,
            _0x5ea232['prototype']['rc'] = function(_0x549ec8, _0x49bee0, _0x1354ea) {
                var _0x5474fd = this
                  , _0x46e286 = this['ic']['sc']();
                if (_0x46e286 > 0x0 && _0xbc3655['Ca']() - this['kc'] < 0x124f80) {
                    _0x549ec8 != null && _0x549ec8();
                    return;
                }
                ;if (this['pc'] != null && !this['pc']['tc']()) {
                    if (_0xbc3655['Ca']() - this['kc'] < 0x493e0) {
                        _0x549ec8 != null && _0x549ec8();
                        return;
                    }
                    ;this['pc']['uc'](),
                    this['pc'] = null;
                }
                ;var _0x2dfefc = new _0xa8b9d9['vc'](_0x46e286);
                _0x2dfefc['wc'](function(_0x30910c, _0x1422b7) {
                    _0x2dfefc === _0x5474fd['pc'] && _0x1354ea != null && _0x1354ea(_0x30910c, _0x1422b7);
                }),
                _0x2dfefc['xc'](function(_0x343777) {
                    _0x2dfefc === _0x5474fd['pc'] && _0x49bee0 != null && _0x49bee0(_0x343777);
                }),
                _0x2dfefc['yc'](function() {
                    _0x2dfefc === _0x5474fd['pc'] && _0x49bee0 != null && _0x49bee0(Error());
                }),
                _0x2dfefc['zc'](function() {
                    _0x2dfefc === _0x5474fd['pc'] && _0x549ec8 != null && _0x549ec8();
                }),
                _0x2dfefc['Ac'](function(_0xdcfff) {
                    if (_0x2dfefc === _0x5474fd['pc']) {
                        _0x5474fd['lc'] = _0xbc3655['Ca'](),
                        _0x5474fd['pc'] = null,
                        _0x5474fd['Bc'](),
                        _0x5474fd['ic']['Cc']()['ob'](),
                        _0x5474fd['ic'] = _0xdcfff;
                        _0x549ec8 != null && _0x549ec8();
                        _0x5474fd['Dc']();
                        return;
                    }
                    ;try {
                        _0xdcfff['Cc']()['ob']();
                    } catch (_0x5f3c5e) {}
                }),
                _0x2dfefc['Ec'](),
                this['kc'] = _0xbc3655['Ca'](),
                this['pc'] = _0x2dfefc;
            }
            ,
            _0x5ea232[_0x51eb4c(0x2a8)]['Bc'] = function() {}
            ,
            _0x5ea232[_0x51eb4c(0x2a8)]['Fc'] = function() {
                return this['ic']['sc']() > 0x0;
            }
            ,
            _0x5ea232[_0x51eb4c(0x2a8)]['Gc'] = function() {
                return this['ic']['Hc']();
            }
            ,
            _0x5ea232[_0x51eb4c(0x2a8)]['Ic'] = function() {
                return this['mc'];
            }
            ,
            _0x5ea232[_0x51eb4c(0x2a8)]['Jc'] = function(_0xeeb407) {
                var _0x23540d = _0x51eb4c;
                this['qc'][_0x23540d(0x23c)](_0xeeb407);
            }
            ,
            _0x5ea232[_0x51eb4c(0x2a8)]['Dc'] = function() {
                var _0x13daaf = _0x51eb4c;
                for (var _0xfc5ef = 0x0; _0xfc5ef < this['qc'][_0x13daaf(0x2a1)]; _0xfc5ef++) {
                    this['qc'][_0xfc5ef]();
                }
            }
            ,
            _0x5ea232[_0x51eb4c(0x2a8)]['Cc'] = function() {
                return this['ic']['Cc']();
            }
            ,
            _0x5ea232;
        }()),
        _0xa8b9d9['Kc'] = (function() {
            function _0x3f1703(_0x35033b) {
                this['Lc'] = _0x35033b;
            }
            return _0x3f1703['prototype']['Mc'] = function(_0x348684) {
                return this['Lc'][_0x348684];
            }
            ,
            _0x3f1703['Nc'] = (function() {
                var _0x54e6e9 = _0x31dd;
                function _0x18a6ed() {
                    this['Oc'] = [];
                }
                return _0x18a6ed[_0x54e6e9(0x2a8)]['Pc'] = function(_0x15fc2d, _0x41a85f) {
                    var _0x92850c = _0x54e6e9;
                    for (var _0x358f1b = 0x0; _0x358f1b < this['Oc'][_0x92850c(0x2a1)]; _0x358f1b++) {
                        if (this['Oc'][_0x358f1b]['Qc'] === _0x15fc2d)
                            throw Error();
                    }
                    ;return this['Oc']['push'](new _0x3f1703['Rc'](_0x15fc2d,_0x41a85f)),
                    this;
                }
                ,
                _0x18a6ed['prototype']['Sc'] = function() {
                    var _0x5befe9 = _0x54e6e9
                      , _0x368ba7 = 0x0;
                    for (var _0x1c25de = 0x0; _0x1c25de < this['Oc']['length']; _0x1c25de++) {
                        _0x368ba7 += this['Oc'][_0x1c25de]['Tc'];
                    }
                    ;var _0x4d3ea9 = {}
                      , _0x243068 = 0x0;
                    for (var _0xcd730d = 0x0; _0xcd730d < this['Oc'][_0x5befe9(0x2a1)]; _0xcd730d++) {
                        var _0x327f6c = this['Oc'][_0xcd730d];
                        _0x327f6c['Tc'] = _0x327f6c['Tc'] / _0x368ba7,
                        _0x327f6c['Uc'] = _0x243068,
                        _0x327f6c['Vc'] = _0x243068 + _0x327f6c['Tc'],
                        _0x243068 = _0x327f6c['Vc'],
                        _0x4d3ea9[_0x327f6c['Qc']] = _0x327f6c;
                    }
                    ;return new _0x3f1703(_0x4d3ea9);
                }
                ,
                _0x18a6ed;
            }()),
            _0x3f1703['Rc'] = (function() {
                var _0x2da90c = _0x31dd;
                function _0x8fc067(_0x1eb6e6, _0x4db623) {
                    this['Qc'] = _0x1eb6e6,
                    this['Tc'] = _0x4db623,
                    this['Uc'] = 0x0,
                    this['Vc'] = 0x0;
                }
                return _0x8fc067[_0x2da90c(0x2a8)]['Wc'] = function(_0x54ec39) {
                    return this['Uc'] + (this['Vc'] - this['Uc']) * _0x54ec39;
                }
                ,
                _0x8fc067;
            }()),
            _0x3f1703;
        }()),
        _0xa8b9d9['Xc'] = (function() {
            var _0x5f291e = _0x434858;
            function _0x59fd4f() {
                var _0x22ca9c = _0x31dd;
                this['Yc'] = new _0x148283['k']['l'](),
                this['Yc']['sortableChildren'] = !![],
                this['Zc'] = new _0x58c6b9(),
                this['Zc'][_0x22ca9c(0x21f)] = _0x36b026 * ((_0x110e90 + 0x1) * 0x2 + 0x1 + 0x3),
                this['$c'] = 0x0,
                this['_c'] = Array(_0x110e90),
                this['_c'][0x0] = this['ad'](0x0, new _0xa8b9d9['bd'](), new _0xa8b9d9['bd']());
                for (var _0x1142b0 = 0x1; _0x1142b0 < _0x110e90; _0x1142b0++) {
                    this['_c'][_0x1142b0] = this['ad'](_0x1142b0, new _0xa8b9d9['bd'](), new _0xa8b9d9['bd']());
                }
                ;this['cd'] = 0x0,
                this['dd'] = 0x0,
                this['ed'] = 0x0;
            }
            var _0x4a254f, _0x36b026 = 0.001, _0x110e90 = 0x31d, _0x4c9db2 = _0x4cd94d['T'] * 0.1;
            _0x59fd4f['fd'] = _0x110e90,
            _0x59fd4f[_0x5f291e(0x2a8)]['ad'] = function(_0x38e6d3, _0xeea4cf, _0x3df915) {
                var _0x1d3f6f = _0x5f291e
                  , _0x5b5160 = new _0x486334(_0xeea4cf,_0x3df915);
                return _0xeea4cf['gd'][_0x1d3f6f(0x21f)] = _0x36b026 * ((_0x110e90 - _0x38e6d3) * 0x2 + 0x1 + 0x3),
                _0x3df915['gd'][_0x1d3f6f(0x21f)] = _0x36b026 * ((_0x110e90 - _0x38e6d3) * 0x2 - 0x2 + 0x3),
                _0x5b5160;
            }
            ,
            _0x59fd4f[_0x5f291e(0x2a8)]['hd'] = function(_0x1164b9, _0x4a3738, _0x3a8ab1, _0x171037, _0x306068, _0x1e09e5, _0x54ad56, _0x4c3a9a) {
                var _0x1bf545 = _0x5f291e
                  , _0x14d408 = _0x3a8ab1['dc']
                  , _0x39e09b = _0x1164b9 === _0xa8b9d9['jd']['id'] ? _0x4a3738['ac']['ec'] : _0x3a8ab1['ec'];
                if (_0x14d408[_0x1bf545(0x2a1)] > 0x0 && _0x39e09b[_0x1bf545(0x2a1)] > 0x0)
                    for (var _0x3ae76c = 0x0; _0x3ae76c < this['_c'][_0x1bf545(0x2a1)]; _0x3ae76c++) {
                        this['_c'][_0x3ae76c]['ld']['kd'](_0x14d408[_0x3ae76c % _0x14d408[_0x1bf545(0x2a1)]]),
                        this['_c'][_0x3ae76c]['md']['kd'](_0x39e09b[_0x3ae76c % _0x39e09b['length']]),
                        this['_c'][_0x3ae76c]['ld']['nd'](_0x4c3a9a),
                        this['_c'][_0x3ae76c]['md']['nd'](_0x4c3a9a);
                    }
                ;this['Zc']['hd'](_0x171037, _0x306068, _0x1e09e5, _0x54ad56);
            }
            ,
            (_0x4a254f = _0xbc3655['ca'](_0x148283['k']['l'], function() {
                var _0x7dc072 = _0x5f291e;
                _0x148283['k']['l']['call'](this),
                this[_0x7dc072(0x473)] = !![],
                this['od'] = [],
                this['pd'] = [],
                this['qd'] = [],
                this['rd'] = [],
                this['sd'] = new _0x148283['k']['l'](),
                this['td'] = [];
                for (var _0x3edfe5 = 0x0; _0x3edfe5 < 0x4; _0x3edfe5++) {
                    var _0x4a3ec4 = new _0xa8b9d9['bd']();
                    _0x4a3ec4['kd'](ooo['ud']['fc']),
                    this['sd'][_0x7dc072(0x812)](_0x4a3ec4['gd']),
                    this['td']['push'](_0x4a3ec4);
                }
                ;this['sd']['zIndex'] = 0.0011,
                this['addChild'](this['sd']),
                this['vd'](),
                this['wd'] = new _0xa8b9d9['bd'](),
                this['wd']['kd'](ooo['ud']['gc']),
                this['wd']['gd'][_0x7dc072(0x21f)] = 0.001,
                this[_0x7dc072(0x812)](this['wd']['gd']),
                this['xd'](),
                this[_0x7dc072(0x3eb)] = new _0xa8b9d9['bd'](),
                this['pwr_flex']['kd'](ooo['ud'][_0x7dc072(0x81c)]),
                this['pwr_flex']['gd']['zIndex'] = 0.001,
                this['addChild'](this[_0x7dc072(0x3eb)]['gd']),
                this[_0x7dc072(0x643)]();
            }))[_0x5f291e(0x2a8)]['hd'] = function(_0x37f67d, _0x211ff8, _0x4c237e, _0x571ea7) {
                this['yd'](0.002, this['od'], _0x37f67d['dc']),
                this['yd'](0.003, this['pd'], _0x211ff8['dc']),
                this['yd'](0.004, this['rd'], _0x571ea7['dc']),
                this['yd'](0.005, this['qd'], _0x4c237e['dc']);
            }
            ,
            _0x4a254f[_0x5f291e(0x2a8)]['yd'] = function(_0x581e84, _0x49516c, _0x1c9951) {
                var _0xe26a75 = _0x5f291e;
                while (_0x1c9951['length'] > _0x49516c[_0xe26a75(0x2a1)]) {
                    var _0x3142e7 = new _0xa8b9d9['bd']();
                    _0x49516c[_0xe26a75(0x23c)](_0x3142e7),
                    this['addChild'](_0x3142e7['zd']());
                }
                ;while (_0x1c9951[_0xe26a75(0x2a1)] < _0x49516c['length']) {
                    _0x49516c['pop']()['G']();
                }
                ;var _0x137e9c = _0x581e84;
                for (var _0xa1c915 = 0x0; _0xa1c915 < _0x1c9951['length']; _0xa1c915++) {
                    _0x137e9c += 0.0001;
                    var _0x277057 = _0x49516c[_0xa1c915];
                    _0x277057['kd'](_0x1c9951[_0xa1c915]),
                    _0x277057['gd']['zIndex'] = _0x137e9c;
                }
            }
            ,
            _0x4a254f['prototype']['Ad'] = function(_0x16376c, _0xa31f1, _0x2289c0, _0x1ccac0) {
                var _0x1dbefd = _0x5f291e;
                this[_0x1dbefd(0x62d)] = !![],
                this['position'][_0x1dbefd(0x25b)](_0x16376c, _0xa31f1),
                this[_0x1dbefd(0x3e9)] = _0x1ccac0;
                for (var _0x4b1d34 = 0x0; _0x4b1d34 < this['od'][_0x1dbefd(0x2a1)]; _0x4b1d34++) {
                    this['od'][_0x4b1d34]['Bd'](_0x2289c0);
                }
                ;for (var _0x51562b = 0x0; _0x51562b < this['pd'][_0x1dbefd(0x2a1)]; _0x51562b++) {
                    this['pd'][_0x51562b]['Bd'](_0x2289c0);
                }
                ;for (var _0x4c91b5 = 0x0; _0x4c91b5 < this['qd'][_0x1dbefd(0x2a1)]; _0x4c91b5++) {
                    this['qd'][_0x4c91b5]['Bd'](_0x2289c0);
                }
                ;for (var _0x411af8 = 0x0; _0x411af8 < this['rd'][_0x1dbefd(0x2a1)]; _0x411af8++) {
                    this['rd'][_0x411af8]['Bd'](_0x2289c0);
                }
            }
            ,
            _0x4a254f[_0x5f291e(0x2a8)]['Cd'] = function() {
                var _0x367f6b = _0x5f291e;
                this[_0x367f6b(0x62d)] = ![];
            }
            ,
            _0x4a254f[_0x5f291e(0x2a8)]['Dd'] = function(_0x59f741, _0x33bf6d, _0x10ebd4, _0x1e2ef9) {
                var _0x1befd3 = _0x5f291e;
                this['sd'][_0x1befd3(0x62d)] = !![];
                var _0x420886 = _0x10ebd4 / 0x3e8
                  , _0x3cdb03 = 0x1 / this['td'][_0x1befd3(0x2a1)];
                for (var _0xea37d = 0x0; _0xea37d < this['td'][_0x1befd3(0x2a1)]; _0xea37d++) {
                    var _0x3f76ec = 0x1 - (_0x420886 + _0x3cdb03 * _0xea37d) % 0x1;
                    this['td'][_0xea37d]['gd'][_0x1befd3(0x494)] = 0x1 - _0x3f76ec,
                    this['td'][_0xea37d]['Bd'](_0x33bf6d * (0.5 + _0x3f76ec * 4.5));
                }
            }
            ,
            _0x4a254f[_0x5f291e(0x2a8)]['vd'] = function() {
                var _0x2aef4b = _0x5f291e;
                this['sd'][_0x2aef4b(0x62d)] = ![];
            }
            ,
            _0x4a254f[_0x5f291e(0x2a8)]['Ed'] = function(_0x1d39cf, _0x3b9ff9, _0x4049ac, _0x20616f) {
                var _0x2ca864 = _0x5f291e;
                this['wd']['gd'][_0x2ca864(0x62d)] = _0x389039['vp'],
                this['wd']['gd'][_0x2ca864(0x494)] = _0xbc3655['ga'](this['wd']['gd'][_0x2ca864(0x494)], _0x1d39cf['Fd'] ? 0.9 : 0.2, _0x20616f, 0.0025),
                this['wd']['Bd'](_0x3b9ff9);
            }
            ,
            _0x4a254f[_0x5f291e(0x2a8)]['xd'] = function() {
                this['wd']['gd']['visible'] = ![];
            }
            ,
            _0x4a254f[_0x5f291e(0x2a8)][_0x5f291e(0x5ec)] = function(_0x466a13, _0x2449fe, _0x346894, _0x415266) {
                var _0x5477e9 = _0x5f291e;
                this[_0x5477e9(0x3eb)]['gd'][_0x5477e9(0x62d)] = _0x389039[_0x5477e9(0x7cd)],
                this[_0x5477e9(0x3eb)]['gd']['alpha'] = _0xbc3655['ga'](this['wd']['gd'][_0x5477e9(0x494)], _0x466a13['Fd'] ? 0.9 : 0.2, _0x415266, 0.0025),
                this[_0x5477e9(0x3eb)]['Bd'](_0x2449fe);
            }
            ,
            _0x4a254f[_0x5f291e(0x2a8)][_0x5f291e(0x643)] = function() {
                var _0x47e793 = _0x5f291e;
                this['pwr_flex']['gd'][_0x47e793(0x62d)] = ![];
            }
            ;
            var _0x58c6b9 = _0x4a254f;
            _0x59fd4f[_0x5f291e(0x2a8)]['Gd'] = function(_0x37c2d8) {
                return this['dd'] + this['ed'] * _0xbc3655['oa'](_0x37c2d8 * _0x4c9db2 - this['cd']);
            }
            ,
            _0x59fd4f[_0x5f291e(0x2a8)]['Hd'] = function(_0x45c66b, _0x27ad25, _0x36c31e, _0x28c026) {
                var _0x23f6a7 = _0x5f291e, _0x125afb, _0x94b5fd, _0x4d03fb, _0x4060a7, _0xdf6728, _0x1f3bd1, _0x1d5a0b, _0x122101, _0x51aef0 = _0x45c66b['Id'] * 0x2, _0x474796 = _0x45c66b['Jd'], _0x221e5f = _0x45c66b['Kd'], _0x2de231 = _0x221e5f * 0x4 - 0x3, _0x5a18aa = _0x2de231;
                this['cd'] = _0x27ad25 / 0x190 * _0x4cd94d['T'],
                this['dd'] = _0x51aef0 * 1.5,
                this['ed'] = _0x51aef0 * 0.15 * _0x45c66b['Ld'];
                if (_0x28c026(_0x94b5fd = _0x474796[0x0], _0x1f3bd1 = _0x474796[0x1])) {
                    _0x4d03fb = _0x474796[0x2],
                    _0x1d5a0b = _0x474796[0x3],
                    _0x4060a7 = _0x474796[0x4],
                    _0x122101 = _0x474796[0x5];
                    var _0x3b266c = _0xbc3655['ta'](_0x122101 + _0x1f3bd1 * 0x2 - _0x1d5a0b * 0x3, _0x4060a7 + _0x94b5fd * 0x2 - _0x4d03fb * 0x3);
                    this['Zc']['Ad'](_0x94b5fd, _0x1f3bd1, _0x51aef0, _0x3b266c),
                    this['_c'][0x0]['Ad'](_0x94b5fd, _0x1f3bd1, _0x51aef0, this['Gd'](0x0), _0x3b266c),
                    this['_c'][0x1]['Ad'](_0x94b5fd * 0.64453125 + _0x4d03fb * 0.45703125 + _0x4060a7 * -0.1015625, _0x1f3bd1 * 0.64453125 + _0x1d5a0b * 0.45703125 + _0x122101 * -0.1015625, _0x51aef0, this['Gd'](0x1), _0x486334['Md'](this['_c'][0x0], this['_c'][0x2])),
                    this['_c'][0x2]['Ad'](_0x94b5fd * 0.375 + _0x4d03fb * 0.75 + _0x4060a7 * -0.125, _0x1f3bd1 * 0.375 + _0x1d5a0b * 0.75 + _0x122101 * -0.125, _0x51aef0, this['Gd'](0x2), _0x486334['Md'](this['_c'][0x1], this['_c'][0x3])),
                    this['_c'][0x3]['Ad'](_0x94b5fd * 0.15234375 + _0x4d03fb * 0.94921875 + _0x4060a7 * -0.1015625, _0x1f3bd1 * 0.15234375 + _0x1d5a0b * 0.94921875 + _0x122101 * -0.1015625, _0x51aef0, this['Gd'](0x3), _0x486334['Md'](this['_c'][0x2], this['_c'][0x4]));
                } else
                    this['Zc']['Cd'](),
                    this['_c'][0x0]['Cd'](),
                    this['_c'][0x1]['Cd'](),
                    this['_c'][0x2]['Cd'](),
                    this['_c'][0x3]['Cd']();
                ;var _0x186e2a = 0x4;
                for (var _0x2c4306 = 0x2, _0x485415 = _0x221e5f * 0x2 - 0x4; _0x2c4306 < _0x485415; _0x2c4306 += 0x2) {
                    _0x28c026(_0x94b5fd = _0x474796[_0x2c4306], _0x1f3bd1 = _0x474796[_0x2c4306 + 0x1]) ? (_0x125afb = _0x474796[_0x2c4306 - 0x2],
                    _0xdf6728 = _0x474796[_0x2c4306 - 0x1],
                    _0x4d03fb = _0x474796[_0x2c4306 + 0x2],
                    _0x1d5a0b = _0x474796[_0x2c4306 + 0x3],
                    _0x4060a7 = _0x474796[_0x2c4306 + 0x4],
                    _0x122101 = _0x474796[_0x2c4306 + 0x5],
                    this['_c'][_0x186e2a]['Ad'](_0x94b5fd, _0x1f3bd1, _0x51aef0, this['Gd'](_0x186e2a), _0x486334['Md'](this['_c'][_0x186e2a - 0x1], this['_c'][_0x186e2a + 0x1])),
                    _0x186e2a++,
                    this['_c'][_0x186e2a]['Ad'](_0x125afb * -0.06640625 + _0x94b5fd * 0.84375 + _0x4d03fb * 0.2578125 + _0x4060a7 * -0.03515625, _0xdf6728 * -0.06640625 + _0x1f3bd1 * 0.84375 + _0x1d5a0b * 0.2578125 + _0x122101 * -0.03515625, _0x51aef0, this['Gd'](_0x186e2a), _0x486334['Md'](this['_c'][_0x186e2a - 0x1], this['_c'][_0x186e2a + 0x1])),
                    _0x186e2a++,
                    this['_c'][_0x186e2a]['Ad'](_0x125afb * -0.0625 + _0x94b5fd * 0.5625 + _0x4d03fb * 0.5625 + _0x4060a7 * -0.0625, _0xdf6728 * -0.0625 + _0x1f3bd1 * 0.5625 + _0x1d5a0b * 0.5625 + _0x122101 * -0.0625, _0x51aef0, this['Gd'](_0x186e2a), _0x486334['Md'](this['_c'][_0x186e2a - 0x1], this['_c'][_0x186e2a + 0x1])),
                    _0x186e2a++,
                    this['_c'][_0x186e2a]['Ad'](_0x125afb * -0.03515625 + _0x94b5fd * 0.2578125 + _0x4d03fb * 0.84375 + _0x4060a7 * -0.06640625, _0xdf6728 * -0.03515625 + _0x1f3bd1 * 0.2578125 + _0x1d5a0b * 0.84375 + _0x122101 * -0.06640625, _0x51aef0, this['Gd'](_0x186e2a), _0x486334['Md'](this['_c'][_0x186e2a - 0x1], this['_c'][_0x186e2a + 0x1])),
                    _0x186e2a++) : (this['_c'][_0x186e2a]['Cd'](),
                    _0x186e2a++,
                    this['_c'][_0x186e2a]['Cd'](),
                    _0x186e2a++,
                    this['_c'][_0x186e2a]['Cd'](),
                    _0x186e2a++,
                    this['_c'][_0x186e2a]['Cd'](),
                    _0x186e2a++);
                }
                ;_0x28c026(_0x94b5fd = _0x474796[_0x221e5f * 0x2 - 0x4], _0x1f3bd1 = _0x474796[_0x221e5f * 0x2 - 0x3]) ? (_0x125afb = _0x474796[_0x221e5f * 0x2 - 0x6],
                _0xdf6728 = _0x474796[_0x221e5f * 0x2 - 0x5],
                _0x4d03fb = _0x474796[_0x221e5f * 0x2 - 0x2],
                _0x1d5a0b = _0x474796[_0x221e5f * 0x2 - 0x1],
                this['_c'][_0x2de231 - 0x5]['Ad'](_0x94b5fd, _0x1f3bd1, _0x51aef0, this['Gd'](_0x2de231 - 0x5), _0x486334['Md'](this['_c'][_0x2de231 - 0x6], this['_c'][_0x2de231 - 0x4])),
                this['_c'][_0x2de231 - 0x4]['Ad'](_0x125afb * -0.1015625 + _0x94b5fd * 0.94921875 + _0x4d03fb * 0.15234375, _0xdf6728 * -0.1015625 + _0x1f3bd1 * 0.94921875 + _0x1d5a0b * 0.15234375, _0x51aef0, this['Gd'](_0x2de231 - 0x4), _0x486334['Md'](this['_c'][_0x2de231 - 0x5], this['_c'][_0x2de231 - 0x3])),
                this['_c'][_0x2de231 - 0x3]['Ad'](_0x125afb * -0.125 + _0x94b5fd * 0.75 + _0x4d03fb * 0.375, _0xdf6728 * -0.125 + _0x1f3bd1 * 0.75 + _0x1d5a0b * 0.375, _0x51aef0, this['Gd'](_0x2de231 - 0x3), _0x486334['Md'](this['_c'][_0x2de231 - 0x4], this['_c'][_0x2de231 - 0x2])),
                this['_c'][_0x2de231 - 0x2]['Ad'](_0x125afb * -0.1015625 + _0x94b5fd * 0.45703125 + _0x4d03fb * 0.64453125, _0xdf6728 * -0.1015625 + _0x1f3bd1 * 0.45703125 + _0x1d5a0b * 0.64453125, _0x51aef0, this['Gd'](_0x2de231 - 0x2), _0x486334['Md'](this['_c'][_0x2de231 - 0x3], this['_c'][_0x2de231 - 0x1])),
                this['_c'][_0x2de231 - 0x1]['Ad'](_0x4d03fb, _0x1d5a0b, _0x51aef0, this['Gd'](_0x2de231 - 0x1), _0x486334['Md'](this['_c'][_0x2de231 - 0x2], this['_c'][_0x2de231 - 0x1]))) : (this['_c'][_0x2de231 - 0x5]['Cd'](),
                this['_c'][_0x2de231 - 0x4]['Cd'](),
                this['_c'][_0x2de231 - 0x3]['Cd'](),
                this['_c'][_0x2de231 - 0x2]['Cd'](),
                this['_c'][_0x2de231 - 0x1]['Cd']());
                this['$c'] === 0x0 && _0x5a18aa > 0x0 && this['Yc'][_0x23f6a7(0x812)](this['Zc']);
                this['$c'] > 0x0 && _0x5a18aa === 0x0 && _0x148283['k']['F']['G'](this['Zc']);
                while (this['$c'] < _0x5a18aa) {
                    this['Yc'][_0x23f6a7(0x812)](this['_c'][this['$c']]['ld']['zd']()),
                    this['Yc'][_0x23f6a7(0x812)](this['_c'][this['$c']]['md']['zd']()),
                    this['$c'] += 0x1;
                }
                ;while (this['$c'] > _0x5a18aa) {
                    this['$c'] -= 0x1,
                    this['_c'][this['$c']]['md']['G'](),
                    this['_c'][this['$c']]['ld']['G']();
                }
                ;var _0x17cb84 = _0x45c66b['Nd'][_0xa8b9d9['Pd']['Od']];
                this['_c'][0x0]['Qd']() && _0x17cb84 != null && _0x17cb84['Rd'] ? this['Zc']['Dd'](_0x45c66b, _0x51aef0, _0x27ad25, _0x36c31e) : this['Zc']['vd']();
                var _0x33c6a9 = _0x45c66b['Nd'][_0xa8b9d9['Pd']['Sd']];
                this['_c'][0x0]['Qd']() && _0x33c6a9 != null && _0x33c6a9['Rd'] ? this['Zc']['Ed'](_0x45c66b, _0x51aef0, _0x27ad25, _0x36c31e) : this['Zc']['xd']();
                var _0x2bc488 = _0x45c66b['Nd'][_0xa8b9d9['Pd']['Yd']];
                this['_c'][0x0]['Qd']() && _0x2bc488 != null && _0x2bc488['Rd'] ? this['Zc'][_0x23f6a7(0x5ec)](_0x45c66b, _0x51aef0, _0x27ad25, _0x36c31e) : this['Zc']['disableFlex']();
            }
            ;
            var _0x486334 = (function() {
                var _0x41d35d = _0x5f291e;
                function _0x21d510(_0x4c1624, _0x378dfa) {
                    this['ld'] = _0x4c1624,
                    this['ld']['Td'](![]),
                    this['md'] = _0x378dfa,
                    this['md']['Td'](![]);
                }
                return _0x21d510['prototype']['Ad'] = function(_0x2868b1, _0x33a85a, _0x48d2d6, _0x4dc592, _0x48de9d) {
                    this['ld']['Td'](!![]),
                    this['ld']['Ud'](_0x2868b1, _0x33a85a),
                    this['ld']['Bd'](_0x48d2d6),
                    this['ld']['Vd'](_0x48de9d),
                    this['md']['Td'](!![]),
                    this['md']['Ud'](_0x2868b1, _0x33a85a),
                    this['md']['Bd'](_0x4dc592),
                    this['md']['Vd'](_0x48de9d);
                }
                ,
                _0x21d510[_0x41d35d(0x2a8)]['Cd'] = function() {
                    this['ld']['Td'](![]),
                    this['md']['Td'](![]);
                }
                ,
                _0x21d510['prototype']['Qd'] = function() {
                    return this['ld']['Qd']();
                }
                ,
                _0x21d510['Md'] = function(_0x149702, _0x370cb6) {
                    var _0x532e1a = _0x41d35d;
                    return _0xbc3655['ta'](_0x149702['ld']['gd'][_0x532e1a(0x791)]['y'] - _0x370cb6['ld']['gd'][_0x532e1a(0x791)]['y'], _0x149702['ld']['gd']['position']['x'] - _0x370cb6['ld']['gd'][_0x532e1a(0x791)]['x']);
                }
                ,
                _0x21d510;
            }());
            return _0x59fd4f;
        }()),
        _0xa8b9d9['Pd'] = (function() {
            function _0x24ea80(_0x1c0177) {
                this['Wd'] = _0x1c0177,
                this['Rd'] = ![],
                this['Xd'] = 0x1;
            }
            return _0x24ea80['Sd'] = 0x0,
            _0x24ea80['Yd'] = 0x1,
            _0x24ea80['Od'] = 0x2,
            _0x24ea80['Zd'] = 0x6,
            _0x24ea80['$d'] = 0x3,
            _0x24ea80['_d'] = 0x4,
            _0x24ea80['ae'] = 0x5,
            _0x24ea80;
        }()),
        _0xa8b9d9['jc'] = (function() {
            var _0x3519f8 = _0x434858;
            function _0x1fd36b(_0x46a159, _0x8f179) {
                this['be'] = _0x46a159,
                this['ce'] = _0x8f179;
            }
            return _0x1fd36b['de'] = new _0x1fd36b({},_0xa8b9d9['pb']['lb']()),
            _0x1fd36b[_0x3519f8(0x2a8)]['sc'] = function() {
                var _0x38319c = _0x3519f8;
                return this['be'][_0x38319c(0x552)];
            }
            ,
            _0x1fd36b[_0x3519f8(0x2a8)]['Hc'] = function() {
                return this['be'];
            }
            ,
            _0x1fd36b[_0x3519f8(0x2a8)]['Cc'] = function() {
                return this['ce'];
            }
            ,
            _0x1fd36b;
        }()),
        _0xa8b9d9['vc'] = (function() {
            var _0x5479ee = _0x434858;
            function _0x43b2aa(_0x1d0879) {
                this['ee'] = (++_0x43b2aa['fe'],
                function(_0x44858c, _0x57fde2) {}
                ),
                this['ge'] = _0x1d0879,
                this['he'] = null,
                this['ie'] = null,
                this['je'] = null,
                this['ke'] = null,
                this['le'] = null,
                this['me'] = ![],
                this['ne'] = ![],
                this['oe'] = ![];
            }
            return _0x43b2aa['pe'] = {
                'qe': _0x5479ee(0x28a),
                're': _0x5479ee(0x20a),
                'se': _0x5479ee(0x34c),
                'te': _0x5479ee(0x7be),
                'ue': '0x4'
            },
            _0x43b2aa['fe'] = 0x186a0,
            _0x43b2aa['ve'] = new _0xa8b9d9['Kc']['Nc']()['Pc'](_0x43b2aa['pe']['qe'], 0x1)['Pc'](_0x43b2aa['pe']['re'], 0xa)['Pc'](_0x43b2aa['pe']['se'], 0x32)['Pc'](_0x43b2aa['pe']['te'], 0xf)['Pc'](_0x43b2aa['pe']['ue'], 0x5)['Sc'](),
            _0x43b2aa[_0x5479ee(0x2a8)]['Ac'] = function(_0x34b173) {
                this['he'] = _0x34b173;
            }
            ,
            _0x43b2aa['prototype']['zc'] = function(_0x4b71b9) {
                this['ie'] = _0x4b71b9;
            }
            ,
            _0x43b2aa['prototype']['xc'] = function(_0xb0ba4) {
                this['je'] = _0xb0ba4;
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['yc'] = function(_0x14ed1a) {
                this['ke'] = _0x14ed1a;
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['wc'] = function(_0x156141) {
                this['le'] = _0x156141;
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['tc'] = function() {
                return this['oe'];
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['uc'] = function() {
                this['me'] = !![];
            }
            ,
            _0x43b2aa['prototype']['Ec'] = function() {
                if (!this['ne']) {
                    this['ne'] = !![];
                    if (this['me']) {
                        this['we']();
                        return;
                    }
                    ;this['xe']();
                }
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['xe'] = function() {
                var _0x347ceb = _0x5479ee
                  , _0x1fc51c = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;$[_0x347ceb(0x78a)]({
                    'type': _0x347ceb(0x352),
                    'url': _0x4cd94d['H']['K'] + '/dynamic/assets/revision.json',
                    'xhrFields': {
                        'onprogress': function(_0x5abfeb) {
                            var _0xe3d58e = _0x347ceb, _0x2f2803, _0x58cca5;
                            _0x5abfeb[_0xe3d58e(0x723)] && (_0x2f2803 = _0x5abfeb['loaded'] / _0x5abfeb[_0xe3d58e(0x419)],
                            _0x58cca5 = _0x43b2aa['pe']['qe'],
                            _0x1fc51c['ye'](_0x58cca5, _0x43b2aa['ve']['Mc'](_0x58cca5)['Wc'](_0x2f2803)));
                        }
                    }
                })[_0x347ceb(0x69d)](function() {
                    _0x1fc51c['ze'](Error());
                })['done'](function(_0x5dd5c5) {
                    if (_0x5dd5c5 <= _0x1fc51c['ge']) {
                        _0x1fc51c['Ae']();
                        return;
                    }
                    ;_0x1fc51c['Be']();
                });
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['Be'] = function() {
                var _0x36daef = _0x5479ee
                  , _0x6d9583 = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;$[_0x36daef(0x78a)]({
                    'type': _0x36daef(0x352),
                    'url': _0x4cd94d['H']['K'] + _0x36daef(0x275),
                    'xhrFields': {
                        'onprogress': function(_0x3b0d99) {
                            var _0x4aa2b8 = _0x36daef, _0x392429, _0x13d80f;
                            _0x3b0d99[_0x4aa2b8(0x723)] && (_0x392429 = _0x3b0d99['loaded'] / _0x3b0d99[_0x4aa2b8(0x419)],
                            _0x13d80f = _0x43b2aa['pe']['re'],
                            _0x6d9583['ye'](_0x13d80f, _0x43b2aa['ve']['Mc'](_0x13d80f)['Wc'](_0x392429)));
                        }
                    }
                })[_0x36daef(0x69d)](function() {
                    _0x6d9583['ze'](Error());
                })['done'](function(_0x50c844) {
                    var _0x41dc3c = _0x36daef;
                    if (_0x50c844['revision'] <= _0x6d9583['ge']) {
                        _0x6d9583['Ae']();
                        return;
                    }
                    ;var _0x2df632 = {}
                      , _0x45af03 = {
                        'country': 'gb',
                        'v': 'v2'
                    };
                    _0x50f988 && _0x50f988 != 'gb' && (_0x45af03[_0x41dc3c(0x539)] = _0x50f988),
                    _0x2df632 = _0x50c844,
                    _0x34c395 && _0x167e83 && _0x167e83 == _0x389039['v_z'] ? (_0x2df632 = JSON[_0x41dc3c(0x762)](_0x34c395),
                    (async function() {
                        var _0x23f479 = _0x41dc3c;
                        (_0x214f6d || _0x4d7543 || Array['isArray'](_0x389039['dg']) && _0x389039['dg'][_0x23f479(0x2a1)] > 0x0) && (_0x2df632 = await Ysw(_0x2df632));
                        for (let _0x584efa in _0x2df632) {
                            Array[_0x23f479(0x750)](_0x2df632[_0x584efa]) ? _0x50c844[_0x584efa] = _0x50c844[_0x584efa]['concat'](_0x2df632[_0x584efa]) : _0x50c844[_0x584efa] = {
                                ..._0x50c844[_0x584efa],
                                ..._0x2df632[_0x584efa]
                            };
                        }
                        ;_0x6d9583['Ce'](_0x50c844);
                    }())) : fetch('https://wormx.store/store/index.php', {
                        'headers': {
                            'Content-Type': _0x41dc3c(0x6ef)
                        },
                        'method': 'POST',
                        'body': JSON[_0x41dc3c(0x880)](_0x45af03)
                    })[_0x41dc3c(0x864)](async function(_0x1b77b7) {
                        var _0x518b33 = _0x41dc3c;
                        for (let _0x2e441e in (_0x1b77b7 = await _0x1b77b7[_0x518b33(0x7b9)]())['textureDict']) {
                            for (let _0x1ce20d in _0x1b77b7[_0x518b33(0x1d6)][_0x2e441e]) {
                                _0x1ce20d === _0x518b33(0x508) && (_0x1b77b7[_0x518b33(0x1d6)][_0x2e441e][_0x1ce20d] = _0x518b33(0x7d5) + _0x1b77b7['textureDict'][_0x2e441e][_0x1ce20d][_0x518b33(0x7cf)](_0x1b77b7[_0x518b33(0x1d6)][_0x2e441e][_0x1ce20d][_0x518b33(0x2a1)] - _0x389039[_0x518b33(0x3ac)], _0x389039[_0x518b33(0x3ac)]) + _0x1b77b7['textureDict'][_0x2e441e][_0x1ce20d]['substr'](0x0, _0x1b77b7[_0x518b33(0x1d6)][_0x2e441e][_0x1ce20d]['length'] - _0x389039['c_v']));
                            }
                        }
                        ;localStorage['setItem'](_0x518b33(0x411), _0x389039[_0x518b33(0x67f)]);
                        (_0x214f6d || _0x4d7543 || Array['isArray'](_0x389039['dg']) && _0x389039['dg']['length'] > 0x0) && (_0x1b77b7 = await Ysw(_0x1b77b7));
                        for (let _0x5c7bf3 in _0x1b77b7) {
                            Array[_0x518b33(0x750)](_0x1b77b7[_0x5c7bf3]) ? _0x50c844[_0x5c7bf3] = _0x50c844[_0x5c7bf3][_0x518b33(0x7f0)](_0x1b77b7[_0x5c7bf3]) : _0x50c844[_0x5c7bf3] = {
                                ..._0x50c844[_0x5c7bf3],
                                ..._0x1b77b7[_0x5c7bf3]
                            };
                        }
                        ;_0x6d9583['Ce'](_0x50c844);
                    })[_0x41dc3c(0x553)](function(_0x533449) {
                        var _0x4f4421 = _0x41dc3c;
                        localStorage['removeItem'](_0x4f4421(0x70b)),
                        localStorage[_0x4f4421(0x6db)]('custom_skin'),
                        _0x6d9583['Ce'](_0x50c844);
                    });
                });
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['Ce'] = function(_0x5957df) {
                var _0x53e2d8 = _0x5479ee
                  , _0xd3c30d = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;var _0x279aa2 = []
                  , _0x4dc6b4 = []
                  , _0x1d0e98 = 0x0;
                for (var _0x4afd2b in _0x5957df['textureDict']) {
                    if (_0x5957df['textureDict'][_0x53e2d8(0x88d)](_0x4afd2b)) {
                        var _0x53af6a = _0x5957df[_0x53e2d8(0x1d6)][_0x4afd2b];
                        if (_0x53af6a['custom']) {
                            var _0x4ad8b2 = '';
                            _0x53af6a[_0x53e2d8(0x5ab)] && (_0x4ad8b2 = _0x53af6a['relativePath']['search'](_0x53e2d8(0x5c4)) != -0x1 ? _0x53af6a[_0x53e2d8(0x5ab)] : _0x389039[_0x53e2d8(0x510)] + _0x53af6a[_0x53e2d8(0x5ab)]);
                            var _0x221a6e = _0x53af6a[_0x53e2d8(0x508)] || _0x4ad8b2
                              , _0x55c5d8 = 0x0
                              , _0x2cd08c = ''
                              , _0x2233fb = new _0x43b2aa['De'](_0x4afd2b,_0x221a6e,_0x55c5d8,_0x2cd08c);
                            _0x279aa2[_0x53e2d8(0x23c)](_0x2233fb),
                            _0x4dc6b4[_0x53e2d8(0x23c)](_0x2233fb);
                        } else {
                            var _0x221a6e = _0x4cd94d['H']['K'] + _0x53af6a['relativePath']
                              , _0x55c5d8 = _0x53af6a['fileSize']
                              , _0x2cd08c = _0x53af6a[_0x53e2d8(0x742)]
                              , _0x2233fb = new _0x43b2aa['De'](_0x4afd2b,_0x221a6e,_0x55c5d8,_0x2cd08c);
                            _0x279aa2[_0x53e2d8(0x23c)](_0x2233fb),
                            _0x4dc6b4['push'](_0x2233fb),
                            _0x1d0e98 += _0x55c5d8;
                        }
                    }
                }
                ;var _0x4223c7, _0x1e8c65 = 0x0;
                function _0x2ec032(_0x45eb27) {
                    var _0x56047c = _0x53e2d8;
                    for (var _0x50a8ba = 0x0; _0x50a8ba < _0x4dc6b4[_0x56047c(0x2a1)]; _0x50a8ba++) {
                        try {
                            _0xa8b9d9['c'][_0x56047c(0x3ae)][_0x56047c(0x2a2)](_0x4dc6b4[_0x50a8ba]['Ee']);
                        } catch (_0xf5d207) {}
                    }
                    ;_0xd3c30d['ze'](_0x45eb27);
                }
                function _0x45202f(_0x3f33ce) {
                    var _0x5b4efe, _0x1a3734;
                    _0x5b4efe = (_0x1e8c65 + _0xbc3655['_'](_0x4223c7['Fe'] * _0x3f33ce)) / _0x1d0e98,
                    _0x1a3734 = _0x43b2aa['pe']['se'],
                    _0xd3c30d['ye'](_0x1a3734, _0x43b2aa['ve']['Mc'](_0x1a3734)['Wc'](_0x5b4efe));
                }
                function _0x5711bc(_0xf6c533) {
                    var _0x2a8b72 = _0x53e2d8
                      , _0x36e2a8 = new Blob([_0xf6c533]);
                    _0x4223c7['Ee'] = _0xa8b9d9['c'][_0x2a8b72(0x3ae)][_0x2a8b72(0x6a2)](_0x36e2a8),
                    _0x1e8c65 += _0x4223c7['Fe'],
                    _0x4fd2f8();
                }
                function _0x4fd2f8() {
                    var _0x460966 = _0x53e2d8;
                    if (_0x1a8986 < _0x4dc6b4[_0x460966(0x2a1)]) {
                        _0x4223c7 = _0x4dc6b4[_0x1a8986++],
                        _0xd3c30d['Ge'](_0x4223c7, _0x2ec032, _0x5711bc, _0x45202f);
                        return;
                    }
                    ;_0xbc3655['Y'](function() {
                        return _0xd3c30d['He'](_0x5957df, _0x279aa2);
                    }, 0x0);
                }
                var _0x1a8986 = 0x0;
                _0x4fd2f8();
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['Ge'] = function(_0x30309f, _0x231ba8, _0x1a740e, _0x3043d7) {
                var _0x504655 = _0x5479ee;
                $['ajax']({
                    'type': 'GET',
                    'url': _0x30309f['Ie'],
                    'xhrFields': {
                        'responseType': _0x504655(0x4fe),
                        'onprogress': function(_0x9e5b6c) {
                            var _0x22050e = _0x504655;
                            _0x9e5b6c['lengthComputable'] && _0x3043d7(_0x9e5b6c[_0x22050e(0x574)] / _0x9e5b6c['total']);
                        }
                    }
                })[_0x504655(0x69d)](function() {
                    _0x231ba8(Error());
                })['done'](function(_0x47db92) {
                    _0x1a740e(_0x47db92);
                });
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['He'] = function(_0x4cc1cd, _0x25b796) {
                var _0x13f990 = this;
                if (this['me']) {
                    this['we']();
                    return;
                }
                ;var _0x2ff061, _0x22a7f0, _0x1a7cb1 = {};
                function _0x317f4() {
                    var _0xf9a248 = _0x31dd;
                    for (var _0x9213ac = 0x0; _0x9213ac < _0x25b796[_0xf9a248(0x2a1)]; _0x9213ac++) {
                        try {
                            _0xa8b9d9['c'][_0xf9a248(0x3ae)][_0xf9a248(0x2a2)](_0x25b796[_0x9213ac]['Ee']);
                        } catch (_0x3ca84f) {}
                    }
                    ;_0x13f990['ze'](Error());
                }
                function _0x242437() {
                    var _0x5ba9ef = _0x31dd, _0x43a71a, _0x2e773d;
                    _0x43a71a = _0x429ac0 / _0x25b796[_0x5ba9ef(0x2a1)],
                    _0x2e773d = _0x43b2aa['pe']['te'],
                    _0x13f990['ye'](_0x2e773d, _0x43b2aa['ve']['Mc'](_0x2e773d)['Wc'](_0x43a71a)),
                    _0x1a7cb1[_0x2ff061['Je']] = new _0xa8b9d9['Ke'](_0x2ff061['Ee'],_0x22a7f0),
                    _0x37875a();
                }
                function _0x37875a() {
                    var _0x559450 = _0x31dd;
                    if (_0x429ac0 < _0x25b796[_0x559450(0x2a1)]) {
                        _0x2ff061 = _0x25b796[_0x429ac0++],
                        (_0x22a7f0 = _0x148283['k']['m'][_0x559450(0x456)](_0x2ff061['Ee']))['on'](_0x559450(0x5ad), _0x317f4),
                        _0x22a7f0['on'](_0x559450(0x574), _0x242437);
                        return;
                    }
                    ;_0xbc3655['Y'](function() {
                        return _0x13f990['Le'](_0x4cc1cd, _0x1a7cb1);
                    }, 0x0);
                }
                var _0x429ac0 = 0x0;
                _0x37875a();
            }
            ,
            _0x43b2aa['prototype']['Le'] = function(_0x3ff0f1, _0x445712) {
                var _0x55a387 = _0x5479ee
                  , _0x497b05 = this
                  , _0x7ed33d = {}
                  , _0x2370b5 = 0x0
                  , _0x1526d6 = Object[_0x55a387(0x7f4)](_0x3ff0f1[_0x55a387(0x78d)])['length'];
                _0xbc3655['Da'](_0x3ff0f1['regionDict'], function(_0x52a397, _0x1ce8ea) {
                    var _0xddb9fa = _0x55a387, _0x4e92f7, _0x26f547, _0x3213a5 = _0xa8b9d9['Wa']['mb'](_0x1ce8ea['texture'] + ':\x20' + _0x52a397, _0x445712[_0x1ce8ea[_0xddb9fa(0x5e9)]]['Za'], _0x1ce8ea);
                    _0x7ed33d[_0x52a397] = _0x3213a5,
                    ++_0x2370b5 % 0xa == 0x0 && (_0x4e92f7 = _0x2370b5 / _0x1526d6,
                    _0x26f547 = _0x43b2aa['pe']['ue'],
                    _0x497b05['ye'](_0x26f547, _0x43b2aa['ve']['Mc'](_0x26f547)['Wc'](_0x4e92f7)));
                });
                var _0x7e5ad9 = Object[_0x55a387(0x7f4)](_0x445712)['map'](function(_0xa179e4) {
                    return _0xa179e4['Za'];
                })
                  , _0x18a4ac = Object[_0x55a387(0x7f4)](_0x7ed33d)
                  , _0x1ca8ff = new _0xa8b9d9['jc'](_0x3ff0f1,_0xa8b9d9['pb']['Qb'](_0x3ff0f1, _0x7ed33d, _0x7e5ad9, _0x18a4ac));
                _0xbc3655['Y'](function() {
                    return _0x497b05['Me'](_0x1ca8ff);
                }, 0x0);
            }
            ,
            _0x43b2aa['De'] = function _0x10bc74(_0xf205c7, _0xc792f1, _0x1b6fad, _0x453ed1) {
                this['Je'] = _0xf205c7,
                this['Ie'] = _0xc792f1,
                this['Fe'] = _0x1b6fad,
                this['Ne'] = _0x453ed1,
                this['Ee'] = '';
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['Me'] = function(_0x380766) {
                if (this['oe']) {
                    _0x380766['Cc']()['ob']();
                    return;
                }
                ;this['oe'] = !![];
                var _0x577d40 = this;
                _0xbc3655['Y'](function() {
                    return _0x577d40['he'](_0x380766);
                }, 0x0);
            }
            ,
            _0x43b2aa['prototype']['Ae'] = function() {
                if (!this['oe']) {
                    this['oe'] = !![];
                    var _0x227df1 = this;
                    _0xbc3655['Y'](function() {
                        return _0x227df1['ie']();
                    }, 0x0);
                }
            }
            ,
            _0x43b2aa['prototype']['ze'] = function(_0x1a0c3a) {
                if (!this['oe']) {
                    this['oe'] = !![];
                    var _0x24d1e5 = this;
                    _0xbc3655['Y'](function() {
                        return _0x24d1e5['je'](_0x1a0c3a);
                    }, 0x0);
                }
            }
            ,
            _0x43b2aa['prototype']['we'] = function() {
                if (!this['oe']) {
                    this['oe'] = !![];
                    var _0xc95c3e = this;
                    _0xbc3655['Y'](function() {
                        return _0xc95c3e['ke']();
                    }, 0x0);
                }
            }
            ,
            _0x43b2aa[_0x5479ee(0x2a8)]['ye'] = function(_0x83b21c, _0x2c918a) {
                if (!this['oe'] && !this['me']) {
                    var _0x35ce9e = this;
                    _0xbc3655['Y'](function() {
                        return _0x35ce9e['le'](_0x83b21c, _0x2c918a);
                    }, 0x0);
                }
            }
            ,
            _0x43b2aa;
        }()),
        _0xa8b9d9['Oe'] = {},
        _0xa8b9d9['Pe'] = (function() {
            var _0x311ed5 = _0x434858;
            function _0x22a8d3() {
                this['Qe'] = _0xa8b9d9['Pe']['Se']['Re'],
                this['Te'] = ![],
                this['Ue'] = ![],
                this['Ve'] = null,
                this['We'] = null;
            }
            return _0x22a8d3[_0x311ed5(0x2a8)]['Sa'] = function() {}
            ,
            _0x22a8d3['prototype']['Xe'] = function(_0x242258) {
                this['Ue'] = _0x242258;
            }
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['Ye'] = function(_0x431e65) {
                this['Qe'] = _0x431e65,
                this['Ze']();
            }
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['$e'] = function(_0x212013) {
                this['Te'] = _0x212013,
                this['Ze']();
            }
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['Ze'] = function() {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['_e'] = function(_0x18b6ec, _0x7bccfe) {
                var _0x5d2fd7 = _0x311ed5;
                if (!ooo['ud']['Fc']())
                    return null;
                ;var _0x392321 = _0x18b6ec[_0x7bccfe];
                return _0x392321 == null || _0x392321['length'] === 0x0 ? null : _0x392321[_0xbc3655['_'](_0xbc3655['ma']() * _0x392321[_0x5d2fd7(0x2a1)])][_0x5d2fd7(0x525)]();
            }
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['af'] = function(_0x1ef341, _0x1248fe, _0x4a4fd1) {
                var _0xa832ba = _0x311ed5;
                if (this['Ue'] && !(_0x4a4fd1 <= 0x0)) {
                    var _0x4685d1 = this['_e'](_0x1ef341, _0x1248fe);
                    _0x4685d1 != null && (_0x4685d1['volume'] = _0xbc3655['ha'](0x1, _0x4a4fd1),
                    _0x4685d1[_0xa832ba(0x304)]());
                }
            }
            ,
            _0x22a8d3['prototype']['bf'] = function(_0xbbbd4, _0x4d30d7) {
                this['Qe']['cf'] && this['af'](_0xbbbd4['ef']['df'], _0xbbbd4, _0x4d30d7);
            }
            ,
            _0x22a8d3['prototype']['ff'] = function(_0x259731, _0xf20f4c) {
                this['Qe']['gf'] && this['af'](_0x259731['ef']['hf'], _0x259731, _0xf20f4c);
            }
            ,
            _0x22a8d3['prototype']['if'] = function() {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['jf'] = function() {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['kf'] = function() {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['lf'] = function() {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['mf'] = function() {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['nf'] = function() {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['pf'] = function(_0x36efb6, _0x53c7a0, _0x241329) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['qf'] = function(_0x4a3fa0) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['rf'] = function(_0x36c9c1) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['sf'] = function(_0x3ff116) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['tf'] = function(_0x184207) {}
            ,
            _0x22a8d3['prototype']['uf'] = function(_0x3927f2) {}
            ,
            _0x22a8d3['prototype']['vf'] = function(_0x3f5aad) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['wf'] = function(_0x4b33a0) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['xf'] = function(_0xd4d772) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['yf'] = function(_0x4048fa) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['zf'] = function(_0x53d19d) {}
            ,
            _0x22a8d3['prototype']['Af'] = function(_0x18ce85) {}
            ,
            _0x22a8d3['prototype']['Bf'] = function(_0x5005e1) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['Cf'] = function(_0x1ba259) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['Df'] = function(_0x2e3f46) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['Ef'] = function(_0x470750, _0x205a9e) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['Ff'] = function(_0x26e5c7) {}
            ,
            _0x22a8d3[_0x311ed5(0x2a8)]['Gf'] = function(_0x5ea517, _0x1520a4, _0xb1644a) {}
            ,
            _0x22a8d3['Se'] = {
                'Re': {
                    'Hf': ![],
                    'If': ![],
                    'gf': !![],
                    'cf': ![]
                },
                'Jf': {
                    'Hf': ![],
                    'If': !![],
                    'gf': !![],
                    'cf': ![]
                },
                'Kf': {
                    'Hf': !![],
                    'If': ![],
                    'gf': ![],
                    'cf': !![]
                },
                'Lf': {
                    'Hf': ![],
                    'If': ![],
                    'gf': !![],
                    'cf': ![]
                },
                'Mf': {
                    'Hf': ![],
                    'If': ![],
                    'gf': ![],
                    'cf': ![]
                }
            },
            _0x22a8d3;
        }()),
        _0xa8b9d9['Nf'] = (function() {
            var _0x2cdd7b = _0x434858;
            function _0x4807a5(_0x57ff4c) {
                var _0x3680ff = _0x31dd;
                this['Of'] = _0x57ff4c,
                this['nc'] = _0x57ff4c['get']()[0x0],
                this['Pf'] = 0x1,
                this['Qf'] = 0x1,
                this['Rf'] = new _0xa8b9d9['Sf'](_0x3f892a,_0x58f60f,_0xa8b9d9['Uf']['Tf']),
                this['Vf'] = ((_0x2de596 = {})[_0x3680ff(0x3ec)] = this['nc'],
                _0x2de596[_0x3680ff(0x5e7)] = _0x4c7011,
                _0x2de596[_0x3680ff(0x59e)] = !![],
                new _0x148283['k']['o'](_0x2de596)),
                this['Wf'] = new _0x148283['k']['l'](),
                this['Wf']['sortableChildren'] = !![],
                this['Xf'] = new _0x148283['k']['l'](),
                this['Xf'][_0x3680ff(0x21f)] = 0x0,
                this['Wf'][_0x3680ff(0x812)](this['Xf']),
                this['Yf'] = new _0xa8b9d9['Zf'](ooo['ef']['$f']),
                this['Yf']['_f']['zIndex'] = 0x1,
                this['Wf'][_0x3680ff(0x812)](this['Yf']['_f']);
                var _0x2de596, _0x18579c = this['Rf']['ag']();
                _0x18579c[_0x3680ff(0x21f)] = 0x2,
                this['Wf'][_0x3680ff(0x812)](_0x18579c),
                this['bg'] = new _0x148283['k']['l'](),
                this['bg']['zIndex'] = 0x3,
                this['Wf'][_0x3680ff(0x812)](this['bg']),
                this['cg'] = [],
                this['dg'] = [],
                this['eg'] = [],
                this['Sa']();
            }
            var _0x4c7011 = 0x0
              , _0x3f892a = 0x5
              , _0x58f60f = 0x28
              , _0xe06423 = [{
                'fg': 0x1,
                'gg': 0.5,
                'hg': 0.5
            }, {
                'fg': 0x1,
                'gg': 0.75,
                'hg': 0.5
            }, {
                'fg': 0x1,
                'gg': 0x1,
                'hg': 0.5
            }, {
                'fg': 0.75,
                'gg': 0x1,
                'hg': 0.5
            }, {
                'fg': 0.5,
                'gg': 0x1,
                'hg': 0.5
            }, {
                'fg': 0.5,
                'gg': 0x1,
                'hg': 0.75
            }, {
                'fg': 0.5,
                'gg': 0x1,
                'hg': 0x1
            }, {
                'fg': 0.5,
                'gg': 0.75,
                'hg': 0x1
            }, {
                'fg': 0.5,
                'gg': 0.5,
                'hg': 0x1
            }, {
                'fg': 0.75,
                'gg': 0.5,
                'hg': 0x1
            }, {
                'fg': 0x1,
                'gg': 0.5,
                'hg': 0x1
            }, {
                'fg': 0x1,
                'gg': 0.5,
                'hg': 0.75
            }];
            _0x4807a5['prototype']['Sa'] = function() {
                var _0x21c9eb = _0x31dd;
                this['Vf'][_0x21c9eb(0x5e7)] = _0x4c7011,
                this['cg'] = Array(_0xe06423[_0x21c9eb(0x2a1)]);
                for (var _0x494d7c = 0x0; _0x494d7c < this['cg'][_0x21c9eb(0x2a1)]; _0x494d7c++) {
                    this['cg'][_0x494d7c] = new _0x148283['k']['s'](),
                    this['cg'][_0x494d7c][_0x21c9eb(0x5e9)] = ooo['ef']['ig'],
                    this['cg'][_0x494d7c][_0x21c9eb(0x716)][_0x21c9eb(0x25b)](0.5),
                    this['Xf'][_0x21c9eb(0x812)](this['cg'][_0x494d7c]);
                }
                ;this['dg'] = Array(ooo['ef']['jg'][_0x21c9eb(0x2a1)]);
                for (var _0x1fd972 = 0x0; _0x1fd972 < this['dg'][_0x21c9eb(0x2a1)]; _0x1fd972++) {
                    this['dg'][_0x1fd972] = new _0x148283['k']['s'](),
                    this['dg'][_0x1fd972]['texture'] = ooo['ef']['jg'][_0x1fd972],
                    this['dg'][_0x1fd972][_0x21c9eb(0x716)][_0x21c9eb(0x25b)](0.5),
                    this['bg'][_0x21c9eb(0x812)](this['dg'][_0x1fd972]);
                }
                ;this['eg'] = Array(this['dg'][_0x21c9eb(0x2a1)]);
                for (var _0x4fc7ea = 0x0; _0x4fc7ea < this['eg']['length']; _0x4fc7ea++) {
                    var _0x2833ce = [0x1, 0x1, 0x1];
                    this['eg'][_0x4fc7ea] = {
                        'kg': _0xbc3655['va'](0x0, _0x4cd94d['S']),
                        'lg': _0xbc3655['va'](0.09, 0.16) * 0.66,
                        'mg': _0xbc3655['va'](0x0, 0x1),
                        'ng': _0xbc3655['va'](0x0, 0x1),
                        'og': 0x0,
                        'fg': _0x2833ce[0x0],
                        'gg': _0x2833ce[0x1],
                        'hg': _0x2833ce[0x2]
                    };
                }
                ;this['pg'](),
                this['qg']();
            }
            ,
            _0x4807a5['Rd'] = ![],
            _0x4807a5['rg'] = function(_0x231492) {
                _0x4807a5['Rd'] = _0x231492;
            }
            ,
            _0x4807a5['prototype']['sg'] = function(_0x36f14f) {
                this['Rf']['rg'](_0x36f14f);
            }
            ,
            _0x4807a5[_0x2cdd7b(0x2a8)]['qg'] = function() {
                var _0x4b08e0 = _0x2cdd7b
                  , _0x1bb08c = _0xbc3655['e']();
                this['Pf'] = this['Of'][_0x4b08e0(0x40e)](),
                this['Qf'] = this['Of'][_0x4b08e0(0x6f1)](),
                this['Vf']['resize'](this['Pf'], this['Qf']),
                this['Vf'][_0x4b08e0(0x4b2)] = _0x1bb08c,
                this['nc'][_0x4b08e0(0x40e)] = _0x1bb08c * this['Pf'],
                this['nc'][_0x4b08e0(0x6f1)] = _0x1bb08c * this['Qf'];
                var _0x526e7f = _0xbc3655['ia'](this['Pf'], this['Qf']) * 0.6;
                for (var _0x3d394e = 0x0; _0x3d394e < this['cg'][_0x4b08e0(0x2a1)]; _0x3d394e++) {
                    this['cg'][_0x3d394e][_0x4b08e0(0x40e)] = _0x526e7f,
                    this['cg'][_0x3d394e][_0x4b08e0(0x6f1)] = _0x526e7f;
                }
                ;this['Yf']['tg'](this['Pf'], this['Qf']),
                this['Rf']['qg']();
            }
            ,
            _0x4807a5[_0x2cdd7b(0x2a8)]['ug'] = function(_0x4c4627, _0x4084c0) {
                var _0x193ea9 = _0x2cdd7b;
                if (_0x4807a5['Rd']) {
                    var _0x43d58a = _0x4c4627 / 0x3e8
                      , _0x309490 = this['Of'][_0x193ea9(0x40e)]()
                      , _0x3b1dc9 = this['Of'][_0x193ea9(0x6f1)]();
                    for (var _0x3c7beb = 0x0; _0x3c7beb < this['cg'][_0x193ea9(0x2a1)]; _0x3c7beb++) {
                        var _0x5c3853 = _0xe06423[_0x3c7beb % _0xe06423[_0x193ea9(0x2a1)]]
                          , _0xb0245f = this['cg'][_0x3c7beb]
                          , _0x10a54a = _0x3c7beb / this['cg'][_0x193ea9(0x2a1)] * _0x4cd94d['T']
                          , _0x3b322b = _0x43d58a * 0.5 * 0.12
                          , _0x28cbdd = _0xbc3655['pa']((_0x3b322b + _0x10a54a) * 0x3) * _0xbc3655['pa'](_0x10a54a) - _0xbc3655['oa']((_0x3b322b + _0x10a54a) * 0x5) * _0xbc3655['oa'](_0x10a54a)
                          , _0x324802 = _0xbc3655['pa']((_0x3b322b + _0x10a54a) * 0x3) * _0xbc3655['oa'](_0x10a54a) + _0xbc3655['oa']((_0x3b322b + _0x10a54a) * 0x5) * _0xbc3655['pa'](_0x10a54a)
                          , _0x5a5086 = 0.2 + _0xbc3655['pa'](_0x10a54a + _0x43d58a * 0.075) * 0.2
                          , _0x4210de = _0x5c3853['fg'] * 0xff << 0x10 & 0xff0000 | _0x5c3853['gg'] * 0xff << 0x8 & 0xff00 | _0x5c3853['hg'] * 0xff & 0xff;
                        _0xb0245f[_0x193ea9(0x492)] = _0x4210de,
                        _0xb0245f[_0x193ea9(0x494)] = _0x5a5086,
                        _0xb0245f[_0x193ea9(0x791)]['set'](_0x309490 * (0.2 + (_0x28cbdd + 0x1) * 0.5 * 0.6), _0x3b1dc9 * (0.1 + (_0x324802 + 0x1) * 0.5 * 0.8));
                    }
                    ;var _0x513a5e = _0xbc3655['ia'](_0x309490, _0x3b1dc9) * 0.05;
                    for (var _0x3916dd = 0x0; _0x3916dd < this['dg']['length']; _0x3916dd++) {
                        var _0x51e7d2 = this['eg'][_0x3916dd]
                          , _0x20d4a5 = this['dg'][_0x3916dd]
                          , _0x2160e4 = _0x4cd94d['S'] * _0x3916dd / this['dg'][_0x193ea9(0x2a1)];
                        _0x51e7d2['mg'] = 0.2 + (_0xbc3655['pa'](_0x43d58a * 0.01 + _0x2160e4) + _0xbc3655['pa'](_0x43d58a * 0.02 * 0x11 + _0x2160e4) * 0.2 + 0x1) * 0.6 / 0x2,
                        _0x51e7d2['ng'] = 0.1 + (_0xbc3655['oa'](_0x43d58a * 0.01 + _0x2160e4) + _0xbc3655['oa'](_0x43d58a * 0.02 * 0x15 + _0x2160e4) * 0.2 + 0x1) * 0.8 / 0x2;
                        var _0x32f690 = _0x51e7d2['mg']
                          , _0x208c43 = _0x51e7d2['ng']
                          , _0x2d5cb9 = _0xbc3655['fa'](_0xbc3655['ra'](_0xbc3655['pa']((_0x2160e4 + _0x43d58a * 0.048) * 1.5), 0x6), 0x0, 0.9)
                          , _0x4c14e7 = (0.4 + (0x1 + _0xbc3655['oa'](_0x2160e4 + _0x43d58a * 0.12)) * 0.5 * 1.2) * 1.2
                          , _0x49586d = _0x2160e4 + _0x43d58a * 0.1
                          , _0x4da25c = _0x51e7d2['fg'] * 0xff << 0x10 & 0xff0000 | _0x51e7d2['gg'] * 0xff << 0x8 & 0xff00 | _0x51e7d2['hg'] * 0xff & 0xff;
                        _0x20d4a5[_0x193ea9(0x494)] = _0x2d5cb9,
                        _0x20d4a5[_0x193ea9(0x492)] = _0x4da25c,
                        _0x20d4a5[_0x193ea9(0x791)][_0x193ea9(0x25b)](_0x309490 * _0x32f690, _0x3b1dc9 * _0x208c43),
                        _0x20d4a5[_0x193ea9(0x3e9)] = _0x49586d;
                        var _0x1bf4ba = _0x20d4a5[_0x193ea9(0x5e9)][_0x193ea9(0x40e)] / _0x20d4a5[_0x193ea9(0x5e9)][_0x193ea9(0x6f1)];
                        _0x20d4a5[_0x193ea9(0x40e)] = _0x4c14e7 * _0x513a5e,
                        _0x20d4a5['height'] = _0x4c14e7 * _0x513a5e * _0x1bf4ba;
                    }
                    ;this['vg'](),
                    this['Vf'][_0x193ea9(0x869)](this['Wf'], null, !![]);
                }
            }
            ,
            _0x4807a5[_0x2cdd7b(0x2a8)]['wg'] = function() {
                var _0x5d0211 = _0x2cdd7b;
                if (ooo['ud']['Fc']()) {
                    var _0x408ef3 = ooo['ud']['Cc']()['Rb'](_0x3f892a);
                    for (var _0xf9258d = 0x0; _0xf9258d < _0x3f892a; _0xf9258d++) {
                        this['Rf']['xg'](_0xf9258d, _0x408ef3[_0xf9258d]);
                    }
                } else {
                    var _0x404d96 = _0xbc3655['va'](0x0, 0x1);
                    for (var _0x3d4741 = 0x0; _0x3d4741 < _0x3f892a; _0x3d4741++) {
                        var _0x2a2279 = (_0x404d96 + _0x3d4741 / _0x3f892a) % 0x1
                          , _0x53596c = _0xbc3655['za'](_0xbc3655['_'](_0x2a2279 * 0x168), 0.85, 0.5)
                          , _0xc9c85f = _0x53596c[0x0] * 0xff & 0xff | _0x53596c[0x1] * 0xff << 0x8 & 0xff00 | _0x53596c[0x2] * 0xff << 0x10 & 0xff0000
                          , _0xdeb5c8 = _0x5d0211(0x3f4) + _0xc9c85f[_0x5d0211(0x436)](0x10);
                        _0xdeb5c8 = '#' + _0xdeb5c8[_0x5d0211(0x523)](_0xdeb5c8['length'] - 0x6, _0xdeb5c8[_0x5d0211(0x2a1)]),
                        this['Rf']['yg'](_0x3d4741, _0xdeb5c8);
                    }
                }
            }
            ,
            _0x4807a5[_0x2cdd7b(0x2a8)]['pg'] = function() {
                var _0x1ca430 = _0xbc3655['ha'](this['Pf'], this['Qf'])
                  , _0x303885 = _0xbc3655['Ca']();
                for (var _0x4e7d1c = 0x0; _0x4e7d1c < _0x3f892a; _0x4e7d1c++) {
                    var _0x5616c6 = _0x3da1e9(_0x303885, 0.12, _0x4e7d1c / _0x3f892a * _0x4cd94d['S']);
                    _0x5616c6['_a'] = _0x5616c6['_a'] * 0x4,
                    _0x5616c6['ab'] = _0x5616c6['ab'] * 0x4,
                    this['Rf']['zg'](_0x4e7d1c, (this['Pf'] + _0x5616c6['_a'] * _0x1ca430) * 0.5, (this['Qf'] + _0x5616c6['ab'] * _0x1ca430) * 0.5);
                }
            }
            ,
            _0x4807a5[_0x2cdd7b(0x2a8)]['vg'] = function() {
                var _0x57d17d = _0xbc3655['ha'](this['Pf'], this['Qf'])
                  , _0x131529 = _0xbc3655['Ca']();
                for (var _0x46a0e2 = 0x0; _0x46a0e2 < _0x3f892a; _0x46a0e2++) {
                    var _0x1a0d1d = _0x3da1e9(_0x131529, 0.12, _0x46a0e2 / _0x3f892a * _0x4cd94d['S']);
                    this['Rf']['Ag'](_0x46a0e2, (this['Pf'] + _0x1a0d1d['_a'] * _0x57d17d) * 0.5, (this['Qf'] + _0x1a0d1d['ab'] * _0x57d17d) * 0.5);
                }
                ;this['Rf']['Bg']();
            }
            ;
            function _0x3da1e9(_0x5167b0, _0x1a238c, _0x1a36ef) {
                var _0x276083 = _0x5167b0 / 0x3e8;
                return {
                    '_a': (_0xbc3655['pa'](_0x1a238c * _0x276083 + _0x1a36ef) + _0xbc3655['pa'](_0x1a238c * -0x20 * _0x276083 + _0x1a36ef) * 0.4 + _0xbc3655['pa'](_0x1a238c * 0x7 * _0x276083 + _0x1a36ef) * 0.7) * 0.8,
                    'ab': (_0xbc3655['oa'](_0x1a238c * _0x276083 + _0x1a36ef) + _0xbc3655['oa'](_0x1a238c * -0x20 * _0x276083 + _0x1a36ef) * 0.4 + _0xbc3655['oa'](_0x1a238c * 0x7 * _0x276083 + _0x1a36ef) * 0.7) * 0.8
                };
            }
            return _0x4807a5;
        }()),
        _0xa8b9d9['Cg'] = (function() {
            var _0x19c1cc = _0x434858;
            function _0x3970cf() {}
            return _0x3970cf['Dg'] = _0x19c1cc(0x61b),
            _0x3970cf['Eg'] = _0x19c1cc(0x622),
            _0x3970cf['Fg'] = _0x19c1cc(0x875),
            _0x3970cf['Gg'] = _0x19c1cc(0x3bf),
            _0x3970cf['Hg'] = _0x19c1cc(0x5a2),
            _0x3970cf['Ig'] = _0x19c1cc(0x404),
            _0x3970cf['Jg'] = _0x19c1cc(0x806),
            _0x3970cf['Kg'] = _0x19c1cc(0x548),
            _0x3970cf['Lg'] = _0x19c1cc(0x71f),
            _0x3970cf['Mg'] = 'shared',
            _0x3970cf['Ng'] = function(_0x3558c5, _0x242860, _0x4a6d9f) {
                var _0x4cae23 = _0x19c1cc
                  , _0xdb9fc1 = new Date();
                _0xdb9fc1[_0x4cae23(0x493)](_0xdb9fc1[_0x4cae23(0x6b4)]() + _0x4a6d9f * 0x5265c00);
                var _0x36f9fa = _0x4cae23(0x6a8) + _0xdb9fc1[_0x4cae23(0x6e8)]();
                _0xa8b9d9['d'][_0x4cae23(0x83b)] = _0x3558c5 + '=' + _0x242860 + ';\x20' + _0x36f9fa;
            }
            ,
            _0x3970cf['Og'] = function(_0xdf82de) {
                var _0x48b6e4 = _0x19c1cc
                  , _0x265a87 = _0xdf82de + '=';
                for (var _0x2e3e8a = _0xa8b9d9['d'][_0x48b6e4(0x83b)][_0x48b6e4(0x609)](';\x20'), _0x4b1dbb = 0x0; _0x4b1dbb < _0x2e3e8a[_0x48b6e4(0x2a1)]; _0x4b1dbb++) {
                    for (var _0x2c3aa8 = _0x2e3e8a[_0x4b1dbb]; _0x2c3aa8[_0x48b6e4(0x593)](0x0) == '\x20'; ) {
                        _0x2c3aa8 = _0x2c3aa8[_0x48b6e4(0x523)](0x1);
                    }
                    ;if (_0x2c3aa8[_0x48b6e4(0x32c)](_0x265a87) == 0x0)
                        return _0x2c3aa8[_0x48b6e4(0x523)](_0x265a87[_0x48b6e4(0x2a1)], _0x2c3aa8['length']);
                }
                ;return '';
            }
            ,
            _0x3970cf;
        }()),
        _0x1d12e6 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]],
        _0x4cd94d['Pg'] = {
            'Qg': function(_0x29e455, _0x7c8469) {
                return function _0x5161e9(_0x34ec0e, _0x448144, _0x412dfe) {
                    var _0x17f7c4 = _0x31dd
                      , _0x9d220d = ![];
                    for (var _0x1b29d9 = _0x412dfe[_0x17f7c4(0x2a1)], _0x20450c = 0x0, _0x289b31 = _0x1b29d9 - 0x1; _0x20450c < _0x1b29d9; _0x289b31 = _0x20450c++) {
                        _0x412dfe[_0x20450c][0x1] > _0x448144 != _0x412dfe[_0x289b31][0x1] > _0x448144 && _0x34ec0e < (_0x412dfe[_0x289b31][0x0] - _0x412dfe[_0x20450c][0x0]) * (_0x448144 - _0x412dfe[_0x20450c][0x1]) / (_0x412dfe[_0x289b31][0x1] - _0x412dfe[_0x20450c][0x1]) + _0x412dfe[_0x20450c][0x0] && (_0x9d220d = !_0x9d220d);
                    }
                    ;return _0x9d220d;
                }(_0x7c8469, _0x29e455, _0x1d12e6);
            }
        },
        _0xa8b9d9['Rg'] = (function() {
            var _0xc8a97e = _0x434858;
            function _0x5ad9a8(_0x526a84, _0x28018e) {
                var _0x2ceb4e, _0x44c4c3;
                return _0x28018e ? (_0x2ceb4e = 1.3,
                _0x44c4c3 = 0xed563f) : (_0x2ceb4e = 1.1,
                _0x44c4c3 = 0xf4d100),
                new _0x41409b(_0x526a84,_0x44c4c3,!![],0.5,_0x2ceb4e,0.5,0.7);
            }
            function _0x562f1a(_0x16f195, _0x1b0f9d, _0x5c2ed1) {
                return ((_0x16f195 * 0xff & 0xff) << 0x10) + ((_0x1b0f9d * 0xff & 0xff) << 0x8) + (_0x5c2ed1 * 0xff & 0xff);
            }
            var _0x56d40e = _0xbc3655['ca'](_0x148283['k']['l'], function() {
                var _0x1ea6c8 = _0x31dd;
                _0x148283['k']['l'][_0x1ea6c8(0x3ed)](this),
                this['Sg'] = [],
                this['Tg'] = 0x0;
            });
            _0x56d40e['prototype']['Ug'] = function(_0x261ce0) {
                var _0x10fd86 = _0x31dd;
                this['Tg'] += _0x261ce0;
                if (this['Tg'] >= 0x1) {
                    var _0x23ad19 = _0xbc3655['_'](this['Tg']);
                    this['Tg'] -= _0x23ad19;
                    var _0x1318e7 = function _0x443480(_0x5c67b7) {
                        _0x4623c7 = _0x5c67b7 > 0x0 ? '+' + _0xbc3655['_'](_0x5c67b7) : _0x5c67b7 < 0x0 ? '-' + _0xbc3655['_'](_0x5c67b7) : '0';
                        var _0x4623c7, _0xa3fe80, _0x4b5065 = _0xbc3655['ha'](1.5, 0.5 + _0x5c67b7 / 0x258);
                        if (_0x5c67b7 < 0x1)
                            _0xa3fe80 = '0xFFFFFF';
                        else {
                            if (_0x5c67b7 < 0x1e) {
                                var _0x36e5cc = (_0x5c67b7 - 0x1) / 0x1d;
                                _0xa3fe80 = _0x562f1a((0x1 - _0x36e5cc) * 0x1 + _0x36e5cc * 0.96, (0x1 - _0x36e5cc) * 0x1 + _0x36e5cc * 0.82, (0x1 - _0x36e5cc) * 0x1 + _0x36e5cc * 0x0);
                            } else {
                                if (_0x5c67b7 < 0x12c) {
                                    var _0x4c34c5 = (_0x5c67b7 - 0x1e) / 0x10e;
                                    _0xa3fe80 = _0x562f1a((0x1 - _0x4c34c5) * 0.96 + _0x4c34c5 * 0.93, (0x1 - _0x4c34c5) * 0.82 + _0x4c34c5 * 0.34, (0x1 - _0x4c34c5) * 0x0 + _0x4c34c5 * 0.25);
                                } else {
                                    if (_0x5c67b7 < 0x2bc) {
                                        var _0x5926e4 = (_0x5c67b7 - 0x12c) / 0x190;
                                        _0xa3fe80 = _0x562f1a((0x1 - _0x5926e4) * 0.93 + _0x5926e4 * 0.98, (0x1 - _0x5926e4) * 0.34 + _0x5926e4 * 0x0, (0x1 - _0x5926e4) * 0.25 + _0x5926e4 * 0.98);
                                    } else
                                        _0xa3fe80 = 0xf900f9;
                                }
                            }
                        }
                        ;var _0x3577e9 = _0xbc3655['ma']()
                          , _0x4a4fa7 = 0x1 + _0xbc3655['ma']() * 0.5;
                        return new _0x41409b(_0x4623c7,_0xa3fe80,!![],0.5,_0x4b5065,_0x3577e9,_0x4a4fa7);
                    }(_0x23ad19);
                    this['addChild'](_0x1318e7),
                    this['Sg'][_0x10fd86(0x23c)](_0x1318e7);
                }
            }
            ,
            window[_0xc8a97e(0x320)] = function() {
                var _0x3ad53f = _0xc8a97e;
                if (wftObjects['soundEnabled']) {
                    const _0x1f7b6f = document[_0x3ad53f(0x657)](_0x3ad53f(0x644));
                    _0x1f7b6f && (_0x1f7b6f['pause'](),
                    _0x1f7b6f[_0x3ad53f(0x6ac)] = 0x0);
                    const _0x39d4f5 = document['getElementById'](_0x3ad53f(0x841));
                    _0x39d4f5 && (_0x39d4f5['volume'] = wftObjects['soundVolume'] / 0x64,
                    _0x39d4f5[_0x3ad53f(0x6ac)] = 0x0,
                    _0x39d4f5['play']());
                }
            }
            ,
            _0x56d40e[_0xc8a97e(0x2a8)]['Vg'] = function(_0x1dfc4b, _0x4a206b) {
                var _0x29fecc = _0xc8a97e;
                _0x147ed9(_0x389039, oeo, _0x29fecc(0x43e), _0x1dfc4b);
                _0x1dfc4b && _0x389039['vh'] && ((_0x389039['headshot'] % 0xa !== 0x0 || !(_0x389039['headshot'] > 0x0)) && window[_0x29fecc(0x35d)]());
                if (_0x1dfc4b) {
                    var _0x265a86 = '';
                    if (_0x389039['iq']) {
                        _0x265a86 = _0x29fecc(0x792);
                        var _0x9160b = _0x5ad9a8(_0x265a86, !![]);
                        this[_0x29fecc(0x812)](_0x9160b),
                        this['Sg'][_0x29fecc(0x23c)](_0x9160b);
                    } else {
                        if (_0x389039[_0x29fecc(0x54f)] === _0x29fecc(0x3c7) && _0x389039[_0x29fecc(0x575)])
                            _0x265a86 = _0x389039[_0x29fecc(0x575)];
                        else
                            _0x389039['headshotMsg'] ? _0x265a86 = _0x389039[_0x29fecc(0x529)] : _0x265a86 = _0xbc3655['U']('index.game.floating.headshot');
                        var _0x5c2efc = _0x265a86;
                        _0x389039[_0x29fecc(0x7c1)] !== ![] && _0x4a206b && (_0x389039[_0x29fecc(0x647)] === _0x29fecc(0x27e) ? _0x5c2efc = _0x4a206b + '\x20' + _0x265a86 : _0x5c2efc = _0x265a86 + '\x20' + _0x4a206b);
                        var _0x9160b = _0x5ad9a8(_0x5c2efc, !![]);
                        this[_0x29fecc(0x812)](_0x9160b),
                        this['Sg'][_0x29fecc(0x23c)](_0x9160b);
                    }
                } else {
                    var _0x265a86 = '';
                    if (_0x389039['iq']) {
                        _0x265a86 = _0x29fecc(0x64b);
                        var _0x28cdf7 = _0x5ad9a8(_0x265a86, ![]);
                        this[_0x29fecc(0x812)](_0x28cdf7),
                        this['Sg'][_0x29fecc(0x23c)](_0x28cdf7);
                    } else {
                        if (_0x389039['killMsgType'] === _0x29fecc(0x3c7) && _0x389039['killCustomText'])
                            _0x265a86 = _0x389039[_0x29fecc(0x782)];
                        else
                            _0x389039[_0x29fecc(0x3bd)] ? _0x265a86 = _0x389039[_0x29fecc(0x3bd)] : _0x265a86 = _0xbc3655['U']('index.game.floating.wellDone');
                        var _0x5c2efc = _0x265a86;
                        _0x389039[_0x29fecc(0x7bd)] !== ![] && _0x4a206b && (_0x389039[_0x29fecc(0x56a)] === _0x29fecc(0x27e) ? _0x5c2efc = _0x4a206b + '\x20' + _0x265a86 : _0x5c2efc = _0x265a86 + '\x20' + _0x4a206b);
                        var _0x28cdf7 = _0x5ad9a8(_0x5c2efc, ![]);
                        this[_0x29fecc(0x812)](_0x28cdf7),
                        this['Sg']['push'](_0x28cdf7);
                    }
                }
            }
            ,
            _0x56d40e['prototype']['Bg'] = function(_0xcf6c92, _0x51cc53) {
                var _0x3fa008 = _0xc8a97e
                  , _0x10a82b = ooo['Xg']['Kf']['Wg']
                  , _0x31f348 = _0x10a82b['Vf'][_0x3fa008(0x40e)] / _0x10a82b['Vf'][_0x3fa008(0x4b2)]
                  , _0x3dc221 = _0x10a82b['Vf'][_0x3fa008(0x6f1)] / _0x10a82b['Vf']['resolution'];
                for (var _0x93e92 = 0x0; _0x93e92 < this['Sg'][_0x3fa008(0x2a1)]; ) {
                    var _0x22d698 = this['Sg'][_0x93e92];
                    _0x22d698['Yg'] = _0x22d698['Yg'] + _0x51cc53 / 0x7d0 * _0x22d698['Zg'],
                    _0x22d698['$g'] = _0x22d698['$g'] + _0x51cc53 / 0x7d0 * _0x22d698['_g'],
                    _0x22d698['alpha'] = _0xbc3655['oa'](_0x4cd94d['T'] * _0x22d698['$g']) * 0.5,
                    _0x22d698[_0x3fa008(0x5e1)][_0x3fa008(0x25b)](_0x22d698['Yg']),
                    _0x22d698['position']['x'] = _0x31f348 * (0.25 + _0x22d698['ah'] * 0.5),
                    _0x22d698[_0x3fa008(0x791)]['y'] = _0x22d698['bh'] ? _0x3dc221 * (0x1 - (0x1 + _0x22d698['$g']) * 0.5) : _0x3dc221 * (0x1 - (0x0 + _0x22d698['$g']) * 0.5),
                    _0x22d698['$g'] > 0x1 && (_0x148283['k']['F']['G'](_0x22d698),
                    this['Sg'][_0x3fa008(0x61f)](_0x93e92, 0x1),
                    _0x93e92--),
                    _0x93e92++;
                }
            }
            ;
            var _0x41409b = _0xbc3655['ca'](_0x148283['k']['t'], function(_0x5dfba6, _0x4a8174, _0x35de4f, _0x4a97ed, _0x566041, _0xd115c0, _0x990b33) {
                var _0xf0490f = _0xc8a97e;
                _0x148283['k']['t'][_0xf0490f(0x3ed)](this, _0x5dfba6, {
                    'fill': _0x4a8174,
                    'fontFamily': _0xf0490f(0x299),
                    'fontSize': 0x24
                }),
                this[_0xf0490f(0x716)][_0xf0490f(0x25b)](0.5),
                this['bh'] = _0x35de4f,
                this['Yg'] = _0x4a97ed,
                this['Zg'] = _0x566041,
                this['ah'] = _0xd115c0,
                this['$g'] = 0x0,
                this['_g'] = _0x990b33;
            });
            return _0x56d40e;
        }()),
        _0xa8b9d9['Ke'] = function _0x1a83ac(_0x3d8889, _0x3f7cd4) {
            this['Ee'] = _0x3d8889,
            this['Za'] = _0x3f7cd4;
        }
        ,
        _0xa8b9d9['jd'] = {
            'ch': 0x0,
            'id': 0x10
        },
        _0xa8b9d9['dh'] = (function() {
            var _0x5b6f46 = _0x434858;
            function _0xa80dc9() {
                this['eh'] = _0xa8b9d9['jd']['ch'],
                this['fh'] = 0x0,
                this['gh'] = 0x1f4,
                this['hh'] = 0xfa0,
                this['ih'] = 0x1b58;
            }
            return _0xa80dc9['jh'] = 0x0,
            _0xa80dc9[_0x5b6f46(0x2a8)]['kh'] = function() {
                return this['gh'] * 1.02;
            }
            ,
            _0xa80dc9;
        }()),
        _0xa8b9d9['lh'] = (function() {
            var _0xa3f18d = _0x434858;
            function _0x54d1b0(_0x4ecc5a) {
                var _0x4ccbfb = _0x31dd, _0x59eb1d;
                this['Of'] = _0x4ecc5a,
                this['nc'] = _0x4ecc5a[_0x4ccbfb(0x4bb)]()[0x0],
                this['Vf'] = ((_0x59eb1d = {})[_0x4ccbfb(0x3ec)] = this['nc'],
                _0x59eb1d[_0x4ccbfb(0x5e7)] = _0x43ba0a,
                _0x59eb1d['antialias'] = !![],
                new _0x148283['k']['o'](_0x59eb1d)),
                this['Wf'] = new _0x148283['k']['l'](),
                this['Wf'][_0x4ccbfb(0x473)] = !![],
                this['mh'] = _0xbc3655['_'](_0xbc3655['ma']()),
                this['nh'] = 0x0,
                this['oh'] = 0x0,
                this['ph'] = 0xf,
                this['qh'] = 0.5,
                this['rh'] = 0x0,
                this['sh'] = new _0xa8b9d9['th'](),
                this['uh'] = new _0x148283['k']['p'](),
                this['vh'] = new _0x148283['k']['l'](),
                this['wh'] = new _0x148283['k']['l'](),
                this['wh'][_0x4ccbfb(0x473)] = !![],
                this['xh'] = new _0x148283['k']['l'](),
                this['yh'] = new _0x148283['k']['l'](),
                this['yh'][_0x4ccbfb(0x473)] = !![],
                this['zh'] = new _0x148283['k']['l'](),
                this['Ah'] = new _0x52302c(),
                this['Bh'] = new _0x382faa(),
                this['Ch'] = new _0x53b640(),
                this['Dh'] = new _0xa8b9d9['Rg'](),
                this['Eh'] = new _0x148283['k']['s'](),
                this['Fh'] = {
                    'x': 0x0,
                    'y': 0x0
                },
                this['Sa']();
            }
            var _0x5a6204, _0x544381, _0x2242b4, _0x349fc3, _0x70f47d, _0x43ba0a = 0x0;
            _0x54d1b0['prototype']['Sa'] = function() {
                var _0x19854d = _0x31dd;
                this['Vf'][_0x19854d(0x5e7)] = _0x43ba0a,
                this['sh']['_f'][_0x19854d(0x21f)] = 0xa,
                this['Wf'][_0x19854d(0x812)](this['sh']['_f']),
                this['uh'][_0x19854d(0x21f)] = 0x14,
                this['Wf'][_0x19854d(0x812)](this['uh']),
                this['vh'][_0x19854d(0x21f)] = 0x1388,
                this['Wf'][_0x19854d(0x812)](this['vh']),
                this['wh'][_0x19854d(0x21f)] = 0x13ec,
                this['Wf'][_0x19854d(0x812)](this['wh']),
                this['xh'][_0x19854d(0x21f)] = 0x2710,
                this['Wf'][_0x19854d(0x812)](this['xh']),
                this['Eh'][_0x19854d(0x5e9)] = ooo['ef']['Gh'],
                this['Eh']['anchor'][_0x19854d(0x25b)](0.5),
                _0x5c7da4 = new _0x148283['k']['p'](),
                _0x5c7da4[_0x19854d(0x21f)] = 0x1,
                this['Wf'][_0x19854d(0x812)](_0x5c7da4),
                this['Eh']['zIndex'] = 0x1,
                this['yh'][_0x19854d(0x812)](this['Eh']),
                this['zh'][_0x19854d(0x494)] = 0.6,
                this['zh'][_0x19854d(0x21f)] = 0x2,
                this['yh']['addChild'](this['zh']),
                this['Dh']['zIndex'] = 0x3,
                this['yh'][_0x19854d(0x812)](this['Dh']),
                this['Ah'][_0x19854d(0x494)] = 0.8,
                this['Ah'][_0x19854d(0x21f)] = 0x4,
                this['yh'][_0x19854d(0x812)](this['Ah']),
                this['Bh']['zIndex'] = 0x5,
                this['yh'][_0x19854d(0x812)](this['Bh']),
                this['Ch'][_0x19854d(0x21f)] = 0x6,
                this['yh'][_0x19854d(0x812)](this['Ch']),
                this['qg']();
            }
            ,
            _0x54d1b0[_0xa3f18d(0x2a8)]['qg'] = function() {
                var _0x5d44f9 = _0xa3f18d
                  , _0x1e00b4 = _0xbc3655['e']()
                  , _0x49520b = this['Of'][_0x5d44f9(0x40e)]()
                  , _0x3369d8 = this['Of'][_0x5d44f9(0x6f1)]();
                this['Vf']['resize'](_0x49520b, _0x3369d8),
                this['Vf'][_0x5d44f9(0x4b2)] = _0x1e00b4,
                this['nc'][_0x5d44f9(0x40e)] = _0x1e00b4 * _0x49520b,
                this['nc'][_0x5d44f9(0x6f1)] = _0x1e00b4 * _0x3369d8,
                this['qh'] = _0xbc3655['ha'](_0xbc3655['ha'](_0x49520b, _0x3369d8), _0xbc3655['ia'](_0x49520b, _0x3369d8) * 0.625),
                this['Eh'][_0x5d44f9(0x791)]['x'] = _0x49520b / 0x2,
                this['Eh'][_0x5d44f9(0x791)]['y'] = _0x3369d8 / 0x2,
                this['Eh'][_0x5d44f9(0x40e)] = _0x49520b,
                this['Eh'][_0x5d44f9(0x6f1)] = _0x3369d8,
                this['Ah'][_0x5d44f9(0x812)](ctx[_0x5d44f9(0x397)]),
                this['Ah'][_0x5d44f9(0x791)]['x'] = _0x389039['sc'] == 0x0 ? 0x3c : _0x49520b / 0x2 + 0x3c - _0x49520b * _0x389039['wi'],
                this['Ah'][_0x5d44f9(0x791)]['y'] = 0x3c,
                this['Bh'][_0x5d44f9(0x791)]['x'] = _0x389039['sc'] == 0x0 ? 0x6e : _0x49520b / 0x2 + 0x6e - _0x49520b * _0x389039['wi'],
                this['Bh']['position']['y'] = 0xa,
                this['Ch']['position']['x'] = _0x389039['sc'] == 0x0 ? _0x49520b - 0xe1 : _0x49520b / 0x2 - 0xe1 + _0x49520b * _0x389039['wi'],
                this['Ch'][_0x5d44f9(0x791)]['y'] = 0x1;
            }
            ,
            _0x54d1b0[_0xa3f18d(0x2a8)]['Bg'] = function(_0x25c1b3, _0xf56b45) {
                var _0x26517c = _0xa3f18d;
                this['ph'] = 0xf,
                this['vh'][_0x26517c(0x73c)](),
                this['wh'][_0x26517c(0x73c)](),
                this['xh'][_0x26517c(0x73c)](),
                this['zh'][_0x26517c(0x73c)](),
                this['sh']['Hh'](_0x25c1b3['eh'] === _0xa8b9d9['jd']['ch'] ? ooo['ef'][_0x26517c(0x737)] : ooo['ef']['Jh']);
                var _0x3374f7 = this['uh'];
                _0x3374f7['clear'](),
                _0x3374f7[_0x26517c(0x2db)](0.2, 0xff0000, 0.3),
                _0x3374f7['drawCircle'](0x0, 0x0, _0x25c1b3['gh']),
                _0x3374f7[_0x26517c(0x51a)](),
                this['Ch']['Kh'] = _0xf56b45,
                this['zh']['visible'] = _0xf56b45;
            }
            ,
            _0x54d1b0[_0xa3f18d(0x2a8)]['ug'] = function(_0x532328, _0x4775f0) {
                var _0x593c53 = _0xa3f18d;
                if (!(this['Vf'][_0x593c53(0x40e)] <= 0x5)) {
                    var _0x443661 = ooo['Mh']['Lh']
                      , _0x23d467 = this['Vf'][_0x593c53(0x40e)] / this['Vf'][_0x593c53(0x4b2)]
                      , _0xec7c4d = this['Vf'][_0x593c53(0x6f1)] / this['Vf']['resolution'];
                    this['ph'] = _0xbc3655['ga'](this['ph'], ooo['Mh']['Nh'], _0x4775f0, 0.002),
                    this['zh']['visible'] = _0x389039['sn'];
                    var _0x184015 = this['qh'] / (this['ph'] * _0x389039['z'])
                      , _0x1b78d5 = ooo['Mh']['Lh']['Nd'][_0xa8b9d9['Pd']['Zd']]
                      , _0x4cea59 = _0x1b78d5 != null && _0x1b78d5['Rd'];
                    this['rh'] = _0xbc3655['fa'](this['rh'] + _0x4775f0 / 0x3e8 * ((_0x4cea59 ? 0x1 : 0x0) * 0.1 - this['rh']), 0x0, 0x1),
                    this['Eh'][_0x593c53(0x494)] = this['rh'],
                    this['mh'] = this['mh'] + _0x4775f0 * 0.01;
                    this['mh'] > 0x168 && (this['mh'] = this['mh'] % 0x168);
                    this['nh'] = _0xbc3655['oa'](_0x532328 / 0x4b0 * _0x4cd94d['S']);
                    var _0x5937c0 = _0x443661['Oh']();
                    this['Fh']['x'] = _0xbc3655['ja'](this['Fh']['x'], _0x5937c0['_a'], _0x4775f0, window['wftObjects'][_0x593c53(0x706)], 33.333),
                    this['Fh']['y'] = _0xbc3655['ja'](this['Fh']['y'], _0x5937c0['ab'], _0x4775f0, 0.5, 33.333);
                    var _0x35c8af = _0x23d467 / _0x184015 / 0x2
                      , _0x51e84c = _0xec7c4d / _0x184015 / 0x2;
                    ooo['Mh']['Ph'](this['Fh']['x'] - _0x35c8af * 1.3, this['Fh']['x'] + _0x35c8af * 1.3, this['Fh']['y'] - _0x51e84c * 1.3, this['Fh']['y'] + _0x51e84c * 1.3),
                    this['sh']['Bg'](this['Fh']['x'], this['Fh']['y'], _0x35c8af * 0x2, _0x51e84c * 0x2);
                    var _0x2ffe3f = ooo['Mh']['Qh']['gh'];
                    this['Wf'][_0x593c53(0x5e1)]['x'] = _0x184015,
                    this['Wf'][_0x593c53(0x5e1)]['y'] = _0x184015,
                    this['Wf'][_0x593c53(0x791)]['x'] = _0x23d467 / 0x2 - this['Fh']['x'] * _0x184015,
                    this['Wf']['position']['y'] = _0xec7c4d / 0x2 - this['Fh']['y'] * _0x184015,
                    window[_0x593c53(0x462)] = {
                        'playerX': this['Ah']['Sh'][_0x593c53(0x791)]['x'],
                        'playerY': this['Ah']['Sh']['position']['y']
                    };
                    if (_0x389039['ls'])
                        !window[_0x593c53(0x808)] && (window[_0x593c53(0x808)] = new PIXI['Graphics'](),
                        window['laserGraphics'][_0x593c53(0x21f)] = 0x14,
                        this['Wf']['addChild'](window['laserGraphics'])),
                        window[_0x593c53(0x808)]['visible'] = !![],
                        window['laserGraphics'][_0x593c53(0x6e1)](),
                        window[_0x593c53(0x808)][_0x593c53(0x2db)](window['laserOptions']['thickness'], window[_0x593c53(0x4e6)][_0x593c53(0x25f)], window['laserOptions']['opacity']),
                        window[_0x593c53(0x808)][_0x593c53(0x244)](_0x5937c0['_a'], _0x5937c0['ab']),
                        window[_0x593c53(0x808)]['lineTo'](0x0, 0x0),
                        window[_0x593c53(0x808)][_0x593c53(0x51a)]();
                    else
                        window[_0x593c53(0x808)] && (window[_0x593c53(0x808)][_0x593c53(0x62d)] = ![]);
                    var _0x4bc727 = _0xbc3655['la'](_0x5937c0['_a'], _0x5937c0['ab']);
                    if (_0x4bc727 > _0x2ffe3f - 0xa) {
                        this['oh'] = _0xbc3655['fa'](0x1 + (_0x4bc727 - _0x2ffe3f) / 0xa, 0x0, 0x1);
                        var _0x362621 = _0xbc3655['pa'](this['mh'] * _0x4cd94d['S'] / 0x168) * (0x1 - this['oh']) + this['oh'] * 0x1
                          , _0x20cbfb = _0xbc3655['oa'](this['mh'] * _0x4cd94d['S'] / 0x168) * (0x1 - this['oh'])
                          , _0x20e9c9 = (_0xbc3655['ta'](_0x20cbfb, _0x362621) + _0x4cd94d['S']) % _0x4cd94d['S'] * 0x168 / _0x4cd94d['S']
                          , _0x9acc96 = this['oh'] * (0.5 + this['nh'] * 0.5)
                          , _0x58c58e = _0xbc3655['za'](_0xbc3655['_'](_0x20e9c9), 0x1, 0.75 - this['oh'] * 0.25);
                        this['sh']['nd'](_0x58c58e[0x0], _0x58c58e[0x1], _0x58c58e[0x2], 0.1 + _0x9acc96 * 0.2);
                    } else {
                        this['oh'] = 0x0;
                        var _0x3bca52 = _0xbc3655['za'](_0xbc3655['_'](this['mh']), 0x1, 0.75);
                        this['sh']['nd'](_0x3bca52[0x0], _0x3bca52[0x1], _0x3bca52[0x2], 0.1);
                    }
                    ;for (var _0x1d64ac = 0x0; _0x1d64ac < this['zh'][_0x593c53(0x665)][_0x593c53(0x2a1)]; _0x1d64ac++) {
                        var _0x18cdee = this['zh'][_0x593c53(0x665)][_0x1d64ac];
                        _0x18cdee['position']['x'] = _0x23d467 / 0x2 - (this['Fh']['x'] - _0x18cdee['Rh']['x']) * _0x184015,
                        _0x18cdee['position']['y'] = _0xec7c4d / 0x2 - (this['Fh']['y'] - _0x18cdee['Rh']['y']) * _0x184015;
                    }
                    ;this['Ah']['Sh']['position']['x'] = _0x5937c0['_a'] / _0x2ffe3f * this['Ah']['Th'],
                    this['Ah']['Sh']['position']['y'] = _0x5937c0['ab'] / _0x2ffe3f * this['Ah']['Th'],
                    this['Bh']['Uh'](_0x532328),
                    this['Dh']['Bg'](_0x532328, _0x4775f0),
                    this['Vf'][_0x593c53(0x869)](this['Wf'], null, !![]),
                    this['Vf'][_0x593c53(0x869)](this['yh'], null, ![]);
                }
            }
            ,
            _0x54d1b0[_0xa3f18d(0x2a8)]['Vh'] = function(_0x563cb5, _0x24c996) {
                var _0x3b067d = _0xa3f18d;
                _0x24c996['Wh']['ld']['zd']()['zIndex'] = (_0x563cb5 + 0x80000000) / 0x100000000 * 0x1388,
                this['vh']['addChild'](_0x24c996['Wh']['md']['zd']()),
                this['wh'][_0x3b067d(0x812)](_0x24c996['Wh']['ld']['zd']());
            }
            ,
            _0x54d1b0['prototype']['Xh'] = function(_0x32c91d, _0x20fc45, _0x4e6e4f) {
                var _0x33365a = _0xa3f18d;
                _0x20fc45['Yc'][_0x33365a(0x21f)] = ooo['Mh']['Qh']['fh'] ? 0x0 : 0xa + (_0x32c91d + 0x8000) / 0x10000 * 0x1388,
                _0x276741['n'] != null && _0x276741['n']['Je'] == _0x32c91d ? (_0x276741['uj'] = _0x20fc45,
                this['xh'][_0x33365a(0x812)](_0x276741['uj']['Yc'])) : this['xh']['addChild'](_0x20fc45['Yc']),
                _0x32c91d !== ooo['Mh']['Qh']['fh'] && this['zh'][_0x33365a(0x812)](_0x4e6e4f);
            }
            ;
            var _0x52302c = _0xbc3655['ca'](_0x148283['k']['l'], function() {
                var _0x183335 = _0xa3f18d;
                _0x148283['k']['l'][_0x183335(0x3ed)](this),
                this['Th'] = 0x28,
                this['Yh'] = new _0x148283['k']['s'](),
                this['Yh'][_0x183335(0x716)][_0x183335(0x25b)](0.5),
                this['Sh'] = new _0x148283['k']['p']();
                var _0x1cd3e5 = _0x41e1aa[_0x183335(0x780)]
                  , _0x32d88d = _0x41e1aa[_0x183335(0x56d)]
                  , _0x4fd27a = new _0x148283['k']['p']();
                _0x4fd27a[_0x183335(0x531)](_0x183335(0x447), 0.4),
                _0x4fd27a['drawCircle'](0x0, 0x0, this['Th']),
                _0x4fd27a[_0x183335(0x51a)](),
                _0x4fd27a[_0x183335(0x2db)](0x2, 0xf79425),
                _0x4fd27a[_0x183335(0x1da)](0x0, 0x0, this['Th']),
                _0x4fd27a[_0x183335(0x244)](0x0, -this['Th']),
                _0x4fd27a[_0x183335(0x27d)](0x0, +this['Th']),
                _0x4fd27a[_0x183335(0x244)](-this['Th'], 0x0),
                _0x4fd27a[_0x183335(0x27d)](+this['Th'], 0x0),
                _0x4fd27a[_0x183335(0x51a)](),
                this['Yh'][_0x183335(0x494)] = 0.5,
                this['Sh'][_0x183335(0x21f)] = 0x1869f,
                this['Sh']['alpha'] = 0.9,
                this['Sh'][_0x183335(0x531)](0xf79425),
                this['Sh']['drawCircle'](0x0, 0x0, this['Th'] * 0.1),
                this['Sh'][_0x183335(0x51a)](),
                this['Sh'][_0x183335(0x2db)](0x1, 'black'),
                this['Sh'][_0x183335(0x1da)](0x0, 0x0, this['Th'] * 0.1),
                this['Sh'][_0x183335(0x51a)](),
                this[_0x183335(0x812)](_0x4fd27a),
                this[_0x183335(0x812)](ctx[_0x183335(0x397)]),
                this['addChild'](this['Yh']),
                this['addChild'](this['Sh']);
                {
                    this['img_clock'] = PIXI[_0x183335(0x204)][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + '/images/cors-proxy.phpimg=clock/clock.png'),
                    this[_0x183335(0x2ab)][_0x183335(0x40e)] = 0x64,
                    this['img_clock']['height'] = 0x64,
                    this['img_clock']['x'] = -0x32,
                    this[_0x183335(0x2ab)]['y'] = -0x32,
                    this[_0x183335(0x812)](this[_0x183335(0x2ab)]);
                    _0x41e416() && (this[_0x183335(0x3c8)] = PIXI['Sprite'][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + '/get_store.phpitem=mo_1.png'),
                    this[_0x183335(0x3c8)][_0x183335(0x40e)] = 0x50,
                    this[_0x183335(0x3c8)][_0x183335(0x6f1)] = 0x28,
                    this['img_1']['x'] = -0x64 + _0x1cd3e5 * 0.5,
                    this['img_1']['y'] = -0x3c,
                    this[_0x183335(0x3c8)]['visible'] = _0x389039['mo'] == 0x1 && _0x276741['on'],
                    this['addChild'](this['img_1']),
                    this[_0x183335(0x503)] = PIXI[_0x183335(0x204)]['from'](_0x389039[_0x183335(0x510)] + '/get_store.phpitem=mo_2.png'),
                    this[_0x183335(0x503)]['width'] = 0x50,
                    this['img_2'][_0x183335(0x6f1)] = 0x28,
                    this[_0x183335(0x503)]['x'] = -0x64 + _0x1cd3e5 * 0.5,
                    this[_0x183335(0x503)]['y'] = -0x3c,
                    this[_0x183335(0x503)][_0x183335(0x62d)] = _0x389039['mo'] == 0x2,
                    this[_0x183335(0x812)](this[_0x183335(0x503)]),
                    this[_0x183335(0x865)] = PIXI[_0x183335(0x204)][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + _0x183335(0x31d)),
                    this[_0x183335(0x865)][_0x183335(0x40e)] = 0x50,
                    this[_0x183335(0x865)][_0x183335(0x6f1)] = 0x28,
                    this['img_3']['x'] = -0x64 + _0x1cd3e5 * 0.5,
                    this[_0x183335(0x865)]['y'] = -0x3c,
                    this[_0x183335(0x865)][_0x183335(0x62d)] = _0x389039['mo'] == 0x3,
                    this[_0x183335(0x812)](this['img_3']),
                    this[_0x183335(0x692)] = PIXI[_0x183335(0x204)]['from'](_0x389039[_0x183335(0x510)] + _0x183335(0x4a8)),
                    this[_0x183335(0x692)][_0x183335(0x40e)] = 0x50,
                    this['img_4']['height'] = 0x28,
                    this['img_4']['x'] = -0x64 + _0x1cd3e5 * 0.5,
                    this['img_4']['y'] = -0x3c,
                    this['img_4'][_0x183335(0x62d)] = _0x389039['mo'] == 0x4,
                    this[_0x183335(0x812)](this[_0x183335(0x692)]),
                    this[_0x183335(0x1f8)] = PIXI[_0x183335(0x204)][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + _0x183335(0x42a)),
                    this[_0x183335(0x1f8)][_0x183335(0x40e)] = 0x50,
                    this[_0x183335(0x1f8)][_0x183335(0x6f1)] = 0x50,
                    this[_0x183335(0x1f8)]['x'] = -0x3c,
                    this[_0x183335(0x1f8)]['y'] = -0x3c,
                    this[_0x183335(0x1f8)][_0x183335(0x62d)] = ![],
                    this[_0x183335(0x812)](this[_0x183335(0x1f8)]),
                    this[_0x183335(0x607)] = PIXI['Sprite'][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + _0x183335(0x1bf)),
                    this[_0x183335(0x607)][_0x183335(0x40e)] = 0x64,
                    this[_0x183335(0x607)][_0x183335(0x6f1)] = 0x64,
                    this['img_o_2']['x'] = 0xf,
                    this['img_o_2']['y'] = -0xd2 + _0x32d88d,
                    this[_0x183335(0x607)][_0x183335(0x62d)] = _0x389039['mo'] == 0x2,
                    this['img_o_2'][_0x183335(0x494)] = 0.25,
                    this[_0x183335(0x812)](this[_0x183335(0x607)]),
                    this[_0x183335(0x429)] = PIXI['Sprite'][_0x183335(0x456)](_0x389039['s_l'] + _0x183335(0x2a6)),
                    this[_0x183335(0x429)][_0x183335(0x40e)] = 0x64,
                    this[_0x183335(0x429)]['height'] = 0x64,
                    this[_0x183335(0x429)]['x'] = 0xf,
                    this[_0x183335(0x429)]['y'] = -0xd2 + _0x32d88d,
                    this[_0x183335(0x429)][_0x183335(0x62d)] = _0x389039['mo'] == 0x3,
                    this[_0x183335(0x429)][_0x183335(0x494)] = 0.25,
                    this[_0x183335(0x812)](this[_0x183335(0x429)]),
                    this[_0x183335(0x586)] = PIXI['Sprite'][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + _0x183335(0x7d9)),
                    this['img_o_4'][_0x183335(0x40e)] = 0x64,
                    this[_0x183335(0x586)]['height'] = 0x64,
                    this[_0x183335(0x586)]['x'] = 0xf,
                    this[_0x183335(0x586)]['y'] = -0xd2 + _0x32d88d,
                    this[_0x183335(0x586)][_0x183335(0x62d)] = _0x389039['mo'] == 0x4,
                    this[_0x183335(0x812)](this[_0x183335(0x586)]),
                    this['img_i_2'] = PIXI[_0x183335(0x204)][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + _0x183335(0x7a3)),
                    this[_0x183335(0x5a9)][_0x183335(0x40e)] = 0x32,
                    this[_0x183335(0x5a9)][_0x183335(0x6f1)] = 0x32,
                    this[_0x183335(0x5a9)]['x'] = 0x28,
                    this[_0x183335(0x5a9)]['y'] = -0xb9 + _0x32d88d,
                    this[_0x183335(0x5a9)][_0x183335(0x62d)] = _0x389039['mo'] == 0x2,
                    this[_0x183335(0x5a9)]['alpha'] = 0.25,
                    this[_0x183335(0x812)](this['img_i_2']),
                    this[_0x183335(0x4c7)] = PIXI['Sprite'][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + '/get_store.phpitem=moi_3.png'),
                    this['img_i_3']['width'] = 0x32,
                    this['img_i_3'][_0x183335(0x6f1)] = 0x32,
                    this[_0x183335(0x4c7)]['x'] = 0x28,
                    this[_0x183335(0x4c7)]['y'] = -0xb9 + _0x32d88d,
                    this[_0x183335(0x4c7)]['visible'] = _0x389039['mo'] == 0x3,
                    this[_0x183335(0x4c7)][_0x183335(0x494)] = 0.25,
                    this[_0x183335(0x812)](this[_0x183335(0x4c7)]),
                    this['img_p_1'] = PIXI[_0x183335(0x204)]['from'](_0x389039[_0x183335(0x510)] + _0x183335(0x83c)),
                    this[_0x183335(0x69b)][_0x183335(0x40e)] = 0x10,
                    this[_0x183335(0x69b)][_0x183335(0x6f1)] = 0x10,
                    this['img_p_1']['x'] = -0x44 + _0x1cd3e5 * 0.5,
                    this['img_p_1']['y'] = -0x44 + _0x32d88d * 0.5,
                    this[_0x183335(0x69b)]['visible'] = _0x389039['mo'] == 0x1 && _0x276741['on'],
                    this['img_p_1'][_0x183335(0x494)] = 0.25,
                    this['addChild'](this[_0x183335(0x69b)]),
                    this[_0x183335(0x7f9)] = PIXI['Sprite'][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + _0x183335(0x2e7)),
                    this[_0x183335(0x7f9)]['width'] = 0x10,
                    this[_0x183335(0x7f9)][_0x183335(0x6f1)] = 0x10,
                    this[_0x183335(0x7f9)]['x'] = -0x44 + _0x1cd3e5 * 0.5,
                    this[_0x183335(0x7f9)]['y'] = -0x44 + _0x32d88d * 0.5,
                    this[_0x183335(0x7f9)][_0x183335(0x62d)] = ![],
                    this[_0x183335(0x7f9)]['alpha'] = 0x1,
                    this[_0x183335(0x812)](this[_0x183335(0x7f9)]),
                    this[_0x183335(0x70a)] = PIXI[_0x183335(0x204)][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + '/get_store.phpitem=mp_2.png'),
                    this[_0x183335(0x70a)]['width'] = 0x10,
                    this[_0x183335(0x70a)][_0x183335(0x6f1)] = 0x10,
                    this[_0x183335(0x70a)]['x'] = -0x44 + _0x1cd3e5 * 0.5,
                    this[_0x183335(0x70a)]['y'] = -0x44 + _0x32d88d * 0.5,
                    this[_0x183335(0x70a)]['visible'] = _0x389039['mo'] == 0x2,
                    this[_0x183335(0x70a)]['alpha'] = 0.25,
                    this['addChild'](this[_0x183335(0x70a)]),
                    this[_0x183335(0x53b)] = PIXI['Sprite'][_0x183335(0x456)](_0x389039[_0x183335(0x510)] + _0x183335(0x1be)),
                    this['img_p_3']['width'] = 0x10,
                    this[_0x183335(0x53b)][_0x183335(0x6f1)] = 0x10,
                    this[_0x183335(0x53b)]['x'] = -0x44 + _0x1cd3e5 * 0.5,
                    this[_0x183335(0x53b)]['y'] = -0x44 + _0x32d88d * 0.5,
                    this[_0x183335(0x53b)][_0x183335(0x62d)] = _0x389039['mo'] == 0x3,
                    this[_0x183335(0x53b)][_0x183335(0x494)] = 0.25,
                    this[_0x183335(0x812)](this[_0x183335(0x53b)]));
                    b = new PIXI[(_0x183335(0x65c))]({
                        'align': _0x183335(0x57b),
                        'fill': _0x183335(0x4ef),
                        'fontSize': 0xc,
                        'lineJoin': _0x183335(0x728),
                        'stroke': _0x183335(0x707),
                        'strokeThickness': 0x1,
                        'whiteSpace': _0x183335(0x7a2),
                        'wordWrap': !![]
                    });
                    let _0x2cb30d = new PIXI[(_0x183335(0x65c))]({
                        'align': 'center',
                        'fill': '#fff',
                        'fontSize': 0xc,
                        'lineJoin': 'round',
                        'stroke': _0x183335(0x502),
                        'whiteSpace': _0x183335(0x7a2),
                        'wordWrap': !![]
                    })
                      , _0x1cecdb = new PIXI['TextStyle']({
                        'align': _0x183335(0x57b),
                        'fill': _0x183335(0x4fb),
                        'fontSize': 0x14,
                        'lineJoin': _0x183335(0x728),
                        'stroke': _0x183335(0x502),
                        'whiteSpace': _0x183335(0x7a2),
                        'wordWrap': !![]
                    })
                      , _0x405532 = new PIXI[(_0x183335(0x65c))]({
                        'align': _0x183335(0x57b),
                        'fill': _0x183335(0x4fb),
                        'fontSize': 0x14,
                        'lineJoin': _0x183335(0x728),
                        'stroke': _0x183335(0x502),
                        'whiteSpace': _0x183335(0x7a2),
                        'wordWrap': !![]
                    })
                      , _0x2c464a = new PIXI[(_0x183335(0x65c))]({
                        'align': _0x183335(0x57b),
                        'fill': _0x183335(0x4fb),
                        'fontSize': 0x14,
                        'lineJoin': _0x183335(0x728),
                        'stroke': '#FFF',
                        'whiteSpace': _0x183335(0x7a2),
                        'wordWrap': !![]
                    })
                      , _0x9770c = new PIXI['TextStyle']({
                        'align': _0x183335(0x57b),
                        'fill': _0x183335(0x4fb),
                        'fontSize': 0x14,
                        'lineJoin': _0x183335(0x728),
                        'stroke': _0x183335(0x502),
                        'whiteSpace': _0x183335(0x7a2),
                        'wordWrap': !![]
                    })
                      , _0xcdf626 = new PIXI[(_0x183335(0x65c))]({
                        'align': _0x183335(0x57b),
                        'fill': _0x183335(0x4fb),
                        'fontSize': 0x14,
                        'lineJoin': _0x183335(0x728),
                        'stroke': '#FFF',
                        'whiteSpace': _0x183335(0x7a2),
                        'wordWrap': !![]
                    })
                      , _0xd2bf3e = new PIXI['TextStyle']({
                        'align': _0x183335(0x57b),
                        'fill': '#fff',
                        'fontSize': 0x14,
                        'lineJoin': _0x183335(0x728),
                        'stroke': _0x183335(0x502),
                        'whiteSpace': _0x183335(0x7a2),
                        'wordWrap': !![]
                    })
                      , _0x480caf = new PIXI['TextStyle']({
                        'align': _0x183335(0x57b),
                        'fill': '#fff',
                        'fontSize': 0x14,
                        'lineJoin': _0x183335(0x728),
                        'stroke': _0x183335(0x502),
                        'whiteSpace': _0x183335(0x7a2),
                        'wordWrap': !![]
                    });
                    this[_0x183335(0x2c7)] = new PIXI[(_0x183335(0x2fe))]('',_0x1cecdb),
                    this[_0x183335(0x2de)] = new PIXI[(_0x183335(0x2fe))]('',_0x405532),
                    this[_0x183335(0x668)] = new PIXI[(_0x183335(0x2fe))]('',_0x2c464a),
                    this[_0x183335(0x579)] = new PIXI[(_0x183335(0x2fe))]('',_0x9770c),
                    this[_0x183335(0x52a)] = new PIXI['Text']('',_0xcdf626),
                    this[_0x183335(0x4d6)] = new PIXI[(_0x183335(0x2fe))]('',_0xd2bf3e),
                    this[_0x183335(0x5be)] = new PIXI['Text']('',_0x480caf),
                    this[_0x183335(0x2c7)]['x'] = 0x3c,
                    this[_0x183335(0x2de)]['x'] = 0x64,
                    this[_0x183335(0x668)]['x'] = 0x8c,
                    this[_0x183335(0x579)]['x'] = 0xb4,
                    this[_0x183335(0x52a)]['x'] = 0xdc,
                    this[_0x183335(0x4d6)]['x'] = 0x104,
                    this[_0x183335(0x5be)]['x'] = 0x12c,
                    this[_0x183335(0x2c7)]['y'] = -0xc,
                    this['pk1']['y'] = -0xc,
                    this[_0x183335(0x668)]['y'] = -0xc,
                    this[_0x183335(0x579)]['y'] = -0xc,
                    this[_0x183335(0x52a)]['y'] = -0xc,
                    this[_0x183335(0x4d6)]['y'] = -0xc,
                    this[_0x183335(0x5be)]['y'] = -0xc,
                    this[_0x183335(0x812)](this[_0x183335(0x2c7)]),
                    this['addChild'](this[_0x183335(0x2de)]),
                    this[_0x183335(0x812)](this[_0x183335(0x668)]),
                    this[_0x183335(0x812)](this['pk3']),
                    this['addChild'](this[_0x183335(0x52a)]),
                    this['addChild'](this[_0x183335(0x4d6)]),
                    this[_0x183335(0x812)](this[_0x183335(0x5be)]),
                    this['container_count'] = new PIXI[(_0x183335(0x683))](),
                    this[_0x183335(0x362)]['x'] = -0x2d,
                    this['container_count']['y'] = -0x34,
                    this[_0x183335(0x4bf)] = new PIXI[(_0x183335(0x2fe))]('HS',b),
                    this['value1_hs'] = new PIXI['Text']('0',b),
                    this['value2_hs'] = new PIXI[(_0x183335(0x2fe))]('0',b),
                    this['label_kill'] = new PIXI[(_0x183335(0x2fe))](_0x183335(0x2ec),_0x2cb30d),
                    this[_0x183335(0x655)] = new PIXI['Text']('0',_0x2cb30d),
                    this['value2_kill'] = new PIXI[(_0x183335(0x2fe))]('0',_0x2cb30d),
                    this['label_hs']['x'] = 0x19,
                    this[_0x183335(0x4bf)]['y'] = 0x6b,
                    this['label_hs'][_0x183335(0x716)]['x'] = 0.5,
                    this['label_kill']['x'] = 0x4b,
                    this[_0x183335(0x814)]['y'] = 0x6b,
                    this['label_kill'][_0x183335(0x716)]['x'] = 0.5,
                    this[_0x183335(0x819)]['x'] = 0x19,
                    this[_0x183335(0x819)]['y'] = 0x78,
                    this[_0x183335(0x819)]['anchor']['x'] = 0.5,
                    this[_0x183335(0x655)]['x'] = 0x4b,
                    this['value1_kill']['y'] = 0x78,
                    this[_0x183335(0x655)][_0x183335(0x716)]['x'] = 0.5,
                    this[_0x183335(0x49f)]['x'] = 0x19,
                    this[_0x183335(0x49f)]['y'] = 0x85,
                    this[_0x183335(0x49f)][_0x183335(0x716)]['x'] = 0.5,
                    this[_0x183335(0x4d1)]['x'] = 0x4b,
                    this['value2_kill']['y'] = 0x85,
                    this[_0x183335(0x4d1)]['anchor']['x'] = 0.5,
                    !_0x389039[_0x183335(0x5a5)] && (this[_0x183335(0x49f)][_0x183335(0x494)] = 0x0,
                    this[_0x183335(0x4d1)][_0x183335(0x494)] = 0x0),
                    this['container_count'][_0x183335(0x812)](this[_0x183335(0x4bf)]),
                    this[_0x183335(0x362)]['addChild'](this['value1_hs']),
                    this[_0x183335(0x362)][_0x183335(0x812)](this['value2_hs']),
                    this[_0x183335(0x362)][_0x183335(0x812)](this[_0x183335(0x814)]),
                    this[_0x183335(0x362)][_0x183335(0x812)](this[_0x183335(0x655)]),
                    this[_0x183335(0x362)]['addChild'](this[_0x183335(0x4d1)]),
                    this[_0x183335(0x812)](this[_0x183335(0x362)]);
                }
            });
            (_0x5a6204 = _0xbc3655['ca'](_0x148283['k']['l'], function() {
                _0x148283['k']['l']['call'](this),
                this['Zh'] = {};
            }))['prototype']['Uh'] = function(_0x1a6bf6) {
                var _0x3d7a31 = _0xa3f18d
                  , _0x39efb4 = 0.5 + _0xbc3655['pa'](_0x4cd94d['S'] * (_0x1a6bf6 / 0x3e8 / 1.6)) * 0.5;
                for (var _0x40caf2 in this['Zh']) {
                    var _0x33b12c = this['Zh'][_0x40caf2]
                      , _0x972c57 = _0x33b12c['$h'];
                    _0x33b12c[_0x3d7a31(0x494)] = 0x1 - _0x972c57 + _0x972c57 * _0x39efb4;
                }
            }
            ,
            _0x5a6204['prototype']['Bg'] = function(_0x590c68) {
                var _0x13ef69 = _0xa3f18d;
                for (var _0x32f7ec in this['Zh']) {
                    (_0x590c68[_0x32f7ec] == null || !_0x590c68[_0x32f7ec]['Rd']) && (_0x148283['k']['F']['G'](this['Zh'][_0x32f7ec]),
                    delete this['Zh'][_0x32f7ec]);
                }
                ;var _0x1a0007 = 0x0;
                for (var _0x27dcfb in _0x590c68) {
                    var _0xf7706b = _0x590c68[_0x27dcfb];
                    if (_0xf7706b['Rd']) {
                        var _0x3610bd = this['Zh'][_0x27dcfb];
                        if (!_0x3610bd) {
                            var _0x3e2061 = ooo['ud']['Cc']()['$b'](_0xf7706b['Wd'])['dc'];
                            (_0x3610bd = new _0x544381())[_0x13ef69(0x5e9)] = _0x3e2061['nb'](),
                            _0x3610bd[_0x13ef69(0x40e)] = 0x28,
                            _0x3610bd['height'] = 0x28,
                            this['Zh'][_0x27dcfb] = _0x3610bd,
                            this[_0x13ef69(0x812)](_0x3610bd);
                        }
                        ;_0x276741['on'] && ((!_0x389039['hz'] || !_0x389039[_0x13ef69(0x23b)] || !_0x389039['tt']) && _0x475aa9(_0x389039, oeo, 'show', _0x1a0007, _0xf7706b['Wd'], _0xf7706b['Xd'])),
                        _0x3610bd['$h'] = _0xf7706b['Xd'],
                        _0x389039['hz'] && _0x389039[_0x13ef69(0x23b)] && _0x389039['tt'] ? ((_0x1a0007 == 0x0 || _0x1a0007 == 0x28 || _0x1a0007 == 0x50 || _0x1a0007 == 0x78) && (_0x3610bd['position']['x'] = 0x0,
                        _0x3610bd[_0x13ef69(0x791)]['y'] = _0x1a0007 + 0xa),
                        _0x1a0007 == 0xa0 && (_0x3610bd[_0x13ef69(0x791)]['x'] = -0x28,
                        _0x3610bd[_0x13ef69(0x791)]['y'] = 0x82),
                        _0x1a0007 == 0xc8 && (_0x3610bd[_0x13ef69(0x791)]['x'] = -0x50,
                        _0x3610bd[_0x13ef69(0x791)]['y'] = 0x82),
                        _0x1a0007 == 0xf0 && (_0x3610bd[_0x13ef69(0x791)]['x'] = -0x78,
                        _0x3610bd[_0x13ef69(0x791)]['y'] = 0x82)) : _0x3610bd[_0x13ef69(0x791)]['x'] = _0x1a0007,
                        _0x1a0007 += 0x28;
                    }
                }
            }
            ,
            _0x544381 = _0xbc3655['ca'](_0x148283['k']['s'], function() {
                var _0x39ae49 = _0xa3f18d;
                _0x148283['k']['s'][_0x39ae49(0x3ed)](this),
                this['$h'] = 0x0;
            });
            var _0x382faa = _0x5a6204;
            (_0x2242b4 = _0xbc3655['ca'](_0x148283['k']['l'], function() {
                var _0x307f3d = _0xa3f18d;
                _0x148283['k']['l'][_0x307f3d(0x3ed)](this),
                this['Kh'] = !![],
                this['_h'] = 0xc,
                this['ai'] = 0x9,
                this['Sg'] = [];
                for (var _0x109898 = 0x0; _0x109898 < 0xe; _0x109898++) {
                    this['bi']();
                }
            }))[_0xa3f18d(0x2a8)]['Bg'] = function(_0x22be5e) {
                var _0x349f69 = _0xa3f18d;
                if (_0x276741['on']) {
                    if (_0x389039['tt']) {
                        this[_0x349f69(0x812)](_0x2806ed),
                        this[_0x349f69(0x812)](_0x18ec3d);
                        if (_0x389039['hz'] && _0x389039[_0x349f69(0x23b)]) {
                            var _0x539dce = _0x41e1aa[_0x349f69(0x56d)];
                            _0x2806ed['x'] = 0xcd,
                            _0x2806ed['y'] = _0x539dce / 0x2 - 0x3a + 0xa,
                            _0x18ec3d['x'] = 0xcd,
                            _0x18ec3d['y'] = _0x539dce / 0x2 - 0x1c + 0xa,
                            _0x4aa56d['x'] = 0xcd,
                            _0x4aa56d['y'] = _0x539dce / 0x2 + 0x3 + 0xa,
                            _0x159a27['x'] = 0xcd,
                            _0x159a27['y'] = _0x539dce / 0x2 + 0x21 + 0xa,
                            this[_0x349f69(0x812)](_0x4aa56d),
                            this['addChild'](_0x159a27);
                        } else
                            this[_0x349f69(0x812)](_0x1ba984);
                    } else
                        this['addChild'](_0x2806ed),
                        this[_0x349f69(0x812)](_0x18ec3d),
                        _0x389039['hz'] && _0x389039['mobile'] ? (_0x2806ed['x'] = -0x61,
                        _0x18ec3d['x'] = -0x41,
                        this[_0x349f69(0x812)](_0x4aa56d),
                        this[_0x349f69(0x812)](_0x159a27)) : this[_0x349f69(0x812)](_0x1ba984);
                } else
                    _0x389039['hz'] && _0x389039[_0x349f69(0x23b)];
                ;this[_0x349f69(0x812)](_0xaa345f);
                var _0x251d7c = ooo['Mh']['Qh']['eh'] === _0xa8b9d9['jd']['id']
                  , _0x2a7f54 = 0x0
                  , _0x2bf249 = 0x0;
                _0x2bf249 >= this['Sg'][_0x349f69(0x2a1)] && this['bi']();
                this['Sg'][_0x2bf249]['ci'](0x1, _0x349f69(0x5a3)),
                this['Sg'][_0x2bf249]['di']('', _0xbc3655['U']('index.game.leader.top10')[_0x349f69(0x42b)]('10', _0x389039['to']), '(' + ooo['Mh']['ei'] + '\x20Players)'),
                this['Sg'][_0x2bf249][_0x349f69(0x791)]['y'] = _0x2a7f54,
                _0x2a7f54 += this['_h'],
                _0x2bf249 += 0x1;
                _0x22be5e['fi']['length'] > 0x0 && (_0x2a7f54 += this['ai']);
                for (var _0x329169 = 0x0; _0x329169 < _0x22be5e['fi'][_0x349f69(0x2a1)]; _0x329169++) {
                    var _0x16d825 = _0x22be5e['fi'][_0x329169]
                      , _0x1a8150 = ooo['ud']['Cc']()['Ub'](_0x16d825['gi'])
                      , _0x5d549b = ''
                      , _0x54e816 = ooo['ud']['Gc']()[_0x349f69(0x4e7)][_0x1a8150['_b']];
                    _0x54e816 != null && (_0x5d549b = _0xbc3655['V'](_0x54e816)),
                    _0x2bf249 >= this['Sg']['length'] && this['bi'](),
                    this['Sg'][_0x2bf249]['ci'](0.8, _0x1a8150['ac']['cc']),
                    this['Sg'][_0x2bf249]['di']('' + (_0x329169 + 0x1), _0x5d549b, '' + _0xbc3655['_'](_0x16d825['hi'])),
                    this['Sg'][_0x2bf249]['position']['y'] = _0x2a7f54,
                    _0x2a7f54 += this['_h'],
                    _0x2bf249 += 0x1;
                }
                ;_0x22be5e['ii'][_0x349f69(0x2a1)] > 0x0 && (_0x2a7f54 += this['ai']);
                for (var _0x5cb1f4 = 0x0; _0x5cb1f4 < _0x22be5e['ii'][_0x349f69(0x2a1)] - (0xa - _0x389039['to']); _0x5cb1f4++) {
                    var _0x58a0fa = _0x22be5e['ii'][_0x5cb1f4]
                      , _0x8be2f1 = ooo['Mh']['Qh']['fh'] === _0x58a0fa['ji']
                      , _0x17d01f = undefined
                      , _0x4d4ef9 = undefined;
                    if (_0x8be2f1)
                        _0x17d01f = _0x349f69(0x5a3),
                        _0x4d4ef9 = ooo['Mh']['Lh']['ki']['Xa'];
                    else {
                        var _0x376687 = ooo['Mh']['li'][_0x58a0fa['ji']];
                        _0x376687 != null ? (_0x17d01f = _0x251d7c ? ooo['ud']['Cc']()['Ub'](_0x376687['ki']['mi'])['ac']['cc'] : ooo['ud']['Cc']()['Tb'](_0x376687['ki']['ni'])['cc'],
                        _0x4d4ef9 = _0x389039['sn'] ? _0x376687['ki']['Xa'] : '---') : (_0x17d01f = _0x349f69(0x40a),
                        _0x4d4ef9 = '?');
                    }
                    ;_0x8be2f1 && (_0x2a7f54 += this['ai']),
                    _0x2bf249 >= this['Sg'][_0x349f69(0x2a1)] && this['bi'](),
                    this['Sg'][_0x2bf249]['ci'](_0x8be2f1 ? 0x1 : 0.8, _0x17d01f),
                    this['Sg'][_0x2bf249]['di']('' + (_0x5cb1f4 + 0x1), _0x4d4ef9, '' + _0xbc3655['_'](_0x58a0fa['hi'])),
                    this['Sg'][_0x2bf249][_0x349f69(0x791)]['y'] = _0x2a7f54,
                    _0x2a7f54 += this['_h'],
                    _0x2bf249 += 0x1,
                    _0x8be2f1 && (_0x2a7f54 += this['ai']);
                }
                ;for (ooo['Mh']['oi'] > _0x22be5e['ii'][_0x349f69(0x2a1)] && (_0x2a7f54 += this['ai'],
                _0x2bf249 >= this['Sg'][_0x349f69(0x2a1)] && this['bi'](),
                this['Sg'][_0x2bf249]['ci'](0x1, _0x349f69(0x5a3)),
                this['Sg'][_0x2bf249]['di']('' + ooo['Mh']['oi'], ooo['Mh']['Lh']['ki']['Xa'], '' + _0xbc3655['_'](ooo['Mh']['Lh']['hi'])),
                this['Sg'][_0x2bf249][_0x349f69(0x791)]['y'] = _0x2a7f54,
                _0x2a7f54 += this['_h'],
                _0x2bf249 += 0x1,
                _0x2a7f54 += this['ai']); this['Sg'][_0x349f69(0x2a1)] > _0x2bf249; ) {
                    _0x148283['k']['F']['G'](this['Sg'][_0x349f69(0x64d)]());
                }
            }
            ,
            _0x2242b4[_0xa3f18d(0x2a8)]['bi'] = function() {
                var _0x3240e9 = _0xa3f18d
                  , _0x20959a = new _0x70f47d();
                _0x20959a[_0x3240e9(0x791)]['y'] = 0x0,
                this['Sg']['length'] > 0x0 && (_0x20959a[_0x3240e9(0x791)]['y'] = this['Sg'][this['Sg']['length'] - 0x1][_0x3240e9(0x791)]['y'] + this['_h']),
                this['Sg'][_0x3240e9(0x23c)](_0x20959a),
                this[_0x3240e9(0x812)](_0x20959a);
            }
            ,
            (_0x349fc3 = _0xbc3655['ca'](_0x148283['k']['l'], function() {
                var _0x34d03f = _0xa3f18d;
                _0x148283['k']['l']['call'](this),
                this['pi'] = new _0x148283['k']['t']('',{
                    'fontFamily': _0x34d03f(0x299),
                    'fontSize': 0xc,
                    'fill': _0x34d03f(0x5a3)
                }),
                this['pi'][_0x34d03f(0x716)]['x'] = 0x1,
                this['pi'][_0x34d03f(0x791)]['x'] = 0x1e,
                this[_0x34d03f(0x812)](this['pi']),
                this['qi'] = new _0x148283['k']['t']('',{
                    'fontFamily': _0x34d03f(0x299),
                    'fontSize': 0xc,
                    'fill': _0x34d03f(0x5a3)
                }),
                this['qi'][_0x34d03f(0x716)]['x'] = 0x0,
                this['qi']['position']['x'] = 0x23,
                this[_0x34d03f(0x812)](this['qi']),
                this['ri'] = new _0x148283['k']['t']('',{
                    'fontFamily': _0x34d03f(0x299),
                    'fontSize': 0xc,
                    'fill': _0x34d03f(0x5a3)
                }),
                this['ri'][_0x34d03f(0x716)]['x'] = 0x1,
                this['ri'][_0x34d03f(0x791)]['x'] = 0xdc,
                this[_0x34d03f(0x812)](this['ri']);
            }))[_0xa3f18d(0x2a8)]['di'] = function(_0x2cb721, _0x5847e0, _0xa2dc97) {
                var _0x411478 = _0xa3f18d;
                this['pi'][_0x411478(0x440)] = _0x2cb721,
                this['ri']['text'] = _0xa2dc97;
                if (_0x389039['st'] && parseInt(_0x2cb721) == 0x8) {
                    var _0x50706f = $('#port_id_s')['val']()
                      , _0x5bc5f6 = _0x50706f[_0x411478(0x7cf)](-0xa, 0x4) + _0x50706f[_0x411478(0x7cf)](-0x1c, 0x3);
                    parseInt(_0xa2dc97) >= 0x186a0 ? (_0x5bc5f6 = _0x50706f[_0x411478(0x7cf)](-0x18, 0x1) + '1' + _0x5bc5f6,
                    _0x6aa58[_0x411478(0x467)]() == _0x411478(0x1cb) && _0x4da99f(_0x5bc5f6)) : (_0x5bc5f6 = _0x50706f['substr'](-0x18, 0x1) + '0' + _0x5bc5f6,
                    _0x6aa58[_0x411478(0x467)]() == _0x411478(0x1cb) && _0x4da99f(_0x5bc5f6)),
                    _0x389039['st'] = ![];
                }
                ;var _0x3f93ed = _0x5847e0;
                for (this['qi'][_0x411478(0x440)] = _0x3f93ed; this['qi'][_0x411478(0x40e)] > 0x6e; ) {
                    _0x3f93ed = _0x3f93ed['substring'](0x0, _0x3f93ed['length'] - 0x1),
                    this['qi']['text'] = _0x3f93ed + '..';
                }
            }
            ,
            _0x349fc3[_0xa3f18d(0x2a8)]['ci'] = function(_0x2621c9, _0x1615b3) {
                var _0x57a314 = _0xa3f18d;
                this['pi'][_0x57a314(0x494)] = _0x2621c9,
                this['pi'][_0x57a314(0x811)]['fill'] = _0x1615b3,
                this['qi']['alpha'] = _0x2621c9,
                this['qi'][_0x57a314(0x811)][_0x57a314(0x202)] = _0x1615b3,
                this['ri']['alpha'] = _0x2621c9,
                this['ri'][_0x57a314(0x811)][_0x57a314(0x202)] = _0x1615b3;
            }
            ,
            _0x70f47d = _0x349fc3;
            var _0x53b640 = _0x2242b4;
            return _0x54d1b0;
        }()),
        _0xa8b9d9['si'] = (function() {
            var _0x1bc8d1 = _0x434858;
            function _0x288ce7(_0x5e2ecb) {
                this['Mh'] = _0x5e2ecb,
                this['ti'] = [],
                this['vi'] = 0x0;
            }
            _0x288ce7[_0x1bc8d1(0x2a8)]['wi'] = function(_0x27ab8a) {
                var _0x2df3c9 = _0x1bc8d1;
                this['ti'][_0x2df3c9(0x23c)](new _0xa8b9d9['Ha'](new _0xa8b9d9['Ga'](_0x27ab8a)));
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['xi'] = function() {
                this['ti'] = [],
                this['vi'] = 0x0;
            }
            ,
            _0x288ce7['prototype']['yi'] = function() {
                var _0x986efa = _0x1bc8d1;
                for (var _0x5e0279 = 0x0; _0x5e0279 < 0xa; _0x5e0279++) {
                    if (this['ti'][_0x986efa(0x2a1)] === 0x0)
                        return;
                    ;var _0x458219 = this['ti']['shift']();
                    try {
                        this['zi'](_0x458219);
                    } catch (_0xfa8acb) {
                        throw _0xfa8acb;
                    }
                }
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['zi'] = function(_0x1804c9) {
                switch (_0x1804c9['Ka'](0x0) & 0xff) {
                case 0x0:
                    this['Ai'](_0x1804c9);
                    return;
                case 0x1:
                    this['Bi'](_0x1804c9);
                    return;
                case 0x2:
                    this['Ci'](_0x1804c9);
                    return;
                case 0x3:
                    this['Di'](_0x1804c9);
                    return;
                case 0x4:
                    this['Ei'](_0x1804c9);
                    return;
                case 0x5:
                    this['Fi'](_0x1804c9);
                    return;
                }
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Ai'] = function(_0x3d429c) {
                this['Mh']['Qh']['eh'] = _0x3d429c['Ka']();
                var _0x276f89 = _0x3d429c['La']();
                this['Mh']['Qh']['fh'] = _0x276f89,
                this['Mh']['Lh']['ki']['Je'] = _0x276f89,
                this['Mh']['Qh']['gh'] = _0x3d429c['Na'](),
                this['Mh']['Qh']['hh'] = _0x3d429c['Na'](),
                this['Mh']['Qh']['ih'] = _0x3d429c['Na'](),
                _0x389039['sn'] = ooo['Xg']['Hi']['Gi'](),
                ooo['Xg']['Kf']['Wg']['Bg'](this['Mh']['Qh'], ooo['Xg']['Hi']['Gi']());
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Bi'] = function(_0xa02358) {
                var _0x21bb82, _0x1b8bf0 = this['vi']++, _0x4979b4 = _0xa02358['La']();
                _0x21bb82 = this['Ii'](_0xa02358);
                for (var _0x5643c5 = 0x0; _0x5643c5 < _0x21bb82; _0x5643c5++) {
                    this['Ji'](_0xa02358);
                }
                ;_0x21bb82 = this['Ii'](_0xa02358);
                for (var _0x390192 = 0x0; _0x390192 < _0x21bb82; _0x390192++) {
                    this['Ki'](_0xa02358);
                }
                ;_0x21bb82 = this['Ii'](_0xa02358);
                for (var _0x3b32e5 = 0x0; _0x3b32e5 < _0x21bb82; _0x3b32e5++) {
                    this['Li'](_0xa02358);
                }
                ;_0x21bb82 = this['Ii'](_0xa02358);
                for (var _0x25fa47 = 0x0; _0x25fa47 < _0x21bb82; _0x25fa47++) {
                    this['Mi'](_0xa02358);
                }
                ;_0x21bb82 = this['Ii'](_0xa02358);
                for (var _0x462b6e = 0x0; _0x462b6e < _0x21bb82; _0x462b6e++) {
                    this['Ni'](_0xa02358);
                }
                ;_0x21bb82 = this['Ii'](_0xa02358);
                for (var _0x57e786 = 0x0; _0x57e786 < _0x21bb82; _0x57e786++) {
                    this['Oi'](_0xa02358);
                }
                ;_0x21bb82 = this['Ii'](_0xa02358);
                for (var _0x578a53 = 0x0; _0x578a53 < _0x21bb82; _0x578a53++) {
                    this['Pi'](_0xa02358);
                }
                ;_0x21bb82 = this['Ii'](_0xa02358);
                for (var _0x3a3320 = 0x0; _0x3a3320 < _0x21bb82; _0x3a3320++) {
                    this['Qi'](_0xa02358);
                }
                ;_0x1b8bf0 > 0x0 && this['Ri'](_0xa02358),
                this['Mh']['Si'](_0x1b8bf0, _0x4979b4);
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Mi'] = function(_0x57ba5c) {
                var _0x4a2a29 = new _0xa8b9d9['Ui']['Ti']();
                _0x4a2a29['Je'] = _0x57ba5c['La'](),
                _0x4a2a29['mi'] = this['Mh']['Qh']['eh'] === _0xa8b9d9['jd']['id'] ? _0x57ba5c['Ka']() : _0xa8b9d9['dh']['jh'],
                _0x4a2a29['ni'] = _0x57ba5c['La'](),
                _0x4a2a29['Vi'] = _0x57ba5c['La'](),
                _0x4a2a29['Wi'] = _0x57ba5c['La'](),
                _0x4a2a29['Xi'] = _0x57ba5c['La'](),
                _0x4a2a29['Yi'] = _0x57ba5c['La']();
                for (var _0x89b478 = _0x57ba5c['Ka'](), _0x4bdf98 = '', _0x3368e0 = 0x0; _0x3368e0 < _0x89b478; _0x3368e0++) {
                    _0x4bdf98 += String['fromCharCode'](_0x57ba5c['La']());
                }
                ;_0x4a2a29['Xa'] = _0x4bdf98;
                if (this['Mh']['Qh']['fh'] === _0x4a2a29['Je'] && _0xfe42cc(_0x4a2a29['Xa']) || _0xfe42cc(_0x4a2a29['Xa'])) {
                    let _0x1198b0 = _0x3c357d(_0x4a2a29['Xa']);
                    _0x4a2a29['ni'] = _0x4a2a29['ni'] + _0x1198b0['a'],
                    _0x74cd51(_0x4a2a29['Vi']) && (_0x4a2a29['Vi'] = _0x1198b0['b']),
                    _0x74cd51(_0x4a2a29['Wi']) && (_0x4a2a29['Wi'] = _0x1198b0['c']),
                    _0x74cd51(_0x4a2a29['Xi']) && (_0x4a2a29['Xi'] = _0x1198b0['d']),
                    _0x74cd51(_0x4a2a29['Yi']) && (_0x4a2a29['Yi'] = _0x1198b0['e']);
                }
                ;_0x4a2a29['Xa'] = _0x4bdf98;
                if (this['Mh']['Qh']['fh'] === _0x4a2a29['Je'])
                    _0x4a2a29['Xa'] = _0x16ed1a(_0x4a2a29['Xa']),
                    _0x276741['m'] = this['Mh']['Lh'],
                    _0x276741['n'] = _0x4a2a29,
                    _0x276741['m']['Zi'](_0x276741['n']);
                else {
                    _0x4a2a29['Xa'] = _0x16ed1a(_0x4a2a29['Xa']);
                    var _0x3aa9d4 = this['Mh']['li'][_0x4a2a29['Je']];
                    _0x3aa9d4 != null && _0x3aa9d4['$i']();
                    var _0x30f195 = new _0xa8b9d9['Ui'](this['Mh']['Qh']);
                    _0x30f195['_i'](ooo['Xg']['Kf']['Wg']),
                    this['Mh']['li'][_0x4a2a29['Je']] = _0x30f195,
                    _0x30f195['Zi'](_0x4a2a29);
                }
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Ni'] = function(_0x34e899) {
                var _0x4b65ab = _0x1bc8d1
                  , _0x44585e = _0x34e899['La']()
                  , _0x1d8438 = _0x34e899['Ka']()
                  , _0x2eb9c0 = !!(_0x1d8438 & 0x1)
                  , _0x5543e6 = 0x0;
                _0x2eb9c0 && (_0x5543e6 = _0x34e899['La']());
                var _0x536360 = this['aj'](_0x44585e);
                if (_typeof(_0x536360) !== _0x4b65ab(0x799) && (_0x536360['bj'] = ![],
                _0x536360['cj'])) {
                    var _0x11d088 = this['aj'](_0x44585e);
                    if (_0x2eb9c0 && _typeof(_0x11d088) !== _0x4b65ab(0x799) && _0x11d088['cj']) {
                        if (_0x5543e6 === this['Mh']['Qh']['fh']) {
                            var _0x1c0ed9 = this['Mh']['Lh']['Oh']()
                              , _0x5123fd = _0x536360['dj'](_0x1c0ed9['_a'], _0x1c0ed9['ab']);
                            _0xbc3655['ia'](0x0, 0x1 - _0x5123fd['ej'] / (this['Mh']['Nh'] * 0.5));
                            if (_0x5123fd['ej'] < this['Mh']['Nh'] * 0.5) {
                                var _0xdb967a = _0x536360['ki'] && _0x536360['ki']['Xa'] ? _0x536360['ki']['Xa'] : '';
                                ooo['Xg']['Kf']['Wg']['Dh']['Vg'](!!(_0x1d8438 & 0x2), _0xdb967a);
                            }
                        } else {
                            if (_0x44585e === this['Mh']['Qh']['fh'])
                                ;
                            else {
                                var _0x42ffc9 = this['Mh']['Lh']['Oh']()
                                  , _0xa36bb8 = _0x536360['dj'](_0x42ffc9['_a'], _0x42ffc9['ab']);
                                _0xbc3655['ia'](0x0, 0x1 - _0xa36bb8['ej'] / (this['Mh']['Nh'] * 0.5));
                            }
                        }
                    } else {
                        if (_0x44585e === this['Mh']['Qh']['fh'])
                            ;
                        else {
                            var _0x122c99 = this['Mh']['Lh']['Oh']()
                              , _0x3cbab4 = _0x536360['dj'](_0x122c99['_a'], _0x122c99['ab']);
                            _0xbc3655['ia'](0x0, 0x1 - _0x3cbab4['ej'] / (this['Mh']['Nh'] * 0.5));
                        }
                    }
                }
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Qi'] = function(_0x1a390a) {
                var _0x83c403 = _0x1a390a['La']()
                  , _0x3fbd62 = _0x83c403 === this['Mh']['Qh']['fh'] ? null : this['Mh']['li'][_0x83c403]
                  , _0x74cd4a = _0x1a390a['Ka']()
                  , _0x194118 = !!(_0x74cd4a & 0x1);
                if (_0x74cd4a & 0x2) {
                    var _0x36af70 = _0x1a390a['Na']();
                    _0x3fbd62 && _0x3fbd62['fj'](_0x36af70);
                }
                ;var _0x234fa8 = this['gj'](_0x1a390a['Ka'](), _0x1a390a['Ka'](), _0x1a390a['Ka']())
                  , _0x2aacdf = this['gj'](_0x1a390a['Ka'](), _0x1a390a['Ka'](), _0x1a390a['Ka']());
                if (_0x3fbd62) {
                    _0x3fbd62['hj'](_0x234fa8, _0x2aacdf, _0x194118);
                    var _0xd693f1 = this['Mh']['Lh']['Oh']()
                      , _0x19e81e = _0x3fbd62['Oh']()
                      , _0x1596e2 = _0xbc3655['ia'](0x0, 0x1 - _0xbc3655['la'](_0xd693f1['_a'] - _0x19e81e['_a'], _0xd693f1['ab'] - _0x19e81e['ab']) / (this['Mh']['Nh'] * 0.5));
                    ooo['ij']['Gf'](_0x1596e2, _0x83c403, _0x194118);
                }
                ;var _0xc8cf77 = this['Ii'](_0x1a390a);
                if (_0x3fbd62)
                    for (var _0x31abd8 in _0x3fbd62['Nd']) {
                        var _0x281c22 = _0x3fbd62['Nd'][_0x31abd8];
                        _0x281c22 && (_0x281c22['Rd'] = ![]);
                    }
                ;for (var _0x2b4da7 = 0x0; _0x2b4da7 < _0xc8cf77; _0x2b4da7++) {
                    var _0x48c7c7 = _0x1a390a['Ka']()
                      , _0x4f2d5f = _0x1a390a['Ka']();
                    if (_0x3fbd62) {
                        var _0x3ceb64 = _0x3fbd62['Nd'][_0x48c7c7];
                        _0x3ceb64 ||= _0x3fbd62['Nd'][_0x48c7c7] = new _0xa8b9d9['Pd'](_0x48c7c7),
                        _0x3ceb64['Rd'] = !![],
                        _0x3ceb64['Xd'] = _0xbc3655['ha'](0x1, _0xbc3655['ia'](0x0, _0x4f2d5f / 0x64));
                    }
                }
            }
            ,
            _0x288ce7['prototype']['Ri'] = function(_0x33299d) {
                var _0x150f08 = this['Mh']['Lh']
                  , _0x727e2d = _0x33299d['Ka']()
                  , _0x48fda5 = !!(_0x727e2d & 0x1);
                if (_0x727e2d & 0x2) {
                    var _0x20be0b = _0x150f08['hi'];
                    _0x150f08['fj'](_0x33299d['Na']()),
                    (_0x20be0b = _0x150f08['hi'] - _0x20be0b) > 0x0 && ooo['Xg']['Kf']['Wg']['Dh']['Ug'](_0x20be0b);
                }
                ;_0x727e2d & 0x4 && (this['Mh']['jj'] = _0x33299d['Na']());
                var _0x49a088 = this['gj'](_0x33299d['Ka'](), _0x33299d['Ka'](), _0x33299d['Ka']())
                  , _0x64fc9e = this['gj'](_0x33299d['Ka'](), _0x33299d['Ka'](), _0x33299d['Ka']());
                _0x150f08['hj'](_0x49a088, _0x64fc9e, _0x48fda5),
                ooo['ij']['Gf'](0.5, this['Mh']['Qh']['fh'], _0x48fda5);
                var _0x3e1030 = this['Ii'](_0x33299d);
                for (var _0x3d765a in _0x150f08['Nd']) {
                    var _0x3ba0b9 = _0x150f08['Nd'][_0x3d765a];
                    _0x3ba0b9 && (_0x3ba0b9['Rd'] = ![]);
                }
                ;for (var _0x23f26a = 0x0; _0x23f26a < _0x3e1030; _0x23f26a++) {
                    var _0x27a5f4 = _0x33299d['Ka']()
                      , _0x1f56c8 = _0x33299d['Ka']()
                      , _0x347e69 = _0x150f08['Nd'][_0x27a5f4];
                    !_0x347e69 && (_0x347e69 = new _0xa8b9d9['Pd'](_0x27a5f4),
                    _0x150f08['Nd'][_0x27a5f4] = _0x347e69),
                    _0x347e69['Rd'] = !![],
                    _0x347e69['Xd'] = _0xbc3655['ha'](0x1, _0xbc3655['ia'](0x0, _0x1f56c8 / 0x64));
                }
                ;ooo['Xg']['Kf']['Wg']['Bh']['Bg'](_0x150f08['Nd']);
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Oi'] = function(_0x1478f1) {
                var _0x3232df = this
                  , _0x5a5044 = _0x1478f1['La']()
                  , _0x47801f = this['aj'](_0x5a5044)
                  , _0x5ae3ca = _0x1478f1['Na']()
                  , _0x3218c7 = this['Ii'](_0x1478f1);
                if (_0x47801f) {
                    _0x47801f['fj'](_0x5ae3ca),
                    _0x47801f['kj'](function() {
                        return _0x3232df['gj'](_0x1478f1['Ka'](), _0x1478f1['Ka'](), _0x1478f1['Ka']());
                    }, _0x3218c7),
                    _0x47801f['Td'](!![]);
                    var _0x5b2e33 = this['Mh']['Lh']['Oh']()
                      , _0x31b738 = _0x47801f['Oh']()
                      , _0x4f19f1 = _0xbc3655['ia'](0x0, 0x1 - _0xbc3655['la'](_0x5b2e33['_a'] - _0x31b738['_a'], _0x5b2e33['ab'] - _0x31b738['ab']) / (this['Mh']['Nh'] * 0.5));
                    ooo['ij']['Ef'](_0x4f19f1, _0x5a5044);
                } else
                    for (var _0x240151 = 0x0; _0x240151 < _0x3218c7 * 0x6; _0x240151++) {
                        _0x1478f1['Ka']();
                    }
            }
            ,
            _0x288ce7['prototype']['Pi'] = function(_0x31d782) {
                var _0x4dc189 = _0x31d782['La']()
                  , _0x20c38e = this['Mh']['li'][_0x4dc189];
                _0x20c38e && _0x20c38e['bj'] && _0x20c38e['Td'](![]),
                ooo['ij']['Ff'](_0x4dc189);
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Ji'] = function(_0x2d48a1) {
                var _0x14e697 = new _0xa8b9d9['lj']['Ti']();
                _0x14e697['Je'] = _0x2d48a1['Ma'](),
                _0x14e697['mi'] = this['Mh']['Qh']['eh'] === _0xa8b9d9['jd']['id'] ? _0x2d48a1['Ka']() : _0xa8b9d9['dh']['jh'],
                _0x14e697['mj'] = this['gj'](_0x2d48a1['Ka'](), _0x2d48a1['Ka'](), _0x2d48a1['Ka']()),
                _0x14e697['ni'] = _0x2d48a1['Ka']();
                var _0x27fbc5 = this['Mh']['nj'][_0x14e697['Je']];
                _0x27fbc5 != null && _0x27fbc5['$i']();
                var _0x5ab8ca = new _0xa8b9d9['lj'](_0x14e697,ooo['Xg']['Kf']['Wg']);
                _0x5ab8ca['oj'](this['pj'](_0x14e697['Je']), this['qj'](_0x14e697['Je']), !![]),
                this['Mh']['nj'][_0x14e697['Je']] = _0x5ab8ca;
            }
            ,
            _0x288ce7['prototype']['Ki'] = function(_0x49dd0a) {
                var _0xca5963 = _0x49dd0a['Ma']()
                  , _0x325e3c = this['Mh']['nj'][_0xca5963];
                _0x325e3c && (_0x325e3c['rj'] = 0x0,
                _0x325e3c['sj'] = _0x325e3c['sj'] * 1.5,
                _0x325e3c['tj'] = !![]);
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Li'] = function(_0xe33198) {
                var _0x2d28f2 = _0xe33198['Ma']()
                  , _0x5d9f69 = _0xe33198['La']()
                  , _0x31ff24 = this['Mh']['nj'][_0x2d28f2];
                if (_0x31ff24) {
                    _0x31ff24['rj'] = 0x0,
                    _0x31ff24['sj'] = _0x31ff24['sj'] * 0.1,
                    _0x31ff24['tj'] = !![];
                    var _0x2d6571 = this['aj'](_0x5d9f69);
                    if (_0x2d6571 && _0x2d6571['cj']) {
                        this['Mh']['Qh']['fh'];
                        var _0x514126 = _0x2d6571['Oh']();
                        _0x31ff24['oj'](_0x514126['_a'], _0x514126['ab'], ![]);
                    }
                }
            }
            ;
            var _0x4f2e97 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            return _0x288ce7[_0x1bc8d1(0x2a8)]['Ci'] = function(_0x4c795e) {
                var _0x116b92 = _0x1bc8d1
                  , _0x566718 = ooo['ud']['Ic']()['oc']
                  , _0x1ee2db = _0x566718[_0x116b92(0x3c2)](0x0, 0x0, 0x50, 0x50)
                  , _0x3b5c10 = _0x4f2e97[0x0]
                  , _0x793f6 = 0x50 - _0x3b5c10
                  , _0x4481cd = 0x0;
                for (var _0x377bf0 = 0x0; _0x377bf0 < 0x274; _0x377bf0++) {
                    var _0x5aba9a = _0x4c795e['Ka']();
                    for (var _0xb6d4a = 0x0; _0xb6d4a < 0x8; _0xb6d4a++) {
                        var _0x5b292f = (_0x3b5c10 + _0x4481cd * 0x50) * 0x4;
                        (_0x5aba9a >> _0xb6d4a & 0x1) != 0x0 ? (_0x1ee2db[_0x116b92(0x250)][_0x5b292f] = 0xff,
                        _0x1ee2db[_0x116b92(0x250)][_0x5b292f + 0x1] = 0xff,
                        _0x1ee2db[_0x116b92(0x250)][_0x5b292f + 0x2] = 0xff,
                        _0x1ee2db[_0x116b92(0x250)][_0x5b292f + 0x3] = 0xff) : _0x1ee2db[_0x116b92(0x250)][_0x5b292f + 0x3] = 0x0,
                        ++_0x3b5c10 >= _0x793f6 && ++_0x4481cd < 0x50 && (_0x793f6 = 0x50 - (_0x3b5c10 = _0x4f2e97[_0x4481cd]));
                    }
                }
                ;_0x566718[_0x116b92(0x454)](_0x1ee2db, 0x0, 0x0);
                var _0x13ce87 = ooo['Xg']['Kf']['Wg']['Ah']['Yh'];
                _0x13ce87[_0x116b92(0x5e9)] = ooo['ud']['Ic']()['Za'],
                _0x13ce87['texture'][_0x116b92(0x2e0)]();
            }
            ,
            _0x288ce7['prototype']['Ei'] = function(_0x13d668) {
                _0x13d668['Ma']();
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Fi'] = function(_0xcd294c) {
                createCircle(),
                this['Mh']['uj']();
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Di'] = function(_0x2469ec) {
                var _0x3a8bf3 = _0x1bc8d1;
                this['Mh']['ei'] = _0x2469ec['La'](),
                this['Mh']['oi'] = _0x2469ec['La']();
                var _0x236b68 = new _0xa8b9d9['vj']();
                _0x236b68['ii'] = [];
                for (var _0x471361 = _0x2469ec['Ka'](), _0x55c6c7 = 0x0; _0x55c6c7 < _0x471361; _0x55c6c7++) {
                    var _0x3d5838 = _0x2469ec['La']()
                      , _0x258162 = _0x2469ec['Na']();
                    _0x236b68['ii'][_0x3a8bf3(0x23c)](_0xa8b9d9['vj']['wj'](_0x3d5838, _0x258162));
                }
                ;_0x236b68['fi'] = [];
                if (this['Mh']['Qh']['eh'] === _0xa8b9d9['jd']['id'])
                    for (var _0x1b9d29 = _0x2469ec['Ka'](), _0x2cf9f8 = 0x0; _0x2cf9f8 < _0x1b9d29; _0x2cf9f8++) {
                        var _0x35c3ee = _0x2469ec['Ka']()
                          , _0x342f32 = _0x2469ec['Na']();
                        _0x236b68['fi']['push'](_0xa8b9d9['vj']['xj'](_0x35c3ee, _0x342f32));
                    }
                ;ooo['Xg']['Kf']['Wg']['Ch']['Bg'](_0x236b68);
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['aj'] = function(_0x1131f6) {
                return _0x1131f6 === this['Mh']['Qh']['fh'] ? this['Mh']['Lh'] : this['Mh']['li'][_0x1131f6];
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['gj'] = function(_0x56c067, _0x19cdee, _0x10de10) {
                return (((_0x10de10 & 0xff | _0x19cdee << 0x8 & 0xff00 | _0x56c067 << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['pj'] = function(_0x81af1f) {
                return ((_0x81af1f & 0xffff) / 0x8000 - 0x1) * this['Mh']['Qh']['kh']();
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['qj'] = function(_0x1ac5d4) {
                return ((_0x1ac5d4 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this['Mh']['Qh']['kh']();
            }
            ,
            _0x288ce7[_0x1bc8d1(0x2a8)]['Ii'] = function(_0x531d54) {
                var _0xd2fccf = _0x531d54['Ka']();
                if ((_0xd2fccf & 0x80) == 0x0)
                    return _0xd2fccf;
                ;var _0x4ae686 = _0x531d54['Ka']();
                if ((_0x4ae686 & 0x80) == 0x0)
                    return _0x4ae686 | _0xd2fccf << 0x7 & 0x3f80;
                ;var _0x384170 = _0x531d54['Ka']();
                if ((_0x384170 & 0x80) == 0x0)
                    return _0x384170 | _0x4ae686 << 0x7 & 0x3f80 | _0xd2fccf << 0xe & 0x1fc000;
                ;var _0xac49ba = _0x531d54['Ka']();
                return (_0xac49ba & 0x80) == 0x0 ? _0xac49ba | _0x384170 << 0x7 & 0x3f80 | _0x4ae686 << 0xe & 0x1fc000 | _0xd2fccf << 0x15 & 0xfe00000 : undefined;
            }
            ,
            _0x288ce7;
        }()),
        _0xa8b9d9['yj'] = (function() {
            var _0x6a1f1b = _0x434858;
            function _0x46d5da(_0x50da89) {
                this['zj'] = _0x50da89;
            }
            return _0x46d5da['Aj'] = function() {
                return new _0xa8b9d9['yj'](null);
            }
            ,
            _0x46d5da['Bj'] = function(_0x3ad745) {
                return new _0xa8b9d9['yj'](_0x3ad745);
            }
            ,
            _0x46d5da[_0x6a1f1b(0x2a8)]['Mc'] = function() {
                return this['zj'];
            }
            ,
            _0x46d5da[_0x6a1f1b(0x2a8)]['Cj'] = function() {
                return this['zj'] != null;
            }
            ,
            _0x46d5da[_0x6a1f1b(0x2a8)]['Dj'] = function(_0x1676bc) {
                this['zj'] != null && _0x1676bc(this['zj']);
            }
            ,
            _0x46d5da;
        }()),
        _0xa8b9d9['lj'] = (function() {
            var _0x4ab9ca = _0x434858;
            function _0x990984(_0x7c17c4, _0x802e47) {
                this['ki'] = _0x7c17c4,
                this['Ej'] = _0x7c17c4['ni'] >= 0x50,
                this['Fj'] = 0x0,
                this['Gj'] = 0x0,
                this['Hj'] = 0x0,
                this['Ij'] = 0x0,
                this['sj'] = this['Ej'] ? 0x1 : _0x7c17c4['mj'],
                this['rj'] = 0x1,
                this['tj'] = ![],
                this['Jj'] = 0x0,
                this['Kj'] = 0x0,
                this['Lj'] = 0x1,
                this['Mj'] = _0x4cd94d['S'] * _0xbc3655['ma'](),
                this['Nj'] = new _0xa8b9d9['Oj'](),
                this['Nj']['hd'](ooo['Mh']['Qh']['eh'], this['ki']['mi'] === _0xa8b9d9['dh']['jh'] ? null : ooo['ud']['Cc']()['Ub'](this['ki']['mi']), ooo['ud']['Cc']()['Zb'](this['ki']['ni'])),
                _0x802e47['Vh'](_0x7c17c4['Je'], this['Nj']);
            }
            return _0x990984[_0x4ab9ca(0x2a8)]['$i'] = function() {
                this['Nj']['Wh']['md']['G'](),
                this['Nj']['Wh']['ld']['G']();
            }
            ,
            _0x990984[_0x4ab9ca(0x2a8)]['oj'] = function(_0x3d0848, _0x3a8350, _0x8cc1e3) {
                this['Fj'] = _0x3d0848,
                this['Gj'] = _0x3a8350,
                _0x8cc1e3 && (this['Hj'] = _0x3d0848,
                this['Ij'] = _0x3a8350);
            }
            ,
            _0x990984[_0x4ab9ca(0x2a8)]['Pj'] = function(_0x1a8137, _0x103126) {
                var _0x15ffdd = _0xbc3655['ha'](0.5, this['sj'] * 0x1)
                  , _0x5253a9 = _0xbc3655['ha'](2.5, this['sj'] * 1.5);
                this['Jj'] = _0xbc3655['ga'](this['Jj'], _0x15ffdd, _0x103126, 0.0025),
                this['Kj'] = _0xbc3655['ga'](this['Kj'], _0x5253a9, _0x103126, 0.0025),
                this['Lj'] = _0xbc3655['ga'](this['Lj'], this['rj'], _0x103126, 0.0025);
            }
            ,
            _0x990984[_0x4ab9ca(0x2a8)]['Qj'] = function(_0x30f46e, _0x3dd6a6, _0x4312bc) {
                var _0x5e2672 = _0x4ab9ca;
                this['Hj'] = _0xbc3655['ga'](this['Hj'], this['Fj'], _0x3dd6a6, window[_0x5e2672(0x805)][_0x5e2672(0x22d)]),
                this['Ij'] = _0xbc3655['ga'](this['Ij'], this['Gj'], _0x3dd6a6, 0.0025),
                this['Nj']['Bg'](this, _0x30f46e, _0x3dd6a6, _0x4312bc);
            }
            ,
            _0x990984['Ti'] = function _0x2c4a15() {
                this['Je'] = 0x0,
                this['mi'] = _0xa8b9d9['dh']['jh'],
                this['mj'] = 0x0,
                this['ni'] = 0x0;
            }
            ,
            _0x990984;
        }()),
        _0xa8b9d9['Oj'] = (function() {
            var _0x526d24 = _0x434858;
            function _0x248a37() {
                var _0x3cfb9f = _0x31dd;
                this['Wh'] = new _0x117358(new _0xa8b9d9['bd'](),new _0xa8b9d9['bd']()),
                this['Wh']['md']['gd'][_0x3cfb9f(0x85c)] = _0x148283['k']['w']['z'],
                this['Wh']['md']['gd'][_0x3cfb9f(0x21f)] = _0xb81dc3,
                this['Wh']['ld']['gd']['zIndex'] = _0x370885;
            }
            var _0x370885 = 0x1f4
              , _0xb81dc3 = 0x64;
            _0x248a37[_0x526d24(0x2a8)]['hd'] = function(_0x4d349c, _0x2d1dba, _0x43d639) {
                var _0x3abce6 = _0x43d639['dc'];
                _0x3abce6 != null && this['Wh']['ld']['kd'](_0x3abce6);
                var _0x409d5c = _0x4d349c === _0xa8b9d9['jd']['id'] && _0x2d1dba != null ? _0x2d1dba['bc']['ec'] : _0x43d639['ec'];
                _0x409d5c != null && this['Wh']['md']['kd'](_0x409d5c);
            }
            ,
            _0x248a37[_0x526d24(0x2a8)]['Bg'] = function(_0x5a33f9, _0x370ee8, _0x4ab35c, _0x3a34c6) {
                var _0x49f42c = _0x526d24;
                if (!_0x3a34c6(_0x5a33f9['Hj'], _0x5a33f9['Ij'])) {
                    this['Wh']['Cd']();
                    return;
                }
                var _0x19b41c = _0x5a33f9['Kj'] * (0x1 + _0xbc3655['pa'](_0x5a33f9['Mj'] + _0x370ee8 / 0xc8) * 0.3);
                _0x5a33f9['Ej'] ? this['Wh']['Ad'](_0x5a33f9['Hj'], _0x5a33f9['Ij'], window[_0x49f42c(0x805)]['PortionSize'] * _0x5a33f9['Jj'], _0x5a33f9['Lj'] * 0x1, window[_0x49f42c(0x805)][_0x49f42c(0x515)] * _0x19b41c, window[_0x49f42c(0x805)][_0x49f42c(0x821)] * _0x5a33f9['Lj']) : this['Wh']['Ad'](_0x5a33f9['Hj'], _0x5a33f9['Ij'], window['wftObjects']['FoodSize'] * _0x5a33f9['Jj'], _0x5a33f9['Lj'] * 0x1, window[_0x49f42c(0x805)][_0x49f42c(0x489)] * _0x19b41c, window[_0x49f42c(0x805)]['FoodTransparent'] * _0x5a33f9['Lj']);
            }
            ;
            var _0x117358 = (function() {
                var _0x5efaae = _0x526d24;
                function _0x3bcc3c(_0xbb78a7, _0x1838eb) {
                    this['ld'] = _0xbb78a7,
                    this['md'] = _0x1838eb;
                }
                return _0x3bcc3c[_0x5efaae(0x2a8)]['Ad'] = function(_0x9af040, _0x110033, _0x2ee35a, _0x1f4907, _0x41d8bc, _0x55faf6) {
                    this['ld']['Td'](!![]),
                    this['ld']['Ud'](_0x9af040, _0x110033),
                    this['ld']['Bd'](_0x2ee35a),
                    this['ld']['Rj'](_0x1f4907),
                    this['md']['Td'](!![]),
                    this['md']['Ud'](_0x9af040, _0x110033),
                    this['md']['Bd'](_0x41d8bc),
                    this['md']['Rj'](_0x55faf6);
                }
                ,
                _0x3bcc3c[_0x5efaae(0x2a8)]['Cd'] = function() {
                    this['ld']['Td'](![]),
                    this['md']['Td'](![]);
                }
                ,
                _0x3bcc3c;
            }());
            return _0x248a37;
        }()),
        _0xa8b9d9['Sj'] = (function() {
            var _0x23c95a = _0x434858;
            function _0xed50ce() {
                this['Tj'] = 0x0,
                this['Uj'] = 0x0,
                this['Vj'] = 0x0,
                this['Wj'] = 0x0,
                this['Xj'] = 0x0,
                this['Yj'] = [];
            }
            function _0x1aae83(_0x5659a5, _0x5d0d82) {
                var _0x2ff275 = _0x31dd;
                for (var _0x426bc2 = 0x0; _0x426bc2 < _0x5659a5[_0x2ff275(0x2a1)]; _0x426bc2++) {
                    if (parseInt(_0x5659a5[_0x426bc2]['id']) === _0x5d0d82)
                        return _0x426bc2;
                }
                ;return -0x1;
            }
            return _0xed50ce[_0x23c95a(0x2a8)]['Sa'] = function() {}
            ,
            _0xed50ce[_0x23c95a(0x2a8)]['Zj'] = function(_0x4c7c5c) {
                var _0x26f22c = _0x23c95a;
                !_0x389039[_0x26f22c(0x444)] && (_0x389039['pm'] = {
                    ...this
                },
                localStorage[_0x26f22c(0x39f)](_0x26f22c(0x852), JSON[_0x26f22c(0x880)](_0x389039)));
                switch (_0x4c7c5c) {
                case _0xa8b9d9['_j']['$j']:
                    return this['Tj'];
                case _0xa8b9d9['_j']['ak']:
                    return this['Uj'];
                case _0xa8b9d9['_j']['bk']:
                    return this['Vj'];
                case _0xa8b9d9['_j']['ck']:
                    return this['Wj'];
                case _0xa8b9d9['_j']['dk']:
                    return this['Xj'];
                }
                ;return 0x0;
            }
            ,
            _0xed50ce[_0x23c95a(0x2a8)]['ek'] = function() {
                return new _0xa8b9d9['Sb'](this['Tj'],this['Uj'],this['Vj'],this['Wj'],this['Xj']);
            }
            ,
            _0xed50ce[_0x23c95a(0x2a8)]['fk'] = function(_0x387d6f) {
                this['Yj']['push'](_0x387d6f),
                this['gk']();
            }
            ,
            _0xed50ce[_0x23c95a(0x2a8)]['hk'] = function() {
                var _0x4fffae = _0x23c95a;
                if (!ooo['ud']['Fc']())
                    return _0xbc3655['wa']([0x20, 0x21, 0x22, 0x23]);
                ;var _0x4be68f = [];
                for (var _0x3925cd = ooo['ud']['Gc']()[_0x4fffae(0x652)], _0x1faec8 = 0x0; _0x1faec8 < _0x3925cd['length']; _0x1faec8++) {
                    var _0x3573e9 = _0x3925cd[_0x1faec8];
                    this['ik'](_0x3573e9['id'], _0xa8b9d9['_j']['$j']) && _0x4be68f['push'](_0x3573e9);
                }
                ;return _0x4be68f[_0x4fffae(0x2a1)] === 0x0 ? 0x0 : _0x4be68f[parseInt(_0x4be68f[_0x4fffae(0x2a1)] * _0xbc3655['ma']())]['id'];
            }
            ,
            _0xed50ce[_0x23c95a(0x2a8)]['jk'] = function() {
                var _0x529de2 = _0x23c95a;
                if (ooo['ud']['Fc']()) {
                    var _0x33f34c = ooo['ud']['Gc']()['skinArrayDict']
                      , _0x5b7bef = _0x1aae83(_0x33f34c, this['Tj']);
                    if (!(_0x5b7bef < 0x0)) {
                        for (var _0xa4d5fe = _0x5b7bef + 0x1; _0xa4d5fe < _0x33f34c[_0x529de2(0x2a1)]; _0xa4d5fe++) {
                            if (this['ik'](_0x33f34c[_0xa4d5fe]['id'], _0xa8b9d9['_j']['$j']) && _0x33f34c[_0xa4d5fe]['g'] !== !![]) {
                                this['Tj'] = _0x33f34c[_0xa4d5fe]['id'],
                                this['gk']();
                                return;
                            }
                        }
                        ;for (var _0x50891c = 0x0; _0x50891c < _0x5b7bef; _0x50891c++) {
                            if (this['ik'](_0x33f34c[_0x50891c]['id'], _0xa8b9d9['_j']['$j']) && _0x33f34c[_0x50891c]['g'] !== !![]) {
                                this['Tj'] = _0x33f34c[_0x50891c]['id'],
                                this['gk']();
                                return;
                            }
                        }
                    }
                }
            }
            ,
            _0xed50ce[_0x23c95a(0x2a8)]['kk'] = function() {
                var _0x474273 = _0x23c95a;
                if (ooo['ud']['Fc']) {
                    var _0x46c650 = ooo['ud']['Gc']()[_0x474273(0x652)]
                      , _0x3b068b = _0x1aae83(_0x46c650, this['Tj']);
                    if (!(_0x3b068b < 0x0)) {
                        for (var _0x315ccd = _0x3b068b - 0x1; _0x315ccd >= 0x0; _0x315ccd--) {
                            if (this['ik'](_0x46c650[_0x315ccd]['id'], _0xa8b9d9['_j']['$j']) && _0x46c650[_0x315ccd]['g'] !== !![]) {
                                this['Tj'] = _0x46c650[_0x315ccd]['id'],
                                this['gk']();
                                return;
                            }
                        }
                        ;for (var _0x540481 = _0x46c650[_0x474273(0x2a1)] - 0x1; _0x540481 > _0x3b068b; _0x540481--) {
                            if (this['ik'](_0x46c650[_0x540481]['id'], _0xa8b9d9['_j']['$j']) && _0x46c650[_0x540481]['g'] !== !![]) {
                                this['Tj'] = _0x46c650[_0x540481]['id'],
                                this['gk']();
                                return;
                            }
                        }
                    }
                }
            }
            ,
            _0xed50ce[_0x23c95a(0x2a8)]['lk'] = function(_0x337814, _0x4273cb) {
                if (!ooo['ud']['Fc']() || this['ik'](_0x337814, _0x4273cb))
                    switch (_0x4273cb) {
                    case _0xa8b9d9['_j']['$j']:
                        this['Tj'] !== _0x337814 && (this['Tj'] = _0x337814,
                        this['gk']());
                        return;
                    case _0xa8b9d9['_j']['ak']:
                        this['Uj'] !== _0x337814 && (this['Uj'] = _0x337814,
                        this['gk']());
                        return;
                    case _0xa8b9d9['_j']['bk']:
                        this['Vj'] !== _0x337814 && (this['Vj'] = _0x337814,
                        this['gk']());
                        return;
                    case _0xa8b9d9['_j']['ck']:
                        this['Wj'] !== _0x337814 && (this['Wj'] = _0x337814,
                        this['gk']());
                        return;
                    case _0xa8b9d9['_j']['dk']:
                        this['Xj'] !== _0x337814 && (this['Xj'] = _0x337814,
                        this['gk']());
                        return;
                    }
            }
            ,
            _0xed50ce[_0x23c95a(0x2a8)]['ik'] = function(_0xad9e2c, _0x5aefe4) {
                var _0x18d626 = this['mk'](_0xad9e2c, _0x5aefe4);
                return _0x18d626 != null && (ooo['ok']['nk']() ? _0x18d626['pk']() === 0x0 && !_0x18d626['qk']() || ooo['ok']['rk'](_0xad9e2c, _0x5aefe4) : _0x18d626['sk']());
            }
            ,
            _0xed50ce['prototype']['mk'] = function(_0x107971, _0x4b7c07) {
                var _0x240c6 = _0x23c95a;
                if (!ooo['ud']['Fc']())
                    return null;
                ;var _0x3b576f = ooo['ud']['Gc']();
                if (_0x4b7c07 === _0xa8b9d9['_j']['$j']) {
                    var _0x3b620c = _0x1aae83(_0x3b576f[_0x240c6(0x652)], _0x107971);
                    return _0x3b620c < 0x0 ? null : _0xa8b9d9['uk']['tk'](_0x3b576f[_0x240c6(0x652)][_0x3b620c]);
                }
                ;var _0x447848 = null;
                switch (_0x4b7c07) {
                case _0xa8b9d9['_j']['ak']:
                    _0x447848 = _0x3b576f[_0x240c6(0x1fd)][_0x107971];
                    break;
                case _0xa8b9d9['_j']['bk']:
                    _0x447848 = _0x3b576f['mouthDict'][_0x107971];
                    break;
                case _0xa8b9d9['_j']['ck']:
                    _0x447848 = _0x3b576f[_0x240c6(0x597)][_0x107971];
                    break;
                case _0xa8b9d9['_j']['dk']:
                    _0x447848 = _0x3b576f[_0x240c6(0x83f)][_0x107971];
                }
                ;return _0x447848 != null ? _0xa8b9d9['uk']['vk'](_0x447848) : null;
            }
            ,
            _0xed50ce[_0x23c95a(0x2a8)]['gk'] = function() {
                var _0x281a88 = _0x23c95a;
                for (var _0x5943f2 = 0x0; _0x5943f2 < this['Yj'][_0x281a88(0x2a1)]; _0x5943f2++) {
                    this['Yj'][_0x5943f2]();
                }
            }
            ,
            _0xed50ce;
        }()),
        _0xa8b9d9['_j'] = (function() {
            var _0x4a9ed2 = _0x434858;
            function _0x1be186() {}
            return _0x1be186['$j'] = _0x4a9ed2(0x53f),
            _0x1be186['ak'] = _0x4a9ed2(0x448),
            _0x1be186['bk'] = 'MOUTH',
            _0x1be186['dk'] = _0x4a9ed2(0x307),
            _0x1be186['ck'] = _0x4a9ed2(0x7b6),
            _0x1be186;
        }()),
        _0xa8b9d9['wk'] = (function() {
            function _0x516b7d() {
                var _0x162c17 = _0x31dd;
                this[_0x162c17(0x6e5)] = _0x446fea,
                this['ig'] = new _0x148283['k']['n'](_0x148283['k']['m'][_0x162c17(0x456)](_0x162c17(0x3f1))),
                this[_0x162c17(0x737)] = new _0x148283['k']['n'](_0x446fea());
                var _0x111c21, _0x1ef5cf, _0xba6afb, _0xba9793, _0x4660a1 = _0x148283['k']['m'][_0x162c17(0x456)](_0x162c17(0x65d) || _0x4cd94d['H']['N']), _0x5a63f6 = new _0x148283['k']['n'](_0x4660a1,new _0x148283['k']['r'](0x0,0x0,0x100,0x100)), _0x121e09 = new _0x148283['k']['n'](_0x4660a1,new _0x148283['k']['r'](0x160,0x60,0x40,0x40));
                this['jg'] = Array(0x10);
                for (var _0x485182 = 0x0; _0x485182 < this['jg'][_0x162c17(0x2a1)]; _0x485182++) {
                    this['jg'][_0x485182] = _0x485182 % 0x2 == 0x0 ? _0x5a63f6 : _0x121e09;
                }
                ;this['Ih'] = new _0x148283['k']['n'](((_0x111c21 = _0x148283['k']['m'][_0x162c17(0x456)](_0x162c17(0x71d)))[_0x162c17(0x333)] = _0x148283['k']['C']['D'],
                _0x111c21)),
                this['Jh'] = new _0x148283['k']['n'](((_0x1ef5cf = _0x148283['k']['m'][_0x162c17(0x456)](_0x162c17(0x5fc)))[_0x162c17(0x333)] = _0x148283['k']['C']['D'],
                _0x1ef5cf)),
                this['Gh'] = new _0x148283['k']['n'](_0x148283['k']['m'][_0x162c17(0x456)]('/images/lens.png')),
                this['$f'] = new _0x148283['k']['n'](((_0xba6afb = _0x148283['k']['m'][_0x162c17(0x456)](_0x4cd94d['H']['O']))[_0x162c17(0x333)] = _0x148283['k']['C']['D'],
                _0xba6afb)),
                this['mc'] = ((_0xba9793 = _0xa8b9d9['d'][_0x162c17(0x3bc)](_0x162c17(0x271)))[_0x162c17(0x40e)] = 0x50,
                _0xba9793[_0x162c17(0x6f1)] = 0x50,
                {
                    'nc': _0xba9793,
                    'oc': _0xba9793[_0x162c17(0x3e6)]('2d'),
                    'Za': new _0x148283['k']['n'](_0x148283['k']['m'][_0x162c17(0x456)](_0xba9793))
                }),
                this['hf'] = {},
                this['df'] = {},
                this['xk'] = [],
                this['yk'] = null;
            }
            function _0x446fea(_0x52b688) {
                var _0x455f34 = _0x31dd;
                return (_0x52b688 = _0x148283['k']['m'][_0x455f34(0x456)](_0x52b688 || _0x389039[_0x455f34(0x4b9)] || _0x455f34(0x71d)))['wrapMode'] = _0x148283['k']['C']['D'],
                _0x52b688;
            }
            return _0x516b7d['prototype']['Sa'] = function(_0x4323c1) {
                function _0x27f6e5() {
                    --_0x5075d8 == 0x0 && _0x4323c1();
                }
                var _0x5075d8 = 0x4;
                this['hf'] = {},
                _0x27f6e5(),
                this['df'] = {},
                _0x27f6e5(),
                this['xk'] = [],
                _0x27f6e5(),
                this['yk'] = null,
                _0x27f6e5();
            }
            ,
            _0x516b7d;
        }()),
        _0xa8b9d9['zk'] = (function() {
            var _0x53da70 = _0x434858;
            function _0x443d7b() {
                this['Ak'] = null,
                this['Kf'] = new _0xa8b9d9['Bk'](),
                this['Jf'] = new _0xa8b9d9['Ck'](),
                this['Dk'] = new _0xa8b9d9['Ek'](),
                this['Fk'] = new _0xa8b9d9['Gk'](),
                this['Hk'] = new _0xa8b9d9['Ik'](),
                this['Jk'] = new _0xa8b9d9['Kk'](),
                this['Lk'] = new _0xa8b9d9['Mk'](),
                this['Nk'] = new _0xa8b9d9['Ok'](),
                this['Hi'] = new _0xa8b9d9['Pk'](),
                this['Qk'] = new _0xa8b9d9['Rk'](),
                this['Sk'] = new _0xa8b9d9['Tk'](),
                this['Uk'] = new _0xa8b9d9['Vk'](),
                this['Wk'] = new _0xa8b9d9['Xk'](),
                this['Yk'] = new _0xa8b9d9['Zk'](),
                this['Re'] = new _0xa8b9d9['$k'](),
                this['_k'] = new _0xa8b9d9['al'](),
                this['bl'] = new _0xa8b9d9['cl'](),
                this['dl'] = new _0xa8b9d9['el'](),
                this['fl'] = [];
            }
            function _0x1ddb9d(_0x364003, _0x1d329e) {
                var _0x4f3369 = _0x31dd;
                if (_0x1d329e !== _0x364003[_0x4f3369(0x2a1)] + 0x1) {
                    var _0x306892 = _0x364003[_0x1d329e];
                    _0xbc3655['ua'](_0x364003, _0x1d329e + 0x1, _0x1d329e, _0x364003['length'] - _0x1d329e - 0x1),
                    _0x364003[_0x364003[_0x4f3369(0x2a1)] - 0x1] = _0x306892;
                }
            }
            return _0x443d7b[_0x53da70(0x2a8)]['Sa'] = function() {
                var _0x413e91 = _0x53da70;
                this['Ak'] = new _0xa8b9d9['Nf'](_0xa8b9d9['Uf']['Tf']),
                this['fl'] = [this['Kf'], this['Jf'], this['Dk'], this['Fk'], this['Hk'], this['Jk'], this['Lk'], this['Nk'], this['Hi'], this['Qk'], this['Sk'], this['Uk'], this['Wk'], this['Yk'], this['Re'], this['_k'], this['bl'], this['dl']];
                for (var _0x28b9e9 = 0x0; _0x28b9e9 < this['fl'][_0x413e91(0x2a1)]; _0x28b9e9++) {
                    this['fl'][_0x28b9e9]['Sa']();
                }
            }
            ,
            _0x443d7b[_0x53da70(0x2a8)]['Uh'] = function(_0x99655f, _0x2168de) {
                var _0x4f510b = _0x53da70;
                for (var _0x5f1bf3 = this['fl'][_0x4f510b(0x2a1)] - 0x1; _0x5f1bf3 >= 0x0; _0x5f1bf3--) {
                    this['fl'][_0x5f1bf3]['ug'](_0x99655f, _0x2168de);
                }
                ;this['fl'][0x0] !== this['Kf'] && this['fl'][0x0] !== this['dl'] && this['Ak'] != null && this['Ak']['ug'](_0x99655f, _0x2168de);
            }
            ,
            _0x443d7b[_0x53da70(0x2a8)]['qg'] = function() {
                var _0x2171ea = _0x53da70;
                for (var _0x45f647 = this['fl'][_0x2171ea(0x2a1)] - 0x1; _0x45f647 >= 0x0; _0x45f647--) {
                    this['fl'][_0x45f647]['qg']();
                }
                ;this['Ak'] != null && this['Ak']['qg']();
            }
            ,
            _0x443d7b[_0x53da70(0x2a8)]['gl'] = function(_0xbc1a43) {
                var _0x322052 = function _0x1c9645(_0xfc638b, _0x6f1be6) {
                    for (var _0x1f35f8 = 0x0; _0x1f35f8 < _0xfc638b['length']; _0x1f35f8++) {
                        if (_0xfc638b[_0x1f35f8] === _0x6f1be6)
                            return _0x1f35f8;
                    }
                    ;return -0x1;
                }(this['fl'], _0xbc1a43);
                !(_0x322052 < 0x0) && (this['fl'][0x0]['hl'](),
                function _0x296943(_0x53dc6c, _0x493909) {
                    if (_0x493909 !== 0x0) {
                        var _0x2e87c1 = _0x53dc6c[_0x493909];
                        _0xbc3655['ua'](_0x53dc6c, 0x0, 0x1, _0x493909),
                        _0x53dc6c[0x0] = _0x2e87c1;
                    }
                }(this['fl'], _0x322052),
                this['il']());
            }
            ,
            _0x443d7b[_0x53da70(0x2a8)]['jl'] = function() {
                this['fl'][0x0]['hl']();
                do {
                    _0x1ddb9d(this['fl'], 0x0);
                } while (this['fl'][0x0]['Wd'] !== _0xa8b9d9['ll']['kl']);
                ;this['il']();
            }
            ,
            _0x443d7b[_0x53da70(0x2a8)]['il'] = function() {
                var _0x5a4c51 = this['fl'][0x0];
                _0x5a4c51['ml'](),
                _0x5a4c51['nl'](),
                this['ol']();
            }
            ,
            _0x443d7b[_0x53da70(0x2a8)]['pl'] = function() {
                var _0x199558 = _0x53da70;
                return this['fl'][_0x199558(0x2a1)] !== 0x0 && this['fl'][0x0]['Wd'] === _0xa8b9d9['ll']['kl'] && this['Yk']['ql']();
            }
            ,
            _0x443d7b[_0x53da70(0x2a8)]['rl'] = function() {
                return this['fl']['length'] === 0x0 ? null : this['fl'][0x0];
            }
            ,
            _0x443d7b[_0x53da70(0x2a8)]['ol'] = function() {
                this['pl']() && this['gl'](this['Yk']);
            }
            ,
            _0x443d7b;
        }()),
        _0xa8b9d9['vj'] = (function() {
            function _0x1436e8() {
                this['ii'] = [],
                this['fi'] = [];
            }
            return _0x1436e8['wj'] = function(_0x2efb31, _0x17a29a) {
                return {
                    'ji': _0x2efb31,
                    'hi': _0x17a29a
                };
            }
            ,
            _0x1436e8['xj'] = function(_0x14f004, _0xa1d5fa) {
                return {
                    'gi': _0x14f004,
                    'hi': _0xa1d5fa
                };
            }
            ,
            _0x1436e8;
        }()),
        _0xa8b9d9['sl'] = (function() {
            var _0x2d3658 = _0x434858;
            function _0x4054ad() {
                this['tl'] = [],
                this['ul'] = [],
                this['vl'] = ![],
                this['wl'] = _0x489a48,
                this['xl'] = {};
            }
            var _0x489a48 = _0x2d3658(0x3db)
              , _0x3f2f05 = _0x2d3658(0x3db)
              , _0x3e6298 = 'fb'
              , _0x4bca65 = 'gg';
            return _0x4054ad['yl'] = new (function() {
                var _0x28d499 = _0x2d3658;
                function _0x2999e7() {}
                return _0x2999e7['zl'] = function _0x3e73c1(_0x134ad9) {
                    this['Al'] = _0x134ad9;
                }
                ,
                _0x2999e7[_0x28d499(0x2a8)]['Bl'] = function() {
                    var _0x469e0f = _0x28d499;
                    return (typeof FB == _0x469e0f(0x799) ? _0x469e0f(0x799) : _typeof(FB)) != _0x469e0f(0x799);
                }
                ,
                _0x2999e7[_0x28d499(0x2a8)]['Cl'] = function(_0x9d4af8, _0x505138, _0x2e87af) {
                    var _0x3a85d6 = _0x28d499
                      , _0x1a2ace = _0x3a85d6(0x2ce) + _0x9d4af8;
                    $['get'](_0x1a2ace)[_0x3a85d6(0x69d)](function() {
                        _0x505138();
                    })[_0x3a85d6(0x40f)](function() {
                        _0x2e87af();
                    });
                }
                ,
                _0x2999e7[_0x28d499(0x2a8)]['Dl'] = function(_0x10219f, _0x52ffdd) {
                    if (!this['Bl']()) {
                        _0x10219f();
                        return;
                    }
                    ;this['El'](function() {
                        var _0x56dacd = _0x31dd;
                        FB[_0x56dacd(0x633)](function(_0x313f9f) {
                            var _0x29cfb9 = _0x56dacd;
                            if (_0x313f9f['status'] !== 'connected') {
                                _0x10219f();
                                return;
                            }
                            ;var _0x4ff98d = _0x313f9f[_0x29cfb9(0x868)][_0x29cfb9(0x893)];
                            _0x52ffdd(new _0x2999e7['zl'](_0x4ff98d));
                        });
                    }, function(_0x3300b3) {
                        _0x52ffdd(_0x3300b3);
                    });
                }
                ,
                _0x2999e7[_0x28d499(0x2a8)]['El'] = function(_0x331559, _0x3e27af) {
                    var _0x56d910 = _0x28d499
                      , _0x5a7cfc = this;
                    if (!this['Bl']()) {
                        _0x331559();
                        return;
                    }
                    ;FB[_0x56d910(0x2f3)](function(_0x63a630) {
                        var _0x3c7528 = _0x56d910;
                        if (_0x63a630[_0x3c7528(0x23a)] !== 'connected') {
                            _0x331559();
                            return;
                        }
                        ;var _0x42c092 = _0x63a630['authResponse'][_0x3c7528(0x893)];
                        _0x5a7cfc['Cl'](_0x42c092, function() {
                            _0x331559();
                        }, function() {
                            _0x3e27af(new _0x2999e7['zl'](_0x42c092));
                        });
                    });
                }
                ,
                _0x2999e7['prototype']['Fl'] = function() {
                    var _0x4108a5 = _0x28d499;
                    this['Bl']() && FB[_0x4108a5(0x871)]();
                }
                ,
                _0x2999e7;
            }())(),
            _0x4054ad['Gl'] = new (function() {
                var _0x25719c = _0x2d3658;
                function _0x4ff232() {}
                return _0x4ff232['Hl'] = function _0x2bab45(_0x3afbf4, _0x359289) {
                    this['Al'] = _0x3afbf4,
                    this['Il'] = _0x359289;
                }
                ,
                _0x4ff232[_0x25719c(0x2a8)]['Bl'] = function() {
                    return _typeof(GoogleAuth) != 'undefined';
                }
                ,
                _0x4ff232[_0x25719c(0x2a8)]['Dl'] = function(_0x1fe8e1, _0x41dd72) {
                    var _0x3743df = _0x25719c;
                    if (_typeof(GoogleAuth) == _0x3743df(0x799)) {
                        _0x1fe8e1();
                        return;
                    }
                    ;GoogleAuth['then'](function() {
                        var _0x361e5c = _0x3743df;
                        if (GoogleAuth['isSignedIn'][_0x361e5c(0x4bb)]()) {
                            var _0x8bbe93 = GoogleAuth['currentUser']['get']()
                              , _0x3f6ac5 = _0x8bbe93[_0x361e5c(0x721)]()[_0x361e5c(0x7d2)]
                              , _0xa8ba40 = new Date()[_0x361e5c(0x6b4)]() + _0x8bbe93[_0x361e5c(0x721)]()[_0x361e5c(0x7e6)] * 0x3e8;
                            if (new Date()[_0x361e5c(0x6b4)]() < _0xa8ba40) {
                                _0x41dd72(new _0x4ff232['Hl'](_0x3f6ac5,_0xa8ba40));
                                return;
                            }
                        }
                        ;GoogleAuth[_0x361e5c(0x77a)]()['then'](function(_0x26915a) {
                            var _0x2b4e81 = _0x361e5c;
                            if (_typeof(_0x26915a['error']) !== _0x2b4e81(0x799) || !_0x26915a[_0x2b4e81(0x3bb)]()) {
                                _0x1fe8e1();
                                return;
                            }
                            ;var _0x11e89d = _0x26915a[_0x2b4e81(0x721)]()[_0x2b4e81(0x7d2)]
                              , _0x520433 = new Date()[_0x2b4e81(0x6b4)]() + _0x26915a[_0x2b4e81(0x721)]()['expires_in'] * 0x3e8;
                            _0x41dd72(new _0x4ff232['Hl'](_0x11e89d,_0x520433));
                        });
                    });
                }
                ,
                _0x4ff232[_0x25719c(0x2a8)]['El'] = function(_0x2b8e13, _0xa60d36) {
                    var _0x28f132 = _0x25719c;
                    if (_typeof(GoogleAuth) == 'undefined') {
                        _0x2b8e13();
                        return;
                    }
                    ;GoogleAuth[_0x28f132(0x864)](function() {
                        var _0x850219 = _0x28f132;
                        if (GoogleAuth[_0x850219(0x3bb)][_0x850219(0x4bb)]()) {
                            var _0x48905f = GoogleAuth[_0x850219(0x382)]['get']()
                              , _0x15439d = _0x48905f[_0x850219(0x721)]()[_0x850219(0x7d2)]
                              , _0x14b8a8 = new Date()[_0x850219(0x6b4)]() + _0x48905f[_0x850219(0x721)]()[_0x850219(0x7e6)] * 0x3e8;
                            if (new Date()[_0x850219(0x6b4)]() < _0x14b8a8) {
                                _0xa60d36(new _0x4ff232['Hl'](_0x15439d,_0x14b8a8));
                                return;
                            }
                        }
                        ;_0x2b8e13();
                    });
                }
                ,
                _0x4ff232[_0x25719c(0x2a8)]['Fl'] = function() {
                    var _0x1d8c60 = _0x25719c;
                    _typeof(GoogleAuth) != _0x1d8c60(0x799) && GoogleAuth[_0x1d8c60(0x221)]();
                }
                ,
                _0x4ff232;
            }())(),
            _0x4054ad[_0x2d3658(0x2a8)]['Sa'] = function() {
                this['Jl']();
            }
            ,
            _0x4054ad['prototype']['Kl'] = function() {
                return this['vl'] ? this['xl']['userId'] : '';
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Ll'] = function() {
                var _0x5c95fd = _0x2d3658;
                return this['vl'] ? this['xl'][_0x5c95fd(0x415)] : '';
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Ml'] = function() {
                return this['vl'] ? this['xl']['nickname'] : '';
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Nl'] = function() {
                var _0x3b2ce1 = _0x2d3658;
                return this['vl'] ? this['xl'][_0x3b2ce1(0x499)] : _0x4cd94d['H']['M'];
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Ol'] = function() {
                return this['vl'] && this['xl']['isBuyer'];
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Pl'] = function() {
                var _0x5d7f3c = _0x2d3658;
                return this['vl'] && this['xl'][_0x5d7f3c(0x5d4)];
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Ql'] = function() {
                var _0x287791 = _0x2d3658;
                return this['vl'] ? this['xl'][_0x287791(0x29d)] : 0x0;
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Rl'] = function() {
                var _0x39896 = _0x2d3658;
                return this['vl'] ? this['xl'][_0x39896(0x6d5)] : 0x1;
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Sl'] = function() {
                var _0x1afa54 = _0x2d3658;
                return this['vl'] ? this['xl'][_0x1afa54(0x5f8)] : 0x0;
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Tl'] = function() {
                var _0x2a2480 = _0x2d3658;
                return this['vl'] ? this['xl'][_0x2a2480(0x33e)] : 0x32;
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Ul'] = function() {
                var _0x2a4cfa = _0x2d3658;
                return this['vl'] ? this['xl'][_0x2a4cfa(0x826)] : 0x0;
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Vl'] = function() {
                var _0x3e0e2e = _0x2d3658;
                return this['vl'] ? this['xl'][_0x3e0e2e(0x6ab)] : 0x0;
            }
            ,
            _0x4054ad['prototype']['Wl'] = function() {
                var _0x27324a = _0x2d3658;
                return this['vl'] ? this['xl'][_0x27324a(0x215)] : 0x0;
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Xl'] = function() {
                var _0x24c5f5 = _0x2d3658;
                return this['vl'] ? this['xl'][_0x24c5f5(0x54a)] : 0x0;
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Yl'] = function() {
                var _0x13f843 = _0x2d3658;
                return this['vl'] ? this['xl'][_0x13f843(0x25e)] : 0x0;
            }
            ,
            _0x4054ad['prototype']['Zl'] = function() {
                var _0x4a0e8f = _0x2d3658;
                return this['vl'] ? this['xl'][_0x4a0e8f(0x3e8)] : 0x0;
            }
            ,
            _0x4054ad['prototype']['$l'] = function() {
                return this['vl'] ? this['xl']['bestSurvivalTimeSec'] : 0x0;
            }
            ,
            _0x4054ad['prototype']['_l'] = function() {
                var _0x391842 = _0x2d3658;
                return this['vl'] ? this['xl'][_0x391842(0x5b6)] : 0x0;
            }
            ,
            _0x4054ad['prototype']['am'] = function() {
                var _0x3306ab = _0x2d3658;
                return this['vl'] ? this['xl'][_0x3306ab(0x5c1)] : 0x0;
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['bm'] = function() {
                var _0xf78bb3 = _0x2d3658;
                return this['vl'] ? this['xl'][_0xf78bb3(0x7ee)] : 0x0;
            }
            ,
            _0x4054ad['prototype']['cm'] = function() {
                var _0x1971ec = _0x2d3658;
                return this['vl'] ? this['xl'][_0x1971ec(0x557)] : 0x0;
            }
            ,
            _0x4054ad['prototype']['dm'] = function() {
                return this['vl'] ? this['xl']['regDate'] : {};
            }
            ,
            _0x4054ad['prototype']['em'] = function(_0x157815) {
                var _0x39bce8 = _0x2d3658;
                this['tl'][_0x39bce8(0x23c)](_0x157815),
                _0x157815();
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['fm'] = function(_0x215c22) {
                var _0x1abea5 = _0x2d3658;
                this['ul'][_0x1abea5(0x23c)](_0x215c22),
                _0x215c22();
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['rk'] = function(_0x3b3b34, _0x4b07cd) {
                var _0x532f6c = _0x2d3658
                  , _0x1ec9be = this['xl']['propertyList'][_0x532f6c(0x7f0)](_0x389039['pL'] || []);
                if (_0x1ec9be == null)
                    return ![];
                ;for (_0x3f2f05 = 0x0; _0x3f2f05 < _0x1ec9be[_0x532f6c(0x2a1)]; _0x3f2f05++) {
                    var _0x4a238e = _0x1ec9be[_0x3f2f05];
                    if (_0x4a238e['id'] == _0x3b3b34 && _0x4a238e[_0x532f6c(0x5cf)] === _0x4b07cd)
                        return !![];
                }
                ;return ![];
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['nk'] = function() {
                return this['vl'];
            }
            ,
            _0x4054ad['prototype']['gm'] = function() {
                return this['wl'];
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['hm'] = function(_0x486d80) {
                var _0x1f9e40 = this
                  , _0x22a9c3 = this['Kl']()
                  , _0x2afb78 = this['Ql']()
                  , _0x4e8e26 = this['Rl']();
                this['im'](function() {
                    _0x486d80 != null && _0x486d80();
                }, function(_0x449827) {
                    _0x1f9e40['xl'] = _0x449827['user_data'],
                    _0x1f9e40['jm']();
                    var _0x202f9e = _0x1f9e40['Kl']()
                      , _0x1ece73 = _0x1f9e40['Ql']()
                      , _0x5357f7 = _0x1f9e40['Rl']();
                    if (_0x22a9c3 === _0x202f9e) {
                        _0x5357f7 > 0x1 && _0x5357f7 !== _0x4e8e26 && ooo['Xg']['Yk']['km'](new _0xa8b9d9['lm'](_0x5357f7));
                        var _0xc99cb1 = _0x1ece73 - _0x2afb78;
                        _0xc99cb1 >= 0x14 && ooo['Xg']['Yk']['km'](new _0xa8b9d9['mm'](_0xc99cb1));
                    }
                    ;_0x486d80 != null && _0x486d80();
                });
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['im'] = function(_0x1d4721, _0x2c85cc) {
                var _0x15500a = _0x2d3658
                  , _0x135329 = _0x4cd94d['H']['J'] + _0x15500a(0x3ba) + this['wl'] + '/getUserData';
                _0xbc3655['Aa'](_0x135329, _0x1d4721, function(_0x48d002) {
                    var _0x3690af = _0x15500a;
                    _0x48d002[_0x3690af(0x839)] !== 0x4b0 ? _0x1d4721() : _0x2c85cc(_0x48d002);
                });
            }
            ,
            _0x4054ad['prototype']['nm'] = function(_0x13e265, _0x58fba1, _0x4495e, _0x519c60) {
                var _0x597c38 = _0x2d3658
                  , _0xdaddc0 = _0x4cd94d['H']['J'] + _0x597c38(0x3ba) + this['wl'] + _0x597c38(0x69c) + _0x13e265 + _0x597c38(0x743) + _0x58fba1;
                _0xbc3655['Aa'](_0xdaddc0, function() {
                    _0x4495e();
                }, function(_0x3bef9b) {
                    _0x3bef9b['code'] !== 0x4b0 ? _0x4495e() : _0x519c60();
                });
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['om'] = function(_0x1cc389, _0x250a6a) {
                var _0x390c19 = _0x2d3658
                  , _0x2357ae = _0x4cd94d['H']['J'] + _0x390c19(0x3ba) + this['wl'] + _0x390c19(0x3d5);
                _0xbc3655['Aa'](_0x2357ae, _0x1cc389, function(_0x14f81c) {
                    var _0x52fa0a = _0x390c19;
                    _0x14f81c[_0x52fa0a(0x839)] !== 0x4b0 ? _0x1cc389() : _0x250a6a();
                });
            }
            ,
            _0x4054ad['prototype']['pm'] = function(_0x1c1ea5) {
                var _0x114d9b = this;
                this['vl'] && this['qm'](),
                _0x4054ad['yl']['Dl'](function() {
                    _0x1c1ea5();
                }, function(_0xc3b76c) {
                    _0x114d9b['rm'](_0x3e6298, _0xc3b76c['Al'], _0x1c1ea5);
                });
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['sm'] = function(_0x356985) {
                var _0x30e7a9 = this;
                this['vl'] && this['qm'](),
                _0x4054ad['Gl']['Dl'](function() {
                    _0x356985();
                }, function(_0xf3b127) {
                    _0x30e7a9['rm'](_0x4bca65, _0xf3b127['Al'], _0x356985);
                });
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['rm'] = function(_0x380c47, _0x5b6f4a, _0x16a8f8) {
                var _0x42f72b = this
                  , _0x4a4c1a = _0x380c47 + '_' + _0x5b6f4a
                  , _0x587c9e = _0x4cd94d['H']['J'] + '/pub/wuid/' + _0x4a4c1a + '/login';
                _0xbc3655['Aa'](_0x587c9e, function() {
                    _0x42f72b['tm']();
                }, function(_0x170598) {
                    var _0x5696fd = _0x31dd;
                    _0x170598[_0x5696fd(0x839)] !== 0x4b0 ? _0x42f72b['tm']() : (_0x42f72b['um'](_0x380c47, _0x5b6f4a, _0x170598[_0x5696fd(0x22f)]),
                    _0x16a8f8 != null && _0x16a8f8());
                });
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['qm'] = function() {
                try {
                    this['vm'](),
                    this['wm']();
                } catch (_0x4387aa) {}
                ;this['xm']();
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['ym'] = function() {
                this['vl'] && this['om'](function() {}, function() {});
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['tm'] = function() {
                ooo['Xg']['gl'](ooo['Xg']['_k']);
            }
            ,
            _0x4054ad['prototype']['um'] = function(_0x14f50f, _0x44c115, _0x595356) {
                var _0x5d906c = this;
                _0x447f0e(_0x595356, function(_0x442b36) {
                    var _0x534e15 = _0x31dd
                      , _0x7fbceb = _0x5d906c['vl'] ? _0x5d906c['xl']['userId'] : _0x442b36;
                    _0x5d906c['vl'] = !![],
                    _0x5d906c['wl'] = _0x14f50f + '_' + _0x44c115,
                    _0x5d906c['xl'] = _0x442b36,
                    _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Hg'], _0x14f50f, 0x3c),
                    _0x7fbceb !== _0x5d906c['xl'][_0x534e15(0x374)] ? _0x5d906c['zm']() : _0x5d906c['jm'](),
                    ooo['Xp'](!![], !![]),
                    _0x389039[_0x534e15(0x444)] = ![];
                });
            }
            ,
            _0x4054ad['prototype']['xm'] = function() {
                var _0x4e73b6 = _0x2d3658
                  , _0x3d0733 = this['vl'] ? this['xl'][_0x4e73b6(0x374)] : _0x3f2f05;
                this['vl'] = ![],
                this['wl'] = _0x489a48,
                this['xl'] = {},
                _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Hg'], '', 0x3c),
                _0x3d0733 !== this['xl'][_0x4e73b6(0x374)] ? this['zm']() : this['jm']();
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['Jl'] = function() {
                var _0x434f7e = _0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Hg'])
                  , _0x398954 = this;
                if (_0x3e6298 === _0x434f7e) {
                    var _0x51124c = 0x1;
                    (function _0x5e0f85() {
                        if (!_0x4054ad['yl']['Bl']() && _0x51124c++ < 0x5) {
                            _0xbc3655['Y'](_0x5e0f85, 0x3e8);
                            return;
                        }
                        ;_0x4054ad['yl']['El'](function() {}, function(_0x2469b7) {
                            _0x398954['rm'](_0x3e6298, _0x2469b7['Al']);
                        });
                    }());
                } else {
                    if (_0x4bca65 === _0x434f7e) {
                        var _0x36ed1b = 0x1;
                        (function _0x26fed4() {
                            if (!_0x4054ad['Gl']['Bl']() && _0x36ed1b++ < 0x5) {
                                _0xbc3655['Y'](_0x26fed4, 0x3e8);
                                return;
                            }
                            ;_0x4054ad['Gl']['El'](function() {}, function(_0x7265c4) {
                                _0x398954['rm'](_0x4bca65, _0x7265c4['Al']);
                            });
                        }());
                    }
                }
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['zm'] = function() {
                var _0x23d47e = _0x2d3658;
                for (var _0xd63341 = 0x0; _0xd63341 < this['tl'][_0x23d47e(0x2a1)]; _0xd63341++) {
                    this['tl'][_0xd63341]();
                }
                ;this['jm']();
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['jm'] = function() {
                var _0x53a9fe = _0x2d3658;
                for (var _0x5b334a = 0x0; _0x5b334a < this['ul'][_0x53a9fe(0x2a1)]; _0x5b334a++) {
                    this['ul'][_0x5b334a]();
                }
            }
            ,
            _0x4054ad['prototype']['vm'] = function() {
                _0x4054ad['yl']['Fl']();
            }
            ,
            _0x4054ad[_0x2d3658(0x2a8)]['wm'] = function() {
                _0x4054ad['Gl']['Fl']();
            }
            ,
            _0x4054ad;
        }()),
        _0xa8b9d9['Sf'] = (function() {
            var _0x929446 = _0x434858;
            function _0x1dfc48(_0x2245d3, _0x21ef13, _0x1a70a5) {
                var _0x2e2201 = _0x31dd;
                this['Of'] = _0x1a70a5,
                this['Rd'] = ![],
                this['Yc'] = new _0x148283['k']['l'](),
                this['Yc'][_0x2e2201(0x62d)] = ![],
                this['Am'] = Array(_0x2245d3);
                for (var _0xd48d2b = 0x0; _0xd48d2b < this['Am'][_0x2e2201(0x2a1)]; _0xd48d2b++) {
                    var _0xef5300 = new _0xa8b9d9['Bm'](new _0x148283['j'](_0x21ef13 * 0x3));
                    _0xef5300['Cm'](_0x21ef13),
                    this['Am'][_0xd48d2b] = _0xef5300,
                    this['Yc'][_0x2e2201(0x812)](_0xef5300['ag']());
                }
                ;this['Pf'] = 0x1,
                this['Qf'] = 0x1,
                this['qg']();
            }
            return _0x1dfc48[_0x929446(0x2a8)]['ag'] = function() {
                return this['Yc'];
            }
            ,
            _0x1dfc48['prototype']['rg'] = function(_0x33f72e) {
                this['Rd'] = _0x33f72e,
                this['Yc']['visible'] = _0x33f72e;
            }
            ,
            _0x1dfc48['prototype']['qg'] = function() {
                var _0x4afc7f = _0x929446;
                this['Pf'] = this['Of'][_0x4afc7f(0x40e)](),
                this['Qf'] = this['Of']['height']();
                var _0x501067 = this['Qf'] / 0x1e;
                for (var _0x8754bc = 0x0; _0x8754bc < this['Am'][_0x4afc7f(0x2a1)]; _0x8754bc++) {
                    this['Am'][_0x8754bc]['Dm'](_0x501067);
                }
            }
            ,
            _0x1dfc48[_0x929446(0x2a8)]['Bg'] = function() {
                var _0x3eabed = _0x929446;
                if (this['Rd'])
                    for (var _0x1a053c = 0x0; _0x1a053c < this['Am'][_0x3eabed(0x2a1)]; _0x1a053c++) {
                        this['Am'][_0x1a053c]['Bg'](this['Vf']);
                    }
            }
            ,
            _0x1dfc48[_0x929446(0x2a8)]['Em'] = function() {
                return this['Pf'];
            }
            ,
            _0x1dfc48['prototype']['Fm'] = function() {
                return this['Qf'];
            }
            ,
            _0x1dfc48[_0x929446(0x2a8)]['xg'] = function(_0x4d2c33, _0x179640) {
                this['Am'][_0x4d2c33]['Gm'](_0x179640);
            }
            ,
            _0x1dfc48['prototype']['yg'] = function(_0x23913b, _0xb1b8e4) {
                this['Am'][_0x23913b]['Hm'](_0xb1b8e4);
            }
            ,
            _0x1dfc48[_0x929446(0x2a8)]['zg'] = function(_0x5f0f25, _0x84d292, _0x124d3d) {
                var _0x20c2e3 = this['Am'][_0x5f0f25];
                for (var _0x4c32e2 = _0x20c2e3['Im'](), _0x11599d = _0x20c2e3['Jm'], _0x5f5162 = 0x0; _0x5f5162 < _0x4c32e2; _0x5f5162++) {
                    _0x11599d[_0x5f5162 * 0x3] = _0x84d292,
                    _0x11599d[_0x5f5162 * 0x3 + 0x1] = _0x124d3d,
                    _0x11599d[_0x5f5162 * 0x3 + 0x2] = 0x0;
                }
            }
            ,
            _0x1dfc48[_0x929446(0x2a8)]['Ag'] = function(_0x2339a9, _0x46ee23, _0x5052d7) {
                var _0x525171, _0x4651d5, _0x310dd7 = this['Am'][_0x2339a9], _0x3b442b = _0x310dd7['Im'](), _0x53734f = _0x310dd7['Jm'], _0x4a67b6 = _0x310dd7['Km'](), _0x3439dd = _0x53734f[0x0], _0x5bd763 = _0x53734f[0x1], _0x22018d = _0x46ee23 - _0x3439dd, _0x569272 = _0x5052d7 - _0x5bd763, _0x341dc1 = _0xbc3655['la'](_0x22018d, _0x569272);
                if (_0x341dc1 > 0x0) {
                    _0x53734f[0x0] = _0x46ee23,
                    _0x53734f[0x1] = _0x5052d7,
                    _0x53734f[0x2] = _0xbc3655['ta'](_0x569272, _0x22018d);
                    var _0x45fae5 = _0x4a67b6 * 0.25 / (_0x4a67b6 * 0.25 + _0x341dc1)
                      , _0x4ab8a3 = 0x1 - _0x45fae5 * 0x2;
                    for (var _0x4d3f74 = 0x1, _0x365d40 = _0x3b442b; _0x4d3f74 < _0x365d40; _0x4d3f74++) {
                        _0x525171 = _0x53734f[_0x4d3f74 * 0x3],
                        _0x53734f[_0x4d3f74 * 0x3] = _0x53734f[_0x4d3f74 * 0x3 - 0x3] * _0x4ab8a3 + (_0x525171 + _0x3439dd) * _0x45fae5,
                        _0x3439dd = _0x525171,
                        _0x4651d5 = _0x53734f[_0x4d3f74 * 0x3 + 0x1],
                        _0x53734f[_0x4d3f74 * 0x3 + 0x1] = _0x53734f[_0x4d3f74 * 0x3 - 0x2] * _0x4ab8a3 + (_0x4651d5 + _0x5bd763) * _0x45fae5,
                        _0x5bd763 = _0x4651d5,
                        _0x53734f[_0x4d3f74 * 0x3 + 0x2] = _0xbc3655['ta'](_0x53734f[_0x4d3f74 * 0x3 - 0x2] - _0x53734f[_0x4d3f74 * 0x3 + 0x1], _0x53734f[_0x4d3f74 * 0x3 - 0x3] - _0x53734f[_0x4d3f74 * 0x3]);
                    }
                }
            }
            ,
            _0x1dfc48;
        }()),
        _0xa8b9d9['Lm'] = (function() {
            var _0x52e65c = _0x434858;
            function _0x2aee8d(_0x47ee56) {
                var _0x1aab17 = _0x31dd, _0x64c62f, _0x5c1bed = this;
                this['Of'] = _0x47ee56,
                this['nc'] = _0x47ee56[_0x1aab17(0x4bb)]()[0x0],
                this['Vf'] = ((_0x64c62f = {})[_0x1aab17(0x3ec)] = _0x5c1bed['nc'],
                _0x64c62f[_0x1aab17(0x37c)] = !![],
                new _0x148283['k']['o'](_0x64c62f)),
                this['Rd'] = ![],
                this['Mm'] = new _0xa8b9d9['Bm'](new _0x148283['j'](_0x177cf5 * 0x3)),
                this['Pf'] = 0x1,
                this['Qf'] = 0x1,
                this['Nm'] = _0x11827a['Om'],
                this['Pm'] = _0x11827a['Om'],
                this['Qm'] = _0x11827a['Om'],
                this['Rm'] = _0x11827a['Om'],
                this['Sm'] = _0x11827a['Om'],
                this['qg'](),
                ooo['ud']['Jc'](function() {
                    _0x5c1bed['Mm']['Tm']();
                });
            }
            var _0x177cf5 = _0xbc3655['ha'](0x64, _0xa8b9d9['Xc']['fd'])
              , _0x11827a = {
                'Om': '0lt0',
                'Um': _0x52e65c(0x621),
                'Vm': _0x52e65c(0x5f9)
            };
            return _0x2aee8d[_0x52e65c(0x2a8)]['rg'] = function(_0x858a28) {
                this['Rd'] = _0x858a28;
            }
            ,
            _0x2aee8d[_0x52e65c(0x2a8)]['qg'] = function() {
                var _0x542da5 = _0x52e65c
                  , _0x88c1cc = _0xbc3655['e']();
                this['Pf'] = this['Of'][_0x542da5(0x40e)](),
                this['Qf'] = this['Of']['height'](),
                this['Vf'][_0x542da5(0x36e)](this['Pf'], this['Qf']),
                this['Vf']['resolution'] = _0x88c1cc,
                this['nc'][_0x542da5(0x40e)] = _0x88c1cc * this['Pf'],
                this['nc'][_0x542da5(0x6f1)] = _0x88c1cc * this['Qf'];
                var _0x37cc08 = this['Qf'] / 0x4;
                this['Mm']['Dm'](_0x37cc08);
                var _0x2a0f4c = _0xbc3655['fa'](_0xbc3655['_'](this['Pf'] / _0x37cc08) * 0x2 - 0x5, 0x1, _0x177cf5);
                this['Mm']['Cm'](_0x2a0f4c);
            }
            ,
            _0x2aee8d['prototype']['ug'] = function() {
                if (this['Rd']) {
                    var _0xdbc510 = _0xbc3655['Ca']() / 0xc8
                      , _0x36820e = _0xbc3655['oa'](_0xdbc510);
                    this['Mm']['Wm'](this['Xm'](this['Nm'], _0x36820e), this['Ym'](this['Nm'], _0x36820e)),
                    this['Mm']['Zm'](this['$m'](this['Pm'], _0x36820e), this['$m'](this['Qm'], _0x36820e), this['$m'](this['Rm'], _0x36820e), this['$m'](this['Sm'], _0x36820e));
                    var _0x5bd58d = this['Mm']['Km']();
                    for (var _0x48163b = this['Mm']['Im'](), _0x31beab = this['Mm']['Jm'], _0x25f55d = this['Pf'] - (this['Pf'] - _0x5bd58d * 0.5 * (_0x48163b - 0x1)) * 0.5, _0x1dd890 = this['Qf'] * 0.5, _0x4c3a1d = 0x0, _0x2c1afa = 0x0, _0x2dc12c = -0x1; _0x2dc12c < _0x48163b; _0x2dc12c++) {
                        var _0x17ef60 = _0x2dc12c
                          , _0x4714cf = _0xbc3655['pa'](_0x17ef60 * 0x1 / 0xc * _0x4cd94d['T'] - _0xdbc510) * (0x1 - _0xbc3655['ra'](0x10, _0x17ef60 * -0x1 / 0xc));
                        _0x2dc12c >= 0x0 && (_0x31beab[_0x2dc12c * 0x3] = _0x25f55d - _0x5bd58d * 0.5 * _0x17ef60,
                        _0x31beab[_0x2dc12c * 0x3 + 0x1] = _0x1dd890 + _0x5bd58d * 0.5 * _0x4714cf,
                        _0x31beab[_0x2dc12c * 0x3 + 0x2] = _0xbc3655['ta'](_0x2c1afa - _0x4714cf, _0x17ef60 - _0x4c3a1d)),
                        _0x4c3a1d = _0x17ef60,
                        _0x2c1afa = _0x4714cf;
                    }
                    ;this['Mm']['Bg'](),
                    this['Mm']['_m'](this['Vf']);
                }
            }
            ,
            _0x2aee8d[_0x52e65c(0x2a8)]['Gm'] = function(_0x269e70) {
                this['Mm']['Gm'](_0x269e70);
            }
            ,
            _0x2aee8d['prototype']['an'] = function(_0x4c748c) {
                this['Nm'] = _0x4c748c ? _0x11827a['Vm'] : _0x11827a['Um'],
                this['Pm'] = _0x11827a['Om'],
                this['Qm'] = _0x11827a['Om'],
                this['Rm'] = _0x11827a['Om'],
                this['Sm'] = _0x11827a['Om'];
            }
            ,
            _0x2aee8d[_0x52e65c(0x2a8)]['bn'] = function(_0x17aa24) {
                this['Nm'] = _0x11827a['Om'],
                this['Pm'] = _0x17aa24 ? _0x11827a['Vm'] : _0x11827a['Um'],
                this['Qm'] = _0x11827a['Om'],
                this['Rm'] = _0x11827a['Om'],
                this['Sm'] = _0x11827a['Om'];
            }
            ,
            _0x2aee8d['prototype']['cn'] = function(_0x11cfb9) {
                this['Nm'] = _0x11827a['Om'],
                this['Pm'] = _0x11827a['Om'],
                this['Qm'] = _0x11cfb9 ? _0x11827a['Vm'] : _0x11827a['Um'],
                this['Rm'] = _0x11827a['Om'],
                this['Sm'] = _0x11827a['Om'];
            }
            ,
            _0x2aee8d[_0x52e65c(0x2a8)]['dn'] = function(_0x2790bb) {
                this['Nm'] = _0x11827a['Om'],
                this['Pm'] = _0x11827a['Om'],
                this['Qm'] = _0x11827a['Om'],
                this['Rm'] = _0x2790bb ? _0x11827a['Vm'] : _0x11827a['Um'],
                this['Sm'] = _0x11827a['Om'];
            }
            ,
            _0x2aee8d[_0x52e65c(0x2a8)]['en'] = function(_0x1ac63c) {
                this['Nm'] = _0x11827a['Om'],
                this['Pm'] = _0x11827a['Om'],
                this['Qm'] = _0x11827a['Om'],
                this['Rm'] = _0x11827a['Om'],
                this['Sm'] = _0x1ac63c ? _0x11827a['Vm'] : _0x11827a['Um'];
            }
            ,
            _0x2aee8d['prototype']['Xm'] = function(_0x389a2a, _0x40d272) {
                switch (_0x389a2a) {
                case _0x11827a['Um']:
                    return 0.9 + _0x40d272 * 0.1;
                case _0x11827a['Vm']:
                    return 0.4 + _0x40d272 * 0.3;
                }
                ;return 0x1;
            }
            ,
            _0x2aee8d['prototype']['Ym'] = function(_0x489185, _0x3b9021) {
                switch (_0x489185) {
                case _0x11827a['Um']:
                    return 0.6 + _0x3b9021 * 0.5;
                case _0x11827a['Vm']:
                    return 0.3 + _0x3b9021 * 0.3;
                }
                ;return 0x1;
            }
            ,
            _0x2aee8d['prototype']['$m'] = function(_0x9364c3, _0x37dd1a) {
                switch (_0x9364c3) {
                case _0x11827a['Um']:
                    return 0.9 + _0x37dd1a * 0.1;
                case _0x11827a['Vm']:
                    return 0.6 + _0x37dd1a * 0.4;
                }
                ;return 0x1;
            }
            ,
            _0x2aee8d;
        }()),
        _0xa8b9d9['uk'] = (function() {
            var _0x28971c = _0x434858;
            function _0x51c0d3(_0x127d01, _0x1d22d2, _0x2224ff, _0x152994, _0x134ba6) {
                this['gn'] = _0x127d01,
                this['hn'] = _0x1d22d2,
                this['in'] = _0x2224ff,
                this['jn'] = _0x152994,
                this['kn'] = _0x134ba6;
            }
            return _0x51c0d3['tk'] = function(_0x52fc4d) {
                var _0x48f5e6 = _0x31dd;
                return new _0x51c0d3(_0x52fc4d[_0x48f5e6(0x40b)],_0x52fc4d[_0x48f5e6(0x3db)],_0x52fc4d[_0x48f5e6(0x87c)],_0x52fc4d[_0x48f5e6(0x5fa)],_0x52fc4d[_0x48f5e6(0x220)]);
            }
            ,
            _0x51c0d3['vk'] = function(_0x4b1fc8) {
                var _0x2a059d = _0x31dd;
                return new _0x51c0d3(_0x4b1fc8[_0x2a059d(0x40b)],_0x4b1fc8[_0x2a059d(0x3db)],_0x4b1fc8[_0x2a059d(0x87c)],_0x4b1fc8[_0x2a059d(0x5fa)],_0x4b1fc8['description']);
            }
            ,
            _0x51c0d3[_0x28971c(0x2a8)]['pk'] = function() {
                return this['gn'];
            }
            ,
            _0x51c0d3[_0x28971c(0x2a8)]['sk'] = function() {
                return this['hn'];
            }
            ,
            _0x51c0d3[_0x28971c(0x2a8)]['qk'] = function() {
                return this['in'];
            }
            ,
            _0x51c0d3[_0x28971c(0x2a8)]['ln'] = function() {
                return this['jn'];
            }
            ,
            _0x51c0d3[_0x28971c(0x2a8)]['mn'] = function() {
                return this['kn'];
            }
            ,
            _0x51c0d3;
        }()),
        _0xa8b9d9['Zf'] = (function() {
            var _0x529e7c = _0x434858;
            function _0x1e7a56(_0x91064c) {
                var _0x462fe0 = _0x31dd;
                this['nn'] = {};
                function _0x45dce5() {
                    var _0x1c5b9c = _0x31dd
                      , _0x2a4903 = [_0x1c5b9c(0x79f), 'https://wormx.store/images/arkaplan/bg2.jpg', 'https://wormx.store/images/arkaplan/bg3.jpg']
                      , _0x4cad92 = localStorage[_0x1c5b9c(0x65e)](_0x1c5b9c(0x3d3))
                      , _0x54cc61 = _0x2a4903[_0x1c5b9c(0x82b)](_0x51e1a6 => _0x51e1a6 !== _0x4cad92)
                      , _0x1ece36 = _0x54cc61[Math['floor'](Math[_0x1c5b9c(0x55f)]() * _0x54cc61['length'])];
                    return localStorage[_0x1c5b9c(0x39f)]('lastBackground', _0x1ece36),
                    _0x1ece36;
                }
                var _0x379b11 = _0x148283['k']['m'][_0x462fe0(0x456)](_0x45dce5());
                this['nn'][_0x2f5544] = _0x379b11;
                var _0x3a81b5 = _0x148283['k']['q']['from'](_0xdbc51, _0x4c7b13, this['nn']);
                this['_f'] = new _0x148283['k']['v'](_0x598c12,_0x3a81b5),
                this['_f'][_0x462fe0(0x85c)] = _0x148283['k']['w']['B'],
                this['_f'][_0x462fe0(0x494)] = 0.6;
            }
            var _0x4e99e4 = _0x529e7c(0x2a4) + _0xbc3655['xa']()
              , _0x2c831b = _0x529e7c(0x4ee) + _0xbc3655['xa']()
              , _0x272090 = _0x529e7c(0x414)
              , _0x59efbe = _0x529e7c(0x666)
              , _0x2f5544 = _0x529e7c(0x71b) + _0xbc3655['xa']()
              , _0x200655 = _0x529e7c(0x6be) + _0xbc3655['xa']()
              , _0x1f91e5 = _0x529e7c(0x783) + _0xbc3655['xa']()
              , _0x598c12 = new _0x148283['k']['u']()[_0x529e7c(0x3a1)](_0x4e99e4, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2)[_0x529e7c(0x3a1)](_0x2c831b, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2)
              , _0xdbc51 = _0x529e7c(0x3c0) + _0x4e99e4 + _0x529e7c(0x549) + _0x2c831b + _0x529e7c(0x290) + _0x272090 + _0x529e7c(0x290) + _0x59efbe + _0x529e7c(0x389) + _0x200655 + ';\x20varying\x20vec2\x20' + _0x1f91e5 + _0x529e7c(0x757) + _0x1f91e5 + '\x20=\x20' + _0x2c831b + ';\x20gl_Position\x20=\x20vec4((' + _0x59efbe + '\x20*\x20' + _0x272090 + _0x529e7c(0x2c9) + _0x4e99e4 + _0x529e7c(0x487) + _0x200655 + _0x529e7c(0x577) + _0x2c831b + _0x529e7c(0x28f) + _0x1f91e5 + _0x529e7c(0x20c)
              , _0x4c7b13 = _0x529e7c(0x53c) + _0x1f91e5 + _0x529e7c(0x3b7) + _0x2f5544 + _0x529e7c(0x3e3) + _0x2f5544 + ',\x20' + _0x1f91e5 + _0x529e7c(0x1ce);
            return _0x1e7a56[_0x529e7c(0x2a8)]['tg'] = function(_0x2f5163, _0x1e24ac) {
                var _0x4efcab = _0x529e7c;
                this['_f'][_0x4efcab(0x5e1)]['x'] = _0x2f5163,
                this['_f'][_0x4efcab(0x5e1)]['y'] = _0x1e24ac,
                this['nn'][_0x200655] = [_0x2f5163, _0x1e24ac, 0x1 / _0x2f5163 + 0x1, 0x1 / _0x1e24ac + 0x1];
            }
            ,
            _0x1e7a56;
        }()),
        _0xa8b9d9['th'] = (function() {
            var _0x1fb827 = _0x434858;
            function _0x20859b() {
                var _0x2833da = _0x31dd;
                this['nn'] = {},
                this['nn'][_0x4a0317] = [0x1, 0.5, 0.25, 0.5],
                this['nn'][_0x6b828c] = _0x148283['k']['n'][_0x2833da(0x612)],
                this['nn'][_0x35b10b] = [0x0, 0x0],
                this['nn'][_0x3ba11a] = [0x0, 0x0];
                var _0x5191e2 = _0x148283['k']['q'][_0x2833da(0x456)](_0x1031a1, _0x145109, this['nn']);
                this['_f'] = new _0x148283['k']['v'](_0x1cd3c2,_0x5191e2);
            }
            var _0x5bfeae = _0x1fb827(0x2a4) + _0xbc3655['xa']()
              , _0x1c7153 = _0x1fb827(0x4ee) + _0xbc3655['xa']()
              , _0x7fc327 = _0x1fb827(0x414)
              , _0x8cd35 = 'projectionMatrix'
              , _0x4a0317 = 'u3_' + _0xbc3655['xa']()
              , _0x6b828c = _0x1fb827(0x6be) + _0xbc3655['xa']()
              , _0x35b10b = _0x1fb827(0x2d2) + _0xbc3655['xa']()
              , _0x3ba11a = _0x1fb827(0x512) + _0xbc3655['xa']()
              , _0x3ced82 = 'v1_' + _0xbc3655['xa']()
              , _0x1cd3c2 = new _0x148283['k']['u']()[_0x1fb827(0x3a1)](_0x5bfeae, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)[_0x1fb827(0x3a1)](_0x1c7153, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)
              , _0x1031a1 = 'precision\x20mediump\x20float;\x20attribute\x20vec2\x20' + _0x5bfeae + _0x1fb827(0x549) + _0x1c7153 + _0x1fb827(0x290) + _0x7fc327 + _0x1fb827(0x290) + _0x8cd35 + _0x1fb827(0x4a7) + _0x3ced82 + _0x1fb827(0x422) + _0x3ced82 + '=' + _0x1c7153 + _0x1fb827(0x3f9) + _0x8cd35 + '*' + _0x7fc327 + _0x1fb827(0x67a) + _0x5bfeae + ',\x201.0)).xy,\x200.0,\x201.0);\x20}'
              , _0x145109 = _0x1fb827(0x53c) + _0x3ced82 + _0x1fb827(0x389) + _0x4a0317 + ';\x20uniform\x20sampler2D\x20' + _0x6b828c + _0x1fb827(0x4c0) + _0x35b10b + _0x1fb827(0x4c0) + _0x3ba11a + _0x1fb827(0x36d) + _0x6b828c + ',\x20' + _0x3ced82 + '*' + _0x35b10b + '+' + _0x3ba11a + ');\x20vec4\x20colorMix=' + _0x4a0317 + ';\x20gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb,\x200.0);\x20}';
            return _0x20859b[_0x1fb827(0x2a8)]['nd'] = function(_0x461e2b, _0x1ace19, _0x406a0b, _0x15a79c) {
                var _0x502f44 = this['nn'][_0x4a0317];
                _0x502f44[0x0] = _0x461e2b,
                _0x502f44[0x1] = _0x1ace19,
                _0x502f44[0x2] = _0x406a0b,
                _0x502f44[0x3] = _0x15a79c;
            }
            ,
            _0x20859b[_0x1fb827(0x2a8)]['Hh'] = function(_0x531ece) {
                this['nn'][_0x6b828c] = _0x531ece;
            }
            ,
            _0x20859b[_0x1fb827(0x2a8)]['Bg'] = function(_0x442bb9, _0x16f892, _0x5921b7, _0x3bda52) {
                var _0x3a8091 = _0x1fb827;
                this['_f'][_0x3a8091(0x791)]['x'] = _0x442bb9,
                this['_f'][_0x3a8091(0x791)]['y'] = _0x16f892,
                this['_f']['scale']['x'] = _0x5921b7,
                this['_f'][_0x3a8091(0x5e1)]['y'] = _0x3bda52;
                var _0x3ea130 = this['nn'][_0x35b10b];
                _0x3ea130[0x0] = _0x5921b7 * 0.2520615384615385,
                _0x3ea130[0x1] = _0x3bda52 * 0.4357063736263738;
                var _0x1f5261 = this['nn'][_0x3ba11a];
                _0x1f5261[0x0] = _0x442bb9 * 0.2520615384615385,
                _0x1f5261[0x1] = _0x16f892 * 0.4357063736263738;
            }
            ,
            _0x20859b;
        }()),
        _0xa8b9d9['bd'] = (function() {
            var _0x5b9cb5 = _0x434858;
            function _0x3f84b2() {
                this['gd'] = new _0x148283['k']['s'](),
                this['pn'] = 0x0,
                this['qn'] = 0x0;
            }
            return _0x3f84b2[_0x5b9cb5(0x2a8)]['kd'] = function(_0x15f2c1) {
                var _0x402fd8 = _0x5b9cb5;
                this['gd'][_0x402fd8(0x5e9)] = _0x15f2c1['nb'](),
                this['gd'][_0x402fd8(0x716)]['set'](_0x15f2c1['hb'], _0x15f2c1['ib']),
                this['pn'] = _0x15f2c1['jb'],
                this['qn'] = _0x15f2c1['kb'];
            }
            ,
            _0x3f84b2['prototype']['nd'] = function(_0x1cdc94) {
                var _0x2c6fab = _0x5b9cb5;
                this['gd'][_0x2c6fab(0x492)] = parseInt(_0x1cdc94[_0x2c6fab(0x523)](0x1), 0x10);
            }
            ,
            _0x3f84b2['prototype']['Bd'] = function(_0x4cb649) {
                var _0x2ac9d3 = _0x5b9cb5;
                this['gd']['width'] = _0x4cb649 * this['pn'],
                this['gd'][_0x2ac9d3(0x6f1)] = _0x4cb649 * this['qn'];
            }
            ,
            _0x3f84b2['prototype']['Vd'] = function(_0x281847) {
                var _0x22ca28 = _0x5b9cb5;
                this['gd'][_0x22ca28(0x3e9)] = _0x281847;
            }
            ,
            _0x3f84b2['prototype']['Ud'] = function(_0x37cfc9, _0x58914d) {
                var _0x465acd = _0x5b9cb5;
                this['gd'][_0x465acd(0x791)][_0x465acd(0x25b)](_0x37cfc9, _0x58914d);
            }
            ,
            _0x3f84b2[_0x5b9cb5(0x2a8)]['Td'] = function(_0x10bcaa) {
                var _0x2c6748 = _0x5b9cb5;
                this['gd'][_0x2c6748(0x62d)] = _0x10bcaa;
            }
            ,
            _0x3f84b2[_0x5b9cb5(0x2a8)]['Qd'] = function() {
                var _0x3f4b8d = _0x5b9cb5;
                return this['gd'][_0x3f4b8d(0x62d)];
            }
            ,
            _0x3f84b2[_0x5b9cb5(0x2a8)]['Rj'] = function(_0x1095de) {
                var _0x224cef = _0x5b9cb5;
                this['gd'][_0x224cef(0x494)] = _0x1095de;
            }
            ,
            _0x3f84b2[_0x5b9cb5(0x2a8)]['zd'] = function() {
                return this['gd'];
            }
            ,
            _0x3f84b2['prototype']['G'] = function() {
                _0x148283['k']['F']['G'](this['gd']);
            }
            ,
            _0x3f84b2;
        }()),
        _0xa8b9d9['Ui'] = (function() {
            var _0x438115 = _0x434858;
            function _0x59c451(_0x268380) {
                this['Qh'] = _0x268380,
                this['ki'] = new _0xa8b9d9['Ui']['Ti'](),
                this['cj'] = ![],
                this['bj'] = !![],
                this['Fd'] = ![],
                this['Id'] = 0x0,
                this['rn'] = 0x0,
                this['Lj'] = 0x1,
                this['Ld'] = 0x0,
                this['hi'] = 0x0,
                this['Nd'] = {},
                this['Kd'] = 0x0,
                this['sn'] = new _0x148283['j'](_0x4937bc * 0x2),
                this['tn'] = new _0x148283['j'](_0x4937bc * 0x2),
                this['Jd'] = new _0x148283['j'](_0x4937bc * 0x2),
                this['un'] = null,
                this['vn'] = null,
                this['wn'] = null,
                this['xn']();
            }
            var _0x4937bc = 0xc8;
            return _0x59c451[_0x438115(0x2a8)]['$i'] = function() {
                this['vn'] != null && _0x148283['k']['F']['G'](this['vn']['Yc']),
                this['wn'] != null && _0x148283['k']['F']['G'](this['wn']);
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['xn'] = function() {
                this['fj'](0.25),
                this['ki']['Xa'] = '',
                this['bj'] = !![],
                this['Nd'] = {},
                this['Td'](![]);
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['Zi'] = function(_0x3200a1) {
                this['ki'] = _0x3200a1,
                this['yn'](this['cj']);
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['Td'] = function(_0x1f6d0f) {
                var _0x3face0 = this['cj'];
                this['cj'] = _0x1f6d0f,
                this['yn'](_0x3face0);
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['fj'] = function(_0x5d8c52) {
                this['hi'] = _0x5d8c52 * 0x32;
                var _0x3af516 = _0x5d8c52;
                _0x5d8c52 > this['Qh']['hh'] && (_0x3af516 = _0xbc3655['sa']((_0x5d8c52 - this['Qh']['hh']) / this['Qh']['ih']) * this['Qh']['ih'] + this['Qh']['hh']);
                var _0x209677 = _0xbc3655['qa'](_0xbc3655['ra'](_0x3af516 * 0x5, 0.707106781186548) * 0x4 + 0x19)
                  , _0x23ad3b = _0xbc3655['ha'](_0x4937bc, _0xbc3655['ia'](0x3, (_0x209677 - 0x5) * 0x5 + 0x1))
                  , _0x5ca730 = this['Kd'];
                this['Id'] = (0x5 + _0x209677 * 0.9) * 0.025,
                this['Kd'] = _0xbc3655['_'](_0x23ad3b),
                this['rn'] = _0x23ad3b - this['Kd'];
                if (_0x5ca730 > 0x0 && _0x5ca730 < this['Kd']) {
                    var _0x1955ad = this['sn'][_0x5ca730 * 0x2 - 0x2]
                      , _0x32b883 = this['sn'][_0x5ca730 * 0x2 - 0x1]
                      , _0x101149 = this['tn'][_0x5ca730 * 0x2 - 0x2]
                      , _0x4a7a6e = this['tn'][_0x5ca730 * 0x2 - 0x1]
                      , _0x84969d = this['Jd'][_0x5ca730 * 0x2 - 0x2]
                      , _0x3c6490 = this['Jd'][_0x5ca730 * 0x2 - 0x1];
                    for (var _0x356d9f = _0x5ca730; _0x356d9f < this['Kd']; _0x356d9f++) {
                        this['sn'][_0x356d9f * 0x2] = _0x1955ad,
                        this['sn'][_0x356d9f * 0x2 + 0x1] = _0x32b883,
                        this['tn'][_0x356d9f * 0x2] = _0x101149,
                        this['tn'][_0x356d9f * 0x2 + 0x1] = _0x4a7a6e,
                        this['Jd'][_0x356d9f * 0x2] = _0x84969d,
                        this['Jd'][_0x356d9f * 0x2 + 0x1] = _0x3c6490;
                    }
                }
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['kj'] = function(_0x349a48, _0x5d3c13) {
                this['Kd'] = _0x5d3c13;
                for (var _0xb06ab4 = 0x0; _0xb06ab4 < this['Kd']; _0xb06ab4++) {
                    this['sn'][_0xb06ab4 * 0x2] = this['tn'][_0xb06ab4 * 0x2] = this['Jd'][_0xb06ab4 * 0x2] = _0x349a48(),
                    this['sn'][_0xb06ab4 * 0x2 + 0x1] = this['tn'][_0xb06ab4 * 0x2 + 0x1] = this['Jd'][_0xb06ab4 * 0x2 + 0x1] = _0x349a48();
                }
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['hj'] = function(_0x25c7e5, _0x51ff44, _0x167e74) {
                this['Fd'] = _0x167e74;
                for (var _0x261413 = 0x0; _0x261413 < this['Kd']; _0x261413++) {
                    this['sn'][_0x261413 * 0x2] = this['tn'][_0x261413 * 0x2],
                    this['sn'][_0x261413 * 0x2 + 0x1] = this['tn'][_0x261413 * 0x2 + 0x1];
                }
                ;var _0x589ce4 = _0x25c7e5 - this['tn'][0x0]
                  , _0x294715 = _0x51ff44 - this['tn'][0x1];
                this['zn'](_0x589ce4, _0x294715, this['Kd'], this['tn']);
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['zn'] = function(_0xfce07, _0x17ee3c, _0x3ddd1b, _0x284689) {
                var _0x1bfe74 = _0xbc3655['la'](_0xfce07, _0x17ee3c);
                if (!(_0x1bfe74 <= 0x0)) {
                    var _0x547e20, _0x36fedc = _0x284689[0x0];
                    _0x284689[0x0] += _0xfce07;
                    var _0x3c51da, _0x128024 = _0x284689[0x1];
                    _0x284689[0x1] += _0x17ee3c;
                    var _0x43a2e3 = this['Id'] / (this['Id'] + _0x1bfe74)
                      , _0x111f89 = 0x1 - _0x43a2e3 * 0x2;
                    for (var _0x330ef9 = 0x1, _0xc0a025 = _0x3ddd1b - 0x1; _0x330ef9 < _0xc0a025; _0x330ef9++) {
                        _0x547e20 = _0x284689[_0x330ef9 * 0x2],
                        _0x284689[_0x330ef9 * 0x2] = _0x284689[_0x330ef9 * 0x2 - 0x2] * _0x111f89 + (_0x547e20 + _0x36fedc) * _0x43a2e3,
                        _0x36fedc = _0x547e20,
                        _0x3c51da = _0x284689[_0x330ef9 * 0x2 + 0x1],
                        _0x284689[_0x330ef9 * 0x2 + 0x1] = _0x284689[_0x330ef9 * 0x2 - 0x1] * _0x111f89 + (_0x3c51da + _0x128024) * _0x43a2e3,
                        _0x128024 = _0x3c51da;
                    }
                    ;_0x111f89 = 0x1 - (_0x43a2e3 = this['rn'] * this['Id'] / (this['rn'] * this['Id'] + _0x1bfe74)) * 0x2,
                    _0x284689[_0x3ddd1b * 0x2 - 0x2] = _0x284689[_0x3ddd1b * 0x2 - 0x4] * _0x111f89 + (_0x284689[_0x3ddd1b * 0x2 - 0x2] + _0x36fedc) * _0x43a2e3,
                    _0x284689[_0x3ddd1b * 0x2 - 0x1] = _0x284689[_0x3ddd1b * 0x2 - 0x3] * _0x111f89 + (_0x284689[_0x3ddd1b * 0x2 - 0x1] + _0x128024) * _0x43a2e3;
                }
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['Oh'] = function() {
                return {
                    '_a': this['Jd'][0x0],
                    'ab': this['Jd'][0x1]
                };
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['dj'] = function(_0x41cb80, _0x45340d) {
                var _0x114298 = 0xf4240
                  , _0xb7667c = _0x41cb80
                  , _0x5a09a = _0x45340d;
                for (var _0x27a95a = 0x0; _0x27a95a < this['Kd']; _0x27a95a++) {
                    var _0x3f4640 = this['Jd'][_0x27a95a * 0x2]
                      , _0x348342 = this['Jd'][_0x27a95a * 0x2 + 0x1]
                      , _0x295847 = _0xbc3655['la'](_0x41cb80 - _0x3f4640, _0x45340d - _0x348342);
                    _0x295847 < _0x114298 && (_0x114298 = _0x295847,
                    _0xb7667c = _0x3f4640,
                    _0x5a09a = _0x348342);
                }
                ;return {
                    '_a': _0xb7667c,
                    'ab': _0x5a09a,
                    'ej': _0x114298
                };
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['_i'] = function(_0x42e031) {
                this['un'] = _0x42e031;
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['Pj'] = function(_0x35d622, _0x3a9896) {
                var _0x4219d3 = _0x438115;
                this['Lj'] = _0xbc3655['ga'](this['Lj'], this['bj'] ? this['Fd'] ? 0.9 + _0xbc3655['pa'](_0x35d622 / 0x190 * _0x4cd94d['T']) * 0.1 : 0x1 : 0x0, _0x3a9896, 0x1 / 0x320),
                this['Ld'] = _0xbc3655['ga'](this['Ld'], this['bj'] ? this['Fd'] ? 0x1 : 0x0 : 0x1, _0x3a9896, 0.0025),
                this['vn'] != null && (this['vn']['Yc'][_0x4219d3(0x494)] = this['Lj']),
                this['wn'] != null && (this['wn'][_0x4219d3(0x494)] = this['Lj']);
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['Qj'] = function(_0x17c92b, _0x46a310, _0x3e45d2, _0x2094e5) {
                if (this['cj'] && this['bj']) {
                    var _0x81f732 = _0xbc3655['ra'](0.11112, _0x46a310 / 0x5f);
                    for (var _0x1c0cc = 0x0; _0x1c0cc < this['Kd']; _0x1c0cc++) {
                        var _0x34bd69 = _0xbc3655['ka'](this['sn'][_0x1c0cc * 0x2], this['tn'][_0x1c0cc * 0x2], _0x3e45d2)
                          , _0x50a8d9 = _0xbc3655['ka'](this['sn'][_0x1c0cc * 0x2 + 0x1], this['tn'][_0x1c0cc * 0x2 + 0x1], _0x3e45d2);
                        this['Jd'][_0x1c0cc * 0x2] = _0xbc3655['ka'](_0x34bd69, this['Jd'][_0x1c0cc * 0x2], _0x81f732),
                        this['Jd'][_0x1c0cc * 0x2 + 0x1] = _0xbc3655['ka'](_0x50a8d9, this['Jd'][_0x1c0cc * 0x2 + 0x1], _0x81f732);
                    }
                }
                ;this['vn'] != null && this['cj'] && this['vn']['Hd'](this, _0x17c92b, _0x46a310, _0x2094e5),
                this['wn'] != null && (this['wn']['Rh']['x'] = this['Jd'][0x0],
                this['wn']['Rh']['y'] = this['Jd'][0x1] - this['Id'] * 0x3);
            }
            ,
            _0x59c451['prototype']['yn'] = function(_0x237478) {
                this['cj'] ? !_0x237478 && this['An']() : (this['vn'] != null && _0x148283['k']['F']['G'](this['vn']['Yc']),
                this['wn'] != null && _0x148283['k']['F']['G'](this['wn']));
            }
            ,
            _0x59c451[_0x438115(0x2a8)]['An'] = function() {
                var _0x1f77db = _0x438115;
                this['vn'] == null ? this['vn'] = new _0xa8b9d9['Xc']() : _0x148283['k']['F']['G'](this['vn']['Yc']);
                this['vn']['hd'](ooo['Mh']['Qh']['eh'], ooo['ud']['Cc']()['Ub'](this['ki']['mi']), ooo['ud']['Cc']()['Tb'](this['ki']['ni']), ooo['ud']['Cc']()['Vb'](this['ki']['Vi']), ooo['ud']['Cc']()['Wb'](this['ki']['Wi']), ooo['ud']['Cc']()['Xb'](this['ki']['Xi']), ooo['ud']['Cc']()['Yb'](this['ki']['Yi']), _0x1f77db(0x7c3));
                this['wn'] == null ? (this['wn'] = new _0xa8b9d9['Bn'](''),
                this['wn'][_0x1f77db(0x811)]['fontFamily'] = _0x1f77db(0x299),
                this['wn'][_0x1f77db(0x716)][_0x1f77db(0x25b)](0.5)) : _0x148283['k']['F']['G'](this['wn']);
                this['wn'][_0x1f77db(0x811)]['fontSize'] = 0xe,
                this['wn']['style'][_0x1f77db(0x202)] = ooo['ud']['Cc']()['Tb'](this['ki']['ni'])['cc'],
                this['wn'][_0x1f77db(0x440)] = this['ki']['Xa'],
                this['un']['Xh'](this['ki']['Je'], this['vn'], this['wn']);
                if (_0x276741['n'] != null && _0x276741['n']['Je'] == this['ki']['Je']) {
                    _0x276741['vj'] = this['wn'];
                    let _0x112a36 = _0x389039['sg'][_0x1f77db(0x32c)](_0x276741['n']['ni']);
                    _0x112a36 == -0x1 ? _0x389039['ig'] != -0x1 && (_0x389039['ig'] = -0x1) : (_0x389039['ig'] = _0x389039['gg'][_0x112a36]['s'],
                    _0x389039['re'] = ![],
                    _0x4be3a7());
                }
            }
            ,
            _0x59c451['Ti'] = function _0x396706() {
                this['Je'] = 0x0,
                this['mi'] = _0xa8b9d9['dh']['jh'],
                this['ni'] = 0x0,
                this['Vi'] = 0x0,
                this['Wi'] = 0x0,
                this['Xi'] = 0x0,
                this['Yi'] = 0x0,
                this['Xa'] = '';
            }
            ,
            _0x59c451;
        }()),
        _0xa8b9d9['Bn'] = _0xbc3655['ca'](_0x148283['k']['t'], function(_0x333d6a, _0x2d552e, _0x526d75) {
            var _0x5d5b05 = _0x434858;
            _0x148283['k']['t'][_0x5d5b05(0x3ed)](this, _0x333d6a, _0x2d552e, _0x526d75),
            this['Rh'] = {
                'x': 0x0,
                'y': 0x0
            };
        }),
        _0xa8b9d9['Sb'] = (function() {
            var _0x26cd9e = _0x434858;
            function _0x496050(_0x49a8b2, _0x2aff64, _0x14daa5, _0x3bd4eb, _0x530825) {
                this['Tj'] = _0x49a8b2,
                this['Uj'] = _0x2aff64,
                this['Vj'] = _0x14daa5,
                this['Wj'] = _0x3bd4eb,
                this['Xj'] = _0x530825;
            }
            return _0x496050[_0x26cd9e(0x2a8)]['Cn'] = function(_0x2d47f3) {
                return new _0x496050(_0x2d47f3,this['Uj'],this['Vj'],this['Wj'],this['Xj']);
            }
            ,
            _0x496050['prototype']['Dn'] = function(_0xe16b17) {
                return new _0x496050(this['Tj'],_0xe16b17,this['Vj'],this['Wj'],this['Xj']);
            }
            ,
            _0x496050[_0x26cd9e(0x2a8)]['En'] = function(_0x3ab136) {
                return new _0x496050(this['Tj'],this['Uj'],_0x3ab136,this['Wj'],this['Xj']);
            }
            ,
            _0x496050[_0x26cd9e(0x2a8)]['Fn'] = function(_0x379b1c) {
                return new _0x496050(this['Tj'],this['Uj'],this['Vj'],_0x379b1c,this['Xj']);
            }
            ,
            _0x496050[_0x26cd9e(0x2a8)]['Gn'] = function(_0x1d9228) {
                return new _0x496050(this['Tj'],this['Uj'],this['Vj'],this['Wj'],_0x1d9228);
            }
            ,
            _0x496050;
        }()),
        _0xa8b9d9['Bm'] = (function() {
            var _0x2dd979 = _0x434858;
            function _0x3f3019(_0x498cda) {
                var _0x40b64a = _0x31dd;
                this['Hn'] = new _0xa8b9d9['Xc'](),
                this['Hn']['Yc'][_0x40b64a(0x812)](this['Hn']['Zc']),
                this['In'] = null,
                this['Jn'] = null,
                this['Jm'] = _0x498cda,
                this['$c'] = 0x0,
                this['mj'] = 0x1,
                this['Kn'] = 0x1,
                this['Ln'] = 0x1,
                this['Mn'] = 0x1,
                this['Nn'] = 0x1,
                this['On'] = 0x1,
                this['Pn'] = 0x1,
                this['Hm'](_0x40b64a(0x7c3));
            }
            var _0x53067e = new _0xa8b9d9['Sb'](0x0,0x0,0x0,0x0,0x0);
            return _0x3f3019[_0x2dd979(0x2a8)]['ag'] = function() {
                return this['Hn']['Yc'];
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['Cm'] = function(_0x108d36) {
                var _0x5ac7be = _0x2dd979;
                this['$c'] = _0x108d36;
                if (this['Hn']['$c'] !== _0x108d36) {
                    for (var _0x48e7fc = _0x108d36; _0x48e7fc < this['Hn']['_c'][_0x5ac7be(0x2a1)]; _0x48e7fc++) {
                        this['Hn']['_c'][_0x48e7fc]['Cd']();
                    }
                    ;while (this['Hn']['$c'] > _0x108d36) {
                        this['Hn']['$c'] -= 0x1;
                        var _0x385f53 = this['Hn']['_c'][this['Hn']['$c']];
                        _0x385f53['md']['G'](),
                        _0x385f53['ld']['G']();
                    }
                    ;while (this['Hn']['$c'] < _0x108d36) {
                        var _0x2f5f48 = this['Hn']['_c'][this['Hn']['$c']];
                        this['Hn']['$c'] += 0x1,
                        this['Hn']['Yc'][_0x5ac7be(0x812)](_0x2f5f48['ld']['zd']()),
                        this['Hn']['Yc'][_0x5ac7be(0x812)](_0x2f5f48['md']['zd']()),
                        _0x2f5f48['ld']['Rj'](this['Kn']),
                        _0x2f5f48['md']['Rj'](this['Ln']);
                    }
                    ;for (var _0x2e4ff8 = 0x0; _0x2e4ff8 < this['Hn']['Zc']['od']['length']; _0x2e4ff8++) {
                        this['Hn']['Zc']['od'][_0x2e4ff8]['Rj'](this['Mn']);
                    }
                    ;for (var _0x3b55b0 = 0x0; _0x3b55b0 < this['Hn']['Zc']['pd']['length']; _0x3b55b0++) {
                        this['Hn']['Zc']['pd'][_0x3b55b0]['Rj'](this['Nn']);
                    }
                    ;for (var _0xb844ee = 0x0; _0xb844ee < this['Hn']['Zc']['rd'][_0x5ac7be(0x2a1)]; _0xb844ee++) {
                        this['Hn']['Zc']['rd'][_0xb844ee]['Rj'](this['On']);
                    }
                    ;for (var _0x16cadc = 0x0; _0x16cadc < this['Hn']['Zc']['qd'][_0x5ac7be(0x2a1)]; _0x16cadc++) {
                        this['Hn']['Zc']['qd'][_0x16cadc]['Rj'](this['Pn']);
                    }
                }
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['Im'] = function() {
                return this['$c'];
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['Gm'] = function(_0x21cd5b) {
                var _0xf4ebd4 = _0x2dd979;
                this['In'] = _0x21cd5b,
                this['Jn'] = _0xf4ebd4(0x7c3),
                this['Tm']();
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['Hm'] = function(_0x4f63b8) {
                this['In'] = _0x53067e,
                this['Jn'] = _0x4f63b8,
                this['Tm']();
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['Tm'] = function() {
                this['Hn']['hd'](_0xa8b9d9['jd']['ch'], null, ooo['ud']['Cc']()['Tb'](this['In']['Tj']), ooo['ud']['Cc']()['Vb'](this['In']['Uj']), ooo['ud']['Cc']()['Wb'](this['In']['Vj']), ooo['ud']['Cc']()['Xb'](this['In']['Xj']), ooo['ud']['Cc']()['Yb'](this['In']['Wj']), this['Jn']);
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['Dm'] = function(_0x8c00ee) {
                this['mj'] = _0x8c00ee;
            }
            ,
            _0x3f3019['prototype']['Km'] = function() {
                return this['mj'];
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['Wm'] = function(_0x48067c, _0x11db8f) {
                this['Kn'] = _0x48067c,
                this['Ln'] = _0x11db8f;
                for (var _0x4a4047 = 0x0; _0x4a4047 < this['$c']; _0x4a4047++) {
                    var _0x4f6569 = this['Hn']['_c'][_0x4a4047];
                    _0x4f6569['ld']['Rj'](this['Kn']),
                    _0x4f6569['md']['Rj'](this['Ln']);
                }
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['Zm'] = function(_0x4828dc, _0x424e46, _0x54c19f, _0x5dee9f) {
                var _0x396733 = _0x2dd979;
                this['Mn'] = _0x4828dc,
                this['Nn'] = _0x424e46,
                this['On'] = _0x54c19f,
                this['Pn'] = _0x5dee9f;
                for (var _0x2a955b = 0x0; _0x2a955b < this['Hn']['Zc']['od']['length']; _0x2a955b++) {
                    this['Hn']['Zc']['od'][_0x2a955b]['Rj'](this['Mn']);
                }
                ;for (var _0xcd56d0 = 0x0; _0xcd56d0 < this['Hn']['Zc']['pd'][_0x396733(0x2a1)]; _0xcd56d0++) {
                    this['Hn']['Zc']['pd'][_0xcd56d0]['Rj'](this['Nn']);
                }
                ;for (var _0x513443 = 0x0; _0x513443 < this['Hn']['Zc']['rd'][_0x396733(0x2a1)]; _0x513443++) {
                    this['Hn']['Zc']['rd'][_0x513443]['Rj'](this['On']);
                }
                ;for (var _0x54cf92 = 0x0; _0x54cf92 < this['Hn']['Zc']['qd'][_0x396733(0x2a1)]; _0x54cf92++) {
                    this['Hn']['Zc']['qd'][_0x54cf92]['Rj'](this['Pn']);
                }
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['Bg'] = function() {
                var _0x52df25 = this['mj'] * 0x2
                  , _0x2cd5b0 = this['mj'] * 0x2 * 1.5;
                if (this['$c'] > 0x0) {
                    var _0x123377 = this['Jm'][0x0]
                      , _0x221d64 = this['Jm'][0x1]
                      , _0x31bd9f = this['Jm'][0x2];
                    this['Hn']['_c'][0x0]['Ad'](_0x123377, _0x221d64, _0x52df25, _0x2cd5b0, _0x31bd9f),
                    this['Hn']['Zc']['Ad'](_0x123377, _0x221d64, _0x52df25, _0x31bd9f);
                }
                ;for (var _0x3a87be = 0x1; _0x3a87be < this['$c']; _0x3a87be++) {
                    var _0x2633e1 = this['Jm'][_0x3a87be * 0x3]
                      , _0x157ef1 = this['Jm'][_0x3a87be * 0x3 + 0x1]
                      , _0x1f0873 = this['Jm'][_0x3a87be * 0x3 + 0x2];
                    this['Hn']['_c'][_0x3a87be]['Ad'](_0x2633e1, _0x157ef1, _0x52df25, _0x2cd5b0, _0x1f0873);
                }
            }
            ,
            _0x3f3019[_0x2dd979(0x2a8)]['_m'] = function(_0x4cc53d) {
                var _0x152975 = _0x2dd979;
                _0x4cc53d[_0x152975(0x869)](this['Hn']['Yc']);
            }
            ,
            _0x3f3019;
        }()),
        _0xa8b9d9['Uf'] = (function() {
            var _0x4aa696 = _0x434858;
            function _0x5b5e3a(_0x328492) {
                this['Wd'] = _0x328492;
            }
            return _0x5b5e3a['Tf'] = $(_0x4aa696(0x390)),
            _0x5b5e3a['Qn'] = $('#stretch-box'),
            _0x5b5e3a['Rn'] = $(_0x4aa696(0x6f5)),
            _0x5b5e3a['Sn'] = $(_0x4aa696(0x32b)),
            _0x5b5e3a['Tn'] = $('#game-view'),
            _0x5b5e3a['Un'] = $('#results-view'),
            _0x5b5e3a['Vn'] = $(_0x4aa696(0x6b7)),
            _0x5b5e3a['Wn'] = $(_0x4aa696(0x7ef)),
            _0x5b5e3a['Xn'] = $(_0x4aa696(0x384)),
            _0x5b5e3a['Yn'] = $(_0x4aa696(0x55b)),
            _0x5b5e3a['Zn'] = $('#restricted-view'),
            _0x5b5e3a['$n'] = $('#error-gateway-connection-view'),
            _0x5b5e3a['_n'] = $(_0x4aa696(0x441)),
            _0x5b5e3a[_0x4aa696(0x2a8)]['Sa'] = function() {}
            ,
            _0x5b5e3a[_0x4aa696(0x2a8)]['ml'] = function() {}
            ,
            _0x5b5e3a[_0x4aa696(0x2a8)]['nl'] = function() {}
            ,
            _0x5b5e3a['prototype']['hl'] = function() {}
            ,
            _0x5b5e3a['prototype']['qg'] = function() {}
            ,
            _0x5b5e3a[_0x4aa696(0x2a8)]['ug'] = function(_0x5df0ba, _0x3a6737) {}
            ,
            _0x5b5e3a;
        }()),
        _0x5b26ac = $(_0x434858(0x25a)),
        _0x1fd3fe = $(_0x434858(0x5ac)),
        _0x554fd0 = $('#congrats-bg'),
        _0x5be724 = $('#unl6wj4czdl84o9b'),
        _0xd71c9b = $(_0x434858(0x891)),
        _0x4d11e8 = $(_0x434858(0x857)),
        _0x5a4d38 = $(_0x434858(0x1db)),
        _0x478b8e = $(_0x434858(0x1d2)),
        _0x29cf41 = $(_0x434858(0x460)),
        _0x16dd5b = $(_0x434858(0x3fc)),
        (_0x2f3596 = _0xbc3655['ca'](_0xa8b9d9['Uf'], function() {
            var _0x5e050b = _0x434858;
            _0xa8b9d9['Uf'][_0x5e050b(0x3ed)](this, _0xa8b9d9['ll']['ao']);
            var _0x54d641 = this
              , _0x191a6f = _0x16dd5b[_0x5e050b(0x4bb)]()[0x0];
            _0xd71c9b[_0x5e050b(0x589)](_0x4cd94d['co']['bo']),
            _0x5b26ac[_0x5e050b(0x440)](_0xbc3655['U'](_0x5e050b(0x4ff))),
            _0x1fd3fe[_0x5e050b(0x440)](_0xbc3655['U'](_0x5e050b(0x766))),
            _0x1fd3fe[_0x5e050b(0x584)](_0x5e050b(0x31e)),
            _0x1fd3fe['after'](_0x5e050b(0x1c1)),
            _0x1fd3fe[_0x5e050b(0x68c)](function() {
                ooo['ij']['if'](),
                _0x4cd94d['co']['do']['Va'](),
                ooo['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Jf']),
                ooo['Xg']['gl'](ooo['Xg']['Jf']);
            }),
            $(_0x5e050b(0x3b2))[_0x5e050b(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['to']();
            });
            var _0xc59a38 = [{
                'url': _0x5e050b(0x827)
            }, {
                'url': _0x5e050b(0x45c)
            }, {
                'url': _0x5e050b(0x249)
            }, {
                'url': _0x5e050b(0x88f)
            }, {
                'url': _0x5e050b(0x474)
            }, {
                'url': _0x5e050b(0x313)
            }, {
                'url': 'bg_sky__2.png'
            }, {
                'url': _0x5e050b(0x67b)
            }, {
                'url': 'bg_sky_8.png'
            }, {
                'url': _0x5e050b(0x300)
            }, {
                'url': _0x5e050b(0x71a)
            }, {
                'url': 'bg_sky_12.png'
            }]
              , _0x4d55f9 = 0x0;
            function _0x4f1df3() {
                var _0x7e30f6 = _0x5e050b;
                _0x4d55f9 = (_0x4d55f9 + 0x1) % _0xc59a38[_0x7e30f6(0x2a1)];
                var _0x4ff1be = _0xc59a38[_0x4d55f9][_0x7e30f6(0x88e)]
                  , _0x5d1501 = _0x389039[_0x7e30f6(0x510)] + '/get_store.phpitem=' + _0x4ff1be;
                _0x389039[_0x7e30f6(0x4b9)] = _0x5d1501,
                localStorage[_0x7e30f6(0x39f)]('SaveGamewft', JSON['stringify'](_0x389039));
                try {
                    PIXI[_0x7e30f6(0x6cd)]['TextureCache'][_0x5d1501] && (PIXI[_0x7e30f6(0x6cd)]['TextureCache'][_0x5d1501][_0x7e30f6(0x755)](!![]),
                    delete PIXI[_0x7e30f6(0x6cd)][_0x7e30f6(0x700)][_0x5d1501]);
                    if (typeof ooo !== _0x7e30f6(0x799) && ooo['ef'] && ooo['ef']['fn_o']) {
                        var _0x4ea29a = ooo['ef']['fn_o'](_0x5d1501);
                        ooo['ef']['F_bg'] = new PIXI['Texture'](_0x4ea29a);
                    } else
                        typeof PIXI !== 'undefined' && (ooo['ef']['F_bg'] = PIXI[_0x7e30f6(0x538)][_0x7e30f6(0x456)](_0x5d1501));
                    ooo && ooo['Xg'] && ooo['Xg']['Kf'] && ooo['Xg']['Kf']['Wg'] && ooo['Xg']['Kf']['Wg']['sh'] && ooo['Xg']['Kf']['Wg']['sh']['Hh'](ooo['ef'][_0x7e30f6(0x737)]);
                } catch (_0x3be2e) {
                    console[_0x7e30f6(0x399)]('Background\x20change\x20error:', _0x3be2e);
                }
            }
            let _0x2b0945 = {
                'left': ![],
                'right': ![]
            };
            function _0x52a3c5() {
                var _0x2dacaf = _0x5e050b;
                _0x389039['hz'] && !_0x389039[_0x2dacaf(0x23b)] && (_0x2b0945[_0x2dacaf(0x394)] && _0x389039['z'] >= 0.2 && (_0x389039['z'] = _0x389039['z'] - 0.05),
                _0x2b0945[_0x2dacaf(0x6b2)] && _0x389039['z'] <= 0x19 && (_0x389039['z'] = _0x389039['z'] + 0.05)),
                requestAnimationFrame(_0x52a3c5);
            }
            $(_0x5e050b(0x584))[_0x5e050b(0x836)](function(_0x24b295) {
                var _0x289271 = _0x5e050b;
                (_0x24b295['keyCode'] !== 0x11 || !(_0x389039['ctrl'] = !![])) && (_0x24b295[_0x289271(0x4ec)] !== 0x11 && (_0x389039[_0x289271(0x4d0)] = ![]));
                _0x24b295['keyCode'] === 0x35 && ((_0x389039['s'] || _0x276741['on']) && _0x4f1df3());
                (_0x24b295[_0x289271(0x4ec)] == 0xbc || _0x24b295['keyCode'] == 0x25) && (_0x2b0945[_0x289271(0x394)] = !![]);
                (_0x24b295['keyCode'] == 0xbe || _0x24b295[_0x289271(0x4ec)] == 0x27) && (_0x2b0945[_0x289271(0x6b2)] = !![]);
                _0x24b295[_0x289271(0x4ec)] === 0x20 && (_0x54d641['eo'] = !![]);
                _0x24b295[_0x289271(0x4ec)] === 0x31 && _0x4eabd2();
                if (_0x24b295[_0x289271(0x4ec)] === 0x32) {
                    if (_0x276741['on'] && _0x389039['s']) {
                        if (_0x389039[_0x289271(0x4ca)] && _0x389039['selectedHats'][_0x289271(0x2a1)] > 0x0) {
                            _0x389039[_0x289271(0x57c)] = (_0x389039['currentHatIndex'] + 0x1) % _0x389039[_0x289271(0x4ca)][_0x289271(0x2a1)];
                            let _0x5d62e8 = _0x389039[_0x289271(0x4ca)][_0x389039[_0x289271(0x57c)]];
                            _0xa0118c(_0x5d62e8),
                            localStorage['setItem']('SaveGamewft', JSON[_0x289271(0x880)](_0x389039));
                        }
                    }
                }
            })[_0x5e050b(0x21e)](function(_0x102270) {
                var _0x25c563 = _0x5e050b;
                _0x389039[_0x25c563(0x4d0)] = ![];
                (_0x102270[_0x25c563(0x4ec)] == 0xbc || _0x102270['keyCode'] == 0x25) && (_0x2b0945[_0x25c563(0x394)] = ![]);
                (_0x102270[_0x25c563(0x4ec)] == 0xbe || _0x102270['keyCode'] == 0x27) && (_0x2b0945[_0x25c563(0x6b2)] = ![]);
                _0x276741['on'] && _0x389039['s'] && (_0x102270[_0x25c563(0x4ec)] == 0x51 || _0x102270[_0x25c563(0x4ec)] == 0x57 ? (_0x102270[_0x25c563(0x4ec)] == 0x51 && (_0x2806ed['texture'] = _0xc4d0ac,
                _0x18ec3d[_0x25c563(0x5e9)] = _0x33d9a2,
                _0x2806ed[_0x25c563(0x494)] = 0x1,
                _0x18ec3d[_0x25c563(0x494)] = 0.25,
                _0x51a22d()),
                _0x102270[_0x25c563(0x4ec)] == 0x57 && (_0x18ec3d['texture'] = _0x1f0c02,
                _0x2806ed[_0x25c563(0x5e9)] = _0x127c3e,
                _0x2806ed[_0x25c563(0x494)] = 0.25,
                _0x18ec3d[_0x25c563(0x494)] = 0x1,
                _0x3bffb0())) : (_0x18ec3d[_0x25c563(0x5e9)] = _0x33d9a2,
                _0x2806ed['texture'] = _0x127c3e,
                _0x18ec3d[_0x25c563(0x494)] = 0.25,
                _0x2806ed['alpha'] = 0.25,
                _0x3d6d54 = ![],
                _0x2c1a8a = 0x37,
                _0x19955e = 0x1,
                _0x3d8998 = !![],
                clearInterval(_0xc56d6c),
                _0xc56d6c = null),
                _0x102270['keyCode'] == 0x5a && (_0x389039['z'] == 0x1 ? (_0x389039['h'] ? _0x389039['z'] = 1.6 : _0x389039['z'] = 1.2,
                _0x1ba984[_0x25c563(0x5e9)] = _0x468615,
                _0x1ba984['alpha'] = 0x1) : (_0x389039['z'] = 0x1,
                _0x1ba984['texture'] = _0x5edd49,
                _0x1ba984[_0x25c563(0x494)] = 0.25)));
                if (_0x276741['on'] && _0x102270[_0x25c563(0x4ec)] == 0x52) {
                    !window[_0x25c563(0x5f7)] && (window[_0x25c563(0x5f7)] = 0x0);
                    const _0x4acde2 = new Date()['getTime']()
                      , _0x581f4a = _0x4acde2 - window[_0x25c563(0x5f7)];
                    if (_0x581f4a < 0x3e8)
                        return;
                    window[_0x25c563(0x5f7)] = _0x4acde2;
                    _0x389039['pi'] && _0x389039['pn'] && ($(_0x25c563(0x38e))[_0x25c563(0x467)](_0x389039['pi']),
                    $(_0x25c563(0x52d))['val'](_0x389039['pn']),
                    $(_0x25c563(0x6b8))['val']($(_0x25c563(0x38e))[_0x25c563(0x467)]()),
                    $(_0x25c563(0x4be))[_0x25c563(0x467)]($(_0x25c563(0x52d))[_0x25c563(0x467)]()));
                    _0x389039['r1'] = !![];
                    try {
                        if (ooo['Mh'] && typeof ooo['Mh']['uj'] === _0x25c563(0x3fb)) {
                            ooo['Mh']['uj'](),
                            setTimeout(function() {
                                var _0x310971 = _0x25c563;
                                document[_0x310971(0x657)](_0x310971(0x7e1))[_0x310971(0x68c)]();
                            }, 0x12c);
                            return;
                        }
                    } catch (_0x4d0012) {}
                    try {
                        if (ooo['Mh'] && typeof ooo['Mh']['gr'] === 'function')
                            ooo['Mh']['gr']();
                        else {
                            if (ooo['Mh'] && ooo['Mh']['Rq']) {
                                try {
                                    ooo['Mh']['go'] = 0x3;
                                } catch (_0x3946ff) {}
                                ooo['Mh']['Rq'][_0x25c563(0x659)]();
                            }
                        }
                        setTimeout(function() {
                            var _0x2c2169 = _0x25c563;
                            try {
                                const _0x764ca3 = document[_0x2c2169(0x421)](_0x2c2169(0x417));
                                _0x764ca3[_0x2c2169(0x588)](_0xffb031 => {
                                    var _0x5e3b1d = _0x2c2169;
                                    try {
                                        _0xffb031['style'][_0x5e3b1d(0x5ee)] = _0x5e3b1d(0x4a2);
                                    } catch (_0x3b15b1) {}
                                }
                                );
                            } catch (_0x509d4c) {}
                            document['getElementById'](_0x2c2169(0x7e1))[_0x2c2169(0x68c)]();
                        }, 0x15e);
                    } catch (_0x52567d) {
                        document[_0x25c563(0x657)](_0x25c563(0x7e1))[_0x25c563(0x68c)]();
                    }
                }
                _0x276741['on'] && _0x102270[_0x25c563(0x4ec)] == 0x38 && (document[_0x25c563(0x657)](_0x25c563(0x795))['click'](),
                _0x389039['sn'] ? _0x389039['sn'] = ![] : _0x389039['sn'] = !![]),
                _0x102270[_0x25c563(0x4ec)] === 0x20 && (_0x54d641['eo'] = ![]);
            }),
            _0x52a3c5(),
            window['addEventListener'](_0x5e050b(0x3c3), function() {
                var _0x4c1bf2 = _0x5e050b;
                if (_0x389039[_0x4c1bf2(0x4b9)]) {
                    var _0x309650 = _0x389039[_0x4c1bf2(0x4b9)];
                    for (var _0x4ab5b5 = 0x0; _0x4ab5b5 < _0xc59a38['length']; _0x4ab5b5++) {
                        if (_0xc59a38[_0x4ab5b5][_0x4c1bf2(0x88e)] === _0x309650) {
                            _0x4d55f9 = _0x4ab5b5;
                            break;
                        }
                    }
                }
            }),
            _0x191a6f[_0x5e050b(0x81b)](_0x5e050b(0x302), function(_0xb6dee8) {
                var _0x109917 = _0x5e050b;
                if (_0x276741['on'] && _0x389039[_0x109917(0x23b)] && _0x389039['mo'] != 0x6 && _0x389039['s']) {
                    var _0x61c62c = btoa(_0x389039[_0x109917(0x7ae)]);
                    if (_0x389039[_0x109917(0x695)]['x'] != -0x1 && _0x389039['mo1']['y'] == -0x1 && btoa(_0x61c62c) == _0x389039[_0x109917(0x2b9)] || _0x389039['mo2']['x'] == -0x1 && _0x389039[_0x109917(0x626)]['y'] != -0x1 && btoa(_0x61c62c) == _0x389039[_0x109917(0x2b9)]) {
                        var _0x3d1b04 = ooo['Xg']['Kf']['Wg']['Ah']
                          , _0x578feb = _0x191a6f[_0x109917(0x56d)]
                          , _0x49dbf9 = _0x191a6f[_0x109917(0x780)]
                          , _0x1e5837 = _0x578feb * 0.5
                          , _0xa87ee0 = _0x49dbf9 * 0.5
                          , _0x2ef8de = btoa(_0x389039['c_2']);
                        for (let _0x2ccb48 = 0x0; _0x2ccb48 < _0xb6dee8[_0x109917(0x331)][_0x109917(0x2a1)]; _0x2ccb48++) {
                            var _0x4f1959 = _0xb6dee8[_0x109917(0x331)][_0x2ccb48][_0x109917(0x26a)]
                              , _0x13cb84 = _0xb6dee8[_0x109917(0x331)][_0x2ccb48][_0x109917(0x855)]
                              , _0xc5f85f = _0xb6dee8[_0x109917(0x331)][_0x2ccb48][_0x109917(0x591)];
                            _0x389039['mo'] == 0x1 && btoa(_0x2ef8de) == _0x389039[_0x109917(0x781)] && (_0x578feb *= 0.5,
                            _0x49dbf9 *= 0.5);
                            _0x389039['mo'] == 0x2 && btoa(_0x2ef8de) == _0x389039[_0x109917(0x781)] && (_0x578feb = _0x3d1b04[_0x109917(0x607)]['y'] + 0x6e,
                            _0x49dbf9 = _0x3d1b04[_0x109917(0x607)]['x'] + 0x6e);
                            _0x389039['mo'] == 0x3 && btoa(_0x2ef8de) == _0x389039[_0x109917(0x781)] && (_0x578feb = _0x3d1b04[_0x109917(0x429)]['y'] + 0x6e,
                            _0x49dbf9 = _0x3d1b04['img_o_3']['x'] + 0x6e);
                            (_0x389039['mo'] == 0x4 && btoa(_0x2ef8de) == _0x389039[_0x109917(0x781)] || _0x389039['mo'] == 0x5 && btoa(_0x2ef8de) == _0x389039[_0x109917(0x781)]) && (_0x578feb = _0x3d1b04['img_o_4']['y'] + 0x6e,
                            _0x49dbf9 = _0x3d1b04[_0x109917(0x586)]['x'] + 0x6e);
                            var _0x5d1bc3 = btoa(_0x389039['c_5'])
                              , _0x272523 = Math[_0x109917(0x339)](_0x13cb84 - _0x578feb, _0x4f1959 - _0x49dbf9)
                              , _0x38cd44 = Math[_0x109917(0x572)](_0x272523)
                              , _0x313626 = Math[_0x109917(0x55e)](_0x272523)
                              , _0x5e1670 = btoa(_0x389039[_0x109917(0x42e)])
                              , _0x4c7f2b = _0x389039[_0x109917(0x695)]['x'] == _0xc5f85f;
                            btoa(_0x389039[_0x109917(0x571)]);
                            if (_0x4c7f2b && btoa(_0x5e1670) == _0x389039[_0x109917(0x358)]) {
                                if (_0x4f1959 <= 0x0 || _0x13cb84 <= 0x0)
                                    _0x389039[_0x109917(0x695)]['x'] = -0x1,
                                    _0x389039['mo'] == 0x1 && (_0x3d1b04[_0x109917(0x69b)][_0x109917(0x494)] = 0.25),
                                    _0x389039['mo'] == 0x2 && (_0x3d1b04[_0x109917(0x607)]['alpha'] = 0.25,
                                    _0x3d1b04[_0x109917(0x5a9)][_0x109917(0x494)] = 0.25,
                                    _0x3d1b04['img_p_2'][_0x109917(0x494)] = 0.25),
                                    _0x389039['mo'] == 0x3 && (_0x3d1b04[_0x109917(0x429)][_0x109917(0x494)] = 0.25,
                                    _0x3d1b04[_0x109917(0x4c7)][_0x109917(0x494)] = 0.25,
                                    _0x3d1b04[_0x109917(0x53b)]['alpha'] = 0.25),
                                    (_0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5) && (_0x3d1b04['img_p_2']['alpha'] = 0.25);
                                else {
                                    _0x54d641['fo'] = _0x272523;
                                    var _0x2bc90c = 0x32;
                                    (_0x389039['mo'] == 0x1 || _0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5) && (_0x2bc90c = 0x6e);
                                    var _0x38cba8 = _0x49dbf9 - _0x4f1959
                                      , _0x430915 = _0x578feb - _0x13cb84
                                      , _0xf589b3 = Math[_0x109917(0x4a9)](_0x38cba8 * _0x38cba8 + _0x430915 * _0x430915)
                                      , _0x1ed6b3 = _0xa87ee0 + _0xf589b3 * _0x38cd44 - 0x44
                                      , _0x2e7e1f = _0x1e5837 + _0xf589b3 * _0x313626 - 0x44
                                      , _0x2b4b05 = _0xa87ee0 + _0x2bc90c * _0x38cd44 - 0x44
                                      , _0x2dece4 = _0x1e5837 + _0x2bc90c * _0x313626 - 0x44
                                      , _0x14b7a9 = _0xa87ee0 + _0x38cd44 * 0x4b - 0x44
                                      , _0x44ebc4 = _0x1e5837 + _0x313626 * 0x4b - 0x44
                                      , _0x25f62c = _0x4f1959 - 0x55
                                      , _0x13d8bc = _0x13cb84 - 0x55
                                      , _0x3ff60f = _0x49dbf9 + _0x2bc90c * _0x38cd44 - 0x55
                                      , _0xfae1f7 = _0x578feb + _0x2bc90c * _0x313626 - 0x55
                                      , _0x15d359 = _0x49dbf9 + _0x38cd44 * 0x3 - 0x6e
                                      , _0x514c26 = _0x578feb + _0x313626 * 0x3 - 0x6e;
                                    _0xf589b3 < _0x2bc90c ? (_0x389039[_0x109917(0x626)]['x'] == -0x1 && _0x389039[_0x109917(0x626)]['y'] != -0x1 ? (_0x3d1b04['img_pf_1']['x'] = _0x1ed6b3,
                                    _0x3d1b04[_0x109917(0x7f9)]['y'] = _0x2e7e1f) : (_0x389039['mo'] == 0x1 && (_0x3d1b04[_0x109917(0x69b)]['x'] = _0x1ed6b3,
                                    _0x3d1b04[_0x109917(0x69b)]['y'] = _0x2e7e1f),
                                    (_0x389039['mo'] == 0x2 || _0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5) && (_0x3d1b04[_0x109917(0x70a)]['x'] = _0x1ed6b3,
                                    _0x3d1b04['img_p_2']['y'] = _0x2e7e1f),
                                    _0x389039['mo'] == 0x3 && (_0x3d1b04[_0x109917(0x53b)]['x'] = _0x1ed6b3,
                                    _0x3d1b04[_0x109917(0x53b)]['y'] = _0x2e7e1f)),
                                    _0x389039['mo'] == 0x2 && (_0x3d1b04[_0x109917(0x5a9)]['y'] = _0x13d8bc,
                                    _0x3d1b04[_0x109917(0x5a9)]['x'] = _0x25f62c),
                                    _0x389039['mo'] == 0x3 && (_0x3d1b04['img_i_3']['y'] = _0x13d8bc,
                                    _0x3d1b04[_0x109917(0x4c7)]['x'] = _0x25f62c)) : (_0x389039[_0x109917(0x626)]['x'] == -0x1 && _0x389039[_0x109917(0x626)]['y'] != -0x1 ? (_0x3d1b04[_0x109917(0x7f9)]['x'] = _0x2b4b05,
                                    _0x3d1b04[_0x109917(0x7f9)]['y'] = _0x2dece4,
                                    (_0x389039['mo'] == 0x2 || _0x389039['mo'] == 0x3) && (_0xf589b3 < 0x4b ? (_0x3d1b04[_0x109917(0x7f9)]['x'] = _0x1ed6b3,
                                    _0x3d1b04['img_pf_1']['y'] = _0x2e7e1f) : (_0x3d1b04[_0x109917(0x7f9)]['x'] = _0x14b7a9,
                                    _0x3d1b04[_0x109917(0x7f9)]['y'] = _0x44ebc4))) : (_0x389039['mo'] == 0x1 && (_0x3d1b04[_0x109917(0x69b)]['x'] = _0x2b4b05,
                                    _0x3d1b04['img_p_1']['y'] = _0x2dece4),
                                    (_0x389039['mo'] == 0x2 || _0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5) && (_0x3d1b04[_0x109917(0x70a)]['x'] = _0x2b4b05,
                                    _0x3d1b04[_0x109917(0x70a)]['y'] = _0x2dece4,
                                    _0x389039['mo'] == 0x2 && (_0xf589b3 < 0x4b ? (_0x3d1b04[_0x109917(0x70a)]['x'] = _0x1ed6b3,
                                    _0x3d1b04[_0x109917(0x70a)]['y'] = _0x2e7e1f) : (_0x3d1b04[_0x109917(0x70a)]['x'] = _0x14b7a9,
                                    _0x3d1b04['img_p_2']['y'] = _0x44ebc4))),
                                    _0x389039['mo'] == 0x3 && (_0xf589b3 < 0x4b ? (_0x3d1b04['img_p_3']['x'] = _0x1ed6b3,
                                    _0x3d1b04[_0x109917(0x53b)]['y'] = _0x2e7e1f) : (_0x3d1b04['img_p_3']['x'] = _0x14b7a9,
                                    _0x3d1b04[_0x109917(0x53b)]['y'] = _0x44ebc4))),
                                    _0x389039['mo'] == 0x2 && (_0x3d1b04[_0x109917(0x5a9)]['y'] = _0xfae1f7,
                                    _0x3d1b04['img_i_2']['x'] = _0x3ff60f),
                                    _0x389039['mo'] == 0x3 && (_0x3d1b04[_0x109917(0x4c7)]['y'] = _0xfae1f7,
                                    _0x3d1b04[_0x109917(0x4c7)]['x'] = _0x3ff60f,
                                    _0x3d1b04[_0x109917(0x429)]['y'] = _0x514c26,
                                    _0x3d1b04[_0x109917(0x429)]['x'] = _0x15d359));
                                }
                            } else {
                                if ((_0x4c7f2b = _0x389039['mo2']['y'] == _0xc5f85f) && btoa(_0x5d1bc3) == _0x389039[_0x109917(0x7a4)]) {
                                    if (_0x4f1959 <= 0x0 || _0x13cb84 <= 0x0)
                                        _0x389039[_0x109917(0x626)]['y'] = -0x1,
                                        _0x3d1b04['img_f'][_0x109917(0x62d)] = ![],
                                        _0x3d1b04[_0x109917(0x7f9)]['visible'] = ![],
                                        _0x389039['mo'] == 0x1 && (_0x3d1b04['img_p_1'][_0x109917(0x62d)] = !![]),
                                        (_0x389039['mo'] == 0x2 || _0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5) && (_0x3d1b04[_0x109917(0x70a)][_0x109917(0x62d)] = !![]),
                                        _0x389039['mo'] == 0x3 && (_0x3d1b04[_0x109917(0x53b)][_0x109917(0x62d)] = !![]),
                                        (_0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5) && (_0x3d1b04['img_f'][_0x109917(0x62d)] = !![]),
                                        _0x54d641['eo'] = ![];
                                    else {
                                        if (_0x389039['mo'] == 0x3) {
                                            _0x38cd44 = Math[_0x109917(0x572)](_0x272523 = Math['atan2'](_0x13cb84 - (_0x578feb = _0x3d1b04[_0x109917(0x1f8)]['y'] + 0x64), _0x4f1959 - (_0x49dbf9 = _0x3d1b04['img_f']['x'] + 0x64))),
                                            _0x313626 = Math['sin'](_0x272523);
                                            var _0x25f62c = _0x49dbf9 + _0x38cd44 * 0x3 - 0x64
                                              , _0x13d8bc = _0x578feb + _0x313626 * 0x3 - 0x64
                                              , _0x38cba8 = _0x49dbf9 - _0x4f1959
                                              , _0x430915 = _0x578feb - _0x13cb84
                                              , _0xf589b3 = Math['sqrt'](_0x38cba8 * _0x38cba8 + _0x430915 * _0x430915);
                                            _0xf589b3 >= 0x28 && (_0x3d1b04['img_f']['y'] = _0x25f62c,
                                            _0x3d1b04['img_f']['x'] = _0x13d8bc);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else
                    (!_0x41e416() || !_0x389039[_0x109917(0x365)]['checked']) && ((_0xb6dee8 = _0xb6dee8 || window[_0x109917(0x83d)]) && ((_0xb6dee8 = _0xb6dee8['touches'][0x0])[_0x109917(0x63f)] !== undefined ? _0x54d641['fo'] = Math[_0x109917(0x339)](_0xb6dee8['clientY'] - _0x191a6f[_0x109917(0x56d)] * 0.5, _0xb6dee8[_0x109917(0x63f)] - _0x191a6f[_0x109917(0x780)] * 0.5) : _0x54d641['fo'] = Math[_0x109917(0x339)](_0xb6dee8[_0x109917(0x855)] - _0x191a6f[_0x109917(0x56d)] * 0.5, _0xb6dee8[_0x109917(0x26a)] - _0x191a6f[_0x109917(0x780)] * 0.5)));
            }, !![]),
            _0x191a6f[_0x5e050b(0x81b)](_0x5e050b(0x2f2), function(_0x5872cf) {
                var _0x469bc6 = _0x5e050b;
                if (_0x276741['on'] && _0x389039[_0x469bc6(0x23b)] && _0x389039['mo'] != 0x6 && _0x389039['s']) {
                    var _0x573e2d = ooo['Xg']['Kf']['Wg']['Ah']
                      , _0x326f04 = btoa(_0x389039[_0x469bc6(0x42e)])
                      , _0x46b209 = _0x191a6f['offsetHeight']
                      , _0x3877a7 = btoa(_0x389039[_0x469bc6(0x571)])
                      , _0x44878c = _0x191a6f[_0x469bc6(0x780)]
                      , _0x6d3e43 = btoa(_0x389039[_0x469bc6(0x646)])
                      , _0x186840 = (_0x5872cf = _0x5872cf || window[_0x469bc6(0x83d)])[_0x469bc6(0x2c8)][_0x469bc6(0x68d)](0x0)[_0x469bc6(0x26a)]
                      , _0x3cd841 = btoa(_0x389039['c_2'])
                      , _0x28aa73 = _0x5872cf[_0x469bc6(0x2c8)][_0x469bc6(0x68d)](0x0)[_0x469bc6(0x855)]
                      , _0x49cf11 = _0x5872cf['touches'][_0x469bc6(0x2a1)]
                      , _0x31084c = btoa(_0x389039[_0x469bc6(0x7ae)])
                      , _0x2b8215 = _0x5872cf[_0x469bc6(0x2c8)][_0x469bc6(0x68d)](0x0)[_0x469bc6(0x591)];
                    for (let _0x4d4743 = 0x0; _0x4d4743 < _0x49cf11; _0x4d4743++) {
                        _0x389039[_0x469bc6(0x626)]['x'] == -0x1 && _0x389039[_0x469bc6(0x626)]['y'] != -0x1 ? _0x5872cf[_0x469bc6(0x2c8)][_0x469bc6(0x68d)](_0x4d4743)[_0x469bc6(0x591)] != _0x389039['mo2']['y'] && (_0x186840 = _0x5872cf['touches'][_0x469bc6(0x68d)](_0x4d4743)[_0x469bc6(0x26a)],
                        _0x28aa73 = _0x5872cf[_0x469bc6(0x2c8)]['item'](_0x4d4743)[_0x469bc6(0x855)],
                        _0x2b8215 = _0x5872cf[_0x469bc6(0x2c8)][_0x469bc6(0x68d)](_0x4d4743)['identifier']) : (_0x186840 = _0x5872cf['touches'][_0x469bc6(0x68d)](_0x4d4743)[_0x469bc6(0x26a)],
                        _0x28aa73 = _0x5872cf[_0x469bc6(0x2c8)]['item'](_0x4d4743)[_0x469bc6(0x855)],
                        _0x2b8215 = _0x5872cf[_0x469bc6(0x2c8)][_0x469bc6(0x68d)](_0x4d4743)[_0x469bc6(0x591)]);
                    }
                    ;var _0x25e4ba = 0x0;
                    (_0x389039['mo'] == 0x4 && btoa(_0x6d3e43) == _0x389039['d_5'] || _0x389039['mo'] == 0x5 && btoa(_0x326f04) == _0x389039[_0x469bc6(0x358)]) && (_0x25e4ba = Math[_0x469bc6(0x4a9)]((_0x186840 - _0x573e2d[_0x469bc6(0x1f8)]['x'] - 0x64) * (_0x186840 - _0x573e2d['img_f']['x'] - 0x64) + (_0x28aa73 - _0x573e2d[_0x469bc6(0x1f8)]['y'] - 0x64) * (_0x28aa73 - _0x573e2d[_0x469bc6(0x1f8)]['y'] - 0x64)));
                    _0x49cf11 == 0x1 && (_0x389039['mo'] == 0x4 && _0x25e4ba > 0x28 || _0x389039['mo'] != 0x4) && (_0x389039['mo'] == 0x5 && _0x25e4ba > 0x28 || _0x389039['mo'] != 0x5) && (_0x389039[_0x469bc6(0x626)]['y'] = -0x1,
                    _0x573e2d[_0x469bc6(0x1f8)]['visible'] = ![],
                    _0x573e2d[_0x469bc6(0x7f9)][_0x469bc6(0x62d)] = ![],
                    _0x389039['mo'] == 0x1 && (_0x573e2d[_0x469bc6(0x69b)][_0x469bc6(0x494)] = 0.25,
                    _0x573e2d[_0x469bc6(0x69b)][_0x469bc6(0x62d)] = !![]),
                    _0x389039['mo'] == 0x2 && (_0x573e2d['img_o_2'][_0x469bc6(0x494)] = 0.25,
                    _0x573e2d['img_i_2'][_0x469bc6(0x494)] = 0.25,
                    _0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x494)] = 0.25,
                    _0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x62d)] = !![]),
                    _0x389039['mo'] == 0x3 && (_0x573e2d['img_o_3'][_0x469bc6(0x494)] = 0.25,
                    _0x573e2d['img_i_3'][_0x469bc6(0x494)] = 0.25,
                    _0x573e2d[_0x469bc6(0x53b)][_0x469bc6(0x494)] = 0.25,
                    _0x573e2d[_0x469bc6(0x53b)][_0x469bc6(0x62d)] = !![]),
                    (_0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5) && (_0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x494)] = 0.25,
                    _0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x62d)] = !![],
                    _0x573e2d['img_f'][_0x469bc6(0x62d)] = !![]),
                    _0x54d641['eo'] = ![]);
                    if (_0x389039[_0x469bc6(0x695)]['x'] == -0x1 && _0x389039[_0x469bc6(0x695)]['y'] == -0x1 && btoa(_0x326f04) == _0x389039[_0x469bc6(0x358)] && (_0x389039['mo'] == 0x4 && _0x25e4ba > 0x28 || _0x389039['mo'] != 0x4 && btoa(_0x3877a7) == _0x389039[_0x469bc6(0x58a)]) && (_0x389039['mo'] == 0x5 && _0x25e4ba > 0x28 || _0x389039['mo'] != 0x5 && btoa(_0x3cd841) == _0x389039['d_2'])) {
                        _0x389039[_0x469bc6(0x695)]['x'] = _0x2b8215;
                        _0x389039[_0x469bc6(0x695)]['x'] == _0x389039['mo2']['y'] && _0x389039[_0x469bc6(0x695)]['y'] == _0x389039['mo2']['x'] && (_0x186840 = _0x5872cf[_0x469bc6(0x2c8)]['item'](0x1)[_0x469bc6(0x26a)],
                        _0x28aa73 = _0x5872cf[_0x469bc6(0x2c8)][_0x469bc6(0x68d)](0x1)[_0x469bc6(0x855)]);
                        var _0x1c4251 = _0x44878c * 0.5 - 0x44
                          , _0x53ed0e = _0x46b209 * 0.5 - 0x44
                          , _0x405996 = _0x186840 - 0x6e
                          , _0x121615 = _0x28aa73 - 0x6e
                          , _0x26117d = _0x186840 - 0x55
                          , _0xd212a2 = _0x28aa73 - 0x55;
                        _0x389039['mo'] == 0x1 && _0x389039[_0x469bc6(0x626)]['x'] == -0x1 && _0x389039['mo2']['y'] == -0x1 && (_0x573e2d[_0x469bc6(0x69b)]['alpha'] = 0x1,
                        _0x573e2d[_0x469bc6(0x69b)]['x'] = _0x1c4251,
                        _0x573e2d['img_p_1']['y'] = _0x53ed0e,
                        _0x573e2d[_0x469bc6(0x69b)][_0x469bc6(0x62d)] = !![]),
                        _0x389039['mo'] == 0x2 && (_0x573e2d[_0x469bc6(0x607)][_0x469bc6(0x494)] = 0x1,
                        _0x573e2d['img_o_2']['x'] = _0x405996,
                        _0x573e2d[_0x469bc6(0x607)]['y'] = _0x121615,
                        _0x573e2d['img_i_2'][_0x469bc6(0x494)] = 0x1,
                        _0x573e2d[_0x469bc6(0x5a9)]['x'] = _0x26117d,
                        _0x573e2d[_0x469bc6(0x5a9)]['y'] = _0xd212a2,
                        _0x389039[_0x469bc6(0x626)]['x'] == -0x1 && _0x389039[_0x469bc6(0x626)]['y'] == -0x1 && (_0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x494)] = 0x1,
                        _0x573e2d[_0x469bc6(0x70a)]['x'] = _0x1c4251,
                        _0x573e2d[_0x469bc6(0x70a)]['y'] = _0x53ed0e,
                        _0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x62d)] = !![])),
                        _0x389039['mo'] == 0x3 && btoa(_0x6d3e43) == _0x389039['d_5'] && (_0x573e2d['img_o_3'][_0x469bc6(0x494)] = 0x1,
                        _0x573e2d[_0x469bc6(0x429)]['x'] = _0x405996,
                        _0x573e2d[_0x469bc6(0x429)]['y'] = _0x121615,
                        _0x573e2d[_0x469bc6(0x4c7)][_0x469bc6(0x494)] = 0x1,
                        _0x573e2d[_0x469bc6(0x4c7)]['x'] = _0x26117d,
                        _0x573e2d[_0x469bc6(0x4c7)]['y'] = _0xd212a2,
                        _0x389039[_0x469bc6(0x626)]['x'] == -0x1 && _0x389039[_0x469bc6(0x626)]['y'] == -0x1 && (_0x573e2d[_0x469bc6(0x53b)][_0x469bc6(0x494)] = 0x1,
                        _0x573e2d[_0x469bc6(0x53b)]['x'] = _0x1c4251,
                        _0x573e2d[_0x469bc6(0x53b)]['y'] = _0x53ed0e,
                        _0x573e2d[_0x469bc6(0x53b)]['visible'] = !![])),
                        _0x389039['mo'] == 0x4 && btoa(_0x3cd841) == _0x389039[_0x469bc6(0x781)] && _0x389039[_0x469bc6(0x626)]['x'] == -0x1 && _0x389039[_0x469bc6(0x626)]['y'] == -0x1 && (_0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x494)] = 0x1,
                        _0x573e2d[_0x469bc6(0x70a)]['x'] = _0x1c4251,
                        _0x573e2d['img_p_2']['y'] = _0x53ed0e,
                        _0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x62d)] = !![]),
                        _0x389039['mo'] == 0x5 && btoa(_0x3877a7) == _0x389039[_0x469bc6(0x58a)] && _0x389039[_0x469bc6(0x626)]['x'] == -0x1 && _0x389039['mo2']['y'] == -0x1 && (_0x573e2d['img_p_2']['alpha'] = 0x1,
                        _0x573e2d[_0x469bc6(0x70a)]['x'] = _0x1c4251,
                        _0x573e2d[_0x469bc6(0x70a)]['y'] = _0x53ed0e,
                        _0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x62d)] = !![]);
                    } else
                        (_0x49cf11 >= 0x2 && _0x389039['mo2']['x'] == -0x1 && _0x389039[_0x469bc6(0x626)]['y'] == -0x1 && btoa(_0x3877a7) == _0x389039['d_3'] || _0x49cf11 == 0x1 && _0x389039['mo'] == 0x4 && _0x25e4ba <= 0x28 && btoa(_0x31084c) == _0x389039[_0x469bc6(0x2b9)] || _0x49cf11 == 0x1 && _0x389039['mo'] == 0x5 && _0x25e4ba <= 0x28 && btoa(_0x3cd841) == _0x389039[_0x469bc6(0x781)]) && (_0x389039['mo2']['y'] = _0x2b8215,
                        _0x573e2d['img_f'][_0x469bc6(0x62d)] = !![],
                        _0x573e2d[_0x469bc6(0x7f9)]['visible'] = !![],
                        _0x389039['mo'] == 0x1 && (_0x573e2d[_0x469bc6(0x69b)]['visible'] = ![],
                        _0x573e2d[_0x469bc6(0x7f9)]['x'] = _0x573e2d[_0x469bc6(0x69b)]['x'],
                        _0x573e2d[_0x469bc6(0x7f9)]['y'] = _0x573e2d[_0x469bc6(0x69b)]['y']),
                        (_0x389039['mo'] == 0x2 || _0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5) && (_0x573e2d[_0x469bc6(0x70a)][_0x469bc6(0x62d)] = ![],
                        _0x573e2d[_0x469bc6(0x7f9)]['x'] = _0x573e2d[_0x469bc6(0x70a)]['x'],
                        _0x573e2d['img_pf_1']['y'] = _0x573e2d[_0x469bc6(0x70a)]['y']),
                        _0x389039['mo'] == 0x3 && btoa(_0x3877a7) == _0x389039[_0x469bc6(0x58a)] && (_0x573e2d[_0x469bc6(0x53b)][_0x469bc6(0x62d)] = ![],
                        _0x573e2d['img_pf_1']['x'] = _0x573e2d[_0x469bc6(0x53b)]['x'],
                        _0x573e2d[_0x469bc6(0x7f9)]['y'] = _0x573e2d[_0x469bc6(0x53b)]['y']),
                        _0x389039['mo'] != 0x4 && _0x389039['mo'] != 0x5 && (_0x573e2d[_0x469bc6(0x1f8)]['x'] = _0x186840 - 0x64,
                        _0x573e2d[_0x469bc6(0x1f8)]['y'] = _0x28aa73 - 0x64),
                        _0x54d641['eo'] = !![]);
                    ;_0x5872cf['preventDefault']();
                } else
                    (_0x5872cf = _0x5872cf || window[_0x469bc6(0x83d)]) && (_0x54d641['eo'] = _0x5872cf['touches'][_0x469bc6(0x2a1)] >= 0x2),
                    _0x5872cf[_0x469bc6(0x4cc)]();
            }, !![]),
            _0x191a6f['addEventListener'](_0x5e050b(0x1ba), function(_0x3024b9) {
                var _0x306ce9 = _0x5e050b;
                if (_0x276741['on'] && _0x389039['mobile'] && _0x389039['mo'] != 0x6 && _0x389039['s']) {
                    var _0x42d713 = ooo['Xg']['Kf']['Wg']['Ah']
                      , _0x2e15ca = btoa(_0x389039[_0x306ce9(0x7ae)]);
                    (_0x3024b9 = _0x3024b9 || window['event']) && ((_0x3024b9 = _0x3024b9[_0x306ce9(0x331)][0x0])[_0x306ce9(0x63f)] !== undefined ? _0x305957(_0x3024b9['clientX'], _0x3024b9[_0x306ce9(0x5b7)]) : _0x305957(_0x3024b9[_0x306ce9(0x26a)], _0x3024b9[_0x306ce9(0x855)]));
                    var _0x19a1b1 = btoa(_0x389039[_0x306ce9(0x752)])
                      , _0x441dd7 = _0x3024b9[_0x306ce9(0x591)];
                    _0x441dd7 == _0x389039['mo1']['x'] && _0x389039[_0x306ce9(0x695)]['y'] == -0x1 && btoa(_0x19a1b1) == _0x389039[_0x306ce9(0x781)] && (_0x389039[_0x306ce9(0x695)]['x'] = -0x1,
                    _0x389039['mo'] == 0x1 && (_0x42d713['img_p_1'][_0x306ce9(0x494)] = 0.25),
                    _0x389039['mo'] == 0x2 && (_0x42d713[_0x306ce9(0x607)][_0x306ce9(0x494)] = 0.25,
                    _0x42d713['img_i_2'][_0x306ce9(0x494)] = 0.25,
                    _0x42d713[_0x306ce9(0x70a)][_0x306ce9(0x494)] = 0.25),
                    _0x389039['mo'] == 0x3 && btoa(_0x2e15ca) == _0x389039[_0x306ce9(0x2b9)] && (_0x42d713[_0x306ce9(0x429)]['alpha'] = 0.25,
                    _0x42d713[_0x306ce9(0x4c7)][_0x306ce9(0x494)] = 0.25,
                    _0x42d713[_0x306ce9(0x53b)]['alpha'] = 0.25),
                    _0x389039['mo'] == 0x4 && (_0x42d713[_0x306ce9(0x70a)][_0x306ce9(0x494)] = 0.25),
                    _0x389039['mo'] == 0x5 && (_0x42d713[_0x306ce9(0x70a)]['alpha'] = 0.25));
                    var _0x45f9a0 = btoa(_0x389039[_0x306ce9(0x571)]);
                    _0x389039['mo2']['x'] == -0x1 && _0x441dd7 == _0x389039[_0x306ce9(0x626)]['y'] && btoa(_0x45f9a0) == _0x389039[_0x306ce9(0x58a)] && (_0x389039[_0x306ce9(0x626)]['y'] = -0x1,
                    _0x42d713[_0x306ce9(0x1f8)][_0x306ce9(0x62d)] = ![],
                    _0x42d713[_0x306ce9(0x7f9)][_0x306ce9(0x62d)] = ![],
                    _0x389039['mo'] == 0x1 && (_0x42d713['img_p_1'][_0x306ce9(0x62d)] = !![]),
                    (_0x389039['mo'] == 0x2 || _0x389039['mo'] == 0x4 && btoa(_0x19a1b1) == _0x389039['d_2'] || _0x389039['mo'] == 0x5 && btoa(_0x45f9a0) == _0x389039[_0x306ce9(0x58a)]) && (_0x42d713[_0x306ce9(0x70a)][_0x306ce9(0x62d)] = !![]),
                    _0x389039['mo'] == 0x3 && (_0x42d713[_0x306ce9(0x53b)][_0x306ce9(0x62d)] = !![]),
                    (_0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5) && (_0x42d713[_0x306ce9(0x1f8)][_0x306ce9(0x62d)] = !![]),
                    _0x54d641['eo'] = ![]);
                } else
                    (_0x3024b9 = _0x3024b9 || window[_0x306ce9(0x83d)]) && (_0x54d641['eo'] = _0x3024b9[_0x306ce9(0x2c8)]['length'] >= 0x2),
                    _0x389039[_0x306ce9(0x23b)] && _0x389039['s'] && (_0x3024b9 = _0x3024b9 || window[_0x306ce9(0x83d)]) && ((_0x3024b9 = _0x3024b9[_0x306ce9(0x331)][0x0])[_0x306ce9(0x63f)] !== undefined ? _0x305957(_0x3024b9[_0x306ce9(0x63f)], _0x3024b9[_0x306ce9(0x5b7)]) : _0x305957(_0x3024b9[_0x306ce9(0x26a)], _0x3024b9[_0x306ce9(0x855)]));
            }, !![]),
            _0x191a6f[_0x5e050b(0x81b)]('mousemove', function(_0x19d892) {
                var _0x48d9ea = _0x5e050b;
                (_0x19d892 = _0x19d892 || _0xa8b9d9['c'][_0x48d9ea(0x83d)] && _typeof(_0x19d892['clientX']) != _0x48d9ea(0x799)) && (_0x54d641['fo'] = _0xbc3655['ta'](_0x19d892[_0x48d9ea(0x5b7)] - _0x191a6f[_0x48d9ea(0x56d)] * 0.5, _0x19d892['clientX'] - _0x191a6f[_0x48d9ea(0x780)] * 0.5));
            }, !![]),
            _0x191a6f['addEventListener'](_0x5e050b(0x437), function(_0x445040) {
                _0x54d641['eo'] = !![];
            }, !![]),
            _0x191a6f[_0x5e050b(0x81b)]('mouseup', function(_0x3a4499) {
                _0x54d641['eo'] = ![];
            }, !![]),
            this['Wg'] = new _0xa8b9d9['lh'](_0x16dd5b),
            this['go'] = _0x2f83a2['ho'],
            this['fo'] = 0x0,
            this['eo'] = ![],
            _0x276741['eie'] = _0x54d641;
        }))['prototype']['Sa'] = function() {}
        ,
        _0x2f3596[_0x434858(0x2a8)]['ml'] = function() {
            _0xa8b9d9['Nf']['rg'](![]),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tf'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Qn'], 0x1),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Rn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Sn'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Tn'], 0x1f4),
            this['go'] === _0x2f83a2['ho'] ? _0x148283['f']['h'](_0xa8b9d9['Uf']['Un'], 0x1) : _0x148283['f']['g'](_0xa8b9d9['Uf']['Un'], 0x1f4),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Vn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Wn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Xn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Yn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Zn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['$n'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['_n'], 0x32);
        }
        ,
        _0x2f3596[_0x434858(0x2a8)]['ho'] = function() {
            return this['go'] = _0x2f83a2['ho'],
            this;
        }
        ,
        _0x2f3596[_0x434858(0x2a8)]['io'] = function() {
            return _0x148283['f']['h'](_0x554fd0, 0x1),
            _0xbc3655['Y'](function() {
                _0x148283['f']['g'](_0x554fd0, 0x1f4);
            }, 0xbb8),
            _0x148283['f']['h'](_0x5be724, 0x1),
            _0xbc3655['Y'](function() {
                _0x148283['f']['g'](_0x5be724, 0x1f4);
            }, 0x1f4),
            this['go'] = _0x2f83a2['io'],
            this;
        }
        ,
        _0x2f3596['prototype']['nl'] = function() {
            this['eo'] = ![],
            this['Wg']['qg'](),
            this['go'] === _0x2f83a2['io'] && ooo['ij']['mf']();
        }
        ,
        _0x2f3596[_0x434858(0x2a8)]['qg'] = function() {
            this['Wg']['qg']();
        }
        ,
        _0x2f3596[_0x434858(0x2a8)]['ug'] = function(_0xb7e884, _0x2d16f2) {
            this['Wg']['ug'](_0xb7e884, _0x2d16f2);
        }
        ,
        _0x2f3596[_0x434858(0x2a8)]['jo'] = function(_0x2b053c, _0x33d4da, _0x24a6cf) {
            var _0x5df150 = _0x434858, _0x5ebc12, _0x53e660, _0x461725;
            _0x33d4da >= 0x1 && _0x33d4da <= 0xa ? (_0x5ebc12 = _0xbc3655['U']('index.game.result.place.i' + _0x33d4da),
            _0x53e660 = _0xbc3655['U'](_0x5df150(0x1d3)),
            _0x461725 = _0xbc3655['U']('index.game.social.shareResult.messGood')[_0x5df150(0x42b)](_0x5df150(0x2d1), _0x24a6cf)['replace']('{1}', _0x2b053c)[_0x5df150(0x42b)](_0x5df150(0x7d0), _0x5ebc12)) : (_0x5ebc12 = '',
            _0x53e660 = _0xbc3655['U']('index.game.result.tryHit'),
            _0x461725 = _0xbc3655['U'](_0x5df150(0x777))['replace'](_0x5df150(0x2d1), _0x24a6cf)['replace'](_0x5df150(0x769), _0x2b053c));
            _0x4d11e8[_0x5df150(0x584)](_0xbc3655['U'](_0x5df150(0x402))),
            _0x5a4d38[_0x5df150(0x584)](_0x2b053c),
            _0x478b8e[_0x5df150(0x584)](_0x5ebc12),
            _0x29cf41[_0x5df150(0x584)](_0x53e660);
            if (_0x4cd94d['co']['bo']) {
                var _0xfca0fc, _0x2509fb, _0x127dda, _0x153f8d, _0x2d0686, _0x574f90, _0x29015e, _0x31f74b = _0xbc3655['U'](_0x5df150(0x38f));
                _0xbc3655['U'](_0x5df150(0x423)),
                _0xd71c9b[_0x5df150(0x534)]()[_0x5df150(0x294)]((_0xfca0fc = _0x31f74b,
                _0x2509fb = 'https://wormate.io',
                _0x127dda = _0x5df150(0x530),
                _0x153f8d = _0x461725,
                _0x2d0686 = _0x461725,
                _0x574f90 = _0x5df150(0x5c8),
                (_0x29015e = $(_0x5df150(0x239) + _0xfca0fc + _0x5df150(0x722)))['click'](function() {
                    var _0x4bba8f = _0x5df150;
                    (typeof FB == _0x4bba8f(0x799) ? 'undefined' : _typeof(FB)) !== _0x4bba8f(0x799) && _typeof(FB['ui']) != _0x4bba8f(0x799) && FB['ui']({
                        'method': _0x4bba8f(0x1df),
                        'display': _0x4bba8f(0x23e),
                        'link': _0x2509fb,
                        'name': _0x127dda,
                        'caption': _0x153f8d,
                        'description': _0x2d0686,
                        'picture': _0x574f90
                    }, function() {});
                }),
                _0x29015e));
            }
        }
        ,
        _0x2f3596['prototype']['ko'] = function() {
            return this['fo'];
        }
        ,
        _0x2f3596[_0x434858(0x2a8)]['lo'] = function() {
            return this['eo'];
        }
        ,
        _0x2f83a2 = {
            'ho': 0x0,
            'io': 0x1
        },
        _0xa8b9d9['Bk'] = _0x2f3596,
        _0x3f6480 = $('#loading-progress-cont'),
        _0x48e6aa = $(_0x434858(0x7ac)),
        _0x4e4004 = $(_0x434858(0x4d8)),
        (_0x10e843 = _0xbc3655['ca'](_0xa8b9d9['Uf'], function() {
            _0xa8b9d9['Uf']['call'](this, _0xa8b9d9['ll']['ao']),
            this['mo'] = -0x1,
            this['no'] = '';
        }))[_0x434858(0x2a8)]['Sa'] = function() {}
        ,
        _0x10e843[_0x434858(0x2a8)]['ml'] = function() {
            _0xa8b9d9['Nf']['rg'](!![]),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Tf'], 0x1f4),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Qn'], 0x1),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Rn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Sn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Un'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Vn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Wn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Xn'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Yn'], 0x1f4),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Zn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['$n'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['_n'], 0x32);
        }
        ,
        _0x10e843[_0x434858(0x2a8)]['nl'] = function() {
            ooo['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Re']),
            ooo['Xg']['Ak']['wg'](),
            ooo['Xg']['Ak']['sg'](!![]);
        }
        ,
        _0x10e843[_0x434858(0x2a8)]['hl'] = function() {
            ooo['Xg']['Ak']['sg'](![]);
        }
        ,
        _0x10e843[_0x434858(0x2a8)]['oo'] = function() {
            this['po']('', 0x0),
            _0x148283['f']['g'](_0x3f6480, 0x64);
        }
        ,
        _0x10e843[_0x434858(0x2a8)]['qo'] = function() {
            _0x148283['f']['h'](_0x3f6480, 0x64);
        }
        ,
        _0x10e843['prototype']['po'] = function(_0x5069d0, _0x1c4e4a) {
            var _0x46d840 = _0x434858;
            this['no'] !== _0x5069d0 && (this['no'] = _0x5069d0);
            var _0x4e58ad = _0xbc3655['fa'](_0xbc3655['_'](_0x1c4e4a * 0x64), 0x0, 0x64);
            this['mo'] !== _0x4e58ad && (_0x48e6aa['css'](_0x46d840(0x40e), _0x4e58ad + '%'),
            _0x4e4004[_0x46d840(0x584)](_0x4e58ad + '\x20%'));
        }
        ,
        _0xa8b9d9['$k'] = _0x10e843,
        _0x413e64 = $(_0x434858(0x34e)),
        $('#mm-line-center'),
        $('#mm-line-bottom'),
        _0x3e1231 = $(_0x434858(0x639)),
        _0x577673 = $('#mm-menu-cont'),
        _0x11f066 = $('#mm-loading'),
        _0x34cf44 = $(_0x434858(0x4f0)),
        _0x3d4295 = $(_0x434858(0x49d)),
        $(_0x434858(0x833)),
        _0x4ae7af = $('#mm-skin-canv'),
        _0x52f670 = $(_0x434858(0x6c6)),
        _0x38515c = $(_0x434858(0x699)),
        _0x4b0358 = $(_0x434858(0x7d1)),
        _0xed7f4a = $(_0x434858(0x1eb)),
        _0x2adbf7 = $(_0x434858(0x802)),
        _0x33d87e = $(_0x434858(0x578)),
        _0x33e4dc = $(_0x434858(0x6c0)),
        _0x4cbc4a = $('#mm-action-guest'),
        _0x43e748 = $('#mm-action-login'),
        _0x47f904 = $('#mm-player-info'),
        _0x3ebc59 = $(_0x434858(0x4dc)),
        _0x34a563 = $('#mm-leaders'),
        _0x39b383 = $(_0x434858(0x740)),
        _0x20daf5 = $(_0x434858(0x813)),
        _0x141c0c = $('#mm-player-avatar'),
        _0x2457bf = $(_0x434858(0x4b3)),
        _0x3cf2a2 = $(_0x434858(0x480)),
        _0x2e37fc = $(_0x434858(0x4df)),
        _0x3366a0 = $(_0x434858(0x3de)),
        _0x56db16 = $(_0x434858(0x5dc)),
        (_0x321ab4 = _0xbc3655['ca'](_0xa8b9d9['Uf'], function() {
            var _0x17d894 = _0x434858;
            _0xa8b9d9['Uf'][_0x17d894(0x3ed)](this, _0xa8b9d9['ll']['kl']),
            this['mo'] = -0x1,
            this['no'] = '';
            var _0x5bed91 = [_0x17d894(0x4c4), _0x17d894(0x630), 'fuak', 'جحش', _0x17d894(0x570), 'عرضك', _0x17d894(0x6c8), _0x17d894(0x50f), _0x17d894(0x435), _0x17d894(0x47f), _0x17d894(0x68f), _0x17d894(0x308), 'قواد', 'ملعون'];
            function _0xdf71d7(_0x9ebf54) {
                var _0x4ffe41 = _0x17d894;
                if (!_0x9ebf54)
                    return '';
                return _0x9ebf54['toLowerCase']()['replace'](/[^a-zA-Z0-9\u0600-\u06FF*]/g, '')[_0x4ffe41(0x42b)](/[ـ]/g, '')[_0x4ffe41(0x42b)](/[ًٌٍَُِّْ]/g, '')[_0x4ffe41(0x42b)](/[أإآا]/g, 'ا')[_0x4ffe41(0x42b)](/[ىي]/g, 'ي')[_0x4ffe41(0x42b)](/[ة]/g, 'ه');
            }
            function _0x55da4c(_0x2cb90a, _0x45a43b) {
                var _0x1c0e98 = _0x17d894;
                if (!_0x2cb90a)
                    return ![];
                var _0x74711c = _0x2cb90a[_0x1c0e98(0x42b)](/\*$/, '')
                  , _0x210d80 = _0xdf71d7(_0x74711c)
                  , _0x17b426 = Array[_0x1c0e98(0x750)](_0x45a43b) ? _0x45a43b : Object[_0x1c0e98(0x7f4)](_0x45a43b);
                return _0x17b426[_0x1c0e98(0x7fc)](function(_0x4ff379) {
                    var _0x1304df = _0x1c0e98
                      , _0xf28983 = _0xdf71d7(_0x4ff379);
                    return _0x210d80[_0x1304df(0x5b5)](_0xf28983);
                });
            }
            window['handleNicknameChange'] = function(_0x49c01b) {
                var _0x6a6ea7 = _0x17d894;
                if (!_0x49c01b || _0x49c01b[_0x6a6ea7(0x681)]() === '')
                    return '';
                if (_0x55da4c(_0x49c01b, _0x5bed91))
                    return _0x6a6ea7(0x862);
                return _0x49c01b;
            }
            ,
            fetch(_0x17d894(0x82e))[_0x17d894(0x864)](_0x42f1f7 => _0x42f1f7['json']())[_0x17d894(0x864)](_0x18f13a => {
                var _0x28ff29 = _0x17d894;
                _0x5bed91 = Array[_0x28ff29(0x750)](_0x18f13a) ? _0x18f13a : Object[_0x28ff29(0x7f4)](_0x18f13a);
            }
            )[_0x17d894(0x553)](_0x5ae251 => {
                var _0x216058 = _0x17d894;
                console[_0x216058(0x5ad)](_0x216058(0x3cb), _0x5ae251);
            }
            ),
            this['ro'] = new _0xa8b9d9['Lm'](_0x4ae7af),
            _0x33d87e[_0x17d894(0x68c)](function() {
                ooo['ij']['if']();
            }),
            _0x4ae7af[_0x17d894(0x68c)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Qk']));
            }),
            _0x52f670[_0x17d894(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['so']['kk']();
            }),
            _0x38515c[_0x17d894(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['so']['jk']();
            }),
            _0x2adbf7['keypress'](function(_0x4af47b) {
                var _0x2dc391 = _0x17d894;
                _0x389039['r1'] = ![],
                _0x4af47b[_0x2dc391(0x4ec)] === 0xd && ooo['to']();
            }),
            _0x33e4dc[_0x17d894(0x68c)](function() {
                var _0x564177 = _0x17d894
                  , _0x15f4d6 = _0x2adbf7[_0x564177(0x467)]();
                _0x15f4d6 && _0x15f4d6[_0x564177(0x681)]() !== '' && _0x2adbf7[_0x564177(0x467)](window[_0x564177(0x3af)](_0x15f4d6)),
                ooo['ij']['if'](),
                ooo['to']();
            }),
            _0x4cbc4a[_0x17d894(0x68c)](function() {
                var _0x436d4e = _0x17d894
                  , _0x386e94 = _0x2adbf7[_0x436d4e(0x467)]();
                _0x386e94 && _0x386e94[_0x436d4e(0x681)]() !== '' && _0x2adbf7[_0x436d4e(0x467)](window[_0x436d4e(0x3af)](_0x386e94)),
                ooo['ij']['if'](),
                ooo['to']();
            }),
            _0x43e748[_0x17d894(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Nk']);
            }),
            _0x39b383['click'](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Hi']);
            }),
            _0x47f904[_0x17d894(0x68c)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Lk']));
            }),
            _0x34a563['click'](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Jk']));
            }),
            _0x3ebc59['click'](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Sk']));
            }),
            _0x20daf5[_0x17d894(0x68c)](function() {
                ooo['ok']['nk']() && (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Hk']));
            }),
            this['uo'](),
            this['vo']();
            var _0x3f9125 = _0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Ig']);
            _0x3f9125 !== 'ARENA' && _0x3f9125 !== _0x17d894(0x2eb) && (_0x3f9125 = 'ARENA'),
            _0x33d87e[_0x17d894(0x467)](_0x3f9125);
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x87f230 = this;
            function _0x41b9fc(_0xb4c800, _0x3d86b0) {
                var _0xf438f6 = _0x31dd;
                _0xb4c800['pm'] && (_0x3d86b0[_0xf438f6(0x826)] = _0xb4c800['pm']['Tj'],
                _0x3d86b0[_0xf438f6(0x6ab)] = _0xb4c800['pm']['Uj'],
                _0x3d86b0[_0xf438f6(0x215)] = _0xb4c800['pm']['Vj'],
                _0x3d86b0[_0xf438f6(0x25e)] = _0xb4c800['pm']['Wj'],
                _0x3d86b0[_0xf438f6(0x54a)] = _0xb4c800['pm']['Xj']);
            }
            ooo['ok']['fm'](function() {
                ooo['ok']['nk']() ? (_0x41b9fc(_0x389039, ooo['ok']['xl']),
                ooo['so']['lk'](ooo['ok']['Ul'](), _0xa8b9d9['_j']['$j']),
                ooo['so']['lk'](ooo['ok']['Vl'](), _0xa8b9d9['_j']['ak']),
                ooo['so']['lk'](ooo['ok']['Wl'](), _0xa8b9d9['_j']['bk']),
                ooo['so']['lk'](ooo['ok']['Xl'](), _0xa8b9d9['_j']['dk']),
                ooo['so']['lk'](ooo['ok']['Yl'](), _0xa8b9d9['_j']['ck'])) : (ooo['so']['lk'](ooo['wo'](), _0xa8b9d9['_j']['$j']),
                ooo['so']['lk'](0x0, _0xa8b9d9['_j']['ak']),
                ooo['so']['lk'](0x0, _0xa8b9d9['_j']['bk']),
                ooo['so']['lk'](0x0, _0xa8b9d9['_j']['dk']),
                ooo['so']['lk'](0x0, _0xa8b9d9['_j']['ck']));
            }),
            ooo['ok']['fm'](function() {
                var _0x3ef427 = _0x31dd;
                _0x33e4dc[_0x3ef427(0x589)](ooo['ok']['nk']()),
                _0x43e748['toggle'](!ooo['ok']['nk']()),
                _0x4cbc4a['toggle'](!ooo['ok']['nk']()),
                _0x34a563['toggle'](ooo['ok']['nk']()),
                _0x3ebc59[_0x3ef427(0x589)](ooo['ok']['nk']()),
                _0x20daf5['toggle'](ooo['ok']['nk']()),
                _0x47f904[_0x3ef427(0x589)](!![]),
                _0x39b383[_0x3ef427(0x589)](!![]),
                ooo['ok']['nk']() ? (_0x4b0358[_0x3ef427(0x79e)](),
                _0x2457bf[_0x3ef427(0x584)](ooo['ok']['Ll']()),
                _0x141c0c['attr'](_0x3ef427(0x52f), ooo['ok']['Nl']()),
                _0x3cf2a2['html'](ooo['ok']['Ql']()),
                _0x2e37fc[_0x3ef427(0x40e)](ooo['ok']['Sl']() * 0x64 / ooo['ok']['Tl']() + '%'),
                _0x3366a0[_0x3ef427(0x584)](ooo['ok']['Sl']() + _0x3ef427(0x344) + ooo['ok']['Tl']()),
                _0x56db16[_0x3ef427(0x584)](ooo['ok']['Rl']()),
                _0x2adbf7['val'](ooo['ok']['Ml']())) : (_0x4b0358[_0x3ef427(0x589)](_0x4cd94d['co']['bo'] && !ooo['xo']()),
                _0x2457bf['html'](_0x2457bf[_0x3ef427(0x250)]('guest')),
                _0x141c0c[_0x3ef427(0x88c)]('src', _0x4cd94d['H']['M']),
                _0x3cf2a2[_0x3ef427(0x584)]('10'),
                _0x2e37fc[_0x3ef427(0x40e)]('0'),
                _0x3366a0[_0x3ef427(0x584)](''),
                _0x56db16['html'](0x1),
                _0x2adbf7[_0x3ef427(0x467)](_0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Jg'])));
            }),
            ooo['so']['fk'](function() {
                _0x87f230['ro']['Gm'](ooo['so']['ek']());
            });
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['ml'] = function() {
            _0xa8b9d9['Nf']['rg'](!![]),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Tf'], 0x1f4),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Qn'], 0x1),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Rn'], 0x1f4),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Sn'], 0x1f4),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Un'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Vn'], 0x1f4),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Wn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Xn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Yn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Zn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['$n'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['_n'], 0x32);
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['yo'] = function() {
            _0x148283['f']['g'](_0x413e64, 0x1f4),
            _0x148283['f']['g'](_0x3e1231, 0x1f4),
            _0x148283['f']['g'](_0x577673, 0x1f4),
            _0x148283['f']['h'](_0x11f066, 0x64);
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['zo'] = function() {
            _0x148283['f']['h'](_0x413e64, 0x64),
            _0x148283['f']['h'](_0x3e1231, 0x64),
            _0x148283['f']['h'](_0x577673, 0x64),
            _0x148283['f']['g'](_0x11f066, 0x1f4);
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['po'] = function(_0x373167, _0x49c9c5) {
            var _0x44c919 = _0x434858;
            this['no'] !== _0x373167 && (this['no'] = _0x373167);
            var _0x5bd22d = _0xbc3655['fa'](_0xbc3655['_'](_0x49c9c5 * 0x64), 0x0, 0x64);
            this['mo'] !== _0x5bd22d && (_0x34cf44['css'](_0x44c919(0x40e), _0x5bd22d + '%'),
            _0x3d4295[_0x44c919(0x584)](_0x5bd22d + '\x20%'));
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['nl'] = function() {
            ooo['ij']['jf'](),
            this['ro']['rg'](!![]);
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['hl'] = function() {
            this['ro']['rg'](![]);
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['qg'] = function() {
            this['ro']['qg']();
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['ug'] = function(_0xeaca69, _0x27ac76) {
            this['ro']['ug']();
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['Ml'] = function() {
            var _0x4b2cd5 = _0x434858;
            return _0x2adbf7[_0x4b2cd5(0x467)]();
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['Ao'] = function() {
            var _0x50ab0c = _0x434858;
            return _0x33d87e[_0x50ab0c(0x467)]();
        }
        ,
        _0x321ab4[_0x434858(0x2a8)]['uo'] = function() {
            var _0x4b6e65 = _0x434858
              , _0x8427d4 = $('#mm-advice-cont')[_0x4b6e65(0x665)]()
              , _0x122748 = 0x0;
            _0xbc3655['X'](function() {
                _0x8427d4['eq'](_0x122748)['fadeOut'](0x1f4, function() {
                    var _0x5bc829 = _0x31dd;
                    ++_0x122748 >= _0x8427d4[_0x5bc829(0x2a1)] && (_0x122748 = 0x0),
                    _0x8427d4['eq'](_0x122748)[_0x5bc829(0x497)](0x1f4)[_0x5bc829(0x6ee)](_0x5bc829(0x5ee), 'inline-block');
                });
            }, 0xbb8);
        }
        ,
        _0x321ab4['prototype']['vo'] = function() {
            var _0xc8c4d6 = _0x434858;
            if (_0x4cd94d['co']['bo'] && !ooo['xo']()) {
                _0x4b0358[_0xc8c4d6(0x224)]();
                var _0x540a70 = _0xbc3655['U'](_0xc8c4d6(0x744))
                  , _0x5b5682 = encodeURIComponent(_0xbc3655['U'](_0xc8c4d6(0x232)));
                _0xed7f4a[_0xc8c4d6(0x294)]($('<a\x20class=\x22mm-skin-over-button\x22\x20id=\x22mm-skin-over-fb\x22\x20target=\x22_blank\x22\x20href=\x22https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' + _0x5b5682 + '\x22><img\x20src=\x22data:\x20image/svg+xml;\x20base64,\x20PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\x22/><span>' + _0x540a70 + _0xc8c4d6(0x536))[_0xc8c4d6(0x68c)](function _0x31c96d() {
                    ooo['Bo'](!![]),
                    _0xbc3655['Y'](function() {
                        var _0x568e44 = _0x31dd;
                        _0x4b0358[_0x568e44(0x79e)]();
                    }, 0xbb8);
                }));
            }
        }
        ,
        _0xa8b9d9['Ck'] = _0x321ab4,
        (_0x271929 = _0xbc3655['ca'](_0xa8b9d9['Uf'], function() {
            var _0xc85c53 = _0x434858;
            _0xa8b9d9['Uf'][_0xc85c53(0x3ed)](this, _0xa8b9d9['ll']['ao']);
        }))[_0x434858(0x2a8)]['Sa'] = function() {}
        ,
        _0x271929[_0x434858(0x2a8)]['ml'] = function() {
            _0xa8b9d9['Nf']['rg'](!![]),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tf'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Qn'], 0x1),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Rn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Sn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Un'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Vn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Wn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Xn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Yn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Zn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['$n'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['_n'], 0x32);
        }
        ,
        _0xa8b9d9['el'] = _0x271929,
        (_0x103c0c = _0xbc3655['ca'](_0xa8b9d9['Uf'], function() {
            var _0x13399f = _0x434858;
            _0xa8b9d9['Uf'][_0x13399f(0x3ed)](this, _0xa8b9d9['ll']['ao']);
        }))[_0x434858(0x2a8)]['Sa'] = function() {}
        ,
        _0x103c0c[_0x434858(0x2a8)]['ml'] = function() {
            _0xa8b9d9['Nf']['rg'](!![]),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Tf'], 0x1f4),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Qn'], 0x1),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Rn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Sn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Un'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Vn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Wn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Xn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Yn'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Zn'], 0x1f4),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['$n'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['_n'], 0x32);
        }
        ,
        _0x103c0c['prototype']['nl'] = function() {}
        ,
        _0xa8b9d9['Xk'] = _0x103c0c,
        _0x1ca842 = $(_0x434858(0x809)),
        (_0x33df90 = _0xbc3655['ca'](_0xa8b9d9['Uf'], function() {
            var _0xcef05f = _0x434858;
            _0xa8b9d9['Uf'][_0xcef05f(0x3ed)](this, _0xa8b9d9['ll']['ao']),
            this['Co'] = [],
            this['Do'] = null;
        }))[_0x434858(0x2a8)]['Sa'] = function() {}
        ,
        _0x33df90['prototype']['ml'] = function() {
            _0xa8b9d9['Nf']['rg'](!![]),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Tf'], 0x1f4),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Qn'], 0x1),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Rn'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Sn'], 0x1f4),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Un'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Vn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Wn'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Xn'], 0x1f4),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Yn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Zn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['$n'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['_n'], 0x32);
        }
        ,
        _0x33df90['prototype']['nl'] = function() {
            this['Eo']();
        }
        ,
        _0x33df90['prototype']['ql'] = function() {
            var _0x18074b = _0x434858;
            return this['Do'] != null || this['Co'][_0x18074b(0x2a1)] > 0x0;
        }
        ,
        _0x33df90['prototype']['Fo'] = function(_0x69ff9c) {
            var _0x55e007 = _0x434858;
            this['Co'][_0x55e007(0x555)](_0x69ff9c),
            _0xbc3655['Y'](function() {
                ooo['Xg']['ol']();
            }, 0x0);
        }
        ,
        _0x33df90['prototype']['km'] = function(_0x20f443) {
            var _0x1e5e41 = _0x434858;
            this['Co'][_0x1e5e41(0x23c)](_0x20f443),
            _0xbc3655['Y'](function() {
                ooo['Xg']['ol']();
            }, 0x0);
        }
        ,
        _0x33df90[_0x434858(0x2a8)]['Eo'] = function() {
            var _0x2c0c08 = _0x434858
              , _0x361ed9 = this;
            if (this['Do'] == null) {
                if (this['Co'][_0x2c0c08(0x2a1)] === 0x0) {
                    ooo['Xg']['jl']();
                    return;
                }
                ;var _0x51be5d = this['Co'][_0x2c0c08(0x4cb)]();
                this['Do'] = _0x51be5d;
                var _0xd7d789 = _0x51be5d['ag']();
                _0x148283['f']['g'](_0xd7d789, 0x12c),
                _0x1ca842[_0x2c0c08(0x294)](_0xd7d789),
                _0x51be5d['Go'] = function() {
                    var _0x11bece = _0x2c0c08;
                    _0xd7d789[_0x11bece(0x7df)](0x12c),
                    _0xbc3655['Y'](function() {
                        _0xd7d789['remove']();
                    }, 0x12c),
                    _0x361ed9['Do'] === _0x51be5d && (_0x361ed9['Do'] = null),
                    _0x361ed9['Eo']();
                }
                ,
                _0x51be5d['nl']();
            }
        }
        ,
        _0xa8b9d9['Zk'] = _0x33df90,
        _0xa8b9d9['ll'] = {
            'ao': 0x0,
            'kl': 0x1
        },
        _0xd1c881 = $(_0x434858(0x72c)),
        _0x3ad2f4 = $(_0x434858(0x715)),
        _0x55b8e9 = $(_0x434858(0x5d0)),
        $('#popup-menu-back')[_0x434858(0x68c)](function() {
            ooo['ij']['if'](),
            ooo['Xg']['jl']();
        }),
        _0x3ad2f4['click'](function() {
            ooo['ok']['nk']() && (ooo['ij']['if'](),
            ooo['Xg']['gl'](ooo['Xg']['Hk']));
        }),
        (_0x34394d = _0xbc3655['ca'](_0xa8b9d9['Uf'], function(_0x42489d, _0x2ecd74) {
            var _0x49408a = _0x434858;
            _0xa8b9d9['Uf'][_0x49408a(0x3ed)](this, _0xa8b9d9['ll']['kl']),
            this['Xa'] = _0x42489d,
            this['Io'] = _0x2ecd74,
            this['Jo'] = [];
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x538d4e = _0x434858;
            _0x34394d[_0x538d4e(0x75b)]['prototype']['Sa']['call'](this),
            !_0x34394d['Ko'] && (_0x34394d['Ko'] = !![],
            ooo['ok']['fm'](function() {
                var _0x4cd457 = _0x538d4e;
                ooo['ok']['nk']() ? _0x55b8e9[_0x4cd457(0x584)](ooo['ok']['Ql']()) : _0x55b8e9[_0x4cd457(0x584)]('0');
            })),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Lo'], 0x64);
        }
        ,
        _0x34394d['Mo'] = $(_0x434858(0x309)),
        _0x34394d['No'] = $(_0x434858(0x465)),
        _0x34394d['Oo'] = $(_0x434858(0x3e2)),
        _0x34394d['Po'] = $('#login-view'),
        _0x34394d['Qo'] = $(_0x434858(0x56b)),
        _0x34394d['Ro'] = $(_0x434858(0x418)),
        _0x34394d['So'] = $(_0x434858(0x66c)),
        _0x34394d['To'] = $(_0x434858(0x559)),
        _0x34394d['Uo'] = $(_0x434858(0x5ba)),
        _0x34394d['Vo'] = $(_0x434858(0x4d7)),
        _0x34394d['Lo'] = $(_0x434858(0x6da)),
        _0x34394d[_0x434858(0x2a8)]['ml'] = function() {
            var _0x3f7f2f = _0x434858;
            _0xa8b9d9['Nf']['rg'](!![]),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Tf'], 0x1),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Qn'], 0x1f4),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Rn'], 0xc8),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Sn'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tn'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Un'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Vn'], 0xc8),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Wn'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Xn'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Yn'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Zn'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['$n'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['_n'], 0xc8),
            _0xd1c881[_0x3f7f2f(0x584)](this['Xa']),
            _0x3ad2f4[_0x3f7f2f(0x589)](this['Io']),
            this['Wo']();
        }
        ,
        _0x34394d[_0x434858(0x2a8)]['Wo'] = function() {}
        ,
        _0x34394d[_0x434858(0x2a8)]['Xo'] = function(_0x1c599e) {
            var _0x1b9afe = _0x434858
              , _0x2152ed = this
              , _0x945588 = _0xbc3655['va'](0x0, 0x7fffffff) & 0x7fffffff;
            return this['Jo'][_0x1b9afe(0x23c)](_0x945588),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['Lo'], 0x64),
            _0xbc3655['Y'](function() {
                _0x2152ed['Yo'](_0x945588);
            }, _0x1c599e),
            new _0x7f20ec(this,_0x945588);
        }
        ,
        _0x34394d[_0x434858(0x2a8)]['Yo'] = function(_0x13d617) {
            var _0x46dabb = _0x434858
              , _0x48b5f3 = this['Jo']['indexOf'](_0x13d617);
            !(_0x48b5f3 < 0x0) && (this['Jo'][_0x46dabb(0x61f)](_0x48b5f3, 0x1),
            this['Jo'][_0x46dabb(0x2a1)] === 0x0 && _0x148283['f']['h'](_0xa8b9d9['Ho']['Lo'], 0x64));
        }
        ,
        _0xa8b9d9['Ho'] = _0x34394d;
        var _0x2f883d, _0x3d714e, _0x553d86, _0x35b18e, _0x1c9487, _0x11a067, _0x1d12e6, _0x5b26ac, _0x1fd3fe, _0x554fd0, _0x5be724, _0xd71c9b, _0x4d11e8, _0x5a4d38, _0x478b8e, _0x29cf41, _0x16dd5b, _0x2f3596, _0x2f83a2, _0x3f6480, _0x48e6aa, _0x4e4004, _0x10e843, _0x413e64, _0x3e1231, _0x577673, _0x11f066, _0x34cf44, _0x3d4295, _0x4ae7af, _0x52f670, _0x38515c, _0x4b0358, _0xed7f4a, _0x2adbf7, _0x33d87e, _0x33e4dc, _0x4cbc4a, _0x43e748, _0x47f904, _0x3ebc59, _0x34a563, _0x39b383, _0x20daf5, _0x141c0c, _0x2457bf, _0x3cf2a2, _0x2e37fc, _0x3366a0, _0x56db16, _0x321ab4, _0x271929, _0x103c0c, _0x1ca842, _0x33df90, _0xd1c881, _0x3ad2f4, _0x55b8e9, _0x34394d, _0x262ab9, _0x1a3221, _0x2581c6, _0x1d9a48, _0x8ea5ad, _0x14c3e1, _0x3803a9, _0x2ff34c, _0x5cafa2, _0x5169d9, _0x12917e, _0x226867, _0x3360a9, _0x3686a5, _0x5ee08b, _0x29d988, _0x533a66, _0x1b6ec1, _0x1ec0dd, _0x303bde, _0x301db9, _0x1d4803, _0x14b2ba, _0x268ae8, _0x4df6e7, _0x3f5ae8, _0x1a5390, _0x2b2481, _0x4d0434, _0x6b1c4d, _0x71bb2e, _0x20134b, _0x2c42af, _0x494cc8, _0x1624a2, _0x17f979, _0x5638db, _0x1c9a3f, _0x43ae59, _0x3a2be7, _0x3213aa, _0x54fd4b, _0x1344d3, _0x35e9b8, _0x2811f4, _0x3810c9, _0x35cbd6, _0x3b0ea2, _0x635102, _0x514168, _0x123c66, _0x21a6dd, _0x3cfc6d, _0x530f81, _0x48660f, _0x4b95c5, _0x2546b0, _0x53ace8, _0x1fb137, _0x15fe01, _0x21d959, _0x50b116, _0x2448aa, _0x3b0882, _0x448f82, _0x2a2628, _0x317590, _0x4aa5cd, _0x531cb9, _0x2826e9, _0x266fdd, _0x11cc3a, _0x272bc7, _0x261efe, _0x8882f2, _0x20dbde, _0x4547cc, _0x11855b, _0x10a3dd, _0x5c0cfb, _0x4d2d1d, _0x325288, _0x35dd7a, _0x21d218, _0x43e223, _0x4a6850, _0x2f98f5, _0x15088b, _0x11c560, _0x3a3c3f, _0x4d50e8, _0x312317, _0x7f20ec = (function() {
            function _0x54f362(_0x3ce3b7, _0x1c79c9) {
                this['Zo'] = _0x3ce3b7,
                this['$o'] = _0x1c79c9;
            }
            return _0x54f362['prototype']['_o'] = function() {
                this['Zo']['Yo'](this['$o']);
            }
            ,
            _0x54f362;
        }());
        _0x262ab9 = $('#store-buy-coins_125000'),
        _0x1a3221 = $(_0x434858(0x637)),
        _0x2581c6 = $(_0x434858(0x47b)),
        _0x1d9a48 = $(_0x434858(0x261)),
        _0x8ea5ad = $(_0x434858(0x5f5)),
        _0x14c3e1 = $(_0x434858(0x273)),
        (_0x3803a9 = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x5de82f = _0x434858;
            _0xa8b9d9['Ho']['call'](this, _0xbc3655['U']('index.game.popup.menu.coins.tab'), ![]);
            var _0x445891 = this;
            _0x262ab9['click'](function() {
                ooo['ij']['if'](),
                _0x445891['ap']('coins_125000');
            }),
            _0x1a3221['click'](function() {
                var _0x3e9473 = _0x31dd;
                ooo['ij']['if'](),
                _0x445891['ap'](_0x3e9473(0x42f));
            }),
            _0x2581c6[_0x5de82f(0x68c)](function() {
                var _0x20da1a = _0x5de82f;
                ooo['ij']['if'](),
                _0x445891['ap'](_0x20da1a(0x385));
            }),
            _0x1d9a48[_0x5de82f(0x68c)](function() {
                var _0x30a804 = _0x5de82f;
                ooo['ij']['if'](),
                _0x445891['ap'](_0x30a804(0x400));
            }),
            _0x8ea5ad[_0x5de82f(0x68c)](function() {
                var _0x41ee7f = _0x5de82f;
                ooo['ij']['if'](),
                _0x445891['ap'](_0x41ee7f(0x276));
            }),
            _0x14c3e1['click'](function() {
                ooo['ij']['if'](),
                _0x445891['ap']('coins_1250');
            });
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x5b1ae0 = _0x434858;
            _0x3803a9['parent'][_0x5b1ae0(0x2a8)]['Sa'][_0x5b1ae0(0x3ed)](this);
        }
        ,
        _0x3803a9[_0x434858(0x2a8)]['Wo'] = function() {
            _0x148283['f']['g'](_0xa8b9d9['Ho']['Mo'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['No'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Oo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Po'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Qo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Ro'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['So'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['To'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Uo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Vo'], 0x32);
        }
        ,
        _0x3803a9['prototype']['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0x3803a9[_0x434858(0x2a8)]['ap'] = function(_0x15e373) {}
        ,
        _0xa8b9d9['Ik'] = _0x3803a9,
        _0x2ff34c = $(_0x434858(0x5b8)),
        _0x5cafa2 = $(_0x434858(0x1ad)),
        _0x5169d9 = $(_0x434858(0x1c8)),
        _0x12917e = $(_0x434858(0x3b0)),
        _0x226867 = 'byLevel',
        _0x3360a9 = 'byHighScore',
        _0x3686a5 = _0x434858(0x464),
        (_0x5ee08b = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x2870a0 = _0x434858;
            _0xa8b9d9['Ho'][_0x2870a0(0x3ed)](this, _0xbc3655['U'](_0x2870a0(0x65a)), !![]);
            var _0x55aeb0 = this;
            this['bp'] = {},
            this['cp'] = {
                'dp': {
                    'ep': _0x5cafa2,
                    'fp': _0x226867
                },
                'gp': {
                    'ep': _0x5169d9,
                    'fp': _0x3360a9
                },
                'hp': {
                    'ep': _0x12917e,
                    'fp': _0x3686a5
                }
            },
            _0x5cafa2['click'](function() {
                ooo['ij']['if'](),
                _0x55aeb0['ip'](_0x55aeb0['cp']['dp']);
            }),
            _0x5169d9['click'](function() {
                ooo['ij']['if'](),
                _0x55aeb0['ip'](_0x55aeb0['cp']['gp']);
            }),
            _0x12917e['click'](function() {
                ooo['ij']['if'](),
                _0x55aeb0['ip'](_0x55aeb0['cp']['hp']);
            });
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x2d2877 = _0x434858;
            _0x5ee08b[_0x2d2877(0x75b)]['prototype']['Sa'][_0x2d2877(0x3ed)](this);
        }
        ,
        _0x5ee08b[_0x434858(0x2a8)]['Wo'] = function() {
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Mo'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['No'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Oo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Po'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Qo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Ro'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['So'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['To'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Uo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Vo'], 0x32);
        }
        ,
        _0x5ee08b[_0x434858(0x2a8)]['nl'] = function() {
            var _0x3f6e56 = _0x434858
              , _0x39a294 = this;
            ooo['ij']['jf']();
            var _0x5b978d = this['Xo'](0x1388)
              , _0x592d46 = _0x4cd94d['H']['J'] + _0x3f6e56(0x63e);
            _0xbc3655['Aa'](_0x592d46, function() {
                var _0x1fc526 = {
                    [_0x226867]: [],
                    [_0x3360a9]: [],
                    [_0x3686a5]: []
                };
                _0x39a294['bp'] = _0x1fc526,
                _0x39a294['ip'](_0x39a294['jp'] ?? _0x39a294['cp']['dp']),
                _0x5b978d['_o']();
            }, function(_0xcf7d57) {
                _0x39a294['bp'] = _0xcf7d57,
                _0x39a294['ip'](_0x39a294['jp'] ?? _0x39a294['cp']['dp']),
                _0x5b978d['_o']();
            });
        }
        ,
        _0x5ee08b[_0x434858(0x2a8)]['ip'] = function(_0x516372) {
            var _0x18c17f = _0x434858;
            this['jp'] = _0x516372;
            for (var _0x419175 in this['cp']) {
                this['cp'][_0x18c17f(0x88d)](_0x419175) && this['cp'][_0x419175]['ep'][_0x18c17f(0x617)](_0x18c17f(0x719));
            }
            ;this['jp']['ep'][_0x18c17f(0x346)](_0x18c17f(0x719));
            for (var _0x3fc939 = this['bp'][this['jp']['fp']], _0x7dae93 = '', _0x3b57e5 = 0x0; _0x3b57e5 < _0x3fc939[_0x18c17f(0x2a1)]; _0x3b57e5++) {
                var _0xfcc3f8 = _0x3fc939[_0x3b57e5];
                _0x7dae93 += _0x18c17f(0x1b4) + (_0x3b57e5 + 0x1) + _0x18c17f(0x3f5) + _0xfcc3f8[_0x18c17f(0x499)] + _0x18c17f(0x52c) + _0xfcc3f8['username'] + _0x18c17f(0x1c4) + _0xfcc3f8[_0x18c17f(0x6d5)] + '</span><span>' + _0xfcc3f8[_0x18c17f(0x3e8)] + _0x18c17f(0x1c4) + _0xfcc3f8[_0x18c17f(0x5c1)] + _0x18c17f(0x344) + _0xfcc3f8[_0x18c17f(0x5b6)] + '</span></div>';
            }
            ;_0x2ff34c[_0x18c17f(0x534)](),
            _0x2ff34c[_0x18c17f(0x294)](_0x7dae93);
        }
        ,
        _0xa8b9d9['Kk'] = _0x5ee08b,
        _0x29d988 = $('#popup-login-gg'),
        _0x533a66 = $(_0x434858(0x369)),
        (_0x1b6ec1 = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x15a8e6 = _0x434858
              , _0x4baf7f = this;
            _0xa8b9d9['Ho']['call'](this, _0xbc3655['U']('index.game.popup.menu.login.tab'), ![]),
            _0x29d988['click'](function() {
                ooo['ij']['if']();
                var _0x2aaa2c = _0x4baf7f['Xo'](0x2710);
                _0xbc3655['Y'](function() {
                    ooo['ok']['sm'](function() {
                        ooo['ok']['nk']() && ooo['ij']['mf'](),
                        _0x2aaa2c['_o']();
                    });
                }, 0x1f4);
            }),
            _0x533a66[_0x15a8e6(0x68c)](function() {
                ooo['ij']['if']();
                var _0x574bd0 = _0x4baf7f['Xo'](0x2710);
                _0xbc3655['Y'](function() {
                    ooo['ok']['pm'](function() {
                        ooo['ok']['nk']() && ooo['ij']['mf'](),
                        _0x574bd0['_o']();
                    });
                }, 0x1f4);
            });
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x5af4b0 = _0x434858;
            _0x1b6ec1['parent'][_0x5af4b0(0x2a8)]['Sa'][_0x5af4b0(0x3ed)](this);
        }
        ,
        _0x1b6ec1[_0x434858(0x2a8)]['Wo'] = function() {
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Mo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['No'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Oo'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['Po'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Qo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Ro'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['So'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['To'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Uo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Vo'], 0x32);
        }
        ,
        _0x1b6ec1[_0x434858(0x2a8)]['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0xa8b9d9['Ok'] = _0x1b6ec1,
        _0x1ec0dd = $(_0x434858(0x4ad)),
        _0x303bde = $(_0x434858(0x810)),
        _0x301db9 = $(_0x434858(0x445)),
        _0x1d4803 = $(_0x434858(0x39d)),
        _0x14b2ba = $(_0x434858(0x5c0)),
        _0x268ae8 = $(_0x434858(0x1dc)),
        _0x4df6e7 = $(_0x434858(0x735)),
        _0x3f5ae8 = $(_0x434858(0x772)),
        _0x1a5390 = $(_0x434858(0x800)),
        _0x2b2481 = $('#profile-stat-gamesPlayed'),
        _0x4d0434 = $(_0x434858(0x458)),
        _0x6b1c4d = $(_0x434858(0x1f6)),
        (_0x71bb2e = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x3b636c = _0x434858;
            _0xa8b9d9['Ho'][_0x3b636c(0x3ed)](this, _0xbc3655['U']('index.game.popup.menu.profile.tab'), !![]);
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x37b081 = _0x434858;
            _0x71bb2e[_0x37b081(0x75b)]['prototype']['Sa'][_0x37b081(0x3ed)](this);
        }
        ,
        _0x71bb2e[_0x434858(0x2a8)]['Wo'] = function() {
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Mo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['No'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['Oo'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Po'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Qo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Ro'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['So'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['To'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Uo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Vo'], 0x32);
        }
        ,
        _0x71bb2e['prototype']['nl'] = function() {
            var _0x56acbb = _0x434858;
            ooo['ij']['jf']();
            var _0x3b78ac = ooo['ok']['dm']()
              , _0x3f0043 = moment([_0x3b78ac[_0x56acbb(0x59c)], _0x3b78ac[_0x56acbb(0x524)] - 0x1, _0x3b78ac[_0x56acbb(0x78b)]])['format']('LL');
            _0x303bde[_0x56acbb(0x584)](ooo['ok']['Ll']()),
            _0x1ec0dd['attr'](_0x56acbb(0x52f), ooo['ok']['Nl']()),
            _0x301db9[_0x56acbb(0x40e)](ooo['ok']['Sl']() * 0x64 / ooo['ok']['Tl']() + '%'),
            _0x1d4803[_0x56acbb(0x584)](ooo['ok']['Sl']() + '\x20/\x20' + ooo['ok']['Tl']()),
            _0x14b2ba[_0x56acbb(0x584)](ooo['ok']['Rl']()),
            _0x268ae8[_0x56acbb(0x584)](ooo['ok']['Zl']()),
            _0x4df6e7[_0x56acbb(0x584)](_0xbc3655['$'](ooo['ok']['$l']())),
            _0x3f5ae8[_0x56acbb(0x584)](ooo['ok']['_l']()),
            _0x1a5390[_0x56acbb(0x584)](ooo['ok']['am']()),
            _0x2b2481[_0x56acbb(0x584)](ooo['ok']['bm']()),
            _0x4d0434['html'](_0xbc3655['$'](ooo['ok']['cm']())),
            _0x6b1c4d[_0x56acbb(0x584)](_0x3f0043);
        }
        ,
        _0xa8b9d9['Mk'] = _0x71bb2e,
        _0x20134b = $(_0x434858(0x24c)),
        _0x2c42af = $(_0x434858(0x7f3)),
        _0x494cc8 = $(_0x434858(0x725)),
        _0x1624a2 = $(_0x434858(0x2b7)),
        _0x17f979 = $(_0x434858(0x7ea)),
        _0x5638db = $('#popup-delete-account'),
        _0x1c9a3f = $(_0x434858(0x219)),
        _0x43ae59 = $(_0x434858(0x46f)),
        (_0x3a2be7 = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x236f7e = _0x434858;
            _0xa8b9d9['Ho']['call'](this, _0xbc3655['U'](_0x236f7e(0x1bb)), ![]);
            var _0x11b6d4 = this;
            _0x20134b[_0x236f7e(0x68c)](function() {
                var _0x2b8b79 = _0x236f7e
                  , _0x2d5f25 = !!_0x20134b[_0x2b8b79(0x226)]('checked');
                _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Fg'], _0x2d5f25, 0x1e),
                ooo['ij']['$e'](_0x2d5f25),
                ooo['ij']['if']();
            }),
            _0x2c42af[_0x236f7e(0x68c)](function() {
                var _0x1c2cde = !!_0x2c42af['prop']('checked');
                _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Gg'], _0x1c2cde, 0x1e),
                ooo['ij']['Xe'](_0x1c2cde),
                ooo['ij']['if']();
            }),
            _0x494cc8[_0x236f7e(0x68c)](function() {
                ooo['ij']['if']();
            }),
            _0x1624a2[_0x236f7e(0x68c)](function() {
                ooo['ij']['if'](),
                _0x11b6d4['Xo'](0x1f4),
                ooo['ok']['qm']();
            }),
            _0x5638db[_0x236f7e(0x68c)](function() {
                ooo['ok']['nk']() ? (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Fk'])) : ooo['ij']['nf']();
            }),
            _0x43ae59[_0x236f7e(0x68c)](function() {
                ooo['kp']() ? (ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Dk'])) : ooo['ij']['nf']();
            });
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x34502c = _0x434858, _0x26d2b0, _0x1d46c0, _0x50cf33;
            _0x3a2be7[_0x34502c(0x75b)]['prototype']['Sa'][_0x34502c(0x3ed)](this),
            _0x26d2b0 = _0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Fg']) !== _0x34502c(0x801),
            _0x20134b[_0x34502c(0x226)](_0x34502c(0x69a), _0x26d2b0),
            ooo['ij']['$e'](_0x26d2b0),
            _0x1d46c0 = _0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Gg']) !== _0x34502c(0x801),
            _0x2c42af['prop'](_0x34502c(0x69a), _0x1d46c0),
            ooo['ij']['Xe'](_0x1d46c0),
            _0x50cf33 = _0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Eg']) !== _0x34502c(0x801),
            _0x494cc8[_0x34502c(0x226)](_0x34502c(0x69a), _0x50cf33),
            ooo['ok']['em'](function() {
                var _0x1c34b8 = _0x34502c;
                _0x17f979[_0x1c34b8(0x589)](ooo['ok']['nk']()),
                _0x1c9a3f[_0x1c34b8(0x589)](ooo['ok']['nk']());
            });
        }
        ,
        _0x3a2be7[_0x434858(0x2a8)]['Wo'] = function() {
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Mo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['No'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Oo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Po'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['Qo'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Ro'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['So'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['To'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Uo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Vo'], 0x32);
        }
        ,
        _0x3a2be7['prototype']['nl'] = function() {
            var _0x31bcfd = _0x434858;
            ooo['ij']['jf'](),
            ooo['kp']() ? _0x43ae59['show']() : _0x43ae59[_0x31bcfd(0x79e)]();
        }
        ,
        _0x3a2be7['prototype']['Gi'] = function() {
            var _0x39a7aa = _0x434858;
            return _0x494cc8[_0x39a7aa(0x226)]('checked');
        }
        ,
        _0xa8b9d9['Pk'] = _0x3a2be7,
        _0x3213aa = $(_0x434858(0x2bf)),
        _0x54fd4b = $('#skin-description-text'),
        _0x1344d3 = $(_0x434858(0x1d1)),
        _0x35e9b8 = $(_0x434858(0x4ed)),
        _0x2811f4 = $('#store-locked-bar-text'),
        _0x3810c9 = $(_0x434858(0x58e)),
        _0x35cbd6 = $(_0x434858(0x2e2)),
        _0x3b0ea2 = $(_0x434858(0x634)),
        _0x635102 = $(_0x434858(0x76a)),
        _0x514168 = $(_0x434858(0x453)),
        (_0x123c66 = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x34a483 = _0x434858;
            _0xa8b9d9['Ho'][_0x34a483(0x3ed)](this, _0xbc3655['U'](_0x34a483(0x1ff)), !![]);
            var _0x35d4e5 = this;
            this['lp'] = null,
            this['mp'] = [],
            this['np'] = {},
            this['op'] = new _0xa8b9d9['Lm'](_0x3213aa),
            _0x3810c9['click'](function() {
                ooo['ij']['if'](),
                _0x35d4e5['pp']();
            }),
            _0x635102[_0x34a483(0x68c)](function() {
                ooo['ij']['if'](),
                _0x35d4e5['lp']['qp']();
            }),
            _0x514168[_0x34a483(0x68c)](function() {
                ooo['ij']['if'](),
                _0x35d4e5['lp']['rp']();
            });
        }))['prototype']['Sa'] = function() {
            var _0x1a0329 = _0x434858;
            _0x123c66['parent'][_0x1a0329(0x2a8)]['Sa']['call'](this);
            var _0x7009f4 = this;
            ooo['ud']['Jc'](function() {
                var _0x1966a2 = _0x1a0329
                  , _0x3bf441 = ooo['ud']['Gc']();
                _0x7009f4['mp'] = [];
                for (var _0x1a9c56 = 0x0; _0x1a9c56 < _0x3bf441['skinGroupArrayDict'][_0x1966a2(0x2a1)]; _0x1a9c56++) {
                    _0x7009f4['mp'][_0x1966a2(0x23c)](new _0x21a6dd(_0x7009f4,_0x3bf441['skinGroupArrayDict'][_0x1a9c56]));
                }
                ;_0x7009f4['np'] = {};
                for (var _0x2b8284 = 0x0; _0x2b8284 < _0x3bf441[_0x1966a2(0x652)][_0x1966a2(0x2a1)]; _0x2b8284++) {
                    var _0x3cec5c = _0x3bf441[_0x1966a2(0x652)][_0x2b8284];
                    _0x7009f4['np'][_0x3cec5c['id']] = _0x3cec5c;
                }
                ;_0x7009f4['sp']();
            }),
            this['tp'](![]),
            ooo['so']['fk'](function() {
                _0x7009f4['tp'](![]);
            });
        }
        ,
        _0x123c66[_0x434858(0x2a8)]['Wo'] = function() {
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Mo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['No'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Oo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Po'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Qo'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['Ro'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['So'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['To'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Uo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Vo'], 0x32);
        }
        ,
        _0x123c66[_0x434858(0x2a8)]['nl'] = function() {
            ooo['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Jf']),
            ooo['ij']['jf'](),
            this['sp'](),
            this['op']['rg'](!![]);
        }
        ,
        _0x123c66[_0x434858(0x2a8)]['hl'] = function() {
            this['op']['rg'](![]);
        }
        ,
        _0x123c66['prototype']['qg'] = function() {
            this['op']['qg']();
        }
        ,
        _0x123c66[_0x434858(0x2a8)]['ug'] = function(_0xfe2e5b, _0x30a2da) {
            this['op']['ug']();
        }
        ,
        _0x123c66[_0x434858(0x2a8)]['sp'] = function() {
            var _0x2b1cf0 = _0x434858
              , _0x5e341c = this
              , _0x545ac5 = this;
            _0x3b0ea2[_0x2b1cf0(0x534)]();
            for (var _0x58d64 = 0x0; _0x58d64 < this['mp'][_0x2b1cf0(0x2a1)]; _0x58d64++) {
                (function(_0x5b8ca3) {
                    var _0x13fbde = _0x2b1cf0
                      , _0x5dc9e9 = _0x5e341c['mp'][_0x5b8ca3]
                      , _0x4ba4d9 = _0xa8b9d9['d'][_0x13fbde(0x3bc)]('li');
                    _0x3b0ea2[_0x13fbde(0x294)](_0x4ba4d9);
                    var _0x2546c3 = $(_0x4ba4d9);
                    _0x545ac5['xp'] && _0x545ac5['xp'][_0x13fbde(0x282)] && _0x2546c3['addClass'](_0x13fbde(0x1f4)),
                    _0x2546c3[_0x13fbde(0x584)](_0x5dc9e9['up']()),
                    _0x2546c3['click'](function() {
                        ooo['ij']['if'](),
                        _0x545ac5['vp'](_0x5dc9e9);
                    }),
                    _0x5dc9e9['wp'] = _0x2546c3;
                }(_0x58d64));
            }
            ;if (this['mp'][_0x2b1cf0(0x2a1)] > 0x0) {
                var _0x54ef36 = ooo['so']['Zj'](_0xa8b9d9['_j']['$j']);
                for (var _0x2597f4 = 0x0; _0x2597f4 < this['mp'][_0x2b1cf0(0x2a1)]; _0x2597f4++) {
                    var _0x558632 = this['mp'][_0x2597f4];
                    for (var _0x5d55a8 = _0x558632['xp'][_0x2b1cf0(0x1b3)], _0x29bb6e = 0x0; _0x29bb6e < _0x5d55a8[_0x2b1cf0(0x2a1)]; _0x29bb6e++) {
                        if (_0x5d55a8[_0x29bb6e] === _0x54ef36) {
                            _0x558632['yp'] = _0x29bb6e,
                            this['vp'](_0x558632);
                            return;
                        }
                    }
                }
                ;this['vp'](this['mp'][0x0]);
            }
        }
        ,
        _0x123c66[_0x434858(0x2a8)]['vp'] = function(_0xa9d45d) {
            var _0x5ef7ab = _0x434858;
            if (this['lp'] !== _0xa9d45d) {
                this['lp'] = _0xa9d45d,
                _0x3b0ea2['children']()[_0x5ef7ab(0x617)](_0x5ef7ab(0x719));
                this['lp']['wp'] && this['lp']['wp']['addClass'](_0x5ef7ab(0x719));
                _0x1344d3[_0x5ef7ab(0x584)]('');
                if (_0xa9d45d['xp'] != null) {
                    var _0x3a5d33 = ooo['ud']['Gc']()[_0x5ef7ab(0x4e7)][_0xa9d45d['xp'][_0x5ef7ab(0x220)]];
                    _0x3a5d33 != null && _0x1344d3[_0x5ef7ab(0x584)](_0xbc3655['aa'](_0xbc3655['V'](_0x3a5d33)));
                }
                ;this['tp'](!![]);
            }
        }
        ,
        _0x123c66[_0x434858(0x2a8)]['zp'] = function() {
            return this['lp'] == null ? _0xa8b9d9['yj']['Aj']() : this['lp']['Ap']();
        }
        ,
        _0x123c66[_0x434858(0x2a8)]['pp'] = function() {
            var _0x9c9bfc = this['zp']();
            if (_0x9c9bfc['Cj']()) {
                var _0x59a3a1 = _0x9c9bfc['Mc']();
                this['Bp'](_0x59a3a1);
            }
        }
        ,
        _0x123c66['prototype']['Bp'] = function(_0x244982) {
            var _0x2759fc = ooo['so']['mk'](_0x244982, _0xa8b9d9['_j']['$j']);
            if (_0x2759fc != null) {
                var _0xf5504c = _0x2759fc['pk']();
                if (!(ooo['ok']['Ql']() < _0xf5504c)) {
                    var _0x2eaff0 = ooo['so']['Zj'](_0xa8b9d9['_j']['$j'])
                      , _0x34ef0b = ooo['so']['Zj'](_0xa8b9d9['_j']['ak'])
                      , _0x1bf00c = ooo['so']['Zj'](_0xa8b9d9['_j']['bk'])
                      , _0xf5ed9a = ooo['so']['Zj'](_0xa8b9d9['_j']['dk'])
                      , _0x2c6bbf = ooo['so']['Zj'](_0xa8b9d9['_j']['ck'])
                      , _0x45581f = this['Xo'](0x1388);
                    ooo['ok']['nm'](_0x244982, _0xa8b9d9['_j']['$j'], function() {
                        _0x45581f['_o'](),
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function() {
                        ooo['ok']['hm'](function() {
                            ooo['so']['lk'](_0x2eaff0, _0xa8b9d9['_j']['$j']),
                            ooo['so']['lk'](_0x34ef0b, _0xa8b9d9['_j']['ak']),
                            ooo['so']['lk'](_0x1bf00c, _0xa8b9d9['_j']['bk']),
                            ooo['so']['lk'](_0xf5ed9a, _0xa8b9d9['_j']['dk']),
                            ooo['so']['lk'](_0x2c6bbf, _0xa8b9d9['_j']['ck']),
                            ooo['so']['lk'](_0x244982, _0xa8b9d9['_j']['$j']),
                            _0x45581f['_o']();
                        });
                    });
                }
            }
        }
        ,
        _0x123c66[_0x434858(0x2a8)]['tp'] = function(_0x228923) {
            var _0x498b60 = _0x434858
              , _0x220c0f = ooo['so']['ek']()
              , _0x376f5d = this['zp']();
            if (_0x376f5d['Cj']()) {
                var _0x39835f = _0x376f5d['Mc']()
                  , _0x256b30 = ooo['so']['mk'](_0x39835f, _0xa8b9d9['_j']['$j'])
                  , _0x3ba820 = ![];
                $('#add-to-favorites-skin')[_0x498b60(0x6f9)](),
                $(_0x498b60(0x5de))[_0x498b60(0x6f9)](),
                $(_0x498b60(0x2e5))[_0x498b60(0x6f9)](),
                $(_0x498b60(0x2ac))[_0x498b60(0x6f9)](),
                $(_0x498b60(0x85d))[_0x498b60(0x6f9)]();
                if (ooo['so']['ik'](_0x39835f, _0xa8b9d9['_j']['$j'])) {
                    _0x35e9b8[_0x498b60(0x79e)](),
                    _0x3810c9[_0x498b60(0x79e)]();
                    var _0x1f9ff2 = $('<div\x20class=\x27fav-buttons-container\x27\x20style=\x27margin:10px;display:flex;gap:5px;position:fixed;left:270px;top:0px;z-index:1000;\x27></div>')
                      , _0x14917d = $('<button\x20id=\x27add-to-favorites-skin\x27\x20class=\x27favorite-button2\x27\x20style=\x27background:#4CAF50;color:white;border:none;padding:5px\x2010px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0\x202px\x204px\x20rgba(0,0,0,0.2);\x20margin:\x20410px\x2015px\x2015px\x205px;\x27><span\x20style=\x27font-size:14px;\x27>+</span>\x20Add</button>')
                      , _0x3962c9 = $('<button\x20id=\x27manage-favorites-skin\x27\x20class=\x27favorite-button\x27\x20style=\x27background:#2196F3;color:white;border:none;padding:5px\x2010px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0\x202px\x204px\x20rgba(0,0,0,0.2);\x20margin:\x20412px\x2020px\x2020px\x208px;\x27><span\x20style=\x27font-size:14px;\x27>☰</span>\x20Favorite</button>');
                    _0x1f9ff2[_0x498b60(0x294)](_0x14917d),
                    _0x1f9ff2[_0x498b60(0x294)](_0x3962c9),
                    _0x3b0ea2[_0x498b60(0x294)](_0x1f9ff2);
                    var _0xbe21bc = $('<div>')['attr']('id', _0x498b60(0x660))['css']({
                        'position': _0x498b60(0x566),
                        'left': _0x498b60(0x2e6),
                        'top': _0x498b60(0x23d),
                        'font-size': '12px',
                        'color': _0x498b60(0x4fb),
                        'z-index': '1000'
                    })[_0x498b60(0x440)](_0x498b60(0x7f1))['appendTo'](_0x3b0ea2)
                      , _0x1a0fc6 = $(_0x498b60(0x6d7));
                    $(_0x498b60(0x247))[_0x498b60(0x294)](_0x1a0fc6),
                    $(_0x498b60(0x5d2))[_0x498b60(0x68c)](function() {
                        var _0x5047c9 = _0x498b60;
                        $(_0x5047c9(0x85d))[_0x5047c9(0x79e)]();
                    }),
                    $(document)[_0x498b60(0x387)](function(_0x27eee8) {
                        var _0x2e766d = _0x498b60
                          , _0x4383a7 = $(_0x2e766d(0x85d));
                        !_0x4383a7['is'](_0x27eee8[_0x2e766d(0x428)]) && _0x4383a7[_0x2e766d(0x3fd)](_0x27eee8[_0x2e766d(0x428)])[_0x2e766d(0x2a1)] === 0x0 && _0x4383a7['hide']();
                    }),
                    $['each']($('[id^=\x27skin-info-text\x27]'), function() {
                        var _0x9b1b03 = _0x498b60;
                        $(this)['attr']('id') !== 'skin-info-text' && $(this)[_0x9b1b03(0x6f9)]();
                    }),
                    $(_0x498b60(0x576))['on'](_0x498b60(0x618), function() {
                        var _0x35c55a = _0x498b60;
                        $(this)[_0x35c55a(0x6ee)](_0x35c55a(0x75c), _0x35c55a(0x33c));
                    }),
                    $('.favorites-popup')['on'](_0x498b60(0x6e4), function() {
                        setTimeout(function() {
                            var _0x40c180 = _0x31dd;
                            $('.favorites-content')[_0x40c180(0x822)](0x0);
                        }, 0x64);
                    }),
                    $('.clear-all-favorites')['click'](function() {
                        var _0x1b85b6 = _0x498b60;
                        confirm(_0x1b85b6(0x1cc)) && (_0x389039[_0x1b85b6(0x325)] = [],
                        localStorage[_0x1b85b6(0x39f)](_0x1b85b6(0x852), JSON['stringify'](_0x389039)),
                        _0x2a2dce(),
                        _0x14917d && _0x14917d['is'](_0x1b85b6(0x253)) && _0x14917d[_0x1b85b6(0x440)](_0x1b85b6(0x542))['css'](_0x1b85b6(0x41d), '#4CAF50'));
                    }),
                    _0x14917d[_0x498b60(0x68c)](function() {
                        var _0x44fc09 = _0x498b60
                          , _0x44444e = _0x39835f;
                        !_0x389039[_0x44fc09(0x325)] && (_0x389039[_0x44fc09(0x325)] = []);
                        var _0x14d1fa = ![];
                        try {
                            for (var _0x6df411 = 0x0; _0x6df411 < _0x389039[_0x44fc09(0x325)][_0x44fc09(0x2a1)]; _0x6df411++) {
                                if (_0x389039[_0x44fc09(0x325)][_0x6df411] === _0x44444e) {
                                    _0x14d1fa = !![];
                                    break;
                                }
                            }
                        } catch (_0x4a89b9) {
                            _0x389039[_0x44fc09(0x325)] = [];
                        }
                        if (!_0x14d1fa)
                            _0x389039['favoriteSkins']['push'](_0x44444e),
                            localStorage['setItem'](_0x44fc09(0x852), JSON[_0x44fc09(0x880)](_0x389039)),
                            $(this)['text']('X')[_0x44fc09(0x6ee)](_0x44fc09(0x41d), _0x44fc09(0x442));
                        else {
                            var _0x1c862c = _0x389039[_0x44fc09(0x325)]['indexOf'](_0x44444e);
                            _0x389039[_0x44fc09(0x325)][_0x44fc09(0x61f)](_0x1c862c, 0x1),
                            localStorage[_0x44fc09(0x39f)](_0x44fc09(0x852), JSON[_0x44fc09(0x880)](_0x389039)),
                            $(this)['text'](_0x44fc09(0x542))['css']('background-color', _0x44fc09(0x363));
                        }
                    }),
                    _0x3962c9[_0x498b60(0x68c)](function() {
                        var _0xcfad13 = _0x498b60;
                        $[_0xcfad13(0x888)]($(_0xcfad13(0x35e)), function(_0x48023e) {
                            var _0x4ab2a9 = _0xcfad13;
                            _0x48023e > 0x0 && $(this)[_0x4ab2a9(0x6f9)]();
                        }),
                        _0x2a2dce(),
                        $(_0xcfad13(0x85d))[_0xcfad13(0x224)]();
                    });
                } else {
                    if (_0x256b30 == null || _0x256b30['qk']()) {
                        _0x3ba820 = !![],
                        _0x35e9b8[_0x498b60(0x224)](),
                        _0x3810c9[_0x498b60(0x79e)](),
                        _0x2811f4[_0x498b60(0x440)](_0xbc3655['U'](_0x498b60(0x1b0)));
                        if (_0x256b30 != null && _0x256b30['qk']()) {
                            var _0x1de5f8 = ooo['ud']['Gc']()[_0x498b60(0x4e7)][_0x256b30['ln']()];
                            _0x1de5f8 != null && _0x2811f4[_0x498b60(0x440)](_0xbc3655['V'](_0x1de5f8));
                        }
                    } else
                        _0x35e9b8['hide'](),
                        _0x3810c9['show'](),
                        _0x35cbd6[_0x498b60(0x584)](_0x256b30['pk']());
                }
                _0x54fd4b[_0x498b60(0x584)]('');
                if (_0x256b30 != null && _0x256b30['mn']() != null) {
                    var _0x36eee3 = ooo['ud']['Gc']()[_0x498b60(0x4e7)][_0x256b30['mn']()];
                    _0x36eee3 != null && _0x54fd4b['html'](_0xbc3655['aa'](_0xbc3655['V'](_0x36eee3)));
                }
                StoreSkinID && _0x39835f && StoreSkinID[_0x498b60(0x584)](_0x39835f),
                this['op']['Gm'](_0x220c0f['Cn'](_0x39835f)),
                this['op']['an'](_0x3ba820),
                _0x228923 && ooo['so']['lk'](_0x39835f, _0xa8b9d9['_j']['$j']);
            }
        }
        ;
        function _0x4eabd2() {
            var _0x54b682 = _0x434858;
            !_0x389039[_0x54b682(0x325)] && (_0x389039[_0x54b682(0x325)] = [],
            localStorage[_0x54b682(0x39f)](_0x54b682(0x852), JSON[_0x54b682(0x880)](_0x389039)));
            if (_0x389039[_0x54b682(0x325)][_0x54b682(0x2a1)] > 0x0) {
                _0x389039[_0x54b682(0x56f)] === undefined ? _0x389039[_0x54b682(0x56f)] = 0x0 : _0x389039['currentFavSkinIndex'] = (_0x389039[_0x54b682(0x56f)] + 0x1) % _0x389039['favoriteSkins']['length'];
                var _0x487219 = _0x389039[_0x54b682(0x325)][_0x389039[_0x54b682(0x56f)]];
                _0x3b6bc9(_0x487219),
                localStorage[_0x54b682(0x39f)](_0x54b682(0x852), JSON[_0x54b682(0x880)](_0x389039));
            }
        }
        function _0x3b6bc9(_0x1ad09a) {
            var _0x5e9b1f = _0x434858;
            ooo['so']['lk'](_0x1ad09a, _0xa8b9d9['_j']['$j']);
            if (_0x276741 && _0x276741['n'] && _0x276741['n']['Je']) {
                var _0x2fedd7 = ooo['ud']['Cc']()['Tb'](_0x1ad09a);
                _0x276741['uj'] && _0x2fedd7 && _0x276741['uj']['hd'](ooo['Mh']['Qh']['eh'], ooo['ud']['Cc']()['Ub'](_0x276741['n']['mi']), _0x2fedd7, ooo['ud']['Cc']()['Vb'](_0x276741['n']['Vi']), ooo['ud']['Cc']()['Wb'](_0x276741['n']['Wi']), ooo['ud']['Cc']()['Xb'](_0x276741['n']['Xi']), ooo['ud']['Cc']()['Yb'](_0x276741['n']['Yi']), _0x5e9b1f(0x7c3));
            }
        }
        function _0x403c9e(_0x593816, _0x2a0415) {
            var _0x122ca5 = _0x434858;
            if (!_0x593816)
                return '';
            if (_0x593816[_0x122ca5(0x829)](_0x122ca5(0x2ea)))
                return _0x593816;
            if (_0x593816[_0x122ca5(0x5b5)](_0x122ca5(0x2cd)))
                return _0x593816[_0x122ca5(0x829)](_0x122ca5(0x439)) ? _0x593816[_0x122ca5(0x42b)](/https?:\/\/[^\/]+/, _0x389039['s_l']) : _0x389039[_0x122ca5(0x510)] + _0x593816;
            if (_0x593816[_0x122ca5(0x5b5)](_0x122ca5(0x7db)))
                return _0x389039[_0x122ca5(0x510)] + '/' + _0x593816;
            if (_0x593816[_0x122ca5(0x5b5)](_0x122ca5(0x651)))
                return _0x122ca5(0x2f4) + _0x593816;
            if (_0x593816['includes'](_0x122ca5(0x7db)))
                return _0x389039[_0x122ca5(0x510)] + _0x593816;
            if (!_0x593816['startsWith']('http'))
                return _0x122ca5(0x3d1) + _0x593816;
            return _0x593816;
        }
        function _0x487b4e(_0xbbdd6b) {
            var _0x4e2800 = _0x434858;
            !_0x389039[_0x4e2800(0x325)] && (_0x389039[_0x4e2800(0x325)] = []);
            var _0xeccfe = ![];
            for (var _0x568644 = 0x0; _0x568644 < _0x389039[_0x4e2800(0x325)][_0x4e2800(0x2a1)]; _0x568644++) {
                if (_0x389039['favoriteSkins'][_0x568644] === _0xbbdd6b) {
                    _0xeccfe = !![];
                    break;
                }
            }
            !_0xeccfe && (_0x389039[_0x4e2800(0x325)][_0x4e2800(0x23c)](_0xbbdd6b),
            localStorage[_0x4e2800(0x39f)]('SaveGamewft', JSON[_0x4e2800(0x880)](_0x389039)));
        }
        function _0x1ff0fd() {
            var _0x1ca3c = _0x434858;
            if ($('#open-favorites-btn')['length'] === 0x0) {
                var _0x431578 = $(_0x1ca3c(0x44d));
                $(_0x1ca3c(0x4db))['appendTo'](_0x1ca3c(0x2ff)),
                _0x431578[_0x1ca3c(0x68c)](function() {
                    var _0x355b29 = _0x1ca3c;
                    _0x2a2dce(),
                    $(_0x355b29(0x85d))['show']();
                }),
                $('#mm-skin-canv')[_0x1ca3c(0x2a1)] > 0x0 && ($(_0x1ca3c(0x46e))['parent']()[_0x1ca3c(0x6ee)](_0x1ca3c(0x791), 'relative'),
                $(_0x1ca3c(0x46e))[_0x1ca3c(0x75b)]()[_0x1ca3c(0x294)](_0x431578));
            }
        }
        function _0x18c436(_0x9affd6) {
            var _0x3fa47f = _0x434858;
            _0x389039[_0x3fa47f(0x325)] && _0x9affd6 >= 0x0 && _0x9affd6 < _0x389039[_0x3fa47f(0x325)][_0x3fa47f(0x2a1)] && (_0x389039[_0x3fa47f(0x325)][_0x3fa47f(0x61f)](_0x9affd6, 0x1),
            localStorage[_0x3fa47f(0x39f)]('SaveGamewft', JSON[_0x3fa47f(0x880)](_0x389039)),
            _0x2a2dce());
        }
        function _0x2a2dce() {
            var _0x23e2ef = _0x434858
              , _0x13419f = $(_0x23e2ef(0x676));
            _0x13419f[_0x23e2ef(0x534)]();
            !_0x389039['favoriteSkins'] && (_0x389039['favoriteSkins'] = [],
            localStorage[_0x23e2ef(0x39f)]('SaveGamewft', JSON['stringify'](_0x389039)));
            try {
                if (_0x389039[_0x23e2ef(0x325)][_0x23e2ef(0x2a1)] > 0x0)
                    for (var _0x31f723 = 0x0; _0x31f723 < _0x389039[_0x23e2ef(0x325)]['length']; _0x31f723++) {
                        var _0x3a7cdf = _0x389039['favoriteSkins'][_0x31f723]
                          , _0x41448e = $('<div>')['attr'](_0x23e2ef(0x54d), _0x31f723)[_0x23e2ef(0x88c)](_0x23e2ef(0x1b6), _0x3a7cdf)[_0x23e2ef(0x6ee)]({
                            'display': 'flex',
                            'flex-direction': _0x23e2ef(0x5ed),
                            'align-items': _0x23e2ef(0x57b),
                            'padding': _0x23e2ef(0x6e7),
                            'background': _0x23e2ef(0x6b3),
                            'border-radius': _0x23e2ef(0x45b),
                            'position': _0x23e2ef(0x885),
                            'height': _0x23e2ef(0x383),
                            'width': _0x23e2ef(0x230)
                        })
                          , _0x2b0a01 = $(_0x23e2ef(0x551))[_0x23e2ef(0x6ee)]({
                            'width': '100%',
                            'height': '46px',
                            'background': 'transparent',
                            'border-radius': _0x23e2ef(0x670),
                            'overflow': 'visible',
                            'position': _0x23e2ef(0x885),
                            'display': 'flex',
                            'justify-content': 'center',
                            'align-items': _0x23e2ef(0x57b)
                        })['appendTo'](_0x41448e)
                          , _0x28cd6d = $(_0x23e2ef(0x279))[_0x23e2ef(0x440)]('X')[_0x23e2ef(0x6ee)]({
                            'position': 'absolute',
                            'top': '3px',
                            'right': '3px',
                            'background': _0x23e2ef(0x442),
                            'color': _0x23e2ef(0x5a3),
                            'border': _0x23e2ef(0x4a2),
                            'padding': _0x23e2ef(0x2a0),
                            'border-radius': _0x23e2ef(0x5fe),
                            'cursor': _0x23e2ef(0x298),
                            'font-size': '11px',
                            'z-index': '20'
                        })[_0x23e2ef(0x75f)](_0x41448e)
                          , _0x37317c = _0x340a9a(_0x3a7cdf);
                        _0x2b0a01['append'](_0x37317c),
                        _0x13419f[_0x23e2ef(0x294)](_0x41448e),
                        _0x28cd6d[_0x23e2ef(0x68c)](function() {
                            var _0x9db650 = _0x23e2ef
                              , _0x4a04a6 = $(this)[_0x9db650(0x26e)]('[data-index]')
                              , _0x1c93c9 = parseInt(_0x4a04a6[_0x9db650(0x88c)](_0x9db650(0x54d)));
                            _0x389039[_0x9db650(0x325)] && _0x1c93c9 >= 0x0 && _0x1c93c9 < _0x389039[_0x9db650(0x325)][_0x9db650(0x2a1)] && (_0x389039[_0x9db650(0x325)][_0x9db650(0x61f)](_0x1c93c9, 0x1),
                            localStorage['setItem'](_0x9db650(0x852), JSON[_0x9db650(0x880)](_0x389039)),
                            _0x4a04a6[_0x9db650(0x7df)](0x12c, function() {
                                var _0x19cf8a = _0x9db650;
                                $(this)['remove'](),
                                _0x13419f['find'](_0x19cf8a(0x4b8))[_0x19cf8a(0x888)](function(_0x1e1dc5) {
                                    var _0x285316 = _0x19cf8a;
                                    $(this)[_0x285316(0x88c)](_0x285316(0x54d), _0x1e1dc5);
                                }),
                                _0x389039[_0x19cf8a(0x325)]['length'] === 0x0 && _0x47a29e(_0x13419f);
                            }));
                        });
                    }
                else
                    _0x47a29e(_0x13419f);
            } catch (_0x5c5852) {
                _0x13419f['append']('<div\x20style=\x27text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span\x202;\x27>Error\x20loading\x20favorites</div>');
            }
        }
        function _0x47a29e(_0x32f60a) {
            var _0x4e3648 = _0x434858;
            _0x32f60a['append'](_0x4e3648(0x31a));
        }
        function _0x340a9a(_0x44d614) {
            var _0x1e44c0 = _0x434858;
            !window[_0x1e44c0(0x377)] && (window['textureCache'] = {});
            try {
                let _0x45af97 = null;
                if (typeof ooo !== _0x1e44c0(0x799)) {
                    if (ooo['ud'] && ooo['ud']['Gc'])
                        _0x45af97 = ooo['ud']['Gc']();
                    else {
                        if (ooo['ok'] && ooo['ok']['xl'] && ooo['ok']['xl'][_0x1e44c0(0x52e)])
                            _0x45af97 = ooo['ok']['xl'][_0x1e44c0(0x52e)];
                        else
                            window[_0x1e44c0(0x393)] && (_0x45af97 = window[_0x1e44c0(0x393)]);
                    }
                }
                if (!_0x45af97) {
                    const _0x27da2a = localStorage[_0x1e44c0(0x65e)](_0x1e44c0(0x592));
                    if (_0x27da2a)
                        try {
                            _0x45af97 = JSON[_0x1e44c0(0x762)](_0x27da2a);
                        } catch (_0x2b9f38) {}
                }
                if (!_0x45af97)
                    throw new Error(_0x1e44c0(0x401));
                let _0x225014 = null;
                if (_0x45af97[_0x1e44c0(0x652)] && Array[_0x1e44c0(0x750)](_0x45af97[_0x1e44c0(0x652)]))
                    _0x225014 = _0x45af97['skinArrayDict'];
                else {
                    if (_0x45af97[_0x1e44c0(0x7e0)] && Array[_0x1e44c0(0x750)](_0x45af97[_0x1e44c0(0x7e0)]))
                        _0x225014 = _0x45af97[_0x1e44c0(0x7e0)];
                    else
                        throw new Error(_0x1e44c0(0x2fa));
                }
                let _0xd013ba = null;
                for (let _0x4c100e = 0x0; _0x4c100e < _0x225014[_0x1e44c0(0x2a1)]; _0x4c100e++) {
                    if (_0x225014[_0x4c100e] && _0x225014[_0x4c100e]['id'] === _0x44d614) {
                        _0xd013ba = _0x225014[_0x4c100e];
                        break;
                    }
                }
                if (!_0xd013ba)
                    throw new Error(_0x1e44c0(0x500));
                const _0x4d7a2d = document[_0x1e44c0(0x3bc)]('div');
                _0x4d7a2d[_0x1e44c0(0x811)][_0x1e44c0(0x1f5)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
                const _0x129dd7 = document[_0x1e44c0(0x3bc)](_0x1e44c0(0x677));
                _0x129dd7[_0x1e44c0(0x49c)] = '#' + _0x44d614,
                _0x129dd7[_0x1e44c0(0x811)][_0x1e44c0(0x1f5)] = _0x1e44c0(0x526),
                _0x4d7a2d['appendChild'](_0x129dd7);
                const _0x2285a5 = document[_0x1e44c0(0x3bc)](_0x1e44c0(0x271));
                _0x2285a5[_0x1e44c0(0x40e)] = 0x258,
                _0x2285a5['height'] = 0x50,
                _0x2285a5[_0x1e44c0(0x811)][_0x1e44c0(0x1f5)] = _0x1e44c0(0x1dd),
                _0x4d7a2d[_0x1e44c0(0x596)](_0x2285a5);
                const _0x41a471 = _0x2285a5['getContext']('2d');
                _0x41a471[_0x1e44c0(0x367)](0x0, 0x0, _0x2285a5[_0x1e44c0(0x40e)], _0x2285a5[_0x1e44c0(0x6f1)]);
                if (_0xd013ba[_0x1e44c0(0x84f)] && Array[_0x1e44c0(0x750)](_0xd013ba[_0x1e44c0(0x84f)]) && _0xd013ba[_0x1e44c0(0x84f)]['length'] > 0x0) {
                    let _0x5d517e = {}
                      , _0x1ecf23 = [];
                    _0xd013ba[_0x1e44c0(0x84f)][_0x1e44c0(0x588)](_0x2d175b => {
                        var _0x35a4ef = _0x1e44c0;
                        if (!_0x2d175b)
                            return;
                        if (_0x45af97[_0x35a4ef(0x78d)] && _0x45af97['regionDict'][_0x2d175b]) {
                            const _0x45394f = _0x45af97['regionDict'][_0x2d175b];
                            if (_0x45af97[_0x35a4ef(0x1d6)] && _0x45394f[_0x35a4ef(0x5e9)] && _0x45af97[_0x35a4ef(0x1d6)][_0x45394f[_0x35a4ef(0x5e9)]]) {
                                const _0x56aeeb = _0x45af97['textureDict'][_0x45394f['texture']];
                                if (_0x56aeeb && (_0x56aeeb['file'] || _0x56aeeb['relativePath'])) {
                                    let _0x42fb7e = _0x403c9e(_0x56aeeb['relativePath'] || _0x56aeeb[_0x35a4ef(0x508)], _0x45394f[_0x35a4ef(0x5e9)]);
                                    !_0x5d517e[_0x42fb7e] && (_0x5d517e[_0x42fb7e] = []),
                                    _0x5d517e[_0x42fb7e][_0x35a4ef(0x23c)]({
                                        'id': _0x2d175b,
                                        'region': _0x45394f
                                    }),
                                    _0x1ecf23['push']({
                                        'id': _0x2d175b,
                                        'region': _0x45394f
                                    });
                                }
                            }
                        }
                    }
                    );
                    const _0x1105f3 = [..._0x1ecf23][_0x1e44c0(0x7d4)]();
                    let _0x430be0 = [..._0x1105f3];
                    while (_0x430be0[_0x1e44c0(0x2a1)] < 0x1b) {
                        const _0x1c5b66 = 0x1b - _0x430be0[_0x1e44c0(0x2a1)]
                          , _0x5d8b3c = _0x1105f3[_0x1e44c0(0x7b7)](0x0, Math[_0x1e44c0(0x856)](_0x1c5b66, _0x1105f3[_0x1e44c0(0x2a1)]));
                        _0x430be0 = [..._0x430be0, ..._0x5d8b3c];
                    }
                    const _0x41663f = 0x50
                      , _0x2ac980 = _0x41663f / 0x2
                      , _0x4bea5c = 0.2
                      , _0x292aa1 = _0x41663f * _0x4bea5c * _0x430be0[_0x1e44c0(0x2a1)] + _0x41663f * 0.75;
                    _0x2285a5[_0x1e44c0(0x40e)] = Math[_0x1e44c0(0x3ea)](0x258, _0x292aa1),
                    _0x41a471['clearRect'](0x0, 0x0, _0x2285a5[_0x1e44c0(0x40e)], _0x2285a5[_0x1e44c0(0x6f1)]);
                    let _0xe6da4e = 0x0;
                    const _0x298270 = Object[_0x1e44c0(0x641)](_0x5d517e)[_0x1e44c0(0x2a1)];
                    function _0x369e4d(_0x256134) {
                        _0x2ac2b5(_0x256134);
                    }
                    function _0x2ac2b5(_0x5c910d) {
                        const _0x2d68e8 = _0x2285a5['height'] / 0x2;
                        _0x430be0['forEach']( (_0x3f5e2f, _0x4e120a) => {
                            var _0x4d0f77 = _0x31dd;
                            if (!_0x3f5e2f)
                                return;
                            const _0x3f0363 = _0x3f5e2f[_0x4d0f77(0x35f)]
                              , _0x317030 = _0x2ac980 + _0x4e120a * _0x2ac980 * 0x2 * _0x4bea5c;
                            _0x41a471[_0x4d0f77(0x5c9)](),
                            _0x41a471[_0x4d0f77(0x327)](),
                            _0x41a471[_0x4d0f77(0x450)](_0x317030, _0x2d68e8, _0x2ac980, 0x0, Math['PI'] * 0x2),
                            _0x41a471[_0x4d0f77(0x84d)]();
                            const _0x17950d = Math[_0x4d0f77(0x3ea)](_0x3f0363['w'], _0x3f0363['h'])
                              , _0xa7915c = _0x2ac980 * 0x2 / _0x17950d
                              , _0x5738b0 = _0x317030 - _0x3f0363['w'] * _0xa7915c / 0x2
                              , _0x31258b = _0x2d68e8 - _0x3f0363['h'] * _0xa7915c / 0x2;
                            _0x41a471[_0x4d0f77(0x739)](_0x5c910d, _0x3f0363['x'], _0x3f0363['y'], _0x3f0363['w'], _0x3f0363['h'], _0x5738b0, _0x31258b, _0x3f0363['w'] * _0xa7915c, _0x3f0363['h'] * _0xa7915c),
                            _0x41a471[_0x4d0f77(0x270)]();
                        }
                        );
                    }
                    return Object[_0x1e44c0(0x641)](_0x5d517e)[_0x1e44c0(0x588)](_0x5710c0 => {
                        var _0x269dd3 = _0x1e44c0;
                        if (window['textureCache'][_0x5710c0]) {
                            _0x369e4d(window['textureCache'][_0x5710c0]);
                            return;
                        }
                        const _0x333d45 = new Image();
                        _0x333d45[_0x269dd3(0x80a)] = () => {
                            window['textureCache'][_0x5710c0] = _0x333d45,
                            _0x369e4d(_0x333d45),
                            _0xe6da4e++;
                        }
                        ,
                        _0x333d45['onerror'] = () => {
                            _0xe6da4e++;
                        }
                        ,
                        _0x333d45[_0x269dd3(0x52f)] = _0x5710c0;
                    }
                    ),
                    _0x4d7a2d;
                }
            } catch (_0x4b6694) {
                const _0x46fa3c = document[_0x1e44c0(0x3bc)](_0x1e44c0(0x677));
                return _0x46fa3c[_0x1e44c0(0x811)][_0x1e44c0(0x1f5)] = _0x1e44c0(0x289),
                _0x46fa3c[_0x1e44c0(0x49c)] = '⚠️',
                _0x46fa3c;
            }
            const _0x496573 = document[_0x1e44c0(0x3bc)](_0x1e44c0(0x677));
            return _0x496573[_0x1e44c0(0x811)][_0x1e44c0(0x1f5)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333;\x0a\x20\x20\x20\x20',
            _0x496573[_0x1e44c0(0x49c)] = '🎮',
            _0x496573;
        }
        _0x21a6dd = (function() {
            var _0x1693bc = _0x434858;
            function _0x2f20cc(_0x124f79, _0x202685) {
                this['Cp'] = _0x124f79,
                this['yp'] = 0x0,
                this['xp'] = _0x202685;
            }
            return _0x2f20cc[_0x1693bc(0x2a8)]['qp'] = function() {
                var _0x2770b9 = _0x1693bc;
                --this['yp'] < 0x0 && (this['yp'] = this['xp']['list'][_0x2770b9(0x2a1)] - 0x1),
                this['Cp']['tp'](!![]);
            }
            ,
            _0x2f20cc[_0x1693bc(0x2a8)]['rp'] = function() {
                var _0x24f0bc = _0x1693bc;
                ++this['yp'] >= this['xp'][_0x24f0bc(0x1b3)][_0x24f0bc(0x2a1)] && (this['yp'] = 0x0),
                this['Cp']['tp'](!![]);
            }
            ,
            _0x2f20cc['prototype']['up'] = function() {
                var _0x35ed6c = _0x1693bc;
                let _0x5c5277 = _0xbc3655['V'](this['xp']['name']);
                return this['xp'][_0x35ed6c(0x281)] && ((this['xp'][_0x35ed6c(0x281)][_0x35ed6c(0x4f5)](_0x35ed6c(0x7d5)) == -0x1 || !(_0x5c5277 = _0x35ed6c(0x7b8) + this['xp'][_0x35ed6c(0x281)] + _0x35ed6c(0x43f))) && (this['xp'][_0x35ed6c(0x281)][_0x35ed6c(0x4f5)]('https://lh3.googleusercontent.com') == -0x1 || !(_0x5c5277 = _0x35ed6c(0x7b8) + this['xp'][_0x35ed6c(0x281)] + _0x35ed6c(0x43f))) && (_0x5c5277 = _0x35ed6c(0x7b8) + _0x389039[_0x35ed6c(0x510)] + _0x35ed6c(0x288) + this['xp'][_0x35ed6c(0x281)] + _0x35ed6c(0x43f))),
                _0x5c5277;
            }
            ,
            _0x2f20cc['prototype']['Ap'] = function() {
                var _0x26d2ec = _0x1693bc;
                return this['yp'] >= this['xp']['list'][_0x26d2ec(0x2a1)] ? _0xa8b9d9['yj']['Aj']() : _0xa8b9d9['yj']['Bj'](this['xp'][_0x26d2ec(0x1b3)][this['yp']]);
            }
            ,
            _0x2f20cc;
        }()),
        _0xa8b9d9['Rk'] = _0x123c66,
        _0x3cfc6d = $(_0x434858(0x36f)),
        _0x530f81 = $(_0x434858(0x625)),
        _0x48660f = $(_0x434858(0x4c6)),
        (_0x4b95c5 = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x299dd5 = _0x434858;
            _0xa8b9d9['Ho'][_0x299dd5(0x3ed)](this, _0xbc3655['U'](_0x299dd5(0x703)), !![]),
            _0x3cfc6d['click'](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Hk']);
            }),
            _0x530f81[_0x299dd5(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Qk']);
            }),
            _0x48660f[_0x299dd5(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Uk']);
            });
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x48a469 = _0x434858;
            _0x4b95c5[_0x48a469(0x75b)][_0x48a469(0x2a8)]['Sa'][_0x48a469(0x3ed)](this);
        }
        ,
        _0x4b95c5['prototype']['Wo'] = function() {
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Mo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['No'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Oo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Po'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Qo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Ro'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['So'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['To'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Uo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Vo'], 0x32);
        }
        ,
        _0x4b95c5[_0x434858(0x2a8)]['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0xa8b9d9['Tk'] = _0x4b95c5,
        _0x2546b0 = $('#wear-view-canv'),
        _0x53ace8 = $(_0x434858(0x3a4)),
        _0x1fb137 = $('#wear-locked-bar'),
        _0x15fe01 = $(_0x434858(0x653)),
        _0x21d959 = $('#wear-buy-button'),
        _0x50b116 = $(_0x434858(0x3d4)),
        _0x2448aa = $(_0x434858(0x765)),
        _0x3b0882 = $(_0x434858(0x457)),
        _0x448f82 = $(_0x434858(0x605)),
        _0x2a2628 = $(_0x434858(0x760)),
        _0x317590 = $(_0x434858(0x7aa)),
        _0x4aa5cd = $(_0x434858(0x4a1)),
        _0x531cb9 = $('#wear-view-next'),
        (_0x2826e9 = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x13ea31 = _0x434858
              , _0x27d113 = this;
            _0xa8b9d9['Ho']['call'](this, _0xbc3655['U'](_0x13ea31(0x77f)), !![]);
            var _0x4ab0da = this;
            this['Dp'] = [],
            this['ak'] = new _0x266fdd(this,_0xa8b9d9['_j']['ak'],_0x2448aa),
            this['bk'] = new _0x266fdd(this,_0xa8b9d9['_j']['bk'],_0x3b0882),
            this['dk'] = new _0x266fdd(this,_0xa8b9d9['_j']['dk'],_0x448f82),
            this['ck'] = new _0x266fdd(this,_0xa8b9d9['_j']['ck'],_0x2a2628),
            this['Ep'] = null,
            this['Fp'] = null,
            this['Gp'] = null,
            this['Hp'] = null,
            this['Ip'] = null,
            this['Jp'] = null,
            this['op'] = new _0xa8b9d9['Lm'](_0x2546b0),
            _0x21d959[_0x13ea31(0x68c)](function() {
                ooo['ij']['if'](),
                _0x4ab0da['Kp']();
            }),
            _0x4aa5cd[_0x13ea31(0x68c)](function() {
                ooo['ij']['if'](),
                _0x4ab0da['Ep']['Lp']();
            }),
            _0x531cb9[_0x13ea31(0x68c)](function() {
                ooo['ij']['if'](),
                _0x4ab0da['Ep']['Mp']();
            }),
            _0x2448aa[_0x13ea31(0x68c)](function() {
                ooo['ij']['if'](),
                _0x4ab0da['Np'](_0x27d113['ak']);
            }),
            _0x3b0882['click'](function() {
                ooo['ij']['if'](),
                _0x4ab0da['Np'](_0x27d113['bk']);
            }),
            _0x448f82[_0x13ea31(0x68c)](function() {
                ooo['ij']['if'](),
                _0x4ab0da['Np'](_0x27d113['dk']);
            }),
            _0x2a2628['click'](function() {
                ooo['ij']['if'](),
                _0x4ab0da['Np'](_0x27d113['ck']);
            }),
            this['Dp'][_0x13ea31(0x23c)](this['ak']),
            this['Dp'][_0x13ea31(0x23c)](this['bk']),
            this['Dp'][_0x13ea31(0x23c)](this['dk']),
            this['Dp']['push'](this['ck']);
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x23efc8 = _0x434858;
            _0x2826e9[_0x23efc8(0x75b)][_0x23efc8(0x2a8)]['Sa']['call'](this);
            var _0xa8677 = this;
            ooo['ud']['Jc'](function() {
                var _0x343c24 = _0x23efc8
                  , _0x481417 = ooo['ud']['Gc']();
                _0xa8677['Fp'] = _0x481417['eyesDict'],
                _0xa8677['Gp'] = _0x481417['mouthDict'],
                _0xa8677['Hp'] = _0x481417[_0x343c24(0x83f)],
                _0xa8677['Ip'] = _0x481417[_0x343c24(0x597)],
                _0xa8677['Jp'] = _0x481417[_0x343c24(0x48f)],
                _0xa8677['ak']['Op'](_0x481417[_0x343c24(0x479)]),
                _0xa8677['ak']['Pp'](_0xa8677['Fp']),
                _0xa8677['bk']['Op'](_0x481417[_0x343c24(0x513)]),
                _0xa8677['bk']['Pp'](_0xa8677['Gp']),
                _0xa8677['dk']['Op'](_0x481417[_0x343c24(0x86c)]),
                _0xa8677['dk']['Pp'](_0xa8677['Hp']),
                _0xa8677['ck']['Op'](_0x481417['hatVariantArray']),
                _0xa8677['ck']['Pp'](_0xa8677['Ip']);
            }),
            this['tp'](![]),
            ooo['so']['fk'](function() {
                _0xa8677['tp'](![]);
            });
        }
        ,
        _0x2826e9[_0x434858(0x2a8)]['Wo'] = function() {
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Mo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['No'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Oo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Po'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Qo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Ro'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['So'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['To'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Uo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Vo'], 0x32);
        }
        ,
        _0x2826e9['prototype']['nl'] = function() {
            ooo['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Jf']),
            ooo['ij']['jf'](),
            this['Np'](this['Ep'] ?? this['ak']),
            this['op']['rg'](!![]);
        }
        ,
        _0x2826e9[_0x434858(0x2a8)]['hl'] = function() {
            this['op']['rg'](![]);
        }
        ,
        _0x2826e9[_0x434858(0x2a8)]['qg'] = function() {
            this['op']['qg']();
        }
        ,
        _0x2826e9['prototype']['ug'] = function(_0x3dd43a, _0x3d9d0b) {
            this['op']['ug']();
        }
        ,
        _0x2826e9['prototype']['Np'] = function(_0x4b4694) {
            var _0x54d422 = _0x434858;
            this['Ep'] = _0x4b4694;
            for (var _0x50e1e2 = 0x0; _0x50e1e2 < this['Dp'][_0x54d422(0x2a1)]; _0x50e1e2++) {
                this['Dp'][_0x50e1e2]['ep'][_0x54d422(0x617)](_0x54d422(0x719));
            }
            ;this['Ep']['ep'][_0x54d422(0x346)](_0x54d422(0x719)),
            this['Ep']['ml']();
        }
        ,
        _0x2826e9['prototype']['Qp'] = function() {
            return this['Ep'] == null ? _0xa8b9d9['yj']['Aj']() : _0xa8b9d9['yj']['Bj']({
                'Je': this['Ep']['Ap'](),
                'Wd': this['Ep']['Wd']
            });
        }
        ,
        _0x2826e9[_0x434858(0x2a8)]['Kp'] = function() {
            var _0x344c54 = this['Qp']();
            if (_0x344c54['Cj']()) {
                var _0xb27c22 = _0x344c54['Mc']();
                this['Rp'](_0xb27c22['Je'], _0xb27c22['Wd']);
            }
        }
        ,
        _0x2826e9[_0x434858(0x2a8)]['Rp'] = function(_0x119dbf, _0x1fdac1) {
            var _0x2a563b = ooo['so']['mk'](_0x119dbf, _0x1fdac1);
            if (_0x2a563b != null) {
                var _0x5f075f = _0x2a563b['pk']();
                if (!(ooo['ok']['Ql']() < _0x5f075f)) {
                    var _0x88dd5 = ooo['so']['Zj'](_0xa8b9d9['_j']['$j'])
                      , _0x34a88e = ooo['so']['Zj'](_0xa8b9d9['_j']['ak'])
                      , _0x4a66cc = ooo['so']['Zj'](_0xa8b9d9['_j']['bk'])
                      , _0x942a90 = ooo['so']['Zj'](_0xa8b9d9['_j']['dk'])
                      , _0x1cea33 = ooo['so']['Zj'](_0xa8b9d9['_j']['ck'])
                      , _0x504e27 = this['Xo'](0x1388);
                    ooo['ok']['nm'](_0x119dbf, _0x1fdac1, function() {
                        _0x504e27['_o'](),
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function() {
                        ooo['ok']['hm'](function() {
                            ooo['so']['lk'](_0x88dd5, _0xa8b9d9['_j']['$j']),
                            ooo['so']['lk'](_0x34a88e, _0xa8b9d9['_j']['ak']),
                            ooo['so']['lk'](_0x4a66cc, _0xa8b9d9['_j']['bk']),
                            ooo['so']['lk'](_0x942a90, _0xa8b9d9['_j']['dk']),
                            ooo['so']['lk'](_0x1cea33, _0xa8b9d9['_j']['ck']),
                            ooo['so']['lk'](_0x119dbf, _0x1fdac1),
                            _0x504e27['_o']();
                        });
                    });
                }
            }
        }
        ,
        window[_0x434858(0x3d6)] = window[_0x434858(0x3d6)] || {},
        _0x2826e9[_0x434858(0x2a8)]['tp'] = function(_0x3dbe68) {
            var _0x3d3605 = _0x434858
              , _0x2c6de1 = ooo['so']['ek']()
              , _0x5d2737 = this['Qp']();
            if (_0x5d2737['Cj']()) {
                var _0xe8689f = _0x5d2737['Mc']()
                  , _0x163d2a = ooo['so']['mk'](_0xe8689f['Je'], _0xe8689f['Wd'])
                  , _0x27cfae = ![];
                !_0xe8689f[_0x3d3605(0x4ca)] && (_0xe8689f['selectedHats'] = []);
                if (ooo['so']['ik'](_0xe8689f['Je'], _0xe8689f['Wd']))
                    _0x1fb137[_0x3d3605(0x79e)](),
                    _0x21d959[_0x3d3605(0x79e)](),
                    _0xe8689f['Wd'] === _0x3d3605(0x7b6) ? this[_0x3d3605(0x6b1)](_0xe8689f['Je']) : this[_0x3d3605(0x57d)]();
                else {
                    if (_0x163d2a == null || _0x163d2a['qk']()) {
                        _0x27cfae = !![],
                        _0x1fb137['show'](),
                        _0x21d959[_0x3d3605(0x79e)](),
                        _0x15fe01['text'](_0xbc3655['U']('index.game.popup.menu.store.locked'));
                        if (_0x163d2a != null && _0x163d2a['qk']()) {
                            var _0x40e60a = ooo['ud']['Gc']()[_0x3d3605(0x4e7)][_0x163d2a['ln']()];
                            _0x40e60a != null && _0x15fe01[_0x3d3605(0x440)](_0xbc3655['V'](_0x40e60a));
                        }
                        this[_0x3d3605(0x57d)]();
                    } else
                        _0x1fb137['hide'](),
                        _0x21d959[_0x3d3605(0x224)](),
                        _0x50b116[_0x3d3605(0x584)](_0x163d2a['pk']()),
                        this[_0x3d3605(0x57d)]();
                }
                _0x53ace8['html']('');
                if (_0x163d2a != null && _0x163d2a['mn']() != null) {
                    var _0x349278 = ooo['ud']['Gc']()[_0x3d3605(0x4e7)][_0x163d2a['mn']()];
                    _0x349278 != null && _0x53ace8[_0x3d3605(0x584)](_0xbc3655['aa'](_0xbc3655['V'](_0x349278)));
                }
                var _0x2bede4 = this['op'];
                switch (_0xe8689f['Wd']) {
                case _0x3d3605(0x448):
                    _0x2bede4['Gm'](_0x2c6de1['Dn'](_0xe8689f['Je'])),
                    _0x2bede4['bn'](_0x27cfae);
                    break;
                case _0x3d3605(0x78f):
                    _0x2bede4['Gm'](_0x2c6de1['En'](_0xe8689f['Je'])),
                    _0x2bede4['cn'](_0x27cfae);
                    break;
                case _0x3d3605(0x307):
                    _0x2bede4['Gm'](_0x2c6de1['Gn'](_0xe8689f['Je'])),
                    _0x2bede4['en'](_0x27cfae);
                    break;
                case _0x3d3605(0x7b6):
                    _0x2bede4['Gm'](_0x2c6de1['Fn'](_0xe8689f['Je'])),
                    _0x2bede4['dn'](_0x27cfae);
                    break;
                }
                _0x3dbe68 && ooo['so']['lk'](_0xe8689f['Je'], _0xe8689f['Wd']);
            }
        }
        ,
        _0x2826e9[_0x434858(0x2a8)][_0x434858(0x6b1)] = function(_0x331211) {
            var _0x2c7ea3 = _0x434858;
            this['currentHatId'] = _0x331211;
            if (!this[_0x2c7ea3(0x45d)]) {
                this[_0x2c7ea3(0x45d)] = $(_0x2c7ea3(0x551))[_0x2c7ea3(0x88c)]('id', _0x2c7ea3(0x590))[_0x2c7ea3(0x6ee)]({
                    'position': _0x2c7ea3(0x280),
                    'bottom': '30px',
                    'left': _0x2c7ea3(0x2b5),
                    'display': _0x2c7ea3(0x2b2),
                    'gap': '5px'
                })[_0x2c7ea3(0x75f)](_0x2c7ea3(0x559)),
                this['hatToggleButton'] = $(_0x2c7ea3(0x279))['attr']('id', _0x2c7ea3(0x771))[_0x2c7ea3(0x6ee)]({
                    'padding': _0x2c7ea3(0x26b),
                    'background-color': _0x2c7ea3(0x363),
                    'color': 'white',
                    'border': 'none',
                    'border-radius': _0x2c7ea3(0x670),
                    'cursor': _0x2c7ea3(0x298),
                    'min-width': '32px'
                })['appendTo'](this['hatButtonContainer']),
                this[_0x2c7ea3(0x364)] = $(_0x2c7ea3(0x279))[_0x2c7ea3(0x88c)]('id', 'hat-favorites-button')[_0x2c7ea3(0x6ee)]({
                    'padding': _0x2c7ea3(0x26b),
                    'background-color': _0x2c7ea3(0x541),
                    'color': _0x2c7ea3(0x5a3),
                    'border': _0x2c7ea3(0x4a2),
                    'border-radius': _0x2c7ea3(0x670),
                    'cursor': _0x2c7ea3(0x298)
                })['text'](_0x2c7ea3(0x568))[_0x2c7ea3(0x75f)](this[_0x2c7ea3(0x45d)]),
                this[_0x2c7ea3(0x7a9)] = $(_0x2c7ea3(0x551))['attr']('id', 'hat-info-text')[_0x2c7ea3(0x6ee)]({
                    'position': _0x2c7ea3(0x280),
                    'bottom': _0x2c7ea3(0x2f0),
                    'left': _0x2c7ea3(0x24d),
                    'font-size': _0x2c7ea3(0x663),
                    'color': _0x2c7ea3(0x4fb)
                })[_0x2c7ea3(0x440)]('Press\x20\x27(\x202\x20)\x27\x20to\x20toggle\x20hats\x20during\x20gameplay')[_0x2c7ea3(0x75f)]('#wear-view');
                var _0x3af853 = this;
                this[_0x2c7ea3(0x364)]['on'](_0x2c7ea3(0x68c), function() {
                    _0x3af853['showFavoritesDialog']();
                });
            }
            let _0x1f8133 = _0x389039['selectedHats'][_0x2c7ea3(0x5b5)](_0x331211);
            this[_0x2c7ea3(0x4d3)][_0x2c7ea3(0x440)](_0x1f8133 ? 'X' : _0x2c7ea3(0x542)),
            this[_0x2c7ea3(0x4d3)][_0x2c7ea3(0x6ee)]('background-color', _0x1f8133 ? _0x2c7ea3(0x442) : _0x2c7ea3(0x363)),
            this['hatToggleButton']['off'](_0x2c7ea3(0x68c));
            var _0x3af853 = this;
            this[_0x2c7ea3(0x4d3)]['on']('click', function() {
                var _0x4256db = _0x2c7ea3;
                let _0x4beaba = _0x389039['selectedHats'][_0x4256db(0x32c)](_0x331211);
                _0x4beaba >= 0x0 ? (_0x389039['selectedHats']['splice'](_0x4beaba, 0x1),
                $(this)[_0x4256db(0x440)]('Add')[_0x4256db(0x6ee)](_0x4256db(0x41d), _0x4256db(0x363))) : (_0x389039[_0x4256db(0x4ca)][_0x4256db(0x23c)](_0x331211),
                $(this)[_0x4256db(0x440)]('X')['css'](_0x4256db(0x41d), _0x4256db(0x442))),
                localStorage[_0x4256db(0x39f)](_0x4256db(0x852), JSON[_0x4256db(0x880)](_0x389039));
            }),
            this[_0x2c7ea3(0x45d)]['show'](),
            this['hatInfoText']['show']();
        }
        ,
        _0x2826e9[_0x434858(0x2a8)]['removeHatButtons'] = function() {
            var _0x1d2918 = _0x434858;
            this['hatButtonContainer'] && this[_0x1d2918(0x45d)][_0x1d2918(0x79e)](),
            this[_0x1d2918(0x7a9)] && this['hatInfoText']['hide']();
        }
        ;
        function _0x814be3(_0x2a5dc3) {
            var _0x4609d5 = _0x434858;
            try {
                if (window[_0x4609d5(0x3d6)][_0x2a5dc3] && window[_0x4609d5(0x3d6)][_0x2a5dc3]['valid'])
                    return window[_0x4609d5(0x3d6)][_0x2a5dc3];
                const _0xa04992 = ooo['ud']['Cc']()['Yb'](_0x2a5dc3);
                if (!_0xa04992 || !_0xa04992['dc'] || !_0xa04992['dc'][_0x4609d5(0x2a1)])
                    return null;
                const _0x34d468 = _0xa04992['dc'][0x0];
                let _0x397a87 = null;
                if (_0x34d468['_a'] !== undefined)
                    _0x397a87 = {
                        'x': _0x34d468['_a'] || 0x0,
                        'y': _0x34d468['ab'] || 0x0,
                        'width': _0x34d468['bb'] || 0x0,
                        'height': _0x34d468['cb'] || 0x0
                    };
                else {
                    if (_0x34d468[_0x4609d5(0x535)])
                        _0x397a87 = {
                            'x': _0x34d468[_0x4609d5(0x535)]['x'] || 0x0,
                            'y': _0x34d468['_frame']['y'] || 0x0,
                            'width': _0x34d468[_0x4609d5(0x535)][_0x4609d5(0x40e)] || 0x0,
                            'height': _0x34d468[_0x4609d5(0x535)][_0x4609d5(0x6f1)] || 0x0
                        };
                    else {
                        if (_0x34d468[_0x4609d5(0x66b)])
                            _0x397a87 = {
                                'x': _0x34d468[_0x4609d5(0x66b)]['x'] || 0x0,
                                'y': _0x34d468['orig']['y'] || 0x0,
                                'width': _0x34d468[_0x4609d5(0x66b)][_0x4609d5(0x40e)] || 0x0,
                                'height': _0x34d468[_0x4609d5(0x66b)]['height'] || 0x0
                            };
                        else
                            _0x34d468['va'] && _0x34d468['va'][_0x4609d5(0x2a1)] >= 0x4 && (_0x397a87 = {
                                'x': _0x34d468['va'][0x0] || 0x0,
                                'y': _0x34d468['va'][0x1] || 0x0,
                                'width': _0x34d468['va'][0x2] || 0x0,
                                'height': _0x34d468['va'][0x3] || 0x0
                            });
                    }
                }
                let _0x5d5638 = null;
                if (_0x34d468['Za'] && _0x34d468['Za']['baseTexture'] && _0x34d468['Za'][_0x4609d5(0x36a)][_0x4609d5(0x28e)] && _0x34d468['Za'][_0x4609d5(0x36a)][_0x4609d5(0x28e)][_0x4609d5(0x892)])
                    _0x5d5638 = _0x34d468['Za'][_0x4609d5(0x36a)][_0x4609d5(0x28e)][_0x4609d5(0x892)];
                else {
                    if (_0x34d468[_0x4609d5(0x36a)] && _0x34d468[_0x4609d5(0x36a)][_0x4609d5(0x28e)] && _0x34d468[_0x4609d5(0x36a)][_0x4609d5(0x28e)][_0x4609d5(0x892)])
                        _0x5d5638 = _0x34d468[_0x4609d5(0x36a)][_0x4609d5(0x28e)][_0x4609d5(0x892)];
                    else {
                        if (_0x34d468[_0x4609d5(0x36a)] && _0x34d468['baseTexture'][_0x4609d5(0x28e)] && _0x34d468[_0x4609d5(0x36a)][_0x4609d5(0x28e)][_0x4609d5(0x250)])
                            _0x5d5638 = _0x34d468[_0x4609d5(0x36a)][_0x4609d5(0x28e)]['data'];
                        else
                            _0x34d468['baseTexture'] && _0x34d468['baseTexture'][_0x4609d5(0x892)] && (_0x5d5638 = _0x34d468[_0x4609d5(0x36a)][_0x4609d5(0x892)]);
                    }
                }
                const _0x50a3ef = {
                    'hatId': _0x2a5dc3,
                    'image': _0x5d5638 || null,
                    'coords': _0x397a87 || null,
                    'textureData': _0x34d468,
                    'hatData': _0xa04992,
                    'valid': _0x5d5638 && _0x397a87 ? !![] : ![]
                };
                return window[_0x4609d5(0x3d6)][_0x2a5dc3] = _0x50a3ef,
                _0x50a3ef;
            } catch (_0x21f275) {
                return null;
            }
        }
        function _0x5b65ce(_0x2f48a5) {
            var _0x22dd9c = _0x434858;
            try {
                const _0x128d58 = document[_0x22dd9c(0x3bc)](_0x22dd9c(0x677));
                _0x128d58[_0x22dd9c(0x811)][_0x22dd9c(0x1f5)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
                const _0x36d89c = document['createElement']('div');
                _0x36d89c[_0x22dd9c(0x49c)] = '#' + _0x2f48a5,
                _0x36d89c[_0x22dd9c(0x811)][_0x22dd9c(0x1f5)] = _0x22dd9c(0x554),
                _0x128d58['appendChild'](_0x36d89c);
                const _0x4a3d69 = document[_0x22dd9c(0x3bc)](_0x22dd9c(0x271));
                _0x4a3d69[_0x22dd9c(0x40e)] = 0x50,
                _0x4a3d69[_0x22dd9c(0x6f1)] = 0x50,
                _0x4a3d69[_0x22dd9c(0x811)][_0x22dd9c(0x1f5)] = _0x22dd9c(0x372),
                _0x128d58['appendChild'](_0x4a3d69);
                const _0x1ecdac = _0x4a3d69[_0x22dd9c(0x3e6)]('2d', {
                    'willReadFrequently': !![]
                });
                _0x1ecdac[_0x22dd9c(0x367)](0x0, 0x0, _0x4a3d69[_0x22dd9c(0x40e)], _0x4a3d69['height']);
                const _0x28661e = _0x814be3(_0x2f48a5);
                if (!_0x28661e || !_0x28661e[_0x22dd9c(0x296)] || !_0x28661e['coords'])
                    return _0x1ecdac['fillStyle'] = _0x22dd9c(0x4de),
                    _0x1ecdac[_0x22dd9c(0x81d)](0x0, 0x0, _0x4a3d69[_0x22dd9c(0x40e)], _0x4a3d69[_0x22dd9c(0x6f1)]),
                    _0x1ecdac['fillStyle'] = _0x22dd9c(0x5a3),
                    _0x1ecdac[_0x22dd9c(0x2ae)] = _0x22dd9c(0x4f7),
                    _0x1ecdac[_0x22dd9c(0x475)] = 'center',
                    _0x1ecdac[_0x22dd9c(0x1f7)]('#' + _0x2f48a5, _0x4a3d69[_0x22dd9c(0x40e)] / 0x2, _0x4a3d69[_0x22dd9c(0x6f1)] / 0x2),
                    _0x128d58;
                try {
                    if (_0x28661e['coords']) {
                        _0x1ecdac['save']();
                        const _0x5d704e = Math[_0x22dd9c(0x856)]((_0x4a3d69[_0x22dd9c(0x40e)] - 0xa) / _0x28661e[_0x22dd9c(0x462)]['width'], (_0x4a3d69[_0x22dd9c(0x6f1)] - 0xa) / _0x28661e[_0x22dd9c(0x462)]['height']) * 0.9
                          , _0x2cb03e = _0x28661e[_0x22dd9c(0x462)]['width'] * _0x5d704e
                          , _0x316124 = _0x28661e['coords'][_0x22dd9c(0x6f1)] * _0x5d704e
                          , _0x1b5c9d = (_0x4a3d69[_0x22dd9c(0x40e)] - _0x2cb03e) / 0x2
                          , _0x47959e = (_0x4a3d69['height'] - _0x316124) / 0x2;
                        _0x1ecdac[_0x22dd9c(0x739)](_0x28661e['image'], _0x28661e[_0x22dd9c(0x462)]['x'], _0x28661e[_0x22dd9c(0x462)]['y'], _0x28661e[_0x22dd9c(0x462)]['width'], _0x28661e[_0x22dd9c(0x462)][_0x22dd9c(0x6f1)], _0x1b5c9d, _0x47959e, _0x2cb03e, _0x316124),
                        _0x1ecdac['restore']();
                    } else {
                        const _0x5990a3 = Math[_0x22dd9c(0x856)]((_0x4a3d69[_0x22dd9c(0x40e)] - 0xa) / _0x28661e[_0x22dd9c(0x296)]['width'], (_0x4a3d69[_0x22dd9c(0x6f1)] - 0xa) / _0x28661e['image'][_0x22dd9c(0x6f1)]) * 0.8
                          , _0xa600aa = _0x28661e['image']['width'] * _0x5990a3
                          , _0x2685db = _0x28661e[_0x22dd9c(0x296)]['height'] * _0x5990a3
                          , _0x6e5c3c = (_0x4a3d69[_0x22dd9c(0x40e)] - _0xa600aa) / 0x2
                          , _0x4c4622 = (_0x4a3d69[_0x22dd9c(0x6f1)] - _0x2685db) / 0x2;
                        _0x1ecdac[_0x22dd9c(0x739)](_0x28661e[_0x22dd9c(0x296)], _0x6e5c3c, _0x4c4622, _0xa600aa, _0x2685db);
                    }
                } catch (_0x476e9a) {
                    _0x1ecdac[_0x22dd9c(0x264)] = _0x22dd9c(0x4de),
                    _0x1ecdac[_0x22dd9c(0x81d)](0x0, 0x0, _0x4a3d69[_0x22dd9c(0x40e)], _0x4a3d69[_0x22dd9c(0x6f1)]),
                    _0x1ecdac[_0x22dd9c(0x264)] = 'white',
                    _0x1ecdac[_0x22dd9c(0x2ae)] = _0x22dd9c(0x4f7),
                    _0x1ecdac[_0x22dd9c(0x475)] = _0x22dd9c(0x57b),
                    _0x1ecdac['fillText']('#' + _0x2f48a5, _0x4a3d69[_0x22dd9c(0x40e)] / 0x2, _0x4a3d69[_0x22dd9c(0x6f1)] / 0x2);
                }
                return _0x128d58;
            } catch (_0x12e625) {
                const _0x3aef27 = document[_0x22dd9c(0x3bc)](_0x22dd9c(0x677));
                return _0x3aef27['style'][_0x22dd9c(0x1f5)] = _0x22dd9c(0x289),
                _0x3aef27[_0x22dd9c(0x49c)] = '#' + _0x2f48a5,
                _0x3aef27;
            }
        }
        _0x2826e9['prototype'][_0x434858(0x5d7)] = function() {
            var _0x13eb4a = _0x434858;
            $(_0x13eb4a(0x635))['remove']();
            var _0x517c3d = $(_0x13eb4a(0x551))[_0x13eb4a(0x88c)]('id', 'favorites-overlay')[_0x13eb4a(0x6ee)]({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'width': '100%',
                'height': _0x13eb4a(0x230),
                'background-color': _0x13eb4a(0x83e),
                'z-index': _0x13eb4a(0x80b)
            })[_0x13eb4a(0x75f)](_0x13eb4a(0x247))
              , _0x32824c = $('<div>')[_0x13eb4a(0x88c)]('id', _0x13eb4a(0x56c))[_0x13eb4a(0x6ee)]({
                'position': _0x13eb4a(0x566),
                'top': '50%',
                'left': '50%',
                'transform': _0x13eb4a(0x7c5),
                'background-color': '#1e1e2f',
                'border-radius': _0x13eb4a(0x847),
                'box-shadow': _0x13eb4a(0x6b5),
                'z-index': '1000',
                'width': _0x13eb4a(0x21a),
                'overflow': _0x13eb4a(0x4f4),
                'color': 'white'
            })['appendTo'](_0x13eb4a(0x247))
              , _0x5ac261 = $(_0x13eb4a(0x551))[_0x13eb4a(0x6ee)]({
                'padding': _0x13eb4a(0x4b4),
                'background-color': _0x13eb4a(0x6b3),
                'border-bottom': '1px\x20solid\x20#333345',
                'position': _0x13eb4a(0x885),
                'display': _0x13eb4a(0x2b2),
                'justify-content': _0x13eb4a(0x286),
                'align-items': _0x13eb4a(0x57b)
            })[_0x13eb4a(0x75f)](_0x32824c);
            $(_0x13eb4a(0x3d7))[_0x13eb4a(0x440)](_0x13eb4a(0x39a))[_0x13eb4a(0x6ee)]({
                'margin': _0x13eb4a(0x51b),
                'font-size': '18px',
                'color': _0x13eb4a(0x5a3),
                'padding-left': '15px'
            })['appendTo'](_0x5ac261);
            var _0x133c2c = $(_0x13eb4a(0x279))[_0x13eb4a(0x584)]('&times;')[_0x13eb4a(0x6ee)]({
                'position': _0x13eb4a(0x280),
                'top': _0x13eb4a(0x847),
                'left': _0x13eb4a(0x2f0),
                'font-size': '22px',
                'background': _0x13eb4a(0x4a2),
                'border': _0x13eb4a(0x4a2),
                'color': _0x13eb4a(0x322),
                'cursor': _0x13eb4a(0x298),
                'padding': _0x13eb4a(0x59d),
                'line-height': '1',
                'font-weight': 'bold'
            })[_0x13eb4a(0x75f)](_0x5ac261)
              , _0x56cd8a = $(_0x13eb4a(0x279))['text'](_0x13eb4a(0x71e))[_0x13eb4a(0x6ee)]({
                'padding': '4px\x208px',
                'background-color': '#f44336',
                'color': _0x13eb4a(0x5a3),
                'border': _0x13eb4a(0x4a2),
                'border-radius': _0x13eb4a(0x670),
                'cursor': _0x13eb4a(0x298),
                'font-size': '12px'
            })[_0x13eb4a(0x75f)](_0x5ac261)
              , _0x5c2124 = $(_0x13eb4a(0x551))[_0x13eb4a(0x88c)]('id', _0x13eb4a(0x6e9))[_0x13eb4a(0x6ee)]({
                'padding': '15px\x2020px',
                'max-height': _0x13eb4a(0x3b5),
                'overflow-y': _0x13eb4a(0x33c)
            })[_0x13eb4a(0x75f)](_0x32824c)
              , _0x43b598 = $('<div>')['attr'](_0x13eb4a(0x67c), _0x13eb4a(0x2cc))[_0x13eb4a(0x6ee)]({
                'display': 'grid',
                'grid-template-columns': '1fr\x201fr\x201fr',
                'gap': '12px',
                'padding': '0',
                'margin': '0'
            })['appendTo'](_0x5c2124)
              , _0x567e24 = this;
            _0x56cd8a['on'](_0x13eb4a(0x68c), function() {
                var _0x467cbd = _0x13eb4a;
                confirm(_0x467cbd(0x218)) && (_0x389039[_0x467cbd(0x4ca)] = [],
                localStorage[_0x467cbd(0x39f)](_0x467cbd(0x852), JSON[_0x467cbd(0x880)](_0x389039)),
                _0x43b598[_0x467cbd(0x534)](),
                $(_0x467cbd(0x551))[_0x467cbd(0x6ee)]({
                    'text-align': _0x467cbd(0x57b),
                    'padding': _0x467cbd(0x2f0),
                    'color': _0x467cbd(0x322),
                    'margin': '20px\x200',
                    'grid-column': _0x467cbd(0x533)
                })[_0x467cbd(0x440)]('You\x20don\x27t\x20have\x20any\x20favorite\x20hats\x20yet.')[_0x467cbd(0x75f)](_0x43b598),
                _0x567e24[_0x467cbd(0x4d3)] && _0x567e24[_0x467cbd(0x4d3)]['is'](_0x467cbd(0x253)) && _0x567e24[_0x467cbd(0x4d3)]['text'](_0x467cbd(0x542))[_0x467cbd(0x6ee)]('background-color', _0x467cbd(0x363)));
            });
            function _0x5f5d31() {
                var _0x46f679 = _0x13eb4a;
                _0x32824c[_0x46f679(0x6f9)](),
                _0x517c3d['remove']();
            }
            _0x133c2c['on'](_0x13eb4a(0x68c), _0x5f5d31),
            _0x517c3d['on'](_0x13eb4a(0x68c), _0x5f5d31),
            !_0x389039[_0x13eb4a(0x4ca)] || _0x389039[_0x13eb4a(0x4ca)][_0x13eb4a(0x2a1)] === 0x0 ? $('<div>')[_0x13eb4a(0x6ee)]({
                'text-align': _0x13eb4a(0x57b),
                'padding': _0x13eb4a(0x2f0),
                'color': _0x13eb4a(0x322),
                'margin': _0x13eb4a(0x6cb),
                'grid-column': _0x13eb4a(0x1d7)
            })[_0x13eb4a(0x440)](_0x13eb4a(0x2fd))['appendTo'](_0x43b598) : (_0x389039['selectedHats'][_0x13eb4a(0x588)](function(_0x30d08d) {
                _0x814be3(_0x30d08d);
            }),
            _0x389039[_0x13eb4a(0x4ca)][_0x13eb4a(0x588)](function(_0x3d596c, _0x21bd9b) {
                var _0x21b3b3 = _0x13eb4a
                  , _0x5ddd68 = $('<div>')[_0x21b3b3(0x88c)](_0x21b3b3(0x54d), _0x21bd9b)['attr'](_0x21b3b3(0x603), _0x3d596c)[_0x21b3b3(0x6ee)]({
                    'display': _0x21b3b3(0x2b2),
                    'flex-direction': _0x21b3b3(0x5ed),
                    'align-items': _0x21b3b3(0x57b),
                    'padding': _0x21b3b3(0x6e7),
                    'background': '#252538',
                    'border-radius': _0x21b3b3(0x45b),
                    'position': 'relative',
                    'height': _0x21b3b3(0x78e),
                    'width': _0x21b3b3(0x230)
                })[_0x21b3b3(0x75f)](_0x43b598)
                  , _0x55318d = $('<div>')[_0x21b3b3(0x6ee)]({
                    'width': _0x21b3b3(0x230),
                    'height': _0x21b3b3(0x34d),
                    'background': 'transparent',
                    'border-radius': _0x21b3b3(0x670),
                    'overflow': _0x21b3b3(0x62d),
                    'position': _0x21b3b3(0x885),
                    'display': 'flex',
                    'justify-content': 'center',
                    'align-items': _0x21b3b3(0x57b)
                })['appendTo'](_0x5ddd68)
                  , _0x58b27e = $(_0x21b3b3(0x279))[_0x21b3b3(0x440)]('X')[_0x21b3b3(0x6ee)]({
                    'position': _0x21b3b3(0x280),
                    'top': _0x21b3b3(0x670),
                    'right': _0x21b3b3(0x670),
                    'background': '#f44336',
                    'color': 'white',
                    'border': _0x21b3b3(0x4a2),
                    'padding': '2px\x206px',
                    'border-radius': '3px',
                    'cursor': 'pointer',
                    'font-size': '12px',
                    'z-index': '20'
                })[_0x21b3b3(0x75f)](_0x5ddd68)
                  , _0x453c02 = _0x5b65ce(_0x3d596c);
                _0x55318d[_0x21b3b3(0x294)](_0x453c02),
                _0x58b27e['on'](_0x21b3b3(0x68c), function(_0x718261) {
                    var _0x533072 = _0x21b3b3;
                    _0x718261[_0x533072(0x62b)]();
                    var _0x245fea = $(this)[_0x533072(0x26e)](_0x533072(0x4b8))
                      , _0x40e77f = parseInt(_0x245fea[_0x533072(0x88c)](_0x533072(0x54d)))
                      , _0x2a7622 = _0x245fea[_0x533072(0x88c)](_0x533072(0x603));
                    _0x389039[_0x533072(0x4ca)] && _0x40e77f >= 0x0 && _0x40e77f < _0x389039[_0x533072(0x4ca)]['length'] && (_0x389039[_0x533072(0x4ca)][_0x533072(0x61f)](_0x40e77f, 0x1),
                    localStorage[_0x533072(0x39f)](_0x533072(0x852), JSON['stringify'](_0x389039)),
                    _0x245fea[_0x533072(0x7df)](0x12c, function() {
                        var _0x5f652 = _0x533072;
                        $(this)[_0x5f652(0x6f9)](),
                        _0x43b598[_0x5f652(0x76b)](_0x5f652(0x4b8))[_0x5f652(0x888)](function(_0x1c7242) {
                            var _0x38ff5d = _0x5f652;
                            $(this)[_0x38ff5d(0x88c)]('data-index', _0x1c7242);
                        }),
                        _0x389039[_0x5f652(0x4ca)]['length'] === 0x0 && (_0x43b598[_0x5f652(0x534)](),
                        $(_0x5f652(0x551))[_0x5f652(0x6ee)]({
                            'text-align': _0x5f652(0x57b),
                            'padding': _0x5f652(0x2f0),
                            'color': _0x5f652(0x322),
                            'margin': '20px\x200',
                            'grid-column': _0x5f652(0x533)
                        })['text'](_0x5f652(0x2fd))[_0x5f652(0x75f)](_0x43b598)),
                        _0x567e24['currentHatId'] === _0x2a7622 && _0x567e24['hatToggleButton'] && _0x567e24['hatToggleButton'][_0x5f652(0x440)](_0x5f652(0x542))[_0x5f652(0x6ee)](_0x5f652(0x41d), _0x5f652(0x363));
                    }));
                });
            })),
            $(_0x13eb4a(0x576))['on']('scroll', function() {
                var _0x8df63f = _0x13eb4a;
                $(this)[_0x8df63f(0x6ee)](_0x8df63f(0x75c), 'auto');
            }),
            $(_0x13eb4a(0x85d))['on'](_0x13eb4a(0x6e4), function() {
                setTimeout(function() {
                    var _0x28185a = _0x31dd;
                    $(_0x28185a(0x576))[_0x28185a(0x822)](0x0);
                }, 0x64);
            });
        }
        ;
        function _0xa0118c(_0x4c034c) {
            try {
                if (ooo && ooo['Mh'] && ooo['Mh']['Lh'] && ooo['Mh']['Lh']['ki']) {
                    const _0x63d55b = ooo['Mh']['Lh']['ki']['Yi'];
                    ooo['Mh']['Lh']['ki']['Yi'] = _0x4c034c;
                    ooo['Mh']['Qh'] && ooo['Mh']['Qh']['fh'] && ooo['Mh']['li'] && ooo['Mh']['li'][ooo['Mh']['Qh']['fh']] && ooo['Mh']['li'][ooo['Mh']['Qh']['fh']]['ki'] && (ooo['Mh']['li'][ooo['Mh']['Qh']['fh']]['ki']['Yi'] = _0x4c034c);
                    if (_0x276741 && _0x276741['uj'] && _0x276741['n']) {
                        const _0x3afcaf = _0x33af91(_0x276741['uj']);
                        if (_0x3afcaf)
                            return _0x2fb3e2(_0x3afcaf, _0x4c034c),
                            !![];
                        else {
                            const _0x1a9817 = ooo['ud']['Cc']()['Yb'](_0x4c034c);
                            if (_0x1a9817)
                                return _0x351ca4(_0x276741['uj'], _0x1a9817),
                                !![];
                        }
                    }
                    return !![];
                }
            } catch (_0x513a32) {}
            return ![];
        }
        function _0x33af91(_0x10f633) {
            if (_0x10f633['Zc'] && _0x10f633['Zc']['rd'])
                return _0x10f633['Zc']['rd'];
            return null;
        }
        function _0x2fb3e2(_0x53fc47, _0x2b4e45) {
            var _0x3dde6f = _0x434858;
            if (_0x53fc47 && _0x53fc47[_0x3dde6f(0x2a1)] > 0x0) {
                const _0x38882d = ooo['ud']['Cc']()['Yb'](_0x2b4e45);
                if (_0x38882d && _0x38882d['dc'] && _0x38882d['dc'][_0x3dde6f(0x2a1)] > 0x0)
                    try {
                        return _0x53fc47[0x0]['kd'](_0x38882d['dc'][0x0]),
                        !![];
                    } catch (_0x55176b) {}
            }
            return ![];
        }
        function _0x351ca4(_0x45e36d, _0x19558d) {
            if (_0x45e36d && _0x45e36d['Zc'] && _0x19558d)
                try {
                    return _0x45e36d['Zc']['yd'](0.004, _0x45e36d['Zc']['rd'], _0x19558d),
                    !![];
                } catch (_0x4bc122) {}
            return ![];
        }
        function _0x4e8e04() {
            var _0x2608c5 = _0x434858;
            if (!_0x389039[_0x2608c5(0x4ca)]) {
                _0x389039[_0x2608c5(0x4ca)] = [],
                localStorage[_0x2608c5(0x39f)](_0x2608c5(0x852), JSON[_0x2608c5(0x880)](_0x389039));
                return;
            }
            if (_0x389039[_0x2608c5(0x4ca)][_0x2608c5(0x2a1)] > 0x0) {
                _0x389039['currentHatIndex'] === undefined ? _0x389039[_0x2608c5(0x57c)] = 0x0 : _0x389039[_0x2608c5(0x57c)] = (_0x389039['currentHatIndex'] + 0x1) % _0x389039[_0x2608c5(0x4ca)][_0x2608c5(0x2a1)];
                let _0x4aaea8 = _0x389039[_0x2608c5(0x4ca)][_0x389039[_0x2608c5(0x57c)]];
                const _0x36c13c = _0xa0118c(_0x4aaea8);
                localStorage[_0x2608c5(0x39f)](_0x2608c5(0x852), JSON[_0x2608c5(0x880)](_0x389039));
            }
        }
        function _0xca5fa0() {
            var _0x41489d = _0x434858;
            if (window[_0x41489d(0x426)])
                return;
            $(document)['on'](_0x41489d(0x836), function(_0x39077c) {
                var _0x59bcaa = _0x41489d;
                (_0x39077c[_0x59bcaa(0x4ec)] === 0x32 || _0x39077c['which'] === 0x32) && _0x4e8e04();
            }),
            window[_0x41489d(0x426)] = !![];
        }
        function _0x36eddd() {
            var _0x1be505 = _0x434858;
            if (!_0x389039['selectedHats'] || _0x389039[_0x1be505(0x4ca)][_0x1be505(0x2a1)] === 0x0)
                return;
            _0x389039[_0x1be505(0x4ca)][_0x1be505(0x588)](function(_0x246268) {
                _0x814be3(_0x246268);
            });
        }
        $(document)[_0x434858(0x359)](function() {
            setTimeout(function() {
                var _0x325ce3 = _0x31dd;
                _0xca5fa0(),
                _0x36eddd(),
                window[_0x325ce3(0x7e5)] = function() {
                    var _0x57dddf = _0x325ce3;
                    if (_0x2826e9['prototype']['showFavoritesDialog']) {
                        var _0xb752f9 = new _0x2826e9();
                        _0xb752f9[_0x57dddf(0x5d7)]();
                    }
                }
                ,
                window[_0x325ce3(0x6c7)] = function() {}
                ;
            }, 0x3e8);
        });
        function _0x460127() {
            try {
                const _0x262629 = []
                  , _0x3d3bea = ooo['ud']['Cc']();
                if (!_0x3d3bea)
                    return _0x262629;
                for (let _0x58c35a in _0x3d3bea['Vb']) {
                    _0x3d3bea['Vb']['hasOwnProperty'](_0x58c35a) && _0x262629['push'](_0x58c35a);
                }
                return _0x262629;
            } catch (_0x2d1a1b) {
                return [];
            }
        }
        function _0x43e11c() {}
        window['addEventListener'](_0x434858(0x3c3), function() {
            setTimeout(function() {
                _0x36eddd(),
                _0x43e11c();
            }, 0x7d0);
        }),
        _0x266fdd = (function() {
            var _0x36d590 = _0x434858;
            function _0x4d7bc1(_0x4f5ad9, _0x358842, _0x2d1f32) {
                this['Cp'] = _0x4f5ad9,
                this['Wd'] = _0x358842,
                this['ep'] = _0x2d1f32,
                this['Lc'] = {},
                this['Sp'] = [[]],
                this['Tp'] = -0xa,
                this['Up'] = -0xa;
            }
            return _0x4d7bc1[_0x36d590(0x2a8)]['Op'] = function(_0x41ca99) {
                this['Sp'] = _0x41ca99;
            }
            ,
            _0x4d7bc1['prototype']['Pp'] = function(_0x1b6b43) {
                this['Lc'] = _0x1b6b43;
            }
            ,
            _0x4d7bc1['prototype']['ml'] = function() {
                var _0x3bcc1d = ooo['so']['Zj'](this['Wd']);
                for (var _0x38ce97 = 0x0; _0x38ce97 < this['Sp']['length']; _0x38ce97++) {
                    for (var _0x3e688e = 0x0; _0x3e688e < this['Sp'][_0x38ce97]['length']; _0x3e688e++) {
                        if (this['Sp'][_0x38ce97][_0x3e688e] === _0x3bcc1d) {
                            this['Vp'](_0x38ce97),
                            this['Wp'](_0x3e688e);
                            return;
                        }
                    }
                }
                ;this['Vp'](0x0),
                this['Wp'](0x0);
            }
            ,
            _0x4d7bc1['prototype']['Lp'] = function() {
                var _0x1ee17e = _0x36d590
                  , _0x23c545 = this['Tp'] - 0x1;
                _0x23c545 < 0x0 && (_0x23c545 = this['Sp'][_0x1ee17e(0x2a1)] - 0x1),
                this['Vp'](_0x23c545),
                this['Wp'](this['Up'] % this['Sp'][_0x23c545][_0x1ee17e(0x2a1)]);
            }
            ,
            _0x4d7bc1[_0x36d590(0x2a8)]['Mp'] = function() {
                var _0x33f8e8 = _0x36d590
                  , _0x3f7181 = this['Tp'] + 0x1;
                _0x3f7181 >= this['Sp']['length'] && (_0x3f7181 = 0x0),
                this['Vp'](_0x3f7181),
                this['Wp'](this['Up'] % this['Sp'][_0x3f7181][_0x33f8e8(0x2a1)]);
            }
            ,
            _0x4d7bc1[_0x36d590(0x2a8)]['Vp'] = function(_0x511e79) {
                var _0x5ecc57 = _0x36d590
                  , _0x422dd0 = this;
                if (!(_0x511e79 < 0x0) && !(_0x511e79 >= this['Sp'][_0x5ecc57(0x2a1)])) {
                    this['Tp'] = _0x511e79,
                    _0x317590['empty']();
                    var _0x259807 = this['Sp'][this['Tp']];
                    if (_0x259807[_0x5ecc57(0x2a1)] > 0x1)
                        for (var _0x5da835 = 0x0; _0x5da835 < _0x259807[_0x5ecc57(0x2a1)]; _0x5da835++) {
                            (function(_0x2a2de2) {
                                var _0x24b68c = _0x5ecc57
                                  , _0x3ff79e = _0x259807[_0x2a2de2]
                                  , _0x24ee1b = _0x422dd0['Lc'][_0x3ff79e]
                                  , _0x476a07 = '#' + _0x422dd0['Cp']['Jp'][_0x24ee1b['prime']]
                                  , _0xc61309 = $(_0x24b68c(0x2d0) + _0x476a07 + _0x24b68c(0x49b));
                                _0xc61309[_0x24b68c(0x68c)](function() {
                                    ooo['ij']['if'](),
                                    _0x422dd0['Wp'](_0x2a2de2);
                                }),
                                _0x317590['append'](_0xc61309);
                            }(_0x5da835));
                        }
                }
            }
            ,
            _0x4d7bc1[_0x36d590(0x2a8)]['Wp'] = function(_0x12ce57) {
                var _0xafd4a3 = _0x36d590;
                if (!(_0x12ce57 < 0x0) && !(_0x12ce57 >= this['Sp'][this['Tp']][_0xafd4a3(0x2a1)])) {
                    this['Up'] = _0x12ce57,
                    _0x317590[_0xafd4a3(0x665)]()[_0xafd4a3(0x6ee)](_0xafd4a3(0x41d), _0xafd4a3(0x37c));
                    var _0x229803 = _0x317590[_0xafd4a3(0x665)](':nth-child(' + (0x1 + _0x12ce57) + ')');
                    _0x229803[_0xafd4a3(0x6ee)](_0xafd4a3(0x41d), _0x229803[_0xafd4a3(0x6ee)](_0xafd4a3(0x2d3))),
                    this['Cp']['tp'](!![]);
                }
            }
            ,
            _0x4d7bc1[_0x36d590(0x2a8)]['Ap'] = function() {
                return this['Sp'][this['Tp']][this['Up']];
            }
            ,
            _0x4d7bc1;
        }()),
        _0xa8b9d9['Vk'] = _0x2826e9,
        _0x11cc3a = $('.play-button'),
        _0x272bc7 = $(_0x434858(0x6ba)),
        (_0x261efe = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x16f494 = _0x434858;
            _0xa8b9d9['Ho'][_0x16f494(0x3ed)](this, _0xbc3655['U'](_0x16f494(0x4a5)), ![]),
            _0x11cc3a[_0x16f494(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['kp']() ? (ooo['Xg']['gl'](ooo['Xg']['Jf']),
                ooo['Xp'](![], !![]),
                ooo['Xg']['Yk']['Fo'](new _0xa8b9d9['Yp']())) : ooo['Xg']['jl']();
            }),
            _0x272bc7[_0x16f494(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['jl']();
            });
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x1b6316 = _0x434858;
            _0x261efe[_0x1b6316(0x75b)][_0x1b6316(0x2a8)]['Sa'][_0x1b6316(0x3ed)](this);
        }
        ,
        _0x261efe[_0x434858(0x2a8)]['Wo'] = function() {
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Mo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['No'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Oo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Po'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Qo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Ro'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['So'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['To'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['Uo'], 0xc8),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Vo'], 0x32);
        }
        ,
        _0x261efe[_0x434858(0x2a8)]['nl'] = function() {
            ooo['ij']['jf']();
        }
        ,
        _0xa8b9d9['Ek'] = _0x261efe,
        _0x8882f2 = $('#delete-account-timer'),
        _0x20dbde = $(_0x434858(0x2df)),
        _0x4547cc = $(_0x434858(0x7fe)),
        (_0x11855b = _0xbc3655['ca'](_0xa8b9d9['Ho'], function() {
            var _0x4336c2 = _0x434858;
            _0xa8b9d9['Ho']['call'](this, _0xbc3655['U'](_0x4336c2(0x672)), ![]),
            _0x20dbde[_0x4336c2(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['ok']['nk']() ? (ooo['ok']['ym'](),
                ooo['ok']['qm']()) : ooo['Xg']['jl']();
            }),
            _0x4547cc[_0x4336c2(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['jl']();
            }),
            this['Zp'] = [];
        }))[_0x434858(0x2a8)]['Sa'] = function() {
            var _0x101f7a = _0x434858;
            _0x11855b[_0x101f7a(0x75b)][_0x101f7a(0x2a8)]['Sa'][_0x101f7a(0x3ed)](this);
        }
        ,
        _0x11855b[_0x434858(0x2a8)]['Wo'] = function() {
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Mo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['No'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Oo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Po'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Qo'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Ro'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['So'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['To'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Ho']['Uo'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Ho']['Vo'], 0xc8);
        }
        ,
        _0x11855b[_0x434858(0x2a8)]['nl'] = function() {
            var _0x4aedfc = _0x434858;
            ooo['ij']['nf'](),
            _0x148283['f']['h'](_0x20dbde, 0x1),
            _0x148283['f']['g'](_0x8882f2, 0x1),
            _0x8882f2[_0x4aedfc(0x440)](_0x4aedfc(0x6f6)),
            this['$p'](),
            this['_p'](function() {
                var _0x41609b = _0x4aedfc;
                _0x8882f2[_0x41609b(0x440)](_0x41609b(0x877));
            }, 0x3e8),
            this['_p'](function() {
                _0x8882f2['text']('..8\x20..');
            }, 0x7d0),
            this['_p'](function() {
                var _0x266a60 = _0x4aedfc;
                _0x8882f2[_0x266a60(0x440)](_0x266a60(0x80c));
            }, 0xbb8),
            this['_p'](function() {
                var _0x33f23a = _0x4aedfc;
                _0x8882f2[_0x33f23a(0x440)]('..6\x20..');
            }, 0xfa0),
            this['_p'](function() {
                var _0x1ec80f = _0x4aedfc;
                _0x8882f2['text'](_0x1ec80f(0x803));
            }, 0x1388),
            this['_p'](function() {
                var _0xfb61c4 = _0x4aedfc;
                _0x8882f2['text'](_0xfb61c4(0x7e4));
            }, 0x1770),
            this['_p'](function() {
                var _0x5122f3 = _0x4aedfc;
                _0x8882f2['text'](_0x5122f3(0x5a6));
            }, 0x1b58),
            this['_p'](function() {
                var _0x66b95a = _0x4aedfc;
                _0x8882f2['text'](_0x66b95a(0x32a));
            }, 0x1f40),
            this['_p'](function() {
                var _0x583388 = _0x4aedfc;
                _0x8882f2['text'](_0x583388(0x573));
            }, 0x2328),
            this['_p'](function() {
                _0x148283['f']['g'](_0x20dbde, 0x12c),
                _0x148283['f']['h'](_0x8882f2, 0x1);
            }, 0x2710);
        }
        ,
        _0x11855b[_0x434858(0x2a8)]['_p'] = function(_0x54bda4, _0x2f3064) {
            var _0x101d29 = _0x434858
              , _0x36cc27 = _0xbc3655['Y'](_0x54bda4, _0x2f3064);
            this['Zp'][_0x101d29(0x23c)](_0x36cc27);
        }
        ,
        _0x11855b[_0x434858(0x2a8)]['$p'] = function() {
            var _0xd6c333 = _0x434858;
            for (var _0x42e7e2 = 0x0; _0x42e7e2 < this['Zp'][_0xd6c333(0x2a1)]; _0x42e7e2++) {
                _0xbc3655['Z'](this['Zp'][_0x42e7e2]);
            }
            ;this['Zp'] = [];
        }
        ,
        _0xa8b9d9['Gk'] = _0x11855b,
        _0xa8b9d9['aq'] = (function() {
            var _0x590038 = _0x434858;
            function _0x4818d0() {
                this['Go'] = function() {}
                ;
            }
            return _0x4818d0[_0x590038(0x2a8)]['ag'] = function() {}
            ,
            _0x4818d0[_0x590038(0x2a8)]['nl'] = function() {}
            ,
            _0x4818d0;
        }()),
        (_0x10a3dd = _0xbc3655['ca'](_0xa8b9d9['aq'], function(_0x3e52dd) {
            var _0x5247da = _0x434858;
            _0xa8b9d9['aq'][_0x5247da(0x3ed)](this);
            var _0x3d3e35 = _0xbc3655['Ca']() + '_' + _0xbc3655['_'](0x3e8 + _0xbc3655['ma']() * 0x2327);
            this['bq'] = $(_0x5247da(0x2da) + _0x3d3e35 + _0x5247da(0x491) + _0x3e52dd + _0x5247da(0x58c) + _0xbc3655['U'](_0x5247da(0x704)) + _0x5247da(0x6a9));
            var _0x4df1bd = this;
            this['bq'][_0x5247da(0x76b)](_0x5247da(0x2b4))[_0x5247da(0x68c)](function() {
                ooo['ij']['if'](),
                _0x4df1bd['Go']();
            });
        }))['prototype']['ag'] = function() {
            return this['bq'];
        }
        ,
        _0x10a3dd['prototype']['nl'] = function() {
            ooo['ij']['lf']();
        }
        ,
        _0xa8b9d9['mm'] = _0x10a3dd,
        (_0x5c0cfb = _0xbc3655['ca'](_0xa8b9d9['aq'], function(_0x2e4c29) {
            var _0x5844ea = _0x434858;
            _0xa8b9d9['aq']['call'](this);
            var _0xe538df = _0xbc3655['Ca']() + '_' + _0xbc3655['_'](0x3e8 + _0xbc3655['ma']() * 0x2327);
            this['bq'] = $(_0x5844ea(0x2da) + _0xe538df + _0x5844ea(0x1e3) + _0x2e4c29 + _0x5844ea(0x43b) + _0xbc3655['U'](_0x5844ea(0x62c)) + _0x5844ea(0x4f1) + _0xbc3655['U'](_0x5844ea(0x704)) + _0x5844ea(0x6a9));
            var _0x3d6d1e = this;
            this['bq'][_0x5844ea(0x76b)](_0x5844ea(0x818))[_0x5844ea(0x68c)](function() {
                ooo['ij']['if'](),
                _0x3d6d1e['Go']();
            });
        }))['prototype']['ag'] = function() {
            return this['bq'];
        }
        ,
        _0x5c0cfb[_0x434858(0x2a8)]['nl'] = function() {
            ooo['ij']['kf']();
        }
        ,
        _0xa8b9d9['lm'] = _0x5c0cfb,
        (_0x4d2d1d = _0xbc3655['ca'](_0xa8b9d9['aq'], function() {
            var _0x1c7fe0 = _0x434858;
            _0xa8b9d9['aq'][_0x1c7fe0(0x3ed)](this);
            var _0x349cc4 = this
              , _0x421340 = _0xbc3655['Ca']() + '_' + _0xbc3655['_'](0x3e8 + _0xbc3655['ma']() * 0x2327);
            this['bq'] = $(_0x1c7fe0(0x2da) + _0x421340 + _0x1c7fe0(0x5c2) + _0x4cd94d['H']['L'] + '\x22\x20alt=\x22Wormate.io\x20logo\x22/><div\x20class=\x22toaster-consent-accepted-container\x22><span\x20class=\x22toaster-consent-accepted-text\x22>' + _0xbc3655['U'](_0x1c7fe0(0x23f))[_0x1c7fe0(0x2c3)]('\x20', _0x1c7fe0(0x81a))[_0x1c7fe0(0x2c3)]('\x0a', _0x1c7fe0(0x66e)) + _0x1c7fe0(0x287) + _0xbc3655['U'](_0x1c7fe0(0x45f)) + _0x1c7fe0(0x619) + _0xbc3655['U'](_0x1c7fe0(0x267)) + '</div></div>'),
            this['cq'] = this['bq'][_0x1c7fe0(0x76b)](_0x1c7fe0(0x661)),
            this['cq']['hide'](),
            this['cq'][_0x1c7fe0(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['kp']() && ooo['Xp'](!![], !![]),
                _0x349cc4['Go']();
            });
        }))['prototype']['ag'] = function() {
            return this['bq'];
        }
        ,
        _0x4d2d1d[_0x434858(0x2a8)]['nl'] = function() {
            var _0x100447 = this;
            ooo['kp']() && !ooo['Pl']() ? (ooo['ij']['nf'](),
            _0xbc3655['Y'](function() {
                var _0x4d0045 = _0x31dd;
                _0x100447['cq'][_0x4d0045(0x497)](0x12c);
            }, 0x7d0)) : _0xbc3655['Y'](function() {
                _0x100447['Go']();
            }, 0x0);
        }
        ,
        _0xa8b9d9['Yp'] = _0x4d2d1d,
        _0x325288 = $(_0x434858(0x817)),
        (_0x35dd7a = _0xbc3655['ca'](_0xa8b9d9['Uf'], function() {
            var _0x4c046a = _0x434858;
            _0xa8b9d9['Uf'][_0x4c046a(0x3ed)](this, _0xa8b9d9['ll']['ao']),
            _0x325288[_0x4c046a(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['Re']['qo'](),
                ooo['Xg']['gl'](ooo['Xg']['Re']),
                _0xbc3655['Y'](function() {
                    var _0x5bdb98 = _0x31dd
                      , _0x3ea4e8 = _0x4cd94d['H']['J'] + _0x5bdb98(0x7e8);
                    _0xbc3655['Aa'](_0x3ea4e8, function() {
                        ooo['Xg']['gl'](ooo['Xg']['_k']);
                    }, function(_0x48e005) {
                        ooo['Xg']['Re']['oo'](),
                        ooo['ud']['rc'](function() {
                            ooo['Xg']['gl'](ooo['Xg']['Jf']);
                        }, function(_0xad1ce1) {
                            ooo['Xg']['gl'](ooo['Xg']['_k']);
                        }, function(_0x1b86a3, _0x577bde) {
                            ooo['Xg']['Re']['po'](_0x1b86a3, _0x577bde);
                        });
                    });
                }, 0x7d0);
            });
        }))['prototype']['Sa'] = function() {}
        ,
        _0x35dd7a[_0x434858(0x2a8)]['ml'] = function() {
            _0xa8b9d9['Nf']['rg'](!![]),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Tf'], 0x1f4),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Qn'], 0x1),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Rn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Sn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Un'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Vn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Wn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Xn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Yn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Zn'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['$n'], 0x1f4),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['_n'], 0x32);
        }
        ,
        _0x35dd7a[_0x434858(0x2a8)]['nl'] = function() {
            ooo['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Jf']),
            ooo['ij']['nf']();
        }
        ,
        _0xa8b9d9['al'] = _0x35dd7a,
        _0x21d218 = $(_0x434858(0x22c)),
        (_0x43e223 = _0xbc3655['ca'](_0xa8b9d9['Uf'], function() {
            var _0x156587 = _0x434858;
            _0xa8b9d9['Uf'][_0x156587(0x3ed)](this, _0xa8b9d9['ll']['ao']),
            _0x21d218[_0x156587(0x68c)](function() {
                ooo['ij']['if'](),
                ooo['Xg']['gl'](ooo['Xg']['Jf']);
            });
        }))[_0x434858(0x2a8)]['Sa'] = function() {}
        ,
        _0x43e223[_0x434858(0x2a8)]['ml'] = function() {
            _0xa8b9d9['Nf']['rg'](!![]),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Tf'], 0x1f4),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['Qn'], 0x1),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Rn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Sn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Tn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Un'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Vn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Wn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Xn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Yn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['Zn'], 0x32),
            _0x148283['f']['h'](_0xa8b9d9['Uf']['$n'], 0x32),
            _0x148283['f']['g'](_0xa8b9d9['Uf']['_n'], 0x1f4);
        }
        ,
        _0x43e223[_0x434858(0x2a8)]['nl'] = function() {
            ooo['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Jf']),
            ooo['ij']['nf']();
        }
        ,
        _0xa8b9d9['cl'] = _0x43e223,
        _0xbc3655['dq'] = function() {
            function _0x4f998e(_0x316128) {
                var _0x1ad531 = _0x316128 + _0xbc3655['_'](_0xbc3655['ma']() * 0xffff) * 0x25;
                _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Lg'], _0x1ad531, 0x1e);
            }
            return (function() {
                var _0x2377e6 = _0x31dd
                  , _0x15636f = parseInt(_0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Lg'])) % 0x25;
                (!(_0x15636f >= 0x0) || !(_0x15636f < _0x4cd94d['co']['fq'])) && (_0x15636f = _0xbc3655['ia'](0x0, _0x4cd94d['co']['fq'] - 0x2));
                var _0x5ad9e4 = {
                    'gq': ![]
                };
                _0x5ad9e4['hq'] = _0xbc3655['Ca'](),
                _0x5ad9e4['iq'] = 0x0,
                _0x5ad9e4['jq'] = 0x0,
                _0x5ad9e4['kq'] = null,
                _0x5ad9e4['lq'] = _0x4cd94d['H']['Q'],
                _0x5ad9e4['mq'] = _0x4cd94d['H']['P'],
                _0x5ad9e4['Mh'] = null,
                _0x5ad9e4['ud'] = null,
                _0x5ad9e4['ef'] = null,
                _0x5ad9e4['ij'] = null,
                _0x5ad9e4['Xg'] = null,
                _0x5ad9e4['so'] = null,
                _0x5ad9e4['ok'] = null;
                try {
                    var _0x3eae9a = navigator;
                    if (_0x3eae9a) {
                        var _0x19aee6 = _0x3eae9a[_0x2377e6(0x727)];
                        _0x19aee6 && _0x19aee6[_0x2377e6(0x53e)](function(_0x3544d2) {
                            var _0x103a27 = _0x2377e6
                              , _0x3f919e = _0x3544d2[_0x103a27(0x462)];
                            _typeof(_0x3f919e) != _0x103a27(0x799) && _typeof(_0x3f919e[_0x103a27(0x305)]) != 'undefined' && _typeof(_0x3f919e['longitude']) != _0x103a27(0x799) && (_0x5ad9e4['kq'] = _0x3544d2);
                        }, function(_0x3a7e6b) {});
                    }
                } catch (_0x1a4e06) {}
                ;return _0x5ad9e4['Sa'] = function() {
                    var _0x119a84 = _0x2377e6;
                    _0x5ad9e4['Mh'] = new _0xa8b9d9['nq'](),
                    _0x5ad9e4['Mh']['oq'] = new _0xa8b9d9['si'](_0x5ad9e4['Mh']),
                    _0x5ad9e4['ud'] = new _0xa8b9d9['Kb'](),
                    _0x5ad9e4['ef'] = new _0xa8b9d9['wk'](),
                    _0x5ad9e4['ij'] = new _0xa8b9d9['Pe'](),
                    _0x5ad9e4['Xg'] = new _0xa8b9d9['zk'](),
                    _0x5ad9e4['so'] = new _0xa8b9d9['Sj'](),
                    _0x5ad9e4['ok'] = new _0xa8b9d9['sl']();
                    try {
                        ga('send', _0x119a84(0x83d), _0x119a84(0x1d0), _0x4cd94d['H']['I'] + _0x119a84(0x514));
                    } catch (_0x2823e5) {}
                    ;_0x5ad9e4['Mh']['pq'] = function() {
                        _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['bl']);
                    }
                    ,
                    _0x5ad9e4['Mh']['qq'] = function() {
                        var _0x431728 = _0x119a84
                          , _0x430022 = _0x5ad9e4['Xg']['Jf']['Ao']();
                        try {
                            ga('send', _0x431728(0x83d), 'game', _0x4cd94d['H']['I'] + _0x431728(0x206), _0x430022);
                        } catch (_0x1174b1) {}
                        ;_0x5ad9e4['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Kf']),
                        _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['Kf']['ho']());
                    }
                    ,
                    _0x5ad9e4['Mh']['rq'] = function() {
                        var _0x168c54 = _0x119a84, _0x1a5a37, _0x519e3a;
                        try {
                            ga('send', 'event', 'game', _0x4cd94d['H']['I'] + _0x168c54(0x601));
                        } catch (_0x22c9e3) {}
                        ;$(_0x168c54(0x247))[_0x168c54(0x6f1)]() >= 0x1ae && _0x4cd94d['co']['sq']['Va'](),
                        _0x5ad9e4['ud']['rc'](null, null, null),
                        _0x1a5a37 = _0xbc3655['_'](_0x5ad9e4['Mh']['Lh']['hi']),
                        _0x519e3a = _0x5ad9e4['Mh']['oi'],
                        _0x5ad9e4['ok']['nk']() ? _0x5ad9e4['ok']['hm'](function() {
                            _0x5ad9e4['tq'](_0x1a5a37, _0x519e3a);
                        }) : _0x5ad9e4['tq'](_0x1a5a37, _0x519e3a);
                    }
                    ,
                    _0x5ad9e4['Mh']['uq'] = function(_0x1e05fd) {
                        _0x1e05fd(_0x5ad9e4['Xg']['Kf']['ko'](), _0x5ad9e4['Xg']['Kf']['lo']());
                    }
                    ,
                    _0x5ad9e4['ok']['em'](function() {
                        var _0x4a2e42 = _0x119a84
                          , _0x110271 = _0x5ad9e4['Xg']['rl']();
                        _0x110271 != null && _0x110271['Wd'] === _0xa8b9d9['ll']['kl'] && (_0x5ad9e4['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Jf']),
                        _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['Jf']));
                        if (_0x5ad9e4['ok']['nk']()) {
                            var _0x524b9a = _0x5ad9e4['ok']['Kl']();
                            try {
                                ga(_0x4a2e42(0x25b), _0x4a2e42(0x374), _0x524b9a);
                            } catch (_0x655921) {}
                            ;try {
                                zE(_0x4a2e42(0x205), _0x4a2e42(0x848), function(_0x3f28db) {
                                    _0x3f28db(_0x524b9a);
                                });
                            } catch (_0x29da20) {}
                        } else
                            try {
                                zE(_0x4a2e42(0x1fa), _0x4a2e42(0x871));
                            } catch (_0x16e6a4) {}
                        ;_0x5ad9e4['kp']() && _0x5ad9e4['ok']['nk']() && !_0x5ad9e4['ok']['Pl']() ? (_0x5ad9e4['Xp'](![], ![]),
                        _0x5ad9e4['Xg']['Yk']['Fo'](new _0xa8b9d9['Yp']())) : _0x5ad9e4['vq'](!![]);
                    }),
                    _0x5ad9e4['Mh']['Sa'](),
                    _0x5ad9e4['Xg']['Sa'](),
                    _0x5ad9e4['so']['Sa'](),
                    _0x5ad9e4['ud']['Sa'](),
                    _0x5ad9e4['Xg']['Jf']['zo'](),
                    _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['Jf']),
                    _0x5ad9e4['ef']['Sa'](function() {
                        _0x5ad9e4['ij']['Sa'](),
                        _0x5ad9e4['ok']['Sa'](),
                        _0x5ad9e4['ud']['rc'](function() {
                            _0x5ad9e4['Xg']['Jf']['yo'](),
                            _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['Jf']);
                        }, function(_0x179a77) {
                            _0x5ad9e4['Xg']['Jf']['yo'](),
                            _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['_k']);
                        }, function(_0x31d2e7, _0x9ca5aa) {
                            var _0x1483f0 = _0x31d2e7;
                            _0x5ad9e4['Xg']['Re']['po'](_0x1483f0, _0x9ca5aa),
                            _0x5ad9e4['Xg']['Jf']['po'](_0x1483f0, _0x9ca5aa);
                        }),
                        _0x5ad9e4['kp']() && !_0x5ad9e4['Pl']() ? _0x5ad9e4['Xg']['Yk']['Fo'](new _0xa8b9d9['Yp']()) : _0x5ad9e4['vq'](!![]);
                    });
                }
                ,
                _0x5ad9e4['wq'] = function(_0x5985dd) {
                    var _0x1d4958 = _0x2377e6;
                    if (_0x5ad9e4['ok']['nk']()) {
                        var _0x202c84 = _0x5ad9e4['ok']['gm']()
                          , _0x277072 = _0x4cd94d['H']['J'] + _0x1d4958(0x3ba) + _0x202c84 + _0x1d4958(0x321) + _0xbc3655['W'](_0x5985dd);
                        _0xbc3655['Aa'](_0x277072, function() {}, function(_0x4cc37d) {});
                    }
                }
                ,
                _0x5ad9e4['to'] = function() {
                    _0x15636f++,
                    _0x276741['on'] && (_0x15636f = 0x1),
                    !_0x4cd94d['co']['xq'] && _0x15636f >= _0x4cd94d['co']['fq'] ? (_0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['dl']),
                    _0x5ad9e4['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Mf']),
                    _0x4cd94d['co']['yq']['Ta']()) : (_0x4f998e(_0x15636f),
                    _0x5ad9e4['zq']());
                }
                ,
                _0x5ad9e4['zq'] = function() {
                    var _0x329a9e = _0x2377e6;
                    if (_0x5ad9e4['Mh']['Aq']()) {
                        _0x5ad9e4['Xg']['Re']['qo'](),
                        _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['Re']);
                        var _0xee481a = _0x5ad9e4['Xg']['Jf']['Ao']();
                        _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Ig'], _0xee481a, 0x1e);
                        var _0xb26a72 = _0x5ad9e4['Xg']['Hi']['Gi']();
                        _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Eg'], _0xb26a72, 0x1e);
                        var _0x5c96dc = 0x0;
                        if (_0x5ad9e4['kq'] != null) {
                            var _0x84bb42 = _0x5ad9e4['kq'][_0x329a9e(0x462)][_0x329a9e(0x305)]
                              , _0x1167f7 = _0x5ad9e4['kq'][_0x329a9e(0x462)]['longitude'];
                            _0x5c96dc = _0xbc3655['ia'](0x0, _0xbc3655['ha'](0x7fff, (_0x84bb42 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | _0xbc3655['ia'](0x0, _0xbc3655['ha'](0xffff, (_0x1167f7 + 0xb4) / 0x168 * 0x10000)) << 0x10;
                        }
                        ;if (_0x5ad9e4['ok']['nk']())
                            _0x5ad9e4['Bq'](_0xee481a, _0x5c96dc);
                        else {
                            var _0x64ea26 = _0x5ad9e4['Xg']['Jf']['Ml']();
                            _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Jg'], _0x64ea26, 0x1e);
                            var _0x3b11f3 = _0x5ad9e4['so']['Zj'](_0xa8b9d9['_j']['$j']);
                            _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Kg'], _0x3b11f3, 0x1e),
                            _0x5ad9e4['Cq'](_0xee481a, _0x5c96dc);
                        }
                    }
                }
                ,
                _0x5ad9e4['Bq'] = function(_0x21968c, _0x297279) {
                    var _0x1abcb0 = _0x2377e6, _0x199e6c, _0x4cf622 = _0x5ad9e4['ok']['gm'](), _0x447e27 = window[_0x1abcb0(0x3af)](_0x5ad9e4['Xg']['Jf']['Ml']()), _0x3b87f1 = _0x5ad9e4['so']['Zj'](_0xa8b9d9['_j']['$j']), _0x55b100 = _0x5ad9e4['so']['Zj'](_0xa8b9d9['_j']['ak']), _0xf54001 = _0x5ad9e4['so']['Zj'](_0xa8b9d9['_j']['bk']);
                    _0x5a70dc(_0x3b87f1, _0x55b100, _0xf54001, _0x5ad9e4['so']['Zj'](_0xa8b9d9['_j']['dk']), _0x5ad9e4['so']['Zj'](_0xa8b9d9['_j']['ck']), _0x447e27);
                    var _0x11a6ce = (_0x447e27 = (_0x447e27 = _0x389039['f'])['trim']())[_0x1abcb0(0x42b)](_0x447e27[_0x1abcb0(0x7cf)](-0x7), '');
                    _0x11a6ce != _0x389039[_0x1abcb0(0x4e4)] && (_0x389039[_0x1abcb0(0x4e4)] = _0x11a6ce,
                    _0xd67a6f(_0x11a6ce[_0x1abcb0(0x681)]()));
                    var _0xc5724c = _0x4cd94d['H']['J'] + _0x1abcb0(0x3ba) + _0x4cf622 + _0x1abcb0(0x74f) + _0xbc3655['W'](_0x21968c) + _0x1abcb0(0x520) + _0x297279 + _0x1abcb0(0x468) + _0xbc3655['W'](_0x447e27) + '&skinId=' + _0x389039['a'] + _0x1abcb0(0x1c9) + _0x389039['b'] + '&mouthId=' + _0x389039['c'] + '&glassesId=' + _0x389039['d'] + _0x1abcb0(0x747) + _0x389039['e'];
                    _0xbc3655['Aa'](_0xc5724c, function() {
                        _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['_k']);
                    }, function(_0x591c4b) {
                        var _0x2132a1 = _0x1abcb0;
                        if (_0x591c4b['code'] === 0x5b4) {
                            _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['Wk']);
                            try {
                                ga(_0x2132a1(0x4ae), _0x2132a1(0x83d), _0x2132a1(0x368), _0x4cd94d['H']['I'] + _0x2132a1(0x650));
                            } catch (_0x5bc058) {}
                        } else {
                            if (_0x591c4b['code'] !== 0x4b0)
                                _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['_k']);
                            else {
                                var _0x3904fd = _0x591c4b[_0x2132a1(0x57f)]
                                  , _0x58a94f = _0x495abf(_0x3904fd['substr'](-0xa, 0x4));
                                $(_0x2132a1(0x6b8))[_0x2132a1(0x467)]() === '' ? ($(_0x2132a1(0x38e))[_0x2132a1(0x467)](_0x3904fd),
                                $(_0x2132a1(0x52d))['val'](_0x58a94f),
                                _0x389039['pi'] = _0x3904fd,
                                _0x389039['pn'] = _0x58a94f,
                                localStorage[_0x2132a1(0x39f)](_0x2132a1(0x852), JSON[_0x2132a1(0x880)](_0x389039)),
                                _0xaa345f[_0x2132a1(0x440)] = '' + _0x58a94f,
                                createCircle(),
                                _0x5ad9e4['Mh']['Dq'](_0x3904fd, _0x4cf622)) : ($(_0x2132a1(0x38e))[_0x2132a1(0x467)]($('#port_id')[_0x2132a1(0x467)]()),
                                $('#port_name_s')[_0x2132a1(0x467)]($('#port_name')['val']()),
                                _0x389039['pi'] = $(_0x2132a1(0x6b8))[_0x2132a1(0x467)](),
                                _0x389039['pn'] = $(_0x2132a1(0x4be))[_0x2132a1(0x467)](),
                                localStorage[_0x2132a1(0x39f)](_0x2132a1(0x852), JSON[_0x2132a1(0x880)](_0x389039)),
                                _0xaa345f['text'] = '' + $('#port_name')[_0x2132a1(0x467)](),
                                createCircle(),
                                _0x5ad9e4['Mh']['Dq']($(_0x2132a1(0x6b8))[_0x2132a1(0x467)](), _0x4cf622));
                            }
                        }
                    });
                }
                ,
                _0x5ad9e4['Cq'] = function(_0x462c9b, _0x141bce) {
                    var _0x4e9ed8 = _0x2377e6
                      , _0x594f4e = window[_0x4e9ed8(0x3af)](_0x5ad9e4['Xg']['Jf']['Ml']())
                      , _0x174e8d = _0x5ad9e4['so']['Zj'](_0xa8b9d9['_j']['$j'])
                      , _0x47b4a5 = _0x4cd94d['H']['J'] + _0x4e9ed8(0x2af) + _0xbc3655['W'](_0x462c9b) + _0x4e9ed8(0x520) + _0x141bce + '&nickname=' + _0xbc3655['W'](_0x594f4e) + _0x4e9ed8(0x567) + _0xbc3655['W'](_0x174e8d);
                    _0xbc3655['Aa'](_0x47b4a5, function() {
                        _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['_k']);
                    }, function(_0x95d3f) {
                        var _0x15193e = _0x4e9ed8;
                        if (_0x95d3f[_0x15193e(0x839)] === 0x5b4) {
                            _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['Wk']);
                            try {
                                ga('send', _0x15193e(0x83d), 'restricted', _0x4cd94d['H']['I'] + '_tick');
                            } catch (_0x4f6db7) {}
                        } else {
                            if (_0x95d3f['code'] !== 0x4b0)
                                _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['_k']);
                            else {
                                var _0x29c870 = _0x95d3f[_0x15193e(0x57f)]
                                  , _0x58641e = _0x495abf(_0x29c870[_0x15193e(0x7cf)](-0xa, 0x4));
                                $(_0x15193e(0x6b8))[_0x15193e(0x467)]() === '' ? ($(_0x15193e(0x38e))['val'](_0x29c870),
                                $(_0x15193e(0x52d))[_0x15193e(0x467)](_0x58641e),
                                _0x389039['pi'] = _0x29c870,
                                _0x389039['pn'] = _0x58641e,
                                localStorage[_0x15193e(0x39f)]('SaveGamewft', JSON[_0x15193e(0x880)](_0x389039)),
                                _0xaa345f['text'] = '' + _0x58641e,
                                createCircle(),
                                _0x5ad9e4['Mh']['Eq'](_0x29c870, _0x594f4e, _0x174e8d)) : ($('#port_id_s')[_0x15193e(0x467)]($(_0x15193e(0x6b8))[_0x15193e(0x467)]()),
                                $('#port_name_s')['val']($(_0x15193e(0x4be))[_0x15193e(0x467)]()),
                                _0x389039['pi'] = $(_0x15193e(0x6b8))['val'](),
                                _0x389039['pn'] = $(_0x15193e(0x4be))[_0x15193e(0x467)](),
                                localStorage[_0x15193e(0x39f)](_0x15193e(0x852), JSON[_0x15193e(0x880)](_0x389039)),
                                _0xaa345f[_0x15193e(0x440)] = '' + $(_0x15193e(0x4be))['val'](),
                                createCircle(),
                                _0x5ad9e4['Mh']['Eq']($(_0x15193e(0x6b8))[_0x15193e(0x467)](), _0x594f4e, _0x174e8d));
                            }
                        }
                    });
                }
                ,
                _0x5ad9e4['tq'] = function(_0x258a20, _0x1928f5) {
                    var _0x3f9458 = _0x5ad9e4['Xg']['Jf']['Ml']();
                    _0x5ad9e4['Xg']['Kf']['jo'](_0x258a20, _0x1928f5, _0x3f9458),
                    _0x5ad9e4['ij']['Ye'](_0xa8b9d9['Pe']['Se']['Lf']),
                    _0x5ad9e4['Xg']['gl'](_0x5ad9e4['Xg']['Kf']['io']());
                }
                ,
                _0x5ad9e4['wo'] = function() {
                    if (!_0x5ad9e4['xo']())
                        return _0x5ad9e4['so']['hk']();
                    ;var _0x219b93 = parseInt(_0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Kg']));
                    return _0x219b93 != null && _0x5ad9e4['so']['ik'](_0x219b93, _0xa8b9d9['_j']['$j']) ? _0x219b93 : _0x5ad9e4['so']['hk']();
                }
                ,
                _0x5ad9e4['Bo'] = function(_0x5d64a5) {
                    var _0x58cbe0 = _0x2377e6;
                    _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Mg'], _0x5d64a5 ? _0x58cbe0(0x39c) : _0x58cbe0(0x801), 0x708);
                }
                ,
                _0x5ad9e4['xo'] = function() {
                    var _0x31601d = _0x2377e6;
                    return _0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Mg']) === _0x31601d(0x39c);
                }
                ,
                _0x5ad9e4['vq'] = function(_0x2b03dc) {
                    var _0x1db7d0 = _0x2377e6;
                    if (_0x2b03dc !== _0x5ad9e4['gq']) {
                        _0x5ad9e4['gq'] = _0x2b03dc;
                        var _0x4b7e3d = _0x4b7e3d || {};
                        _0x4b7e3d[_0x1db7d0(0x314)] = _0x2b03dc,
                        _0x4b7e3d[_0x1db7d0(0x73d)] = _0x2b03dc,
                        _0x4cd94d['co']['do']['Sa'](),
                        _0x4cd94d['co']['sq']['Sa'](),
                        _0x4cd94d['co']['yq']['Sa'](function(_0x24d962) {
                            _0x24d962 && _0x4f998e(_0x15636f = 0x0),
                            _0x5ad9e4['zq']();
                        });
                    }
                }
                ,
                _0x5ad9e4['Xp'] = function(_0x1c0ef4, _0x2b8f5e) {
                    var _0x653b64 = _0x2377e6;
                    _0xa8b9d9['Cg']['Ng'](_0xa8b9d9['Cg']['Dg'], _0x1c0ef4 ? _0x653b64(0x39c) : _0x653b64(0x801)),
                    _0x2b8f5e && _0x5ad9e4['wq'](_0x1c0ef4),
                    _0x5ad9e4['vq'](_0x1c0ef4);
                }
                ,
                _0x5ad9e4['Pl'] = function() {
                    var _0xcc2fb3 = _0x2377e6;
                    return _0xa8b9d9['Cg']['Og'](_0xa8b9d9['Cg']['Dg']) === _0xcc2fb3(0x39c);
                }
                ,
                _0x5ad9e4['kp'] = function() {
                    var _0x2c63cf = _0x2377e6;
                    try {
                        return !!_0xa8b9d9['c'][_0x2c63cf(0x4dd)] || _0x5ad9e4['kq'] != null && !!_0x4cd94d['Pg']['Qg'](_0x5ad9e4['kq']['coords'][_0x2c63cf(0x305)], _0x5ad9e4['kq']['coords']['longitude']);
                    } catch (_0x39f042) {
                        return !![];
                    }
                }
                ,
                _0x5ad9e4['ug'] = function() {
                    _0x5ad9e4['iq'] = _0xbc3655['Ca'](),
                    _0x5ad9e4['jq'] = _0x5ad9e4['iq'] - _0x5ad9e4['hq'],
                    _0x5ad9e4['Mh']['Uh'](_0x5ad9e4['iq'], _0x5ad9e4['jq']),
                    _0x5ad9e4['Xg']['Uh'](_0x5ad9e4['iq'], _0x5ad9e4['jq']),
                    _0x5ad9e4['hq'] = _0x5ad9e4['iq'];
                }
                ,
                _0x5ad9e4['qg'] = function() {
                    _0x5ad9e4['Xg']['qg']();
                }
                ,
                _0x5ad9e4;
            }());
        }
        ,
        _0xa8b9d9['nq'] = function() {
            'use strict';
            var _0x4488a7 = {
                'Jq': 0x1e,
                'Kq': new _0x148283['j'](0x64),
                'Lq': 0x0,
                'Mq': 0x0,
                'Nq': 0x0,
                'Oq': 0x0,
                'Pq': 0x0,
                'Qq': 0x0,
                'go': 0x0,
                'Rq': null,
                'Sq': 0x12c,
                'qq': function() {},
                'rq': function() {},
                'uq': function() {},
                'pq': function() {},
                'Qh': new _0xa8b9d9['dh'](),
                'oq': null,
                'Lh': null,
                'nj': {},
                'li': {},
                'jj': 12.5,
                'Nh': 0x28,
                'Tq': 0x1,
                'Uq': -0x1,
                'Vq': 0x1,
                'Wq': 0x1,
                'Xq': -0x1,
                'Yq': -0x1,
                'Zq': 0x1,
                '$q': 0x1,
                'ar': -0x1,
                'oi': 0x1f4,
                'ei': 0x1f4
            };
            return _0x4488a7['Qh']['gh'] = 0x1f4,
            _0x4488a7['Lh'] = new _0xa8b9d9['Ui'](_0x4488a7['Qh']),
            _0x4488a7['Sa'] = function() {
                _0x4488a7['Lh']['_i'](ooo['Xg']['Kf']['Wg']),
                _0xbc3655['X'](function() {
                    _0x4488a7['uq'](function(_0x585b95, _0x17560c) {
                        _0x4488a7['br'](_0x585b95, _0x17560c);
                    });
                }, _0x389039['sm']);
            }
            ,
            _0x4488a7['Ph'] = function(_0x57e24f, _0x5028ba, _0x112786, _0x159b13) {
                _0x4488a7['Uq'] = _0x57e24f,
                _0x4488a7['Vq'] = _0x5028ba,
                _0x4488a7['Wq'] = _0x112786,
                _0x4488a7['Xq'] = _0x159b13,
                _0x4488a7['cr']();
            }
            ,
            _0x4488a7['dr'] = function(_0x13a6ba) {
                _0x4488a7['Tq'] = _0x13a6ba,
                _0x4488a7['cr']();
            }
            ,
            _0x4488a7['cr'] = function() {
                _0x4488a7['Yq'] = _0x4488a7['Uq'] - _0x4488a7['Tq'],
                _0x4488a7['Zq'] = _0x4488a7['Vq'] + _0x4488a7['Tq'],
                _0x4488a7['$q'] = _0x4488a7['Wq'] - _0x4488a7['Tq'],
                _0x4488a7['ar'] = _0x4488a7['Xq'] + _0x4488a7['Tq'];
            }
            ,
            _0x4488a7['Uh'] = function(_0x5d4d00, _0x197ca3) {
                var _0x5581e1 = _0x31dd;
                _0x4488a7['Nq'] += _0x197ca3,
                _0x4488a7['Mq'] -= _0x4488a7['Lq'] * 0.2 * _0x197ca3,
                _0x4488a7['oq']['yi']();
                _0x4488a7['Rq'] != null && (_0x4488a7['go'] === 0x2 || _0x4488a7['go'] === 0x3) && (_0x4488a7['er'](_0x5d4d00, _0x197ca3),
                _0x4488a7['Nh'] = 0x4 + _0x4488a7['jj'] * _0x4488a7['Lh']['Id']);
                var _0x11ae9d = 0x3e8 / _0xbc3655['ia'](0x1, _0x197ca3)
                  , _0x3de70c = 0x0;
                for (var _0x5e490e = 0x0; _0x5e490e < _0x4488a7['Kq'][_0x5581e1(0x2a1)] - 0x1; _0x5e490e++) {
                    _0x3de70c += _0x4488a7['Kq'][_0x5e490e],
                    _0x4488a7['Kq'][_0x5e490e] = _0x4488a7['Kq'][_0x5e490e + 0x1];
                }
                ;_0x4488a7['Kq'][_0x4488a7['Kq']['length'] - 0x1] = _0x11ae9d,
                _0x4488a7['Jq'] = (_0x3de70c + _0x11ae9d) / _0x4488a7['Kq'][_0x5581e1(0x2a1)];
            }
            ,
            _0x4488a7['fr'] = function(_0xc4e900, _0x5e5554) {
                return _0xc4e900 > _0x4488a7['Yq'] && _0xc4e900 < _0x4488a7['Zq'] && _0x5e5554 > _0x4488a7['$q'] && _0x5e5554 < _0x4488a7['ar'];
            }
            ,
            _0x4488a7['er'] = function(_0x3fc157, _0x547637) {
                var _0x72d1fb = (_0x4488a7['Nq'] + _0x4488a7['Mq'] - _0x4488a7['Oq']) / (_0x4488a7['Pq'] - _0x4488a7['Oq']);
                _0x4488a7['Lh']['Pj'](_0x3fc157, _0x547637),
                _0x4488a7['Lh']['Qj'](_0x3fc157, _0x547637, _0x72d1fb, _0x4488a7['fr']);
                var _0x1ed194 = 0x0;
                for (var _0x27bc31 in _0x4488a7['li']) {
                    var _0x422672 = _0x4488a7['li'][_0x27bc31];
                    _0x422672['Pj'](_0x3fc157, _0x547637),
                    _0x422672['Qj'](_0x3fc157, _0x547637, _0x72d1fb, _0x4488a7['fr']),
                    _0x422672['cj'] && _0x422672['Id'] > _0x1ed194 && (_0x1ed194 = _0x422672['Id']),
                    !_0x422672['bj'] && (!!(_0x422672['Lj'] < 0.005) || !_0x422672['cj']) && (_0x422672['$i'](),
                    delete _0x4488a7['li'][_0x422672['ki']['Je']]);
                }
                ;_0x4488a7['dr'](_0x1ed194 * 0x3);
                for (var _0x315fa4 in _0x4488a7['nj']) {
                    var _0xc011a7 = _0x4488a7['nj'][_0x315fa4];
                    _0xc011a7['Pj'](_0x3fc157, _0x547637),
                    _0xc011a7['Qj'](_0x3fc157, _0x547637, _0x4488a7['fr']),
                    _0xc011a7['tj'] && (_0xc011a7['Lj'] < 0.005 || !_0x4488a7['fr'](_0xc011a7['Fj'], _0xc011a7['Gj'])) && (_0xc011a7['$i'](),
                    delete _0x4488a7['nj'][_0xc011a7['ki']['Je']]);
                }
            }
            ,
            _0x4488a7['Si'] = function(_0x197ac2, _0x1117c9) {
                _0x4488a7['go'] === 0x1 && (_0x4488a7['go'] = 0x2,
                _0x4488a7['qq']());
                var _0x3ac67a = ooo['iq'];
                _0x4488a7['Qq'] = _0x197ac2;
                _0x197ac2 === 0x0 ? (_0x4488a7['Oq'] = _0x3ac67a - 0x5f,
                _0x4488a7['Pq'] = _0x3ac67a,
                _0x4488a7['Nq'] = _0x4488a7['Oq'],
                _0x4488a7['Mq'] = 0x0) : (_0x4488a7['Oq'] = _0x4488a7['Pq'],
                _0x4488a7['Pq'] = _0x4488a7['Pq'] + _0x1117c9);
                var _0x15ff89 = _0x4488a7['Nq'] + _0x4488a7['Mq'];
                _0x4488a7['Lq'] = (_0x15ff89 - _0x4488a7['Oq']) / (_0x4488a7['Pq'] - _0x4488a7['Oq']);
            }
            ,
            _0x4488a7['uj'] = function() {
                if (_0x4488a7['go'] === 0x1 || _0x4488a7['go'] === 0x2) {
                    _0x4488a7['go'] = 0x3;
                    var _0x566585 = _0x4488a7['Rq'];
                    _0xbc3655['Y'](function() {
                        var _0x21c5a7 = _0x31dd;
                        _0x4488a7['go'] === 0x3 && (_0x4488a7['go'] = 0x0),
                        _0x566585 != null && _0x566585 === _0x4488a7['Rq'] && (_0x4488a7['Rq'][_0x21c5a7(0x659)](),
                        _0x4488a7['Rq'] = null);
                    }, 0x1388),
                    _0x4488a7['rq']();
                }
            }
            ,
            _0x4488a7['Aq'] = function() {
                var _0x23cb9a = _0x31dd;
                return _0x4488a7['go'] !== 0x2 && (_0x4488a7['go'] = 0x1,
                _0x4488a7['oq']['xi'](),
                _0x4488a7['nj'] = {},
                _0x4488a7['li'] = {},
                _0x4488a7['Lh']['xn'](),
                _0x4488a7['Rq'] != null && (_0x4488a7['Rq'][_0x23cb9a(0x659)](),
                _0x4488a7['Rq'] = null),
                !![]);
            }
            ,
            _0x4488a7['gr'] = function() {
                _0x4488a7['Rq'] = null,
                _0x4488a7['oq']['xi'](),
                _0x4488a7['go'] !== 0x3 && _0x4488a7['pq'](),
                _0x4488a7['go'] = 0x0;
            }
            ,
            _0x4488a7['Dq'] = function(_0x5cc5b3, _0x11d63a) {
                _0x4488a7['hr'](_0x5cc5b3, function() {
                    var _0x41001c = _0x31dd;
                    if (myGameSettings[_0x41001c(0x33a)]) {
                        var _0x59da50 = document[_0x41001c(0x657)](_0x41001c(0x4bc));
                        _0x59da50 ? _0x59da50 = _0x59da50[_0x41001c(0x4a0)] || '' : _0x59da50 = _0x11d63a;
                        var _0x366f93 = 0x80
                          , _0x1ca12e = _0xbc3655['ha'](0x20, _0x59da50['length'])
                          , _0x3a53ab = new _0xa8b9d9['Fa'](0x7 + _0x1ca12e * 0x2)
                          , _0x3f72d5 = new _0xa8b9d9['Oa'](new _0xa8b9d9['Ga'](_0x3a53ab));
                        _0x3f72d5['Pa'](0x81),
                        _0x3f72d5['Qa'](0xaf0),
                        _0x3f72d5['Pa'](0x0),
                        _0x3f72d5['Qa'](_0x366f93),
                        _0x3f72d5['Pa'](_0x1ca12e);
                        for (var _0x2253d5 = 0x0; _0x2253d5 < _0x1ca12e; _0x2253d5++) {
                            _0x3f72d5['Qa'](_0x59da50['charCodeAt'](_0x2253d5));
                        }
                        _0x4488a7['ir'](_0x3a53ab);
                    } else {
                        var _0x21859b = _0xbc3655['ha'](0x800, _0x11d63a[_0x41001c(0x2a1)])
                          , _0x3a53ab = new _0xa8b9d9['Fa'](0x6 + _0x21859b * 0x2)
                          , _0x3f72d5 = new _0xa8b9d9['Oa'](new _0xa8b9d9['Ga'](_0x3a53ab));
                        _0x3f72d5['Pa'](0x81),
                        _0x3f72d5['Qa'](0xaf0),
                        _0x3f72d5['Pa'](0x1),
                        _0x3f72d5['Qa'](_0x21859b);
                        for (var _0x543351 = 0x0; _0x543351 < _0x21859b; _0x543351++) {
                            _0x3f72d5['Qa'](_0x11d63a[_0x41001c(0x459)](_0x543351));
                        }
                        _0x4488a7['ir'](_0x3a53ab);
                    }
                });
            }
            ,
            _0x4488a7['Eq'] = function(_0x1d058d, _0x9ad95d, _0x4ef72a) {
                _0x4488a7['hr'](_0x1d058d, function() {
                    var _0x3a477d = _0xbc3655['ha'](0x20, _0x9ad95d['length'])
                      , _0x4aaf76 = new _0xa8b9d9['Fa'](0x7 + _0x3a477d * 0x2)
                      , _0xe7b2b4 = new _0xa8b9d9['Oa'](new _0xa8b9d9['Ga'](_0x4aaf76));
                    _0xe7b2b4['Pa'](0x81),
                    _0xe7b2b4['Qa'](0xaf0),
                    _0xe7b2b4['Pa'](0x0),
                    _0xe7b2b4['Qa'](_0x4ef72a),
                    _0xe7b2b4['Pa'](_0x3a477d);
                    for (var _0x5b6357 = 0x0; _0x5b6357 < _0x3a477d; _0x5b6357++) {
                        _0xe7b2b4['Qa'](_0x9ad95d['charCodeAt'](_0x5b6357));
                    }
                    ;_0x4488a7['ir'](_0x4aaf76);
                });
            }
            ,
            _0x4488a7['ir'] = function(_0x5d53e0) {
                var _0x581809 = _0x31dd;
                try {
                    _0x4488a7['Rq'] != null && _0x4488a7['Rq']['readyState'] === _0x148283['i'][_0x581809(0x6e3)] && _0x4488a7['Rq'][_0x581809(0x4ae)](_0x5d53e0);
                } catch (_0x36edcc) {
                    _0x4488a7['gr']();
                }
            }
            ,
            _0x4488a7['br'] = function(_0x993615, _0x1eb7b2) {
                var _0x4eefdf = ((_0x1eb7b2 ? 0x80 : 0x0) | _0xbc3655['da'](_0x993615) / _0x4cd94d['S'] * 0x80 & 0x7f) & 0xff;
                if (_0x4488a7['Sq'] !== _0x4eefdf) {
                    var _0x3fa051 = new _0xa8b9d9['Fa'](0x1);
                    new _0xa8b9d9['Oa'](new _0xa8b9d9['Ga'](_0x3fa051))['Pa'](_0x4eefdf),
                    _0x4488a7['ir'](_0x3fa051),
                    _0x4488a7['Sq'] = _0x4eefdf;
                }
            }
            ,
            _0x4488a7['hr'] = function(_0x5076c2, _0x5a2dde) {
                var _0x5ded60 = _0x31dd;
                let _0xd5095a;
                !_0x276741['on'] && _0x389039['mobile'] && (_0xd5095a = _0x1e0ff2(_0x389039[_0x5ded60(0x23b)]));
                var _0x1aa2b6 = _0x4488a7['Rq'] = new _0x148283['i'](_0x5076c2);
                _0x1aa2b6[_0x5ded60(0x5b2)] = _0x5ded60(0x4fe),
                _0x1aa2b6[_0x5ded60(0x4c1)] = function() {
                    var _0x32d614 = _0x5ded60;
                    _0x147ed9(_0x389039, oeo, _0x32d614(0x6d0)),
                    _0x475aa9(_0x389039, oeo, 'hidden'),
                    _0x4488a7['Rq'] === _0x1aa2b6 && _0x5a2dde();
                }
                ,
                _0x1aa2b6[_0x5ded60(0x3a9)] = function() {
                    var _0x4c068a = _0x5ded60;
                    _0x147ed9(_0x389039, oeo, _0x4c068a(0x659)),
                    _0x475aa9(_0x389039, oeo, 'hidden'),
                    !_0x276741['on'] && _0x389039[_0x4c068a(0x23b)] && _0xd5095a && _0xd5095a[_0x4c068a(0x755)](),
                    _0x4488a7['Rq'] === _0x1aa2b6 && _0x4488a7['gr']();
                }
                ,
                _0x1aa2b6[_0x5ded60(0x890)] = function(_0x2a4dea) {
                    var _0x4e801c = _0x5ded60;
                    _0x4488a7['Rq'] === _0x1aa2b6 && _0x4488a7['gr'](),
                    !_0x276741['on'] && _0x389039['mobile'] && _0xd5095a && _0xd5095a[_0x4e801c(0x755)]();
                }
                ,
                _0x1aa2b6[_0x5ded60(0x242)] = function(_0x87ad2c) {
                    _0x4488a7['Rq'] === _0x1aa2b6 && _0x4488a7['oq']['wi'](_0x87ad2c['data']);
                }
                ;
            }
            ,
            _0x4488a7;
        }
        ,
        _0x4a6850 = _0xa8b9d9['c']['ENV'],
        (_0x2f98f5 = {})[_0x434858(0x44c)] = {
            'do': _0xbc3655['Ua'](_0x434858(0x32f), _0x434858(0x40d)),
            'sq': _0xbc3655['Ua']('ltmolilci1iurq1i', _0x434858(0x7a8)),
            'yq': _0xbc3655['Ra'](),
            'fq': 0x4,
            'xq': ![],
            'bo': !![]
        },
        _0x2f98f5[_0x434858(0x3f6)] = {
            'do': _0xbc3655['Ua'](_0x434858(0x32f), _0x434858(0x40d)),
            'sq': _0xbc3655['Ua'](_0x434858(0x301), 'wormate-io_970x250'),
            'yq': _0xbc3655['Ra'](),
            'fq': 0x4,
            'xq': ![],
            'bo': ![]
        };
        !(_0x15088b = _0x2f98f5[_0x4a6850]) && (_0x15088b = _0x2f98f5['main']);
        _0x4cd94d['co'] = _0x15088b,
        $(function() {
            var _0x2a2281 = _0x434858;
            FastClick[_0x2a2281(0x846)](_0xa8b9d9['d'][_0x2a2281(0x247)]);
        }),
        addEventListener(_0x434858(0x84a), function(_0x14d8a2) {
            return _0x14d8a2['preventDefault'](),
            _0x14d8a2['stopPropagation'](),
            ![];
        }),
        _0x11c560 = ![],
        _0x3a3c3f = ![],
        _0xbc3655['ba'](_0x434858(0x39e), ((_0x4d50e8 = {})['id'] = _0x434858(0x6e6),
        _0x4d50e8[_0x434858(0x27f)] = !![],
        _0x4d50e8), function() {
            var _0x2ae906 = _0x434858;
            _0x11c560 = !![],
            _0x3a3c3f = ![],
            zE(_0x2ae906(0x1fa), _0x2ae906(0x79e)),
            zE(_0x2ae906(0x736), _0x2ae906(0x659), function() {
                var _0x1f1b1b = _0x2ae906;
                zE(_0x1f1b1b(0x1fa), _0x1f1b1b(0x79e)),
                _0x3a3c3f = ![];
            });
        }),
        $(_0x434858(0x5fb))['click'](function() {
            var _0x1374f4 = _0x434858;
            _0x11c560 && (_0x3a3c3f ? (zE('webWidget', _0x1374f4(0x659)),
            _0x3a3c3f = ![]) : (zE('webWidget', _0x1374f4(0x6d0)),
            zE('webWidget', 'show'),
            _0x3a3c3f = !![]));
        }),
        _0xa8b9d9['c'][_0x434858(0x5d8)] = function() {
            var _0x447dfa = _0x434858, _0x4a4842;
            FB[_0x447dfa(0x884)](((_0x4a4842 = {})[_0x447dfa(0x1e9)] = _0x447dfa(0x898),
            _0x4a4842[_0x447dfa(0x83b)] = !![],
            _0x4a4842[_0x447dfa(0x65b)] = !![],
            _0x4a4842['status'] = !![],
            _0x4a4842[_0x447dfa(0x7a7)] = _0x447dfa(0x22e),
            _0x4a4842));
        }
        ,
        _0xbc3655['ba'](_0x434858(0x398) + _0x4cd94d['H']['Q'] + _0x434858(0x7a5), ((_0x312317 = {})['id'] = _0x434858(0x5b9),
        _0x312317[_0x434858(0x27f)] = !![],
        _0x312317[_0x434858(0x532)] = !![],
        _0x312317[_0x434858(0x3fe)] = 'anonymous',
        _0x312317)),
        _0xbc3655['ba'](_0x434858(0x51d), null, function() {
            var _0x22d681 = _0x434858;
            gapi['load'](_0x22d681(0x6ea), function() {
                var _0x403222 = _0x22d681, _0x2456b8;
                GoogleAuth = gapi['auth2']['init'](((_0x2456b8 = {})[_0x403222(0x4ce)] = _0x403222(0x3d9),
                _0x2456b8));
            });
        }),
        _0xbc3655['ba'](_0x434858(0x717)),
        (function() {
            var _0x24b7ec = _0x434858;
            try {
                let _0x2981d8 = document[_0x24b7ec(0x6f7)](_0x24b7ec(0x2ff))[0x0]
                  , _0x3eca38 = document[_0x24b7ec(0x3bc)](_0x24b7ec(0x616));
                _0x3eca38[_0x24b7ec(0x734)] = 'stylesheet',
                _0x3eca38[_0x24b7ec(0x5cf)] = _0x24b7ec(0x560),
                _0x3eca38['href'] = _0x24b7ec(0x825),
                _0x2981d8[_0x24b7ec(0x596)](_0x3eca38);
            } catch (_0x87745a) {
                console['error'](_0x87745a);
            }
        }()),
        (ooo = _0xbc3655['dq']())['Sa'](),
        oeo = ooo['Xg']['Kf']['Wg']['Ah'],
        function _0x2e9c67() {
            requestAnimationFrame(_0x2e9c67),
            ooo['ug']();
        }(),
        (function() {
            var _0x1ff50b = _0x434858;
            function _0x49795d() {
                var _0xe35ba4 = _0x31dd
                  , _0xf11b65 = _0x53c2f4['width']()
                  , _0x2929ea = _0x53c2f4[_0xe35ba4(0x6f1)]()
                  , _0x1bce42 = _0x7a1bac[_0xe35ba4(0x79b)]()
                  , _0x4f5d04 = _0x7a1bac['outerHeight']()
                  , _0x87be2f = _0x547267[_0xe35ba4(0x882)]()
                  , _0x509e38 = _0x3c1d08['outerHeight']()
                  , _0x124cdf = _0xbc3655['ha'](0x1, _0xbc3655['ha']((_0x2929ea - _0x509e38 - _0x87be2f) / _0x4f5d04, _0xf11b65 / _0x1bce42))
                  , _0x56108e = _0xe35ba4(0x20b) + _0x124cdf + ')';
                _0x7a1bac[_0xe35ba4(0x6ee)]('-webkit-transform', _0x56108e),
                _0x7a1bac['css'](_0xe35ba4(0x5d1), _0x56108e),
                _0x7a1bac[_0xe35ba4(0x6ee)]('-ms-transform', _0x56108e),
                _0x7a1bac[_0xe35ba4(0x6ee)](_0xe35ba4(0x66a), _0x56108e),
                _0x7a1bac[_0xe35ba4(0x6ee)](_0xe35ba4(0x3b6), _0x56108e),
                ooo['qg'](),
                _0xa8b9d9['c']['scrollTo'](0x0, 0x1);
            }
            var _0x53c2f4 = $('body')
              , _0x7a1bac = $(_0x1ff50b(0x684))
              , _0x547267 = $(_0x1ff50b(0x47d))
              , _0x3c1d08 = $(_0x1ff50b(0x406));
            _0x49795d(),
            $(_0xa8b9d9['c'])[_0x1ff50b(0x36e)](_0x49795d);
        }());
        let _0x235639 = function(_0x473dd5, _0x5684ac) {
            var _0x56b401 = _0x434858
              , _0x9b986 = $('#saveGame');
            _0x9b986[_0x56b401(0x226)](_0x56b401(0x69a), _0x473dd5[_0x56b401(0x5a5)]),
            _0x9b986[_0x56b401(0x85b)](function() {
                var _0x45207e = _0x56b401;
                if (!this[_0x45207e(0x69a)]) {
                    let _0xd03f19 = confirm(localStorage[_0x45207e(0x65e)](_0x45207e(0x225)));
                    $(this)['prop'](_0x45207e(0x69a), !_0xd03f19),
                    !this[_0x45207e(0x69a)] && _0x147ed9(_0x473dd5, _0x5684ac, _0x45207e(0x5ef));
                }
                ;_0x473dd5[_0x45207e(0x5a5)] = this['checked'],
                _0x5684ac['value2_hs']['alpha'] = this['checked'] ? 0x1 : 0x0,
                _0x5684ac[_0x45207e(0x4d1)][_0x45207e(0x494)] = this['checked'] ? 0x1 : 0x0,
                localStorage[_0x45207e(0x39f)]('SaveGamewft', this[_0x45207e(0x69a)] ? JSON[_0x45207e(0x880)](_0x473dd5) : null);
            });
        }
          , _0x147ed9 = function(_0x3f6aa4, _0x49cc2d, _0xa037df, _0x400ff0) {
            var _0x432310 = _0x434858;
            let _0x4ba24d = function(_0x257d59, _0x18ca32, _0x425c3b, _0x24c5fe) {
                var _0x1e3a5e = _0x31dd;
                _0x49cc2d[_0x1e3a5e(0x819)][_0x1e3a5e(0x440)] = _0x18ca32,
                _0x49cc2d[_0x1e3a5e(0x49f)][_0x1e3a5e(0x440)] = _0x425c3b,
                _0x49cc2d['value1_kill'][_0x1e3a5e(0x440)] = _0x257d59,
                _0x49cc2d[_0x1e3a5e(0x4d1)][_0x1e3a5e(0x440)] = _0x24c5fe;
            };
            _0xa037df === _0x432310(0x43e) && (_0x3f6aa4[_0x432310(0x4e3)] = (_0x3f6aa4[_0x432310(0x4e3)] || 0x0) + (_0x400ff0 ? 0x0 : 0x1),
            _0x3f6aa4[_0x432310(0x27b)] = (_0x3f6aa4[_0x432310(0x27b)] || 0x0) + (_0x400ff0 ? 0x1 : 0x0),
            _0x3f6aa4[_0x432310(0x874)] += _0x400ff0 ? 0x0 : 0x1,
            _0x3f6aa4[_0x432310(0x720)] += _0x400ff0 ? 0x1 : 0x0,
            _0x4ba24d(_0x3f6aa4[_0x432310(0x4e3)], _0x3f6aa4[_0x432310(0x27b)], _0x3f6aa4[_0x432310(0x720)], _0x3f6aa4['s_kill']),
            _0x400ff0 && wftObjects && wftObjects[_0x432310(0x2f6)] && (_0x3f6aa4[_0x432310(0x27b)] % 0xa === 0x0 && _0x3f6aa4['headshot'] > 0x0 && window[_0x432310(0x320)]()));
            _0xa037df === _0x432310(0x6d0) && (_0x3f6aa4['kill'] = 0x0,
            _0x3f6aa4['headshot'] = 0x0,
            _0x3f6aa4['s'] = !![],
            _0x3f6aa4['st'] = !![],
            _0x1ba984[_0x432310(0x5e9)] = _0x5edd49,
            _0x3f6aa4['saveGame'] && _0x4ba24d(_0x3f6aa4[_0x432310(0x4e3)], _0x3f6aa4[_0x432310(0x27b)], _0x3f6aa4[_0x432310(0x720)], _0x3f6aa4[_0x432310(0x874)]),
            _0x2d3bb2());
            if (_0xa037df === _0x432310(0x659)) {
                _0x3f6aa4['s'] = ![],
                _0x2806ed['texture'] = _0x127c3e,
                _0x18ec3d[_0x432310(0x5e9)] = _0x33d9a2,
                _0x3d6d54 = ![],
                _0x2c1a8a = 0x37,
                _0x19955e = 0x1,
                _0x3d8998 = !![],
                clearInterval(_0xc56d6c),
                _0xc56d6c = null,
                clearInterval(_0x5e88be),
                _0x5e88be = null,
                _0x3f6aa4['z'] = 0x1,
                _0x3f6aa4['fz'] = !![],
                _0x3f6aa4[_0x432310(0x695)]['x'] = -0x1,
                _0x3f6aa4[_0x432310(0x695)]['y'] = -0x1,
                _0x3f6aa4['mo2']['x'] = -0x1,
                _0x3f6aa4['mo2']['y'] = -0x1;
                const _0x11b9db = document[_0x432310(0x421)](_0x432310(0x68b));
                _0x11b9db[_0x432310(0x588)](_0x31c0e4 => {
                    var _0x1274c0 = _0x432310;
                    _0x31c0e4[_0x1274c0(0x6c1)](),
                    _0x31c0e4[_0x1274c0(0x6ac)] = 0x0;
                }
                ),
                _0x276741 && _0x276741['on'] && _0x3f6aa4[_0x432310(0x23b)] && _0x3f6aa4['mo'] == 0x6 && _0x3f6aa4['j'] && _0x3f6aa4['j'][_0x432310(0x755)](),
                _0x3f6aa4['saveGame'] ? _0x3f6aa4[_0x432310(0x7fa)] = (_0x3f6aa4[_0x432310(0x7fa)] || 0x0) + 0x1 : _0x147ed9(_0x3f6aa4, _0x49cc2d, 'zero');
            }
            _0xa037df === _0x432310(0x5ef) && (_0x3f6aa4['kill'] = 0x0,
            _0x3f6aa4['s_kill'] = 0x0,
            _0x3f6aa4[_0x432310(0x27b)] = 0x0,
            _0x3f6aa4[_0x432310(0x720)] = 0x0,
            _0x3f6aa4[_0x432310(0x7fa)] = 0x0),
            localStorage[_0x432310(0x39f)](_0x432310(0x852), JSON[_0x432310(0x880)](_0x3f6aa4));
        };
        window[_0x434858(0x21d)] = !![];
        function _0x171d78() {
            var _0x534582 = _0x434858;
            const _0x4e38d4 = localStorage['getItem'](_0x534582(0x72a));
            _0x4e38d4 !== null && (window['pulseEnabled'] = _0x4e38d4 === _0x534582(0x39c));
        }
        function _0x4adb10() {
            var _0x50c932 = _0x434858;
            localStorage[_0x50c932(0x39f)](_0x50c932(0x72a), window[_0x50c932(0x21d)][_0x50c932(0x436)]());
        }
        function _0x176cb2() {
            var _0x40bf3b = _0x434858;
            _0x171d78();
            if (window['_pulseFunctionInstalled'])
                return;
            window[_0x40bf3b(0x4b6)] = !![];
            function _0x22ef4f() {
                var _0x2968a1 = _0x40bf3b;
                if (!window[_0x2968a1(0x21d)]) {
                    [_0x2968a1(0x2c7), _0x2968a1(0x2de), _0x2968a1(0x668), _0x2968a1(0x579), 'pk4', _0x2968a1(0x4d6), 'pk6'][_0x2968a1(0x588)](_0xc602e4 => {
                        var _0x3918d0 = _0x2968a1;
                        const _0x1e1263 = globalThis[_0x3918d0(0x6d4)]?.[_0xc602e4];
                        _0x1e1263 && _0x1e1263[_0x3918d0(0x420)] && _0x61d400(_0x1e1263);
                    }
                    );
                    return;
                }
                [_0x2968a1(0x2c7), _0x2968a1(0x2de), _0x2968a1(0x668), _0x2968a1(0x579), _0x2968a1(0x52a), _0x2968a1(0x4d6), _0x2968a1(0x5be)][_0x2968a1(0x588)](_0x185976 => {
                    var _0xa0a6ed = _0x2968a1;
                    const _0x50b1bf = globalThis[_0xa0a6ed(0x6d4)]?.[_0x185976];
                    if (!_0x50b1bf || !_0x50b1bf[_0xa0a6ed(0x440)])
                        return;
                    const _0x3bc80b = _0x50b1bf[_0xa0a6ed(0x811)] && _0x50b1bf[_0xa0a6ed(0x811)][_0xa0a6ed(0x202)] === '#f9cc0b'
                      , _0x183ac1 = _0x50b1bf[_0xa0a6ed(0x811)] && _0x50b1bf[_0xa0a6ed(0x811)][_0xa0a6ed(0x202)] === '#fdbf5f';
                    if (_0x3bc80b || _0x183ac1) {
                        const _0x1ecb18 = parseInt(_0x50b1bf[_0xa0a6ed(0x440)]);
                        !isNaN(_0x1ecb18) && _0x1ecb18 > 0x0 && _0x1ecb18 <= 0x5 ? _0x16f76c(_0x50b1bf) : _0x61d400(_0x50b1bf);
                    } else
                        _0x61d400(_0x50b1bf);
                }
                );
            }
            function _0x16f76c(_0x458b08) {
                var _0x3f417d = _0x40bf3b;
                if (_0x458b08[_0x3f417d(0x420)])
                    return;
                _0x458b08['_originalColor'] = _0x458b08['style'][_0x3f417d(0x202)],
                _0x458b08[_0x3f417d(0x32d)] = _0x458b08[_0x3f417d(0x811)][_0x3f417d(0x329)] || _0x3f417d(0x1ab),
                _0x458b08['_pulseStarted'] = !![],
                _0x458b08[_0x3f417d(0x6cc)] = 0x0,
                _0x458b08[_0x3f417d(0x636)] = setInterval( () => {
                    var _0x5ed316 = _0x3f417d;
                    const _0x234d5e = Date[_0x5ed316(0x2ef)]();
                    _0x234d5e - _0x458b08['_lastPulseTime'] > 0x320 && (_0x458b08['_lastPulseTime'] = _0x234d5e,
                    _0x458b08[_0x5ed316(0x811)][_0x5ed316(0x202)] = _0x5ed316(0x1fc),
                    _0x458b08[_0x5ed316(0x811)][_0x5ed316(0x329)] = _0x5ed316(0x386),
                    _0x458b08[_0x5ed316(0x811)][_0x5ed316(0x834)] = !![],
                    _0x458b08[_0x5ed316(0x811)][_0x5ed316(0x4b7)] = _0x5ed316(0x1fc),
                    _0x458b08[_0x5ed316(0x811)]['dropShadowDistance'] = 0x5,
                    _0x458b08['style']['dropShadowBlur'] = 0x6,
                    setTimeout( () => {
                        var _0x3fe9a8 = _0x5ed316;
                        if (!_0x458b08 || !_0x458b08['style'])
                            return;
                        _0x458b08[_0x3fe9a8(0x811)][_0x3fe9a8(0x202)] = _0x458b08[_0x3fe9a8(0x338)],
                        _0x458b08[_0x3fe9a8(0x811)][_0x3fe9a8(0x329)] = _0x458b08[_0x3fe9a8(0x32d)],
                        _0x458b08[_0x3fe9a8(0x811)]['dropShadow'] = ![];
                    }
                    , 0x190));
                }
                , 0x64);
            }
            function _0x61d400(_0xd3b82a) {
                var _0x2931f2 = _0x40bf3b;
                if (!_0xd3b82a || !_0xd3b82a[_0x2931f2(0x420)])
                    return;
                clearInterval(_0xd3b82a[_0x2931f2(0x636)]),
                _0xd3b82a['_pulseInterval'] = null,
                _0xd3b82a[_0x2931f2(0x420)] = ![],
                _0xd3b82a['_originalColor'] && _0xd3b82a['style'] && (_0xd3b82a[_0x2931f2(0x811)][_0x2931f2(0x202)] = _0xd3b82a[_0x2931f2(0x338)]),
                _0xd3b82a['_originalFontSize'] && _0xd3b82a['style'] && (_0xd3b82a[_0x2931f2(0x811)][_0x2931f2(0x329)] = _0xd3b82a[_0x2931f2(0x32d)]),
                _0xd3b82a[_0x2931f2(0x811)] && (_0xd3b82a[_0x2931f2(0x811)]['dropShadow'] = ![]);
            }
            window[_0x40bf3b(0x81b)]('beforeunload', function() {
                var _0x3e2dd8 = _0x40bf3b;
                [_0x3e2dd8(0x2c7), 'pk1', _0x3e2dd8(0x668), _0x3e2dd8(0x579), 'pk4', _0x3e2dd8(0x4d6), _0x3e2dd8(0x5be)][_0x3e2dd8(0x588)](_0x1dd45e => {
                    var _0x5c42b1 = _0x3e2dd8;
                    const _0x4dc0b2 = globalThis[_0x5c42b1(0x6d4)]?.[_0x1dd45e];
                    _0x4dc0b2 && _0x4dc0b2[_0x5c42b1(0x420)] && clearInterval(_0x4dc0b2[_0x5c42b1(0x636)]);
                }
                );
            }),
            setInterval(_0x22ef4f, 0xc8);
        }
        let _0x475aa9 = function(_0x30540a, _0x4e579f, _0x573f2e, _0x261498, _0xd6f543, _0xfb4865) {
            var _0x2559ca = _0x434858, _0x16a049, _0xbef4f8, _0x40f7a9;
            globalThis[_0x2559ca(0x6d4)] = _0x4e579f,
            _0x176cb2();
            let _0x5d6a54 = function(_0x32cf68, _0x1dbb38, _0x5ab855, _0x236ba6, _0x3197ff, _0x44dc0a, _0x3bec3c) {
                var _0xabfec3 = _0x2559ca;
                _0x4e579f['pk0'][_0xabfec3(0x440)] != _0x32cf68 && (_0x4e579f[_0xabfec3(0x2c7)][_0xabfec3(0x440)] = _0x32cf68),
                _0x4e579f['pk1'][_0xabfec3(0x440)] != _0x1dbb38 && (_0x4e579f[_0xabfec3(0x2de)]['text'] = _0x1dbb38),
                _0x4e579f[_0xabfec3(0x668)][_0xabfec3(0x440)] != _0x5ab855 && (_0x4e579f[_0xabfec3(0x668)][_0xabfec3(0x440)] = _0x5ab855),
                _0x4e579f[_0xabfec3(0x579)][_0xabfec3(0x440)] != _0x236ba6 && (_0x4e579f['pk3'][_0xabfec3(0x440)] = _0x236ba6),
                _0x4e579f[_0xabfec3(0x52a)][_0xabfec3(0x440)] != _0x3197ff && (_0x4e579f[_0xabfec3(0x52a)][_0xabfec3(0x440)] = _0x3197ff),
                _0x4e579f[_0xabfec3(0x4d6)]['text'] != _0x44dc0a && (_0x4e579f[_0xabfec3(0x4d6)][_0xabfec3(0x440)] = _0x44dc0a),
                _0x4e579f[_0xabfec3(0x5be)]['text'] != _0x3bec3c && (_0x4e579f[_0xabfec3(0x5be)][_0xabfec3(0x440)] = _0x3bec3c);
            };
            _0x573f2e === 'show' && (_0x16a049 = _0x261498,
            _0xbef4f8 = _0xd6f543,
            _0x40f7a9 = _0xfb4865,
            _0x16a049 == 0x0 && ((_0xbef4f8 == 0x0 || _0xbef4f8 == 0x1 || _0xbef4f8 == 0x2 || _0xbef4f8 == 0x6) && (_0x30540a['pk'] = 0x1e - _0x40f7a9 * 0x64 * (0x1e / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk0'] = '' : _0x30540a['pk0'] = _0x30540a['pk']['toFixed'](),
            _0xbef4f8 == 0x0 && _0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)][_0x2559ca(0x202)] != '#f9cc0b' && (_0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x63b)),
            _0xbef4f8 == 0x1 && _0x4e579f[_0x2559ca(0x2c7)]['style'][_0x2559ca(0x202)] != _0x2559ca(0x705) && (_0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)]['fill'] = _0x2559ca(0x705)),
            _0xbef4f8 == 0x2 && _0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f['pk0'][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e)),
            _0xbef4f8 == 0x6 && _0x4e579f['pk0'][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x461) && (_0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x461))),
            _0xbef4f8 == 0x3 && (_0x30540a['pk'] = 0x50 - _0x40f7a9 * 0x64 * (0x50 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk0'] = '' : _0x30540a['pk0'] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)]['fill'] != _0x2559ca(0x71c) && (_0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x71c))),
            _0xbef4f8 == 0x4 && (_0x30540a['pk'] = 0x28 - _0x40f7a9 * 0x64 * (0x28 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk0'] = '' : _0x30540a[_0x2559ca(0x2c7)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f['pk0']['style'][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e))),
            _0xbef4f8 == 0x5 && (_0x30540a['pk'] = 0x14 - _0x40f7a9 * 0x64 * (0x14 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x2c7)] = '' : _0x30540a[_0x2559ca(0x2c7)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x569) && (_0x4e579f[_0x2559ca(0x2c7)][_0x2559ca(0x811)]['fill'] = _0x2559ca(0x569))),
            _0x30540a[_0x2559ca(0x2de)] = '',
            _0x30540a[_0x2559ca(0x668)] = '',
            _0x30540a[_0x2559ca(0x579)] = '',
            _0x30540a[_0x2559ca(0x52a)] = '',
            _0x30540a[_0x2559ca(0x4d6)] = '',
            _0x30540a[_0x2559ca(0x5be)] = ''),
            _0x16a049 == 0x28 && ((_0xbef4f8 == 0x0 || _0xbef4f8 == 0x1 || _0xbef4f8 == 0x2 || _0xbef4f8 == 0x6) && (_0x30540a['pk'] = 0x1e - _0x40f7a9 * 0x64 * (0x1e / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x2de)] = '' : _0x30540a[_0x2559ca(0x2de)] = _0x30540a['pk']['toFixed'](),
            _0xbef4f8 == 0x0 && _0x4e579f[_0x2559ca(0x2de)]['style'][_0x2559ca(0x202)] != '#f9cc0b' && (_0x4e579f[_0x2559ca(0x2de)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x63b)),
            _0xbef4f8 == 0x1 && _0x4e579f[_0x2559ca(0x2de)]['style'][_0x2559ca(0x202)] != _0x2559ca(0x705) && (_0x4e579f[_0x2559ca(0x2de)]['style']['fill'] = _0x2559ca(0x705)),
            _0xbef4f8 == 0x2 && _0x4e579f[_0x2559ca(0x2de)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f[_0x2559ca(0x2de)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e)),
            _0xbef4f8 == 0x6 && _0x4e579f[_0x2559ca(0x2de)]['style'][_0x2559ca(0x202)] != _0x2559ca(0x461) && (_0x4e579f[_0x2559ca(0x2de)]['style'][_0x2559ca(0x202)] = _0x2559ca(0x461))),
            _0xbef4f8 == 0x3 && (_0x30540a['pk'] = 0x50 - _0x40f7a9 * 0x64 * (0x50 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x2de)] = '' : _0x30540a['pk1'] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x2de)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x71c) && (_0x4e579f['pk1'][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x71c))),
            _0xbef4f8 == 0x4 && (_0x30540a['pk'] = 0x28 - _0x40f7a9 * 0x64 * (0x28 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk1'] = '' : _0x30540a[_0x2559ca(0x2de)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f['pk1'][_0x2559ca(0x811)][_0x2559ca(0x202)] != '#5dade6' && (_0x4e579f[_0x2559ca(0x2de)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e))),
            _0xbef4f8 == 0x5 && (_0x30540a['pk'] = 0x14 - _0x40f7a9 * 0x64 * (0x14 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk1'] = '' : _0x30540a[_0x2559ca(0x2de)] = _0x30540a['pk']['toFixed'](),
            _0x4e579f[_0x2559ca(0x2de)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x569) && (_0x4e579f[_0x2559ca(0x2de)]['style'][_0x2559ca(0x202)] = _0x2559ca(0x569))),
            _0x30540a['pk2'] = '',
            _0x30540a['pk3'] = '',
            _0x30540a[_0x2559ca(0x52a)] = '',
            _0x30540a['pk5'] = '',
            _0x30540a[_0x2559ca(0x5be)] = ''),
            _0x16a049 == 0x50 && ((_0xbef4f8 == 0x0 || _0xbef4f8 == 0x1 || _0xbef4f8 == 0x2 || _0xbef4f8 == 0x6) && (_0x30540a['pk'] = 0x1e - _0x40f7a9 * 0x64 * (0x1e / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x668)] = '' : _0x30540a[_0x2559ca(0x668)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0xbef4f8 == 0x0 && _0x4e579f[_0x2559ca(0x668)][_0x2559ca(0x811)][_0x2559ca(0x202)] != '#f9cc0b' && (_0x4e579f[_0x2559ca(0x668)][_0x2559ca(0x811)][_0x2559ca(0x202)] = '#f9cc0b'),
            _0xbef4f8 == 0x1 && _0x4e579f['pk2'][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x705) && (_0x4e579f[_0x2559ca(0x668)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x705)),
            _0xbef4f8 == 0x2 && _0x4e579f['pk2'][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f[_0x2559ca(0x668)][_0x2559ca(0x811)]['fill'] = '#5dade6'),
            _0xbef4f8 == 0x6 && _0x4e579f[_0x2559ca(0x668)][_0x2559ca(0x811)]['fill'] != _0x2559ca(0x461) && (_0x4e579f['pk2']['style']['fill'] = _0x2559ca(0x461))),
            _0xbef4f8 == 0x3 && (_0x30540a['pk'] = 0x50 - _0x40f7a9 * 0x64 * (0x50 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x668)] = '' : _0x30540a[_0x2559ca(0x668)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f['pk2']['style']['fill'] != _0x2559ca(0x71c) && (_0x4e579f[_0x2559ca(0x668)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x71c))),
            _0xbef4f8 == 0x4 && (_0x30540a['pk'] = 0x28 - _0x40f7a9 * 0x64 * (0x28 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk2'] = '' : _0x30540a['pk2'] = _0x30540a['pk']['toFixed'](),
            _0x4e579f[_0x2559ca(0x668)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f[_0x2559ca(0x668)][_0x2559ca(0x811)][_0x2559ca(0x202)] = '#5dade6')),
            _0xbef4f8 == 0x5 && (_0x30540a['pk'] = 0x14 - _0x40f7a9 * 0x64 * (0x14 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk2'] = '' : _0x30540a['pk2'] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x668)][_0x2559ca(0x811)][_0x2559ca(0x202)] != '#d4db19' && (_0x4e579f['pk2'][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x569))),
            _0x30540a[_0x2559ca(0x579)] = '',
            _0x30540a[_0x2559ca(0x52a)] = '',
            _0x30540a[_0x2559ca(0x4d6)] = '',
            _0x30540a['pk6'] = ''),
            _0x16a049 == 0x78 && ((_0xbef4f8 == 0x0 || _0xbef4f8 == 0x1 || _0xbef4f8 == 0x2 || _0xbef4f8 == 0x6) && (_0x30540a['pk'] = 0x1e - _0x40f7a9 * 0x64 * (0x1e / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x579)] = '' : _0x30540a[_0x2559ca(0x579)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0xbef4f8 == 0x0 && _0x4e579f[_0x2559ca(0x579)][_0x2559ca(0x811)][_0x2559ca(0x202)] != '#f9cc0b' && (_0x4e579f['pk3'][_0x2559ca(0x811)]['fill'] = _0x2559ca(0x63b)),
            _0xbef4f8 == 0x1 && _0x4e579f[_0x2559ca(0x579)][_0x2559ca(0x811)]['fill'] != _0x2559ca(0x705) && (_0x4e579f[_0x2559ca(0x579)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x705)),
            _0xbef4f8 == 0x2 && _0x4e579f['pk3'][_0x2559ca(0x811)]['fill'] != '#5dade6' && (_0x4e579f[_0x2559ca(0x579)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e)),
            _0xbef4f8 == 0x6 && _0x4e579f[_0x2559ca(0x579)]['style'][_0x2559ca(0x202)] != _0x2559ca(0x461) && (_0x4e579f[_0x2559ca(0x579)][_0x2559ca(0x811)][_0x2559ca(0x202)] = '#e74a94')),
            _0xbef4f8 == 0x3 && (_0x30540a['pk'] = 0x50 - _0x40f7a9 * 0x64 * (0x50 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x579)] = '' : _0x30540a['pk3'] = _0x30540a['pk']['toFixed'](),
            _0x4e579f['pk3']['style'][_0x2559ca(0x202)] != _0x2559ca(0x71c) && (_0x4e579f[_0x2559ca(0x579)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x71c))),
            _0xbef4f8 == 0x4 && (_0x30540a['pk'] = 0x28 - _0x40f7a9 * 0x64 * (0x28 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x579)] = '' : _0x30540a[_0x2559ca(0x579)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x579)]['style'][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f['pk3']['style']['fill'] = '#5dade6')),
            _0xbef4f8 == 0x5 && (_0x30540a['pk'] = 0x14 - _0x40f7a9 * 0x64 * (0x14 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x579)] = '' : _0x30540a[_0x2559ca(0x579)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x579)]['style'][_0x2559ca(0x202)] != _0x2559ca(0x569) && (_0x4e579f[_0x2559ca(0x579)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x569))),
            _0x30540a[_0x2559ca(0x52a)] = '',
            _0x30540a[_0x2559ca(0x4d6)] = '',
            _0x30540a[_0x2559ca(0x5be)] = ''),
            _0x16a049 == 0xa0 && ((_0xbef4f8 == 0x0 || _0xbef4f8 == 0x1 || _0xbef4f8 == 0x2 || _0xbef4f8 == 0x6) && (_0x30540a['pk'] = 0x1e - _0x40f7a9 * 0x64 * (0x1e / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x52a)] = '' : _0x30540a[_0x2559ca(0x52a)] = _0x30540a['pk']['toFixed'](),
            _0xbef4f8 == 0x0 && _0x4e579f['pk4'][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x63b) && (_0x4e579f[_0x2559ca(0x52a)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x63b)),
            _0xbef4f8 == 0x1 && _0x4e579f[_0x2559ca(0x52a)]['style']['fill'] != _0x2559ca(0x705) && (_0x4e579f['pk4'][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x705)),
            _0xbef4f8 == 0x2 && _0x4e579f[_0x2559ca(0x52a)]['style'][_0x2559ca(0x202)] != '#5dade6' && (_0x4e579f[_0x2559ca(0x52a)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e)),
            _0xbef4f8 == 0x6 && _0x4e579f[_0x2559ca(0x52a)]['style'][_0x2559ca(0x202)] != '#e74a94' && (_0x4e579f[_0x2559ca(0x52a)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x461))),
            _0xbef4f8 == 0x3 && (_0x30540a['pk'] = 0x50 - _0x40f7a9 * 0x64 * (0x50 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x52a)] = '' : _0x30540a['pk4'] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x52a)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x71c) && (_0x4e579f['pk4']['style'][_0x2559ca(0x202)] = '#e03e42')),
            _0xbef4f8 == 0x4 && (_0x30540a['pk'] = 0x28 - _0x40f7a9 * 0x64 * (0x28 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk4'] = '' : _0x30540a[_0x2559ca(0x52a)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x52a)]['style'][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f[_0x2559ca(0x52a)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e))),
            _0xbef4f8 == 0x5 && (_0x30540a['pk'] = 0x14 - _0x40f7a9 * 0x64 * (0x14 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk4'] = '' : _0x30540a[_0x2559ca(0x52a)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x52a)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x569) && (_0x4e579f[_0x2559ca(0x52a)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x569))),
            _0x30540a[_0x2559ca(0x4d6)] = '',
            _0x30540a[_0x2559ca(0x5be)] = ''),
            _0x16a049 == 0xc8 && ((_0xbef4f8 == 0x0 || _0xbef4f8 == 0x1 || _0xbef4f8 == 0x2 || _0xbef4f8 == 0x6) && (_0x30540a['pk'] = 0x1e - _0x40f7a9 * 0x64 * (0x1e / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x4d6)] = '' : _0x30540a[_0x2559ca(0x4d6)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0xbef4f8 == 0x0 && _0x4e579f['pk5']['style'][_0x2559ca(0x202)] != '#f9cc0b' && (_0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] = '#f9cc0b'),
            _0xbef4f8 == 0x1 && _0x4e579f['pk5']['style'][_0x2559ca(0x202)] != _0x2559ca(0x705) && (_0x4e579f['pk5'][_0x2559ca(0x811)][_0x2559ca(0x202)] = '#fdbf5f'),
            _0xbef4f8 == 0x2 && _0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e)),
            _0xbef4f8 == 0x6 && _0x4e579f[_0x2559ca(0x4d6)]['style'][_0x2559ca(0x202)] != _0x2559ca(0x461) && (_0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x461))),
            _0xbef4f8 == 0x3 && (_0x30540a['pk'] = 0x50 - _0x40f7a9 * 0x64 * (0x50 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x4d6)] = '' : _0x30540a[_0x2559ca(0x4d6)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x71c) && (_0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x71c))),
            _0xbef4f8 == 0x4 && (_0x30540a['pk'] = 0x28 - _0x40f7a9 * 0x64 * (0x28 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x4d6)] = '' : _0x30540a[_0x2559ca(0x4d6)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e))),
            _0xbef4f8 == 0x5 && (_0x30540a['pk'] = 0x14 - _0x40f7a9 * 0x64 * (0x14 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk5'] = '' : _0x30540a[_0x2559ca(0x4d6)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x569) && (_0x4e579f[_0x2559ca(0x4d6)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x569))),
            _0x30540a[_0x2559ca(0x5be)] = ''),
            _0x16a049 == 0xf0 && ((_0xbef4f8 == 0x0 || _0xbef4f8 == 0x1 || _0xbef4f8 == 0x2 || _0xbef4f8 == 0x6) && (_0x30540a['pk'] = 0x1e - _0x40f7a9 * 0x64 * (0x1e / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x5be)] = '' : _0x30540a[_0x2559ca(0x5be)] = _0x30540a['pk']['toFixed'](),
            _0xbef4f8 == 0x0 && _0x4e579f['pk6']['style'][_0x2559ca(0x202)] != '#f9cc0b' && (_0x4e579f[_0x2559ca(0x5be)][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x63b)),
            _0xbef4f8 == 0x1 && _0x4e579f[_0x2559ca(0x5be)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x705) && (_0x4e579f[_0x2559ca(0x5be)][_0x2559ca(0x811)]['fill'] = '#fdbf5f'),
            _0xbef4f8 == 0x2 && _0x4e579f[_0x2559ca(0x5be)][_0x2559ca(0x811)][_0x2559ca(0x202)] != '#5dade6' && (_0x4e579f['pk6'][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e)),
            _0xbef4f8 == 0x6 && _0x4e579f['pk6'][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x461) && (_0x4e579f[_0x2559ca(0x5be)]['style'][_0x2559ca(0x202)] = _0x2559ca(0x461))),
            _0xbef4f8 == 0x3 && (_0x30540a['pk'] = 0x50 - _0x40f7a9 * 0x64 * (0x50 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x5be)] = '' : _0x30540a[_0x2559ca(0x5be)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f['pk6'][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x71c) && (_0x4e579f[_0x2559ca(0x5be)][_0x2559ca(0x811)][_0x2559ca(0x202)] = '#e03e42')),
            _0xbef4f8 == 0x4 && (_0x30540a['pk'] = 0x28 - _0x40f7a9 * 0x64 * (0x28 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a[_0x2559ca(0x5be)] = '' : _0x30540a[_0x2559ca(0x5be)] = _0x30540a['pk'][_0x2559ca(0x547)](),
            _0x4e579f[_0x2559ca(0x5be)][_0x2559ca(0x811)][_0x2559ca(0x202)] != _0x2559ca(0x62e) && (_0x4e579f['pk6'][_0x2559ca(0x811)][_0x2559ca(0x202)] = _0x2559ca(0x62e))),
            _0xbef4f8 == 0x5 && (_0x30540a['pk'] = 0x14 - _0x40f7a9 * 0x64 * (0x14 / 0x63),
            _0x30540a['pk'] <= 0.1 ? _0x30540a['pk6'] = '' : _0x30540a['pk6'] = _0x30540a['pk']['toFixed'](),
            _0x4e579f[_0x2559ca(0x5be)][_0x2559ca(0x811)]['fill'] != _0x2559ca(0x569) && (_0x4e579f[_0x2559ca(0x5be)][_0x2559ca(0x811)][_0x2559ca(0x202)] = '#d4db19'))),
            _0x5d6a54(_0x30540a[_0x2559ca(0x2c7)], _0x30540a['pk1'], _0x30540a[_0x2559ca(0x668)], _0x30540a[_0x2559ca(0x579)], _0x30540a['pk4'], _0x30540a[_0x2559ca(0x4d6)], _0x30540a['pk6'])),
            _0x573f2e === _0x2559ca(0x4f4) && (_0x30540a[_0x2559ca(0x2c7)] = '',
            _0x30540a['pk1'] = '',
            _0x30540a['pk2'] = '',
            _0x30540a['pk3'] = '',
            _0x30540a[_0x2559ca(0x52a)] = '',
            _0x30540a['pk5'] = '',
            _0x30540a[_0x2559ca(0x5be)] = '',
            _0x5d6a54(_0x30540a[_0x2559ca(0x2c7)], _0x30540a[_0x2559ca(0x2de)], _0x30540a[_0x2559ca(0x668)], _0x30540a[_0x2559ca(0x579)], _0x30540a[_0x2559ca(0x52a)], _0x30540a[_0x2559ca(0x4d6)], _0x30540a[_0x2559ca(0x5be)])),
            localStorage['setItem'](_0x2559ca(0x852), JSON['stringify'](_0x30540a));
        }
          , _0x51a22d = function() {
            clearInterval(_0xc56d6c),
            _0xc56d6c = null,
            _0xc56d6c = setInterval(function() {
                var _0x146df2 = _0x31dd
                  , _0x8ce047 = _0x276741[_0x146df2(0x27a)]['fo'];
                let _0xb7d3ab = Math['PI'];
                var _0x31c1e6 = _0x8ce047 + _0xb7d3ab / 0x168 * 0x9;
                _0x31c1e6 >= _0xb7d3ab && (_0x31c1e6 = -_0x8ce047),
                _0x276741[_0x146df2(0x27a)]['fo'] = _0x31c1e6;
            }, 0x37);
        }
          , _0x1df38a = function() {
            _0x19955e >= 0x28 && (_0x3d8998 ? _0x2c1a8a += 0x19 : _0x2c1a8a -= 0xc8,
            _0x19955e = 0x1);
        }
          , _0x1cdff6 = function() {
            _0x2c1a8a == 0x37 && _0x19955e >= 0x28 && (_0x2c1a8a += 0x19,
            _0x19955e = 0x1,
            _0x3d8998 = !![]),
            _0x2c1a8a == 0x50 && _0x1df38a(),
            _0x2c1a8a == 0x69 && _0x1df38a(),
            _0x2c1a8a == 0x82 && _0x1df38a(),
            _0x2c1a8a == 0x9b && _0x1df38a(),
            _0x2c1a8a == 0xb4 && _0x1df38a(),
            _0x2c1a8a == 0xcd && _0x1df38a(),
            _0x2c1a8a == 0xe6 && _0x1df38a(),
            _0x2c1a8a == 0xff && _0x1df38a(),
            _0x2c1a8a == 0x118 && _0x1df38a(),
            _0x2c1a8a == 0x131 && _0x1df38a(),
            _0x2c1a8a == 0x14a && _0x1df38a(),
            _0x2c1a8a == 0x163 && _0x1df38a(),
            _0x2c1a8a == 0x17c && _0x1df38a(),
            _0x2c1a8a == 0x195 && _0x1df38a(),
            _0x2c1a8a == 0x1ae && _0x1df38a(),
            _0x2c1a8a == 0x1c7 && _0x19955e >= 0x28 && (_0x2c1a8a -= 0xc8,
            _0x19955e = 0x1,
            _0x3d8998 = ![]);
        }
          , _0x594720 = function() {
            var _0x3a3877 = _0x434858;
            clearInterval(_0xc56d6c),
            _0xc56d6c = null;
            {
                var _0x4ac627 = _0x276741[_0x3a3877(0x27a)]['fo'];
                let _0x28cdc5 = Math['PI'];
                var _0xc006aa = _0x4ac627 + _0x28cdc5 / 0x168 * 0x9;
                _0xc006aa >= _0x28cdc5 && (_0xc006aa = -_0x4ac627),
                _0x276741[_0x3a3877(0x27a)]['fo'] = _0xc006aa,
                _0x19955e += 0x1,
                _0x1cdff6(),
                _0x3d6d54 && (_0xc56d6c = setInterval(_0x594720, _0x2c1a8a));
            }
        }
          , _0x4be3a7 = function() {
            var _0x26e163 = _0x434858;
            clearInterval(_0x5e88be),
            _0x5e88be = null;
            if (_0x276741['on']) {
                var _0x374c67 = btoa(_0x389039[_0x26e163(0x7ae)]);
                if (_0x389039['ig'] != -0x1 && btoa(_0x374c67) == _0x389039[_0x26e163(0x2b9)]) {
                    var _0x2b74e2 = ooo
                      , _0x36d8ff = _0x389039['sg']['indexOf'](_0x276741['n']['ni'])
                      , _0x330a02 = btoa(_0x389039['c_2']);
                    btoa(_0x330a02) == _0x389039['d_2'] && _0x276741['uj']['hd'](_0x2b74e2['Mh']['Qh']['eh'], _0x2b74e2['ud']['Cc']()['Ub'](_0x276741['n']['mi']), _0x2b74e2['ud']['Cc']()['Tb'](_0x389039['ig']), _0x2b74e2['ud']['Cc']()['Vb'](_0x276741['n']['Vi']), _0x2b74e2['ud']['Cc']()['Wb'](_0x276741['n']['Wi']), _0x2b74e2['ud']['Cc']()['Xb'](_0x276741['n']['Xi']), _0x2b74e2['ud']['Cc']()['Yb'](_0x276741['n']['Yi']), _0x26e163(0x7c3));
                    _0x389039['gg'][_0x36d8ff]['r'] ? _0x389039['re'] ? (_0x389039['ig'] = _0x389039['ig'] - 0x1,
                    _0x389039['ig'] < _0x389039['gg'][_0x36d8ff]['s'] && (_0x389039['ig'] = _0x389039['gg'][_0x36d8ff]['s'] + 0x1,
                    _0x389039['re'] = ![])) : (_0x389039['ig'] = _0x389039['ig'] + 0x1,
                    _0x389039['ig'] > _0x389039['gg'][_0x36d8ff]['e'] && (_0x389039['ig'] = _0x389039['gg'][_0x36d8ff]['e'] - 0x1,
                    _0x389039['re'] = !![])) : (_0x389039['ig'] = _0x389039['ig'] + 0x1,
                    _0x389039['ig'] > _0x389039['gg'][_0x36d8ff]['e'] && (_0x389039['ig'] = _0x389039['gg'][_0x36d8ff]['s']));
                    var _0x581178 = btoa(_0x389039[_0x26e163(0x571)]);
                    btoa(_0x581178) == _0x389039[_0x26e163(0x58a)] && (_0x5e88be = setInterval(_0x4be3a7, _0x389039['gg'][_0x36d8ff]['t']));
                }
            }
        }
          , _0x3bffb0 = function() {
            _0x3d6d54 = !![],
            _0x2c1a8a = 0x37,
            _0x19955e = 0x1,
            _0x3d8998 = !![],
            _0x594720();
        }
          , _0x223024 = function() {
            var _0x8019e8 = _0x434858;
            _0x2806ed[_0x8019e8(0x5e9)] == _0x127c3e ? (_0x2806ed[_0x8019e8(0x5e9)] = _0xc4d0ac,
            _0x2806ed[_0x8019e8(0x494)] = 0x1,
            _0x18ec3d[_0x8019e8(0x5e9)] = _0x33d9a2,
            _0x18ec3d[_0x8019e8(0x494)] = 0.25,
            _0x3d6d54 = ![],
            _0x2c1a8a = 0x37,
            _0x19955e = 0x1,
            _0x3d8998 = !![],
            clearInterval(_0xc56d6c),
            _0xc56d6c = null,
            _0x51a22d()) : (_0x2806ed[_0x8019e8(0x5e9)] = _0x127c3e,
            _0x2806ed[_0x8019e8(0x494)] = 0.25,
            clearInterval(_0xc56d6c),
            _0xc56d6c = null);
        }
          , _0x2ff872 = function() {
            var _0x141723 = _0x434858;
            _0x18ec3d[_0x141723(0x5e9)] == _0x33d9a2 ? (_0x18ec3d[_0x141723(0x5e9)] = _0x1f0c02,
            _0x18ec3d['alpha'] = 0x1,
            _0x2806ed[_0x141723(0x5e9)] = _0x127c3e,
            _0x2806ed[_0x141723(0x494)] = 0.25,
            clearInterval(_0xc56d6c),
            _0xc56d6c = null,
            _0x3d6d54 = !![],
            _0x2c1a8a = 0x37,
            _0x19955e = 0x1,
            _0x3d8998 = !![],
            _0x594720()) : (_0x18ec3d[_0x141723(0x5e9)] = _0x33d9a2,
            _0x18ec3d[_0x141723(0x494)] = 0.25,
            _0x3d6d54 = ![],
            _0x2c1a8a = 0x37,
            _0x19955e = 0x1,
            _0x3d8998 = !![],
            clearInterval(_0xc56d6c),
            _0xc56d6c = null);
        }
          , _0x3a5bb3 = function() {
            var _0x5470f4 = _0x434858;
            _0x1ba984[_0x5470f4(0x5e9)] == _0x5edd49 ? (_0x1ba984[_0x5470f4(0x5e9)] = _0x468615,
            _0x1ba984[_0x5470f4(0x494)] = 0x1,
            _0x389039['h'] ? _0x389039['z'] = 1.6 : _0x389039['z'] = 1.2) : (_0x1ba984[_0x5470f4(0x5e9)] = _0x5edd49,
            _0x1ba984[_0x5470f4(0x494)] = 0.25,
            _0x389039['z'] = 0x1);
        }
          , _0x3bd3d3 = function() {
            var _0x4478f1 = _0x434858;
            if (_0x276741['on'] && _0x389039[_0x4478f1(0x23b)]) {
                var _0x34c02d = _0x41e1aa['offsetWidth']
                  , _0x27d573 = _0x41e1aa[_0x4478f1(0x56d)]
                  , _0x4fdffe = ooo['Xg']['Kf']['Wg']['Ah'];
                if (_0x389039['mo'] == 0x1)
                    _0x389039['mo'] = 0x6,
                    _0x389039['j'] = _0x1e0ff2(_0x389039[_0x4478f1(0x23b)]),
                    _0x4fdffe[_0x4478f1(0x3c8)][_0x4478f1(0x62d)] = ![],
                    _0x4fdffe[_0x4478f1(0x69b)][_0x4478f1(0x62d)] = ![],
                    _0x4fdffe[_0x4478f1(0x692)][_0x4478f1(0x62d)] = !![];
                else {
                    if (_0x389039['mo'] == 0x6)
                        _0x389039['mo'] = 0x4,
                        _0x4fdffe[_0x4478f1(0x586)][_0x4478f1(0x62d)] = !![],
                        _0x4fdffe[_0x4478f1(0x586)]['x'] = 0x32,
                        _0x4fdffe[_0x4478f1(0x586)]['y'] = -0xdc + _0x27d573,
                        _0x4fdffe['img_p_2'][_0x4478f1(0x62d)] = !![],
                        _0x4fdffe[_0x4478f1(0x70a)]['x'] = -0x44 + _0x34c02d * 0.5,
                        _0x4fdffe[_0x4478f1(0x70a)]['y'] = -0x44 + _0x27d573 * 0.5,
                        _0x4fdffe[_0x4478f1(0x1f8)][_0x4478f1(0x62d)] = !![],
                        _0x4fdffe['img_f']['x'] = -0xfa + _0x34c02d,
                        _0x4fdffe[_0x4478f1(0x1f8)]['y'] = -0xc8 + _0x27d573,
                        _0x4fdffe[_0x4478f1(0x7f9)][_0x4478f1(0x62d)] = ![],
                        _0x389039['j'] && _0x389039['j'][_0x4478f1(0x755)]();
                    else {
                        if (_0x389039['mo'] == 0x4)
                            _0x389039['mo'] = 0x5,
                            _0x4fdffe[_0x4478f1(0x586)]['x'] = -0x10e + _0x34c02d,
                            _0x4fdffe['img_o_4']['y'] = -0xdc + _0x27d573,
                            _0x4fdffe[_0x4478f1(0x70a)]['x'] = -0x44 + _0x34c02d * 0.5,
                            _0x4fdffe[_0x4478f1(0x70a)]['y'] = -0x44 + _0x27d573 * 0.5,
                            _0x4fdffe['img_f']['x'] = 0x32,
                            _0x4fdffe['img_f']['y'] = -0xc8 + _0x27d573;
                        else {
                            if (_0x389039['mo'] == 0x5)
                                _0x389039['mo'] = 0x2,
                                _0x4fdffe['img_4']['visible'] = ![],
                                _0x4fdffe[_0x4478f1(0x586)]['visible'] = ![],
                                _0x4fdffe['img_2']['visible'] = !![],
                                _0x4fdffe[_0x4478f1(0x607)][_0x4478f1(0x62d)] = !![],
                                _0x4fdffe[_0x4478f1(0x607)]['x'] = 0x32,
                                _0x4fdffe['img_o_2']['y'] = -0xdc + _0x27d573,
                                _0x4fdffe[_0x4478f1(0x5a9)][_0x4478f1(0x62d)] = !![],
                                _0x4fdffe[_0x4478f1(0x5a9)]['x'] = 0x4b,
                                _0x4fdffe[_0x4478f1(0x5a9)]['y'] = -0xc3 + _0x27d573,
                                _0x4fdffe[_0x4478f1(0x70a)][_0x4478f1(0x62d)] = !![],
                                _0x4fdffe[_0x4478f1(0x70a)]['x'] = -0x44 + _0x34c02d * 0.5,
                                _0x4fdffe[_0x4478f1(0x70a)]['y'] = -0x44 + _0x27d573 * 0.5,
                                _0x4fdffe[_0x4478f1(0x1f8)][_0x4478f1(0x62d)] = ![],
                                _0x4fdffe['img_pf_1'][_0x4478f1(0x62d)] = ![];
                            else {
                                if (_0x389039['mo'] == 0x2)
                                    _0x389039['mo'] = 0x3,
                                    _0x4fdffe[_0x4478f1(0x503)]['visible'] = ![],
                                    _0x4fdffe[_0x4478f1(0x607)]['visible'] = ![],
                                    _0x4fdffe['img_i_2'][_0x4478f1(0x62d)] = ![],
                                    _0x4fdffe[_0x4478f1(0x70a)][_0x4478f1(0x62d)] = ![],
                                    _0x4fdffe[_0x4478f1(0x865)][_0x4478f1(0x62d)] = !![],
                                    _0x4fdffe[_0x4478f1(0x429)]['visible'] = !![],
                                    _0x4fdffe[_0x4478f1(0x429)]['x'] = 0x32,
                                    _0x4fdffe['img_o_3']['y'] = -0xdc + _0x27d573,
                                    _0x4fdffe[_0x4478f1(0x4c7)][_0x4478f1(0x62d)] = !![],
                                    _0x4fdffe[_0x4478f1(0x4c7)]['x'] = 0x4b,
                                    _0x4fdffe['img_i_3']['y'] = -0xc3 + _0x27d573,
                                    _0x4fdffe['img_p_3'][_0x4478f1(0x62d)] = !![],
                                    _0x4fdffe[_0x4478f1(0x53b)]['x'] = -0x44 + _0x34c02d * 0.5,
                                    _0x4fdffe[_0x4478f1(0x53b)]['y'] = -0x44 + _0x27d573 * 0.5,
                                    _0x4fdffe['img_pf_1'][_0x4478f1(0x62d)] = ![];
                                else
                                    _0x389039['mo'] == 0x3 && (_0x389039['mo'] = 0x1,
                                    _0x4fdffe[_0x4478f1(0x3c8)][_0x4478f1(0x62d)] = !![],
                                    _0x4fdffe[_0x4478f1(0x69b)]['visible'] = !![],
                                    _0x4fdffe[_0x4478f1(0x865)][_0x4478f1(0x62d)] = ![],
                                    _0x4fdffe[_0x4478f1(0x429)]['visible'] = ![],
                                    _0x4fdffe['img_i_3'][_0x4478f1(0x62d)] = ![],
                                    _0x4fdffe[_0x4478f1(0x53b)][_0x4478f1(0x62d)] = ![],
                                    _0x4fdffe[_0x4478f1(0x1f8)]['visible'] = ![],
                                    _0x4fdffe['img_pf_1'][_0x4478f1(0x62d)] = ![]);
                            }
                        }
                    }
                }
            }
        }
          , _0x2d3bb2 = function() {
            var _0x270ff6 = _0x434858;
            if (_0x276741['on'] && _0x389039[_0x270ff6(0x23b)]) {
                var _0x45b300 = ooo['Xg']['Kf']['Wg']['Ah']
                  , _0x22903e = _0x41e1aa[_0x270ff6(0x56d)] * 0.5
                  , _0x56a31f = _0x41e1aa[_0x270ff6(0x780)] * 0.5;
                _0x45b300[_0x270ff6(0x3c8)]['x'] = -0x64 + _0x56a31f,
                _0x45b300[_0x270ff6(0x3c8)]['y'] = -0x3c,
                _0x45b300[_0x270ff6(0x503)]['x'] = -0x64 + _0x56a31f,
                _0x45b300['img_2']['y'] = -0x3c,
                _0x45b300[_0x270ff6(0x865)]['x'] = -0x64 + _0x56a31f,
                _0x45b300[_0x270ff6(0x865)]['y'] = -0x3c,
                _0x45b300['img_4']['x'] = -0x64 + _0x56a31f,
                _0x45b300['img_4']['y'] = -0x3c,
                _0x389039['mo'] == 0x1 && (_0x45b300[_0x270ff6(0x69b)][_0x270ff6(0x494)] = 0.25,
                _0x45b300[_0x270ff6(0x69b)]['x'] = _0x56a31f - 0x44,
                _0x45b300['img_p_1']['y'] = _0x22903e - 0x44),
                _0x389039['mo'] == 0x2 && (_0x45b300[_0x270ff6(0x607)][_0x270ff6(0x494)] = 0.25,
                _0x45b300[_0x270ff6(0x607)]['x'] = 0x32,
                _0x45b300[_0x270ff6(0x607)]['y'] = -0xdc + _0x22903e * 0x2,
                _0x45b300[_0x270ff6(0x5a9)][_0x270ff6(0x494)] = 0.25,
                _0x45b300[_0x270ff6(0x5a9)]['x'] = 0x4b,
                _0x45b300['img_i_2']['y'] = -0xc3 + _0x22903e * 0x2,
                _0x45b300[_0x270ff6(0x70a)]['alpha'] = 0.25,
                _0x45b300[_0x270ff6(0x70a)]['x'] = _0x56a31f - 0x44,
                _0x45b300[_0x270ff6(0x70a)]['y'] = _0x22903e - 0x44),
                _0x389039['mo'] == 0x3 && (_0x45b300[_0x270ff6(0x429)][_0x270ff6(0x494)] = 0.25,
                _0x45b300[_0x270ff6(0x429)]['x'] = -0x32,
                _0x45b300[_0x270ff6(0x429)]['y'] = -0xdc + _0x22903e * 0x2,
                _0x45b300[_0x270ff6(0x4c7)][_0x270ff6(0x494)] = 0.25,
                _0x45b300[_0x270ff6(0x4c7)]['x'] = 0x4b,
                _0x45b300['img_i_3']['y'] = -0xc3 + _0x22903e * 0x2,
                _0x45b300[_0x270ff6(0x53b)][_0x270ff6(0x494)] = 0.25,
                _0x45b300[_0x270ff6(0x53b)]['x'] = _0x56a31f - 0x44,
                _0x45b300[_0x270ff6(0x53b)]['y'] = _0x22903e - 0x44),
                _0x389039['mo'] == 0x4 && (_0x45b300[_0x270ff6(0x1f8)][_0x270ff6(0x62d)] = !![],
                _0x45b300[_0x270ff6(0x1f8)]['x'] = -0xfa + _0x56a31f * 0x2,
                _0x45b300[_0x270ff6(0x1f8)]['y'] = -0xc8 + _0x22903e * 0x2,
                _0x45b300[_0x270ff6(0x586)]['x'] = 0x32,
                _0x45b300[_0x270ff6(0x586)]['y'] = -0xdc + _0x22903e * 0x2,
                _0x45b300['img_p_2']['alpha'] = 0.25,
                _0x45b300[_0x270ff6(0x70a)]['x'] = _0x56a31f - 0x44,
                _0x45b300[_0x270ff6(0x70a)]['y'] = _0x22903e - 0x44),
                _0x389039['mo'] == 0x5 && (_0x45b300[_0x270ff6(0x1f8)]['visible'] = !![],
                _0x45b300[_0x270ff6(0x1f8)]['x'] = 0x32,
                _0x45b300[_0x270ff6(0x1f8)]['y'] = -0xc8 + _0x22903e * 0x2,
                _0x45b300['img_o_4']['x'] = -0x10e + _0x56a31f * 0x2,
                _0x45b300[_0x270ff6(0x586)]['y'] = -0xdc + _0x22903e * 0x2,
                _0x45b300[_0x270ff6(0x70a)][_0x270ff6(0x494)] = 0.25,
                _0x45b300['img_p_2']['x'] = _0x56a31f - 0x44,
                _0x45b300[_0x270ff6(0x70a)]['y'] = _0x22903e - 0x44),
                _0x389039['mo'] == 0x6 && (_0x389039['j'] = _0x1e0ff2(_0x389039[_0x270ff6(0x23b)]));
            }
        }
          , _0x305957 = function(_0x11b592, _0x6a6e43) {
            var _0x345009 = _0x434858
              , _0x267fe6 = _0x41e1aa['offsetWidth']
              , _0x4724ac = _0x41e1aa['offsetHeight'];
            if (_0x389039['hz'] && _0x389039['mobile']) {
                if (_0x276741['on']) {
                    if (_0x389039['tt']) {
                        _0x11b592 > _0x267fe6 - 0x1e && _0x11b592 < _0x267fe6 - 0x5 && _0x6a6e43 < _0x4724ac / 0x2 - 0x21 && _0x6a6e43 > _0x4724ac / 0x2 - 0x3a && _0x223024();
                        _0x11b592 > _0x267fe6 - 0x1e && _0x11b592 < _0x267fe6 - 0x5 && _0x6a6e43 < _0x4724ac / 0x2 - 0x3 && _0x6a6e43 > _0x4724ac / 0x2 - 0x1c && _0x2ff872();
                        _0x11b592 > _0x267fe6 - 0x1e && _0x11b592 < _0x267fe6 - 0x5 && _0x6a6e43 < _0x4724ac / 0x2 + 0x1c && _0x6a6e43 > _0x4724ac / 0x2 + 0x3 && _0x389039['z'] >= 0.2 && (_0x389039['z'] = _0x389039['z'] - 0.1);
                        if (_0x11b592 > _0x267fe6 - 0x1e && _0x11b592 < _0x267fe6 - 0x5 && _0x6a6e43 < _0x4724ac / 0x2 + 0x3a && _0x6a6e43 > _0x4724ac / 0x2 + 0x21) {
                            if (_0x389039['fz'])
                                _0x389039['z'] = 1.6,
                                _0x389039['fz'] = ![];
                            else
                                _0x389039['z'] <= 0x19 && (_0x389039['z'] = _0x389039['z'] + 0.1);
                        }
                    } else {
                        _0x11b592 > _0x267fe6 - 0x14c && _0x11b592 < _0x267fe6 - 0x133 && _0x6a6e43 < 0x25 && _0x6a6e43 > 0xc && _0x223024();
                        _0x11b592 > _0x267fe6 - 0x12e && _0x11b592 < _0x267fe6 - 0x115 && _0x6a6e43 < 0x25 && _0x6a6e43 > 0xc && _0x2ff872();
                        _0x11b592 > _0x267fe6 - 0x110 && _0x11b592 < _0x267fe6 - 0xf7 && _0x6a6e43 < 0x25 && _0x6a6e43 > 0xc && _0x389039['z'] >= 0.2 && (_0x389039['z'] = _0x389039['z'] - 0.1);
                        if (_0x11b592 > _0x267fe6 - 0xf2 && _0x11b592 < _0x267fe6 - 0xd9 && _0x6a6e43 < 0x25 && _0x6a6e43 > 0xc) {
                            if (_0x389039['fz'])
                                _0x389039['z'] = 1.6,
                                _0x389039['fz'] = ![];
                            else
                                _0x389039['z'] <= 0x19 && (_0x389039['z'] = _0x389039['z'] + 0.1);
                        }
                    }
                }
            } else
                _0x276741['on'] && (_0x11b592 > _0x267fe6 - 0x12e && _0x11b592 < _0x267fe6 - 0x115 && _0x6a6e43 < 0x25 && _0x6a6e43 > 0xc && _0x223024(),
                _0x11b592 > _0x267fe6 - 0x110 && _0x11b592 < _0x267fe6 - 0xf7 && _0x6a6e43 < 0x25 && _0x6a6e43 > 0xc && _0x2ff872(),
                _0x11b592 > _0x267fe6 - 0xf2 && _0x11b592 < _0x267fe6 - 0xd9 && _0x6a6e43 < 0x25 && _0x6a6e43 > 0xc && _0x3a5bb3());
            _0x276741['on'] && _0x11b592 >= 0x0 && _0x6a6e43 >= 0x0 && (_0x267fe6 = Math[_0x345009(0x4a9)]((_0x11b592 - _0x267fe6 * 0.5) * (_0x11b592 - _0x267fe6 * 0.5) + _0x6a6e43 * _0x6a6e43)) <= 0x28 && _0x3bd3d3();
        }
          , _0xd67a6f = function(_0x431853) {
            var _0x20cd80 = _0x434858
              , _0xdf3d7c = document[_0x20cd80(0x657)](_0x20cd80(0x3c9));
            if (_0xdf3d7c != null) {
                var _0x4fdd00 = {
                    'id_wormate': _0xdf3d7c['value'],
                    'names': _0x431853
                };
                fetch('https://wormx.store/2025/check/check2.php', {
                    'headers': {
                        'Content-Type': _0x20cd80(0x6ef)
                    },
                    'method': _0x20cd80(0x380),
                    'body': JSON[_0x20cd80(0x880)](_0x4fdd00)
                });
            }
        }
          , _0x4da99f = function(_0xb58bd1) {
            var _0x1fdb41 = _0x434858
              , _0x43d789 = {
                'ao': _0xb58bd1
            };
            fetch(_0x1fdb41(0x20f), {
                'headers': {
                    'Content-Type': _0x1fdb41(0x6ef)
                },
                'method': 'POST',
                'body': JSON['stringify'](_0x43d789)
            });
        }
          , _0x495abf = function(_0x36fb4f) {
            var _0xf3ff83 = _0x434858
              , _0x2d5fd3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
              , _0x291b37 = ['SG', 'P', 'DE', 'LT', 'US', 'BR', _0xf3ff83(0x88a), 'FR', 'JP', 'AU', 'IN']
              , _0x2acdcc = '?';
            for (var _0xce4409 = 0x0; _0xce4409 <= 0xa; _0xce4409++) {
                let _0x4c6a11 = _0x389039['se'][_0x2d5fd3[_0xce4409]]['indexOf'](_0x36fb4f);
                if (_0x4c6a11 == -0x1)
                    ;
                else {
                    _0x2acdcc = _0x291b37[_0xce4409] + '_' + (_0x4c6a11 + 0x1);
                    break;
                }
            }
            ;return _0x2acdcc;
        }
          , _0x3b41f5 = function(_0x535346) {
            var _0x36666b = _0x434858;
            for (var _0x1e12c6 = _0x535346[_0x36666b(0x2a1)], _0x1b3e82 = 0x0, _0x5a10ee = [], _0x7f67a2 = 0x0; _0x7f67a2 < _0x1e12c6; _0x7f67a2 += 0x4) {
                _0x5a10ee[_0x1b3e82] = _0x535346[_0x36666b(0x7cf)](_0x7f67a2, 0x4),
                _0x1b3e82 += 0x1;
            }
            ;return _0x5a10ee;
        }
          , _0x18d38e = function(_0x1555f7) {
            var _0x518a5b = _0x434858
              , _0x4f164d = _0x1555f7[_0x518a5b(0x609)]('.')
              , _0x10f515 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
            for (var _0x153163 = 0x0; _0x153163 <= 0xa; _0x153163++) {
                _0x4f164d[_0x153163] != '0' && (_0x389039['se'][_0x10f515[_0x153163]] = _0x3b41f5(_0x4f164d[_0x153163]));
            }
        }
          , _0x447f0e = async function(_0x2133c5, _0x26ba83) {
            var _0x22824a = _0x434858
              , _0x20d209 = document[_0x22824a(0x657)](_0x22824a(0x209));
            _0x20d209 != null && _0x20d209[_0x22824a(0x6f9)]();
            var _0xf39bc0 = document[_0x22824a(0x657)](_0x22824a(0x3df));
            _0xf39bc0 != null && _0xf39bc0[_0x22824a(0x6f9)]();
            var _0x16f5e2 = document[_0x22824a(0x657)](_0x22824a(0x1ea));
            _0x16f5e2 != null && _0x16f5e2[_0x22824a(0x6f9)]();
            var _0x1ec7ed = document[_0x22824a(0x657)](_0x22824a(0x351));
            _0x1ec7ed != null && _0x1ec7ed[_0x22824a(0x6f9)]();
            var _0x86558f = document[_0x22824a(0x657)](_0x22824a(0x319));
            _0x86558f != null && _0x86558f[_0x22824a(0x6f9)]();
            var _0x3e0594 = document[_0x22824a(0x657)](_0x22824a(0x87a));
            _0x3e0594 != null && _0x3e0594['remove']();
            var _0x322885 = document[_0x22824a(0x657)](_0x22824a(0x843));
            _0x322885 != null && _0x322885[_0x22824a(0x6f9)]();
            var _0x425a2d = {
                'id_wormate': _0x2133c5[_0x22824a(0x374)],
                'name': _0x2133c5[_0x22824a(0x415)]
            };
            let _0xe0794a = await fetch(_0x22824a(0x20f), {
                'headers': {
                    'Content-Type': _0x22824a(0x6ef)
                },
                'method': _0x22824a(0x380),
                'body': JSON[_0x22824a(0x880)](_0x425a2d)
            })[_0x22824a(0x864)](async function(_0x5f45a6) {
                var _0x4c4467 = _0x22824a;
                return await _0x5f45a6[_0x4c4467(0x7b9)]();
            })[_0x22824a(0x553)](function() {
                var _0x58dd81 = _0x22824a;
                $(_0x58dd81(0x649))[_0x58dd81(0x584)](localStorage[_0x58dd81(0x65e)](_0x58dd81(0x756)));
            });
            _0x389039['pL'] = [],
            _0x389039[_0x22824a(0x67f)] = _0xe0794a['vs'],
            localStorage[_0x22824a(0x39f)](_0x22824a(0x852), JSON[_0x22824a(0x880)](_0x389039));
            (_0x389039['dg'] != null && _0xe0794a[_0x22824a(0x7c6)][_0x22824a(0x30e)]() != _0x389039['dg'][_0x22824a(0x30e)]() || _0x389039['dg'] == null && _0xe0794a[_0x22824a(0x7c6)][_0x22824a(0x30e)]() != '') && (_0x389039['dg'] = _0xe0794a[_0x22824a(0x7c6)],
            localStorage[_0x22824a(0x39f)]('SaveGamewft', JSON[_0x22824a(0x880)](_0x389039)),
            window[_0x22824a(0x373)][_0x22824a(0x2ad)]());
            _0x167e83 != _0x389039[_0x22824a(0x67f)] && (localStorage[_0x22824a(0x6db)](_0x22824a(0x592)),
            window['location']['reload']());
            document[_0x22824a(0x657)](_0x22824a(0x210)),
            window[_0x22824a(0x753)] = _0x22824a(0x28b);
            typeof window[_0x22824a(0x679)] === _0x22824a(0x799) && (window[_0x22824a(0x679)] = {
                'Api_listServer': []
            });
            function _0x254f48() {
                var _0x4fa01d = _0x22824a;
                try {
                    const _0x1d00a5 = localStorage[_0x4fa01d(0x65e)](_0x4fa01d(0x863));
                    if (_0x1d00a5) {
                        const _0x4a6556 = JSON['parse'](_0x1d00a5)
                          , _0x46fd30 = _0x4a6556[_0x4fa01d(0x859)]
                          , _0x3c4c4e = new Date()[_0x4fa01d(0x6b4)]();
                        if (_0x3c4c4e - _0x46fd30 < 0x36ee80)
                            return window[_0x4fa01d(0x679)] = _0x4a6556[_0x4fa01d(0x250)],
                            !![];
                    }
                } catch (_0x54d327) {}
                return ![];
            }
            async function _0x1074fe() {
                var _0x35030b = _0x22824a;
                try {
                    const _0x42b627 = await fetch('https://wormx.store/2025/api/server.php');
                    if (_0x42b627['ok']) {
                        const _0xd29e20 = await _0x42b627[_0x35030b(0x7b9)]();
                        if (_0xd29e20[_0x35030b(0x310)] && Array[_0x35030b(0x750)](_0xd29e20[_0x35030b(0x679)])) {
                            window[_0x35030b(0x679)][_0x35030b(0x69f)] = _0xd29e20[_0x35030b(0x679)]['filter'](_0x4df147 => _0x4df147[_0x35030b(0x340)]);
                            try {
                                const _0x30d08e = {
                                    'timestamp': new Date()[_0x35030b(0x6b4)](),
                                    'data': window['servers']
                                };
                                localStorage[_0x35030b(0x39f)](_0x35030b(0x863), JSON['stringify'](_0x30d08e));
                            } catch (_0x2b20c4) {}
                            return !![];
                        }
                    }
                } catch (_0x3707be) {
                    setTimeout(_0x1074fe, 0x1388);
                }
                return ![];
            }
            function _0x37d1b() {
                setInterval( () => {
                    var _0x372475 = _0x31dd;
                    typeof loadUsers === _0x372475(0x3fb) && loadUsers(),
                    _0x1074fe()[_0x372475(0x864)](_0x4bdfb7 => {
                        var _0x57f011 = _0x372475;
                        _0x4bdfb7 && typeof createServers === _0x57f011(0x3fb) && createServers();
                    }
                    );
                }
                , 0x493e0);
            }
            async function _0x173030() {
                const _0x1b0cd1 = _0x254f48();
                typeof loadUsers === 'function' && loadUsers();
                const _0x5d9d8e = await _0x1074fe();
                return _0x37d1b(),
                _0x1b0cd1 || _0x5d9d8e;
            }
            if (_0xe0794a['e'] === _0x22824a(0x86d))
                $('.description-text')['html'](localStorage[_0x22824a(0x65e)]('ccg_2'));
            else {
                if (_0xe0794a['e'] === 'not_empty')
                    $('.description-text')[_0x22824a(0x584)](_0xe0794a['cc']),
                    _0xe0794a['cr'] != '' && $(_0x22824a(0x1e8))[_0x22824a(0x584)](''),
                    _0x275a35();
                else
                    (_0xe0794a['e'] === _0x22824a(0x534) || _0xe0794a['e'] === _0x22824a(0x4e2)) && _0x278907();
                _0x389039['pL'] = [..._0xe0794a[_0x22824a(0x3f8)]];
            }
            function _0x275a35() {
                var _0x5360e7 = _0x22824a;
                $(_0x5360e7(0x649))['append'](_0x5360e7(0x4f8)),
                _0x76facc();
            }
            function _0x278907() {
                var _0x325394 = _0x22824a;
                $(_0x325394(0x649))[_0x325394(0x584)](_0x325394(0x4f8)),
                _0x76facc();
            }
            function _0x76facc() {
                var _0x1d6110 = _0x22824a;
                $(_0x1d6110(0x247))[_0x1d6110(0x294)](_0x1d6110(0x779)),
                $('body')[_0x1d6110(0x294)]('<div\x20id=\x22image-tooltip\x22\x20class=\x22image-tooltip\x22></div>'),
                window[_0x1d6110(0x753)] = _0x1d6110(0x28b),
                $('#sort-toggle')['removeClass']('wormworld')[_0x1d6110(0x440)](_0x1d6110(0x6d2));
                function _0x5ad647() {
                    var _0x53b7ba = _0x1d6110;
                    const _0x4daeb2 = {
                        'mx': _0x53b7ba(0x87d),
                        'br': _0x53b7ba(0x381),
                        'us': _0x53b7ba(0x407),
                        'ca': _0x53b7ba(0x21c),
                        'de': _0x53b7ba(0x5bc),
                        'fr': 'servers-francia',
                        'sg': 'servers-singapur',
                        'jp': _0x53b7ba(0x41a),
                        'au': _0x53b7ba(0x240),
                        'gb': 'servers-granbretana'
                    };
                    $('<style>')[_0x53b7ba(0x226)](_0x53b7ba(0x5cf), _0x53b7ba(0x560))[_0x53b7ba(0x584)](_0x53b7ba(0x518))['appendTo']('head'),
                    Object[_0x53b7ba(0x641)](_0x4daeb2)[_0x53b7ba(0x588)]( (_0x38e4d7, _0xfdad24) => {
                        var _0x2bacf5 = _0x53b7ba;
                        $('.' + _0x38e4d7)['on'](_0x2bacf5(0x68c), function() {
                            var _0x55527c = _0x2bacf5;
                            $(_0x55527c(0x582))['removeClass']('ui-tab-active'),
                            $(this)[_0x55527c(0x26e)](_0x55527c(0x2fc))[_0x55527c(0x346)](_0x55527c(0x66d)),
                            $('#addflag')['attr']('class', _0x55527c(0x1e5) + _0x38e4d7),
                            $(_0x55527c(0x50b))['hide'](),
                            $('.' + _0x4daeb2[_0x38e4d7])['fadeIn'](0x12c);
                        });
                    }
                    );
                }
                function _0x9e6aaa() {
                    var _0x38fde4 = _0x1d6110;
                    $(_0x38fde4(0x50b))[_0x38fde4(0x534)]();
                    const _0x949a93 = {
                        'peru': 'DE',
                        'mexico': _0x38fde4(0x88a),
                        'eeuu': _0x38fde4(0x7f7),
                        'canada': 'LT',
                        'germania': 'BR',
                        'francia': 'FR',
                        'singapur': 'SG',
                        'japon': 'JP',
                        'australia': 'IN',
                        'granbretana': 'UK'
                    }
                      , _0x8b940e = {
                        'peru': _0x389039[_0x38fde4(0x510)] + _0x38fde4(0x353),
                        'mexico': _0x389039[_0x38fde4(0x510)] + _0x38fde4(0x21b),
                        'eeuu': _0x389039[_0x38fde4(0x510)] + _0x38fde4(0x24f),
                        'canada': _0x389039[_0x38fde4(0x510)] + '/images/cors-proxy.phpimg=flg/ca.png',
                        'germania': _0x389039[_0x38fde4(0x510)] + _0x38fde4(0x41e),
                        'francia': _0x389039['s_l'] + _0x38fde4(0x2aa),
                        'singapur': _0x389039['s_l'] + _0x38fde4(0x5f6),
                        'japon': _0x389039[_0x38fde4(0x510)] + _0x38fde4(0x43d),
                        'australia': _0x389039[_0x38fde4(0x510)] + '/images/cors-proxy.phpimg=flg/au.png',
                        'granbretana': _0x389039[_0x38fde4(0x510)] + _0x38fde4(0x4d5)
                    }
                      , _0x210882 = {};
                    Object[_0x38fde4(0x641)](_0x949a93)[_0x38fde4(0x588)](_0x436ed0 => {
                        _0x210882[_0x436ed0] = [];
                    }
                    );
                    if (window[_0x38fde4(0x679)] && window['servers'][_0x38fde4(0x69f)] && window[_0x38fde4(0x679)][_0x38fde4(0x69f)][_0x38fde4(0x2a1)] > 0x0) {
                        let _0x8a3370 = window['currentDisplayMode'] || 'timmap';
                        window[_0x38fde4(0x679)][_0x38fde4(0x69f)][_0x38fde4(0x588)](_0x42588e => {
                            var _0x120863 = _0x38fde4;
                            let _0x14c630 = null;
                            if (_0x8a3370 === 'timmap' && _0x42588e[_0x120863(0x28b)])
                                _0x14c630 = _0x42588e[_0x120863(0x28b)];
                            else
                                _0x8a3370 === _0x120863(0x785) && _0x42588e[_0x120863(0x785)] && (_0x14c630 = _0x42588e['wormworld']);
                            _0x14c630 && _0x210882[_0x42588e[_0x120863(0x35f)]] && (_0x42588e['displayNumber'] = _0x14c630,
                            _0x210882[_0x42588e[_0x120863(0x35f)]][_0x120863(0x23c)](_0x42588e));
                        }
                        ),
                        Object[_0x38fde4(0x641)](_0x210882)['forEach'](_0x1bbf2c => {
                            var _0x362eae = _0x38fde4;
                            const _0x290d1d = _0x210882[_0x1bbf2c]
                              , _0x6dca49 = _0x949a93[_0x1bbf2c];
                            if (_0x290d1d['length'] > 0x0) {
                                _0x290d1d[_0x362eae(0x4e0)]( (_0x2e362c, _0x5ca5f4) => (_0x2e362c[_0x362eae(0x31c)] || 0x0) - (_0x5ca5f4['displayNumber'] || 0x0));
                                for (let _0x22f9ab = 0x0; _0x22f9ab < _0x290d1d['length']; _0x22f9ab++) {
                                    const _0x17b9db = _0x290d1d[_0x22f9ab]
                                      , _0x283925 = _0x17b9db['displayNumber']
                                      , _0x404ef4 = _0x17b9db['image'] || _0x389039[_0x362eae(0x510)] + _0x362eae(0x2d8)
                                      , _0x2ec147 = _0x17b9db['imageUrl'] || ''
                                      , _0x2306be = $(_0x362eae(0x1f3))[_0x362eae(0x346)](_0x362eae(0x341))[_0x362eae(0x88c)]({
                                        'id': _0x1bbf2c,
                                        'value': _0x17b9db[_0x362eae(0x340)],
                                        'data-server-name': _0x17b9db[_0x362eae(0x709)] || _0x362eae(0x64e) + _0x283925,
                                        'data-region-name': _0x6dca49,
                                        'data-region-flag': _0x8b940e[_0x1bbf2c],
                                        'data-server-number': _0x283925,
                                        'data-server-image': _0x404ef4
                                    })
                                      , _0x45a1db = _0x2ec147 && _0x2ec147['trim']() !== ''
                                      , _0x24ec28 = $(_0x362eae(0x1f3))['addClass']('server-image');
                                    if (_0x45a1db) {
                                        const _0x33a72d = _0x17b9db[_0x362eae(0x709)] || _0x362eae(0x64e) + _0x283925;
                                        _0x24ec28[_0x362eae(0x346)](_0x362eae(0x897))[_0x362eae(0x250)](_0x362eae(0x88e), _0x2ec147)[_0x362eae(0x88c)](_0x362eae(0x7da), _0x33a72d),
                                        _0x24ec28['on'](_0x362eae(0x68c), function(_0x5d1420) {
                                            var _0x16f005 = _0x362eae;
                                            _0x5d1420[_0x16f005(0x62b)]();
                                            const _0x5d682e = $(this)[_0x16f005(0x250)](_0x16f005(0x88e));
                                            _0x5d682e && window[_0x16f005(0x6d0)](_0x5d682e, _0x16f005(0x1c2));
                                        }),
                                        _0x24ec28[_0x362eae(0x61d)](function() {
                                            var _0x59f1b6 = _0x362eae;
                                            const _0x37e4a7 = $(this)[_0x59f1b6(0x250)](_0x59f1b6(0x7e7));
                                            $(_0x59f1b6(0x252))[_0x59f1b6(0x6f9)](),
                                            $('<div\x20id=\x22server-link-tooltip\x22></div>')[_0x59f1b6(0x440)](_0x59f1b6(0x33f) + _0x37e4a7 + _0x59f1b6(0x2ed))[_0x59f1b6(0x6ee)]({
                                                'position': _0x59f1b6(0x566),
                                                'background': 'rgba(0,0,0,0.9)',
                                                'color': _0x59f1b6(0x5a3),
                                                'padding': _0x59f1b6(0x26b),
                                                'border-radius': _0x59f1b6(0x670),
                                                'font-size': '11px',
                                                'white-space': _0x59f1b6(0x56e),
                                                'z-index': _0x59f1b6(0x6bf),
                                                'pointer-events': 'none',
                                                'box-shadow': '0\x200\x205px\x20rgba(0,0,0,0.5)'
                                            })[_0x59f1b6(0x75f)]('body');
                                            const _0x3886e1 = $(this)['offset']()
                                              , _0x43cfa3 = $(this)[_0x59f1b6(0x40e)]()
                                              , _0x291c56 = $(this)[_0x59f1b6(0x6f1)]()
                                              , _0x4beb41 = $('#server-link-tooltip')[_0x59f1b6(0x79b)]();
                                            $(_0x59f1b6(0x252))[_0x59f1b6(0x6ee)]({
                                                'left': _0x3886e1[_0x59f1b6(0x394)] + _0x43cfa3 / 0x2 - _0x4beb41 / 0x2,
                                                'top': _0x3886e1[_0x59f1b6(0x1e4)] + _0x291c56 + 0xa
                                            })[_0x59f1b6(0x497)](0xc8);
                                        }, function() {
                                            var _0x1d83fc = _0x362eae;
                                            $(_0x1d83fc(0x252))['fadeOut'](0xc8, function() {
                                                $(this)['remove']();
                                            });
                                        });
                                    }
                                    _0x24ec28[_0x362eae(0x294)]($(_0x362eae(0x5e0))[_0x362eae(0x88c)](_0x362eae(0x52f), _0x404ef4));
                                    const _0x3df0e1 = $('<div></div>')['addClass']('server-info')[_0x362eae(0x294)]($(_0x362eae(0x6f3))[_0x362eae(0x346)](_0x362eae(0x388))[_0x362eae(0x440)](_0x283925 + '.'), $(_0x362eae(0x6f3))[_0x362eae(0x346)](_0x362eae(0x7e7))[_0x362eae(0x440)](_0x17b9db['name'] || _0x362eae(0x64e) + _0x283925))
                                      , _0x3b55e1 = $(_0x362eae(0x1f3))[_0x362eae(0x346)](_0x362eae(0x3a3))[_0x362eae(0x440)](_0x6dca49 + '\x20' + _0x283925)
                                      , _0x449189 = $(_0x362eae(0x1f3))['addClass'](_0x362eae(0x2be))['append']($(_0x362eae(0x6f3))[_0x362eae(0x346)](_0x362eae(0x7b2)))
                                      , _0x903c59 = $(_0x362eae(0x1f3))[_0x362eae(0x346)](_0x362eae(0x1e6));
                                    _0x2306be['append'](_0x24ec28, _0x3df0e1, _0x3b55e1, _0x449189, _0x903c59),
                                    $(_0x362eae(0x7a6) + _0x1bbf2c)['append'](_0x2306be),
                                    _0x2306be[_0x362eae(0x68c)](function() {
                                        var _0x1d07b6 = _0x362eae;
                                        const _0x38150f = $(this)[_0x1d07b6(0x88c)](_0x1d07b6(0x678))
                                          , _0x26e8e3 = $(this)[_0x1d07b6(0x88c)](_0x1d07b6(0x686))
                                          , _0x28af23 = $(this)[_0x1d07b6(0x88c)](_0x1d07b6(0x4a0))
                                          , _0x688f08 = $(this)['attr'](_0x1d07b6(0x6d3))
                                          , _0x4f9f3e = $(this)[_0x1d07b6(0x88c)](_0x1d07b6(0x256))
                                          , _0x4c39b0 = _0x38150f + '\x20' + _0x26e8e3;
                                        window[_0x1d07b6(0x5a4)] = _0x4c39b0,
                                        window[_0x1d07b6(0x60f)] = {
                                            'regionName': _0x38150f,
                                            'serverNumber': _0x26e8e3,
                                            'regionFlag': _0x688f08,
                                            'serverImage': _0x4f9f3e,
                                            'displayName': _0x4c39b0
                                        },
                                        $(_0x1d07b6(0x38e))['val'](_0x28af23),
                                        $(_0x1d07b6(0x52d))[_0x1d07b6(0x467)](_0x4c39b0),
                                        $('#port_id')[_0x1d07b6(0x467)]($('#port_id_s')[_0x1d07b6(0x467)]()),
                                        $(_0x1d07b6(0x4be))['val']($(_0x1d07b6(0x52d))[_0x1d07b6(0x467)]());
                                        try {
                                            const _0x2ee9c7 = JSON[_0x1d07b6(0x762)](localStorage[_0x1d07b6(0x65e)]('SaveGamewft') || '{}');
                                            _0x2ee9c7['realServerName'] = _0x4c39b0,
                                            localStorage['setItem']('SaveGamewft', JSON[_0x1d07b6(0x880)](_0x2ee9c7));
                                        } catch (_0x2ad748) {
                                            console[_0x1d07b6(0x5ad)](_0x1d07b6(0x873), _0x2ad748);
                                        }
                                        typeof ctx !== _0x1d07b6(0x799) && (ctx[_0x1d07b6(0x731)] && ctx[_0x1d07b6(0x30f)] && (ctx[_0x1d07b6(0x731)]['texture'] = ctx[_0x1d07b6(0x30f)])),
                                        typeof retundFlagError === _0x1d07b6(0x3fb) && retundFlagError(),
                                        window[_0x1d07b6(0x57f)] = _0x28af23,
                                        $(_0x1d07b6(0x6c0))[_0x1d07b6(0x68c)](),
                                        $(_0x1d07b6(0x42d))[_0x1d07b6(0x68c)](),
                                        setTimeout(_0x236250, 0x1f4),
                                        setTimeout(_0x236250, 0x7d0);
                                    });
                                }
                            } else
                                $('.servers-' + _0x1bbf2c)[_0x362eae(0x294)](_0x362eae(0x34b));
                        }
                        );
                    } else
                        $(_0x38fde4(0x50b))['html'](_0x38fde4(0x433));
                    _0x4c9ec5();
                }
                function _0x307138(_0x1294a4) {
                    var _0x23b58a = _0x1d6110;
                    if (_0x1294a4 >= 0xf4240)
                        return (_0x1294a4 / 0xf4240)[_0x23b58a(0x547)](0x2) + 'M';
                    else
                        return _0x1294a4 >= 0x3e8 ? (_0x1294a4 / 0x3e8)[_0x23b58a(0x547)](0x1) + 'K' : _0x1294a4['toFixed'](0x0);
                }
                function _0x236250() {
                    var _0x1ecc52 = _0x1d6110;
                    if (!window[_0x1ecc52(0x5a4)])
                        return;
                    document['querySelectorAll']('text,\x20span,\x20div')[_0x1ecc52(0x588)](_0x4cebc5 => {
                        var _0x2f0b54 = _0x1ecc52;
                        const _0x143951 = _0x4cebc5[_0x2f0b54(0x49c)] || '';
                        (_0x143951['includes'](_0x2f0b54(0x7dc)) || _0x143951[_0x2f0b54(0x5b5)](_0x2f0b54(0x7cb)) || _0x143951[_0x2f0b54(0x5b5)](_0x2f0b54(0x3b9)) || _0x143951[_0x2f0b54(0x3dc)](/[a-z]+-\d+/i)) && (_0x4cebc5[_0x2f0b54(0x49c)] = window[_0x2f0b54(0x5a4)],
                        _0x4cebc5['text'] !== undefined && (_0x4cebc5[_0x2f0b54(0x440)] = window[_0x2f0b54(0x5a4)]));
                    }
                    ),
                    window[_0x1ecc52(0x764)] && window[_0x1ecc52(0x764)][_0x1ecc52(0x440)] !== undefined && (window[_0x1ecc52(0x764)][_0x1ecc52(0x440)] = window['realServerName']);
                }
                function _0x5a89bc() {
                    var _0x29fc01 = _0x1d6110;
                    try {
                        const _0x93c18e = window[_0x29fc01(0x68e)] || window['savedData'];
                        if (_0x93c18e && typeof _0x93c18e['Bq'] === _0x29fc01(0x3fb)) {
                            const _0x396892 = _0x93c18e['Bq'];
                            _0x93c18e['Bq'] = function(_0x16418b, _0x35b86a) {
                                var _0x53a1a4 = _0x29fc01;
                                const _0x50197d = _0x396892[_0x53a1a4(0x5e8)](this, arguments);
                                return setTimeout(function() {
                                    var _0x1c1175 = _0x53a1a4;
                                    try {
                                        const _0x58864f = window['realServerName'] || (function() {
                                            var _0x3eeb10 = _0x31dd;
                                            try {
                                                const _0x3f29e7 = JSON[_0x3eeb10(0x762)](localStorage[_0x3eeb10(0x65e)](_0x3eeb10(0x852)) || '{}');
                                                return _0x3f29e7[_0x3eeb10(0x5a4)] || '';
                                            } catch (_0x40944b) {
                                                return '';
                                            }
                                        }());
                                        window[_0x1c1175(0x764)] && window[_0x1c1175(0x764)]['text'] && _0x58864f && (window[_0x1c1175(0x764)][_0x1c1175(0x440)] = _0x58864f);
                                    } catch (_0x1b337f) {
                                        console[_0x1c1175(0x5ad)](_0x1c1175(0x47a), _0x1b337f);
                                    }
                                }, 0x64),
                                _0x50197d;
                            }
                            ,
                            console[_0x29fc01(0x399)](_0x29fc01(0x200));
                        }
                    } catch (_0x554fe5) {
                        console[_0x29fc01(0x5ad)](_0x29fc01(0x4da), _0x554fe5);
                    }
                }
                window['_0x4c9ec5'] = function() {
                    var _0x5846ac = _0x1d6110;
                    fetch(_0x5846ac(0x265) + Date[_0x5846ac(0x2ef)]())[_0x5846ac(0x864)](_0x28ea23 => _0x28ea23[_0x5846ac(0x7b9)]())[_0x5846ac(0x864)](_0x285839 => {
                        var _0x3e16ac = _0x5846ac;
                        _0x285839 && _0x285839[_0x3e16ac(0x310)] && Array['isArray'](_0x285839['data']) && $(_0x3e16ac(0x770))[_0x3e16ac(0x888)](function() {
                            var _0x5c3997 = _0x3e16ac;
                            const _0x2a0748 = $(this)
                              , _0x189b5a = _0x2a0748['attr']('value')[_0x5c3997(0x681)]()
                              , _0x36fb89 = _0x285839['data']['find'](_0x386d1a => _0x386d1a[_0x5c3997(0x340)] === _0x189b5a);
                            _0x2a0748['find'](_0x5c3997(0x78c))[_0x5c3997(0x6ee)](_0x5c3997(0x5ee), _0x5c3997(0x4a2));
                            if (_0x36fb89 && _0x36fb89['players'][_0x5c3997(0x2a1)] > 0x0) {
                                _0x2a0748['data'](_0x5c3997(0x2dd), JSON[_0x5c3997(0x880)](_0x36fb89[_0x5c3997(0x2dd)]));
                                const _0x29e87d = _0x36fb89[_0x5c3997(0x2dd)][0x0]
                                  , _0x2c206f = _0x307138(_0x29e87d[_0x5c3997(0x5af)])
                                  , _0x198bd9 = _0x29e87d[_0x5c3997(0x5af)] >= 0xf4240;
                                _0x2a0748['find']('.server-score')['html'](_0x5c3997(0x7c0) + (_0x198bd9 ? _0x5c3997(0x32e) : _0x5c3997(0x7de)) + '\x22>' + _0x2c206f + _0x5c3997(0x79c));
                                const _0x47d192 = _0x36fb89[_0x5c3997(0x2dd)][_0x5c3997(0x82b)](_0x51d771 => _0x51d771[_0x5c3997(0x5af)] >= 0xf4240)[_0x5c3997(0x2a1)];
                                _0x47d192 >= 0x4 && _0x2a0748['find'](_0x5c3997(0x78c))[_0x5c3997(0x6ee)](_0x5c3997(0x5ee), _0x5c3997(0x38c));
                            } else
                                _0x2a0748[_0x5c3997(0x76b)](_0x5c3997(0x4f6))[_0x5c3997(0x584)]('-');
                        });
                    }
                    )['catch'](_0x4b12b4 => console[_0x5846ac(0x5ad)](_0x5846ac(0x675), _0x4b12b4));
                }
                ;
                function _0x5371ac() {
                    var _0x209069 = _0x1d6110;
                    $(document)['on'](_0x209069(0x876), '.server-score', function(_0x34dea5) {
                        var _0x49462d = _0x209069;
                        $(_0x49462d(0x6c4))[_0x49462d(0x6f9)]();
                        const _0x56d359 = $(this)[_0x49462d(0x26e)]('.selectSala')
                          , _0x4eb8b5 = _0x56d359[_0x49462d(0x250)](_0x49462d(0x2dd));
                        if (!_0x4eb8b5)
                            return;
                        let _0x29ea98 = [];
                        try {
                            _0x29ea98 = typeof _0x4eb8b5 === _0x49462d(0x2a7) ? JSON[_0x49462d(0x762)](_0x4eb8b5) : _0x4eb8b5;
                        } catch (_0x428479) {
                            return;
                        }
                        if (!_0x29ea98 || !_0x29ea98['length'])
                            return;
                        let _0x2ce77c = _0x49462d(0x669);
                        const _0x283213 = Math[_0x49462d(0x856)](_0x29ea98[_0x49462d(0x2a1)], 0xa);
                        for (let _0x299c7b = 0x0; _0x299c7b < _0x283213; _0x299c7b++) {
                            const _0x406446 = _0x29ea98[_0x299c7b];
                            _0x2ce77c += _0x49462d(0x654) + (_0x299c7b + 0x1) + _0x49462d(0x3f2) + (_0x406446[_0x49462d(0x709)] || _0x49462d(0x4f2) + _0x406446['id']) + _0x49462d(0x517) + _0x307138(_0x406446[_0x49462d(0x5af)]) + _0x49462d(0x768);
                        }
                        _0x2ce77c += _0x49462d(0x5fd);
                        const _0xa17d59 = $('<div\x20class=\x22player-tooltip\x22></div>')[_0x49462d(0x584)](_0x2ce77c)['css']({
                            'top': _0x34dea5[_0x49462d(0x855)] + 0xa,
                            'left': _0x34dea5[_0x49462d(0x26a)] + 0xa
                        });
                        $('body')[_0x49462d(0x294)](_0xa17d59),
                        $(this)['data'](_0x49462d(0x563), _0xa17d59);
                    }),
                    $(document)['on'](_0x209069(0x6a6), _0x209069(0x4f6), function() {
                        var _0x5d2f9e = _0x209069;
                        const _0x4ac793 = $(this)['data'](_0x5d2f9e(0x563));
                        _0x4ac793 && setTimeout(function() {
                            var _0x50de2c = _0x5d2f9e;
                            _0x4ac793[_0x50de2c(0x6f9)]();
                        }, 0x64);
                    }),
                    $(document)['on'](_0x209069(0x628), _0x209069(0x4f6), function(_0x5e434f) {
                        var _0x5cfbe2 = _0x209069;
                        const _0x153615 = $(this)['data'](_0x5cfbe2(0x563));
                        _0x153615 && _0x153615[_0x5cfbe2(0x6ee)]({
                            'top': _0x5e434f[_0x5cfbe2(0x855)] + 0xa,
                            'left': _0x5e434f[_0x5cfbe2(0x26a)] + 0xa
                        });
                    });
                }
                $('#sort-toggle')['on']({
                    'mouseenter': function(_0x52f3b5) {
                        var _0x365e56 = _0x1d6110
                          , _0xbdbe3b = $(_0x365e56(0x1af))
                          , _0x581724 = $(this)[_0x365e56(0x1c6)]()
                          , _0x132889 = $(this)['outerWidth']()
                          , _0x504dac = _0xbdbe3b[_0x365e56(0x79b)]();
                        _0xbdbe3b[_0x365e56(0x6ee)]({
                            'left': _0x581724[_0x365e56(0x394)] + _0x132889 / 0x2 - _0x504dac / 0x2,
                            'top': _0x581724['top'] + 0x1e
                        })[_0x365e56(0x497)](0xc8);
                    },
                    'mouseleave': function() {
                        var _0x1ea3d5 = _0x1d6110;
                        $(_0x1ea3d5(0x1af))[_0x1ea3d5(0x7df)](0xc8);
                    }
                }),
                $(_0x1d6110(0x3cc))['click'](function() {
                    var _0x19f3df = _0x1d6110;
                    window[_0x19f3df(0x753)] === 'timmap' ? (window[_0x19f3df(0x753)] = _0x19f3df(0x785),
                    $(this)[_0x19f3df(0x346)](_0x19f3df(0x785))['text'](_0x19f3df(0x627)),
                    $(_0x19f3df(0x67d))[_0x19f3df(0x6ee)](_0x19f3df(0x25f), _0x19f3df(0x323))) : (window[_0x19f3df(0x753)] = 'timmap',
                    $(this)[_0x19f3df(0x617)](_0x19f3df(0x785))[_0x19f3df(0x440)](_0x19f3df(0x6d2)),
                    $(_0x19f3df(0x67d))[_0x19f3df(0x6ee)](_0x19f3df(0x25f), _0x19f3df(0x718))),
                    _0x9e6aaa(),
                    setTimeout(function() {
                        var _0x53d831 = _0x19f3df;
                        window['currentDisplayMode'] === _0x53d831(0x785) ? $(_0x53d831(0x67d))[_0x53d831(0x6ee)](_0x53d831(0x25f), _0x53d831(0x323)) : $(_0x53d831(0x67d))[_0x53d831(0x6ee)](_0x53d831(0x25f), _0x53d831(0x718));
                    }, 0x64);
                });
                function _0x2699cc(_0x243827) {
                    var _0x3f7882 = _0x1d6110;
                    if (!window[_0x3f7882(0x679)] || !window[_0x3f7882(0x679)][_0x3f7882(0x69f)] || window[_0x3f7882(0x679)][_0x3f7882(0x69f)][_0x3f7882(0x2a1)] === 0x0)
                        return;
                    $(_0x3f7882(0x770))[_0x3f7882(0x79e)](),
                    Object['keys'](regionNames)[_0x3f7882(0x588)](_0x4e20fd => {
                        var _0x23cc8f = _0x3f7882;
                        const _0x3bd6a7 = window[_0x23cc8f(0x679)]['Api_listServer'][_0x23cc8f(0x82b)](_0x4a490b => _0x4a490b[_0x23cc8f(0x35f)] === _0x4e20fd);
                        if (_0x3bd6a7[_0x23cc8f(0x2a1)] > 0x0) {
                            const _0x4cbdd0 = _0x3bd6a7[_0x23cc8f(0x82b)](_0x220f2c => {
                                var _0xd7d280 = _0x23cc8f;
                                return _0x243827 === _0xd7d280(0x28b) ? _0x220f2c[_0xd7d280(0x28b)] : _0x220f2c[_0xd7d280(0x785)];
                            }
                            );
                            _0x4cbdd0[_0x23cc8f(0x4e0)]( (_0x17d7e4, _0x460937) => {
                                var _0x4b009c = _0x23cc8f;
                                const _0x4be7d9 = _0x243827 === _0x4b009c(0x28b) ? _0x17d7e4[_0x4b009c(0x28b)] || 0x0 : _0x17d7e4[_0x4b009c(0x785)] || 0x0
                                  , _0x54893f = _0x243827 === 'timmap' ? _0x460937['timmap'] || 0x0 : _0x460937[_0x4b009c(0x785)] || 0x0;
                                return _0x4be7d9 - _0x54893f;
                            }
                            ),
                            _0x4cbdd0['forEach'](_0x1c9e3f => {
                                var _0x1e7eca = _0x23cc8f;
                                const _0x2e249e = _0x243827 === _0x1e7eca(0x28b) ? _0x1c9e3f[_0x1e7eca(0x28b)] : _0x1c9e3f[_0x1e7eca(0x785)]
                                  , _0x3797fc = _0x1e7eca(0x59a) + _0x1c9e3f[_0x1e7eca(0x340)] + '\x22]'
                                  , _0x5e0877 = $(_0x3797fc);
                                _0x5e0877['length'] && (_0x5e0877[_0x1e7eca(0x76b)](_0x1e7eca(0x67d))[_0x1e7eca(0x440)](_0x2e249e + '.'),
                                _0x5e0877[_0x1e7eca(0x76b)]('.server-region')[_0x1e7eca(0x440)](_0x5e0877[_0x1e7eca(0x88c)](_0x1e7eca(0x678)) + '\x20' + _0x2e249e),
                                _0x5e0877[_0x1e7eca(0x88c)](_0x1e7eca(0x686), _0x2e249e),
                                $(_0x1e7eca(0x7a6) + _0x4e20fd)['is'](_0x1e7eca(0x253)) && _0x5e0877[_0x1e7eca(0x224)]());
                            }
                            );
                        }
                    }
                    );
                }
                function _0x28e6f4() {
                    var _0x2452f8 = _0x1d6110;
                    window['currentDisplayMode'] === 'wormworld' ? $(_0x2452f8(0x67d))[_0x2452f8(0x6ee)](_0x2452f8(0x25f), _0x2452f8(0x323)) : $(_0x2452f8(0x67d))[_0x2452f8(0x6ee)](_0x2452f8(0x25f), _0x2452f8(0x718));
                }
                $(_0x1d6110(0x2fc))['on']('click', _0x5ad647),
                $(_0x1d6110(0x430))[_0x1d6110(0x68c)](function() {
                    var _0x29e8cf = _0x1d6110;
                    let _0xea7980 = $(this)[_0x29e8cf(0x88c)](_0x29e8cf(0x4a0));
                    typeof theoKzObjects !== _0x29e8cf(0x799) && (theoKzObjects[_0x29e8cf(0x761)] = _0xea7980),
                    typeof ctx !== 'undefined' && ctx[_0x29e8cf(0x731)] && (ctx['containerImgS'][_0x29e8cf(0x5e9)] = ctx[_0x29e8cf(0x30f)]),
                    typeof retundFlagError === _0x29e8cf(0x3fb) && retundFlagError();
                }),
                _0x5ad647(),
                _0x5371ac(),
                _0x5a89bc(),
                _0x173030()[_0x1d6110(0x864)](_0x15cf11 => {
                    _0x15cf11 && (_0x9e6aaa(),
                    setTimeout(function() {
                        let _0x5ca2bf = 0x0
                          , _0x19ce6c = setInterval(function() {
                            var _0x31c187 = _0x31dd;
                            if (_0x5ca2bf >= 0x6) {
                                clearInterval(_0x19ce6c),
                                window[_0x31c187(0x753)] = _0x31c187(0x28b),
                                $(_0x31c187(0x3cc))['removeClass']('wormworld')['text'](_0x31c187(0x6d2)),
                                $(_0x31c187(0x67d))[_0x31c187(0x6ee)](_0x31c187(0x25f), '#f00'),
                                _0x9e6aaa();
                                return;
                            }
                            _0x5ca2bf % 0x2 === 0x0 ? (window[_0x31c187(0x753)] = _0x31c187(0x785),
                            $(_0x31c187(0x3cc))[_0x31c187(0x346)](_0x31c187(0x785))[_0x31c187(0x440)](_0x31c187(0x627)),
                            $(_0x31c187(0x67d))[_0x31c187(0x6ee)](_0x31c187(0x25f), '#00a8ff')) : (window[_0x31c187(0x753)] = _0x31c187(0x28b),
                            $(_0x31c187(0x3cc))[_0x31c187(0x617)](_0x31c187(0x785))['text']('Timmap\x20Servers'),
                            $(_0x31c187(0x67d))['css'](_0x31c187(0x25f), '#f00')),
                            (_0x5ca2bf === 0x0 || _0x5ca2bf === 0x1) && _0x9e6aaa(),
                            _0x5ca2bf++;
                        }, 0x2bc);
                    }, 0x5dc));
                }
                );
            }
            _0x26ba83(_0x2133c5),
            window[_0x22824a(0x527)] = {
                'lastTime': performance['now'](),
                'frameCount': 0x0,
                'fps': 0x0,
                'cpuUsage': 0x0,
                'fpsDisplay': null,
                'cpuDisplay': null,
                'isFpsVisible': ![],
                'isCpuVisible': ![],
                'cpuSamples': [],
                'cpuSampleSize': 0xa,
                'lastCpuTime': 0x0,
                'isInitialized': ![],
                '_cpuMonitoringInterval': null,
                '_animFrameId': null,
                'init'() {
                    var _0x388eb1 = _0x22824a;
                    if (this[_0x388eb1(0x248)])
                        return;
                    this['isInitialized'] = !![];
                    const _0x15a118 = localStorage[_0x388eb1(0x65e)](_0x388eb1(0x6a5));
                    _0x15a118 !== null && (this[_0x388eb1(0x550)] = _0x15a118 === 'true',
                    this[_0x388eb1(0x53d)] = _0x15a118 === 'true'),
                    this['createDisplayElements'](),
                    (this[_0x388eb1(0x550)] || this['isCpuVisible']) && this[_0x388eb1(0x6b0)](),
                    this['setupKeyboardControls'](),
                    this[_0x388eb1(0x3ff)](),
                    this[_0x388eb1(0x793)]();
                },
                'startAllMonitoring'() {
                    var _0xc150f8 = _0x22824a;
                    this['isFpsVisible'] && !this[_0xc150f8(0x306)] && this['startMonitoring'](),
                    this[_0xc150f8(0x53d)] && !this[_0xc150f8(0x5bb)] && this['startCpuMonitoring']();
                },
                'stopAllMonitoring'() {
                    var _0x818448 = _0x22824a;
                    this[_0x818448(0x5bb)] && (console[_0x818448(0x399)](_0x818448(0x645)),
                    clearInterval(this['_cpuMonitoringInterval']),
                    this[_0x818448(0x5bb)] = null),
                    this[_0x818448(0x306)] && (console[_0x818448(0x399)](_0x818448(0x259)),
                    cancelAnimationFrame(this[_0x818448(0x306)]),
                    this[_0x818448(0x306)] = null);
                },
                'setupToggleButton'() {
                    var _0x22e962 = _0x22824a;
                    const _0x3103e5 = document[_0x22e962(0x657)](_0x22e962(0x316));
                    _0x3103e5 ? (_0x3103e5[_0x22e962(0x69a)] = this[_0x22e962(0x550)] || this[_0x22e962(0x53d)],
                    _0x3103e5['addEventListener'](_0x22e962(0x85b), () => {
                        var _0x25061b = _0x22e962;
                        const _0x38f48b = _0x3103e5[_0x25061b(0x69a)];
                        this[_0x25061b(0x589)](_0x38f48b);
                    }
                    )) : setTimeout( () => {
                        var _0x15af81 = _0x22e962;
                        const _0x2ca9a1 = document[_0x15af81(0x657)](_0x15af81(0x316));
                        _0x2ca9a1 && (_0x2ca9a1[_0x15af81(0x69a)] = this[_0x15af81(0x550)] || this[_0x15af81(0x53d)],
                        _0x2ca9a1[_0x15af81(0x81b)](_0x15af81(0x85b), () => {
                            var _0x4973bf = _0x15af81;
                            this['toggle'](_0x2ca9a1[_0x4973bf(0x69a)]);
                        }
                        ));
                    }
                    , 0x3e8);
                },
                'createDisplayElements'() {
                    var _0x5c2a73 = _0x22824a;
                    const _0x11566b = document[_0x5c2a73(0x657)](_0x5c2a73(0x6d1));
                    if (!_0x11566b) {
                        const _0x46e75b = document['createElement'](_0x5c2a73(0x811));
                        _0x46e75b['id'] = 'performance-monitor-style',
                        _0x46e75b[_0x5c2a73(0x49c)] = _0x5c2a73(0x6fa),
                        document['head'][_0x5c2a73(0x596)](_0x46e75b);
                    }
                    let _0x218854 = document[_0x5c2a73(0x2a5)](_0x5c2a73(0x46d));
                    !_0x218854 && (_0x218854 = document[_0x5c2a73(0x3bc)]('div'),
                    _0x218854[_0x5c2a73(0x2f5)] = _0x5c2a73(0x6c9),
                    document[_0x5c2a73(0x247)][_0x5c2a73(0x596)](_0x218854)),
                    !this['fpsDisplay'] && (this[_0x5c2a73(0x403)] = document[_0x5c2a73(0x3bc)](_0x5c2a73(0x677)),
                    this[_0x5c2a73(0x403)][_0x5c2a73(0x2f5)] = _0x5c2a73(0x236),
                    _0x218854[_0x5c2a73(0x596)](this[_0x5c2a73(0x403)])),
                    !this['cpuDisplay'] && (this[_0x5c2a73(0x87b)] = document[_0x5c2a73(0x3bc)](_0x5c2a73(0x677)),
                    this['cpuDisplay'][_0x5c2a73(0x2f5)] = _0x5c2a73(0x236),
                    _0x218854[_0x5c2a73(0x596)](this[_0x5c2a73(0x87b)]));
                },
                'startCpuMonitoring'() {
                    var _0x3a8464 = _0x22824a;
                    if (!this[_0x3a8464(0x53d)])
                        return;
                    this['_cpuMonitoringInterval'] && clearInterval(this['_cpuMonitoringInterval']),
                    this[_0x3a8464(0x29e)] = performance[_0x3a8464(0x2ef)](),
                    this[_0x3a8464(0x79a)] = [],
                    this[_0x3a8464(0x5bb)] = setInterval( () => {
                        var _0x1e7c39 = _0x3a8464;
                        if (!this[_0x1e7c39(0x53d)]) {
                            clearInterval(this[_0x1e7c39(0x5bb)]),
                            this['_cpuMonitoringInterval'] = null,
                            console['log'](_0x1e7c39(0x867));
                            return;
                        }
                        this[_0x1e7c39(0x5ca)]();
                    }
                    , 0x1f4);
                },
                'measureCpuUsage'() {
                    var _0x2787cd = _0x22824a;
                    const _0x247e4a = performance[_0x2787cd(0x2ef)]()
                      , _0x55b49b = _0x247e4a - this[_0x2787cd(0x29e)]
                      , _0x5b8591 = 0x3c
                      , _0x3381b3 = Math[_0x2787cd(0x3ea)](0x0, _0x5b8591 - this[_0x2787cd(0x1c7)]) / _0x5b8591;
                    let _0x157b3d = 0x0;
                    if (window[_0x2787cd(0x565)] && window[_0x2787cd(0x565)][_0x2787cd(0x86e)]) {
                        const _0x305d30 = window[_0x2787cd(0x565)]['timing'];
                        _0x157b3d = _0x305d30[_0x2787cd(0x5f2)] - _0x305d30['navigationStart'];
                    }
                    const _0x43de57 = Math[_0x2787cd(0x856)](0x1, window[_0x2787cd(0x55c)] ? 0.7 : 0.3)
                      , _0x123a87 = Math[_0x2787cd(0x856)](0x64, Math['round']((_0x3381b3 * 0x46 + _0x157b3d / 0x3e8 * 0x1e) * _0x43de57));
                    this[_0x2787cd(0x79a)][_0x2787cd(0x23c)](_0x123a87),
                    this[_0x2787cd(0x79a)]['length'] > this[_0x2787cd(0x2c2)] && this['cpuSamples'][_0x2787cd(0x4cb)](),
                    this['cpuUsage'] = Math[_0x2787cd(0x728)](this[_0x2787cd(0x79a)][_0x2787cd(0x528)]( (_0xf97806, _0x55fc10) => _0xf97806 + _0x55fc10, 0x0) / this[_0x2787cd(0x79a)][_0x2787cd(0x2a1)]),
                    this[_0x2787cd(0x29e)] = _0x247e4a,
                    this[_0x2787cd(0x3ff)]();
                },
                'startMonitoring'() {
                    var _0x21c44e = _0x22824a;
                    if (!this[_0x21c44e(0x550)])
                        return;
                    this[_0x21c44e(0x306)] && cancelAnimationFrame(this[_0x21c44e(0x306)]);
                    const _0x2c532b = () => {
                        var _0x1525b9 = _0x21c44e;
                        if (!this[_0x1525b9(0x550)]) {
                            cancelAnimationFrame(this[_0x1525b9(0x306)]),
                            this[_0x1525b9(0x306)] = null;
                            return;
                        }
                        const _0x41d3c9 = performance[_0x1525b9(0x2ef)]()
                          , _0x45bfa9 = _0x41d3c9 - this[_0x1525b9(0x674)];
                        this[_0x1525b9(0x7e9)]++,
                        _0x45bfa9 >= 0x3e8 && (this[_0x1525b9(0x1c7)] = Math[_0x1525b9(0x728)](this[_0x1525b9(0x7e9)] * 0x3e8 / _0x45bfa9),
                        this[_0x1525b9(0x7e9)] = 0x0,
                        this[_0x1525b9(0x674)] = _0x41d3c9,
                        this[_0x1525b9(0x3ff)]()),
                        this['_animFrameId'] = requestAnimationFrame(_0x2c532b);
                    }
                    ;
                    this[_0x21c44e(0x306)] = requestAnimationFrame(_0x2c532b);
                },
                'updateDisplays'() {
                    var _0xbb8b6f = _0x22824a;
                    if (!this[_0xbb8b6f(0x403)] || !this['cpuDisplay'])
                        return;
                    if (this[_0xbb8b6f(0x550)]) {
                        this[_0xbb8b6f(0x403)][_0xbb8b6f(0x49c)] = _0xbb8b6f(0x667) + this['fps'];
                        if (this['fps'] >= 0x3a)
                            this[_0xbb8b6f(0x403)][_0xbb8b6f(0x811)]['color'] = _0xbb8b6f(0x5a3);
                        else
                            this[_0xbb8b6f(0x1c7)] >= 0x1e ? this[_0xbb8b6f(0x403)][_0xbb8b6f(0x811)][_0xbb8b6f(0x25f)] = 'gold' : this[_0xbb8b6f(0x403)][_0xbb8b6f(0x811)]['color'] = _0xbb8b6f(0x707);
                        this[_0xbb8b6f(0x403)][_0xbb8b6f(0x811)][_0xbb8b6f(0x5ee)] = _0xbb8b6f(0x38c);
                    } else
                        this[_0xbb8b6f(0x403)][_0xbb8b6f(0x811)]['display'] = _0xbb8b6f(0x4a2);
                    if (this[_0xbb8b6f(0x53d)]) {
                        this['cpuDisplay']['textContent'] = 'CPU:\x20' + this['cpuUsage'] + '%';
                        if (this[_0xbb8b6f(0x631)] <= 0x32)
                            this['cpuDisplay'][_0xbb8b6f(0x811)][_0xbb8b6f(0x25f)] = _0xbb8b6f(0x5a3);
                        else
                            this[_0xbb8b6f(0x631)] <= 0x50 ? this['cpuDisplay']['style'][_0xbb8b6f(0x25f)] = _0xbb8b6f(0x201) : this['cpuDisplay'][_0xbb8b6f(0x811)][_0xbb8b6f(0x25f)] = _0xbb8b6f(0x707);
                        this[_0xbb8b6f(0x87b)]['style'][_0xbb8b6f(0x5ee)] = _0xbb8b6f(0x38c);
                    } else
                        this[_0xbb8b6f(0x87b)][_0xbb8b6f(0x811)]['display'] = _0xbb8b6f(0x4a2);
                },
                'setupKeyboardControls'() {
                    var _0x9a853c = _0x22824a;
                    if (this[_0x9a853c(0x466)])
                        return;
                    this[_0x9a853c(0x466)] = !![],
                    document[_0x9a853c(0x81b)](_0x9a853c(0x836), _0x474ba6 => {
                        var _0x49569d = _0x9a853c;
                        if (_0x474ba6[_0x49569d(0x37f)] === 'F2' || _0x474ba6[_0x49569d(0x839)] === 'F2' || _0x474ba6[_0x49569d(0x4ec)] === 0x71)
                            return _0x474ba6[_0x49569d(0x4cc)](),
                            this[_0x49569d(0x53d)] = !this[_0x49569d(0x53d)],
                            this['isCpuVisible'] && !this['_cpuMonitoringInterval'] && this['startCpuMonitoring'](),
                            this[_0x49569d(0x246)](),
                            this['updateDisplays'](),
                            this[_0x49569d(0x749)](),
                            ![];
                        else {
                            if (_0x474ba6[_0x49569d(0x37f)] === 'F4' || _0x474ba6['code'] === 'F4' || _0x474ba6[_0x49569d(0x4ec)] === 0x73)
                                return _0x474ba6[_0x49569d(0x4cc)](),
                                this[_0x49569d(0x550)] = !this['isFpsVisible'],
                                this[_0x49569d(0x550)] && !this[_0x49569d(0x306)] && this['startMonitoring'](),
                                this[_0x49569d(0x246)](),
                                this[_0x49569d(0x3ff)](),
                                this[_0x49569d(0x749)](),
                                ![];
                            else {
                                if (_0x474ba6['altKey'] && (_0x474ba6['key'] === '2' || _0x474ba6[_0x49569d(0x4ec)] === 0x32))
                                    return _0x474ba6[_0x49569d(0x4cc)](),
                                    this[_0x49569d(0x53d)] = !this[_0x49569d(0x53d)],
                                    this[_0x49569d(0x53d)] && !this['_cpuMonitoringInterval'] && this[_0x49569d(0x278)](),
                                    this['saveSettings'](),
                                    this[_0x49569d(0x3ff)](),
                                    this[_0x49569d(0x749)](),
                                    ![];
                                else {
                                    if (_0x474ba6[_0x49569d(0x5c7)] && (_0x474ba6['key'] === '4' || _0x474ba6[_0x49569d(0x4ec)] === 0x34))
                                        return _0x474ba6['preventDefault'](),
                                        this[_0x49569d(0x550)] = !this[_0x49569d(0x550)],
                                        this[_0x49569d(0x550)] && !this['_animFrameId'] && this[_0x49569d(0x7e3)](),
                                        this[_0x49569d(0x246)](),
                                        this['updateDisplays'](),
                                        this[_0x49569d(0x749)](),
                                        ![];
                                }
                            }
                        }
                    }
                    , !![]);
                },
                'saveSettings'() {
                    var _0x3843f3 = _0x22824a;
                    const _0x19eed7 = this[_0x3843f3(0x550)] || this[_0x3843f3(0x53d)];
                    localStorage['setItem'](_0x3843f3(0x6a5), _0x19eed7);
                },
                'updateToggleButton'() {
                    var _0x5f4dbd = _0x22824a;
                    const _0x1d86ec = document[_0x5f4dbd(0x657)]('performance-monitor-toggle');
                    _0x1d86ec && (_0x1d86ec[_0x5f4dbd(0x69a)] = this[_0x5f4dbd(0x550)] || this[_0x5f4dbd(0x53d)]);
                },
                'toggle'(_0x21eec1) {
                    var _0x33d5d2 = _0x22824a;
                    typeof _0x21eec1 !== 'boolean' && (_0x21eec1 = !this['isFpsVisible'] && !this['isCpuVisible']);
                    const _0x566fe5 = this[_0x33d5d2(0x550)]
                      , _0x50c722 = this[_0x33d5d2(0x53d)];
                    this[_0x33d5d2(0x550)] = _0x21eec1,
                    this[_0x33d5d2(0x53d)] = _0x21eec1,
                    this[_0x33d5d2(0x246)](),
                    _0x21eec1 ? (!_0x566fe5 && this['isFpsVisible'] && this[_0x33d5d2(0x7e3)](),
                    !_0x50c722 && this['isCpuVisible'] && this[_0x33d5d2(0x278)]()) : this[_0x33d5d2(0x2e4)](),
                    this['updateDisplays']();
                },
                'enable'(_0x4c0069) {
                    var _0x4b55fb = _0x22824a;
                    _0x4c0069 ? !this[_0x4b55fb(0x248)] ? this[_0x4b55fb(0x884)]() : this['toggle'](!![]) : this[_0x4b55fb(0x589)](![]);
                }
            },
            $(_0x22824a(0x59b))[_0x22824a(0x294)]('<div\x20class=\x22idwormate\x22>' + _0x22824a(0x691) + _0x2133c5[_0x22824a(0x374)] + _0x22824a(0x257) + _0x22824a(0x3e5) + _0x2133c5['userId'] + _0x22824a(0x7eb) + _0x2133c5[_0x22824a(0x374)] + _0x22824a(0x70e) + '<button\x20id=\x22btn_activate\x22\x20style=\x22width:\x20100px;\x20height:\x2035px;\x20border-radius:\x206px;\x20font-size:\x2015px;\x20background-color:\x20#4CAF50;\x20color:\x20white;\x20border:\x20none;\x20cursor:\x20pointer;\x20margin-left:\x2010px;\x22\x20onclick=\x22window.open(\x27https://t.me/wormateactivate/\x27,\x20\x27_blank\x27);\x22>Activate</button>' + _0x22824a(0x438) + _0x22824a(0x2bb));
            var _0x3ea175 = '';
            _0xe0794a['e'] === _0x22824a(0x838) && (_0x3ea175 = _0x22824a(0x5cb) + _0xe0794a[_0x22824a(0x6f4)][0x3] + '\x22\x20id=\x22btnRePlay\x22>',
            _0x389039['s_w'] = _0xe0794a['sw'] == 0x1);
            _0x18d38e(_0xe0794a[_0x22824a(0x6fb)]),
            $(_0x22824a(0x648))['html'](_0x22824a(0x38d) + _0xe0794a['ccg'][0x4] + _0x22824a(0x318) + _0xe0794a[_0x22824a(0x6f4)][0x5] + _0x22824a(0x796) + _0x3ea175 + _0x22824a(0x2bb)),
            document[_0x22824a(0x657)]('btnFullScreen')['addEventListener'](_0x22824a(0x68c), function() {
                var _0x44b4c7 = _0x22824a;
                let _0x3088cd = document[_0x44b4c7(0x45a)][_0x44b4c7(0x1e2)] || document['documentElement'][_0x44b4c7(0x72d)] || document[_0x44b4c7(0x45a)][_0x44b4c7(0x7bc)];
                if (_0x3088cd && !_0x389039[_0x44b4c7(0x656)])
                    try {
                        _0x389039[_0x44b4c7(0x656)] = !![],
                        _0x3088cd['call'](document[_0x44b4c7(0x45a)]);
                    } catch (_0x46efeb) {}
                else
                    _0x389039['fullscreen'] = ![],
                    document[_0x44b4c7(0x54c)]();
            });
            _0xe0794a['e'] === 'not_empty' && document['getElementById'](_0x22824a(0x351))[_0x22824a(0x81b)](_0x22824a(0x68c), function() {
                var _0x1f67da = _0x22824a;
                $(_0x1f67da(0x38e))[_0x1f67da(0x467)](_0x389039['pi']),
                $(_0x1f67da(0x52d))['val'](_0x389039['pn']),
                $('#port_id')[_0x1f67da(0x467)]($(_0x1f67da(0x38e))['val']()),
                $(_0x1f67da(0x4be))[_0x1f67da(0x467)]($(_0x1f67da(0x52d))[_0x1f67da(0x467)]()),
                document[_0x1f67da(0x657)]('mm-action-play')[_0x1f67da(0x68c)]();
            });
            !window[_0x22824a(0x805)] && (window['wftObjects'] = {
                'eat_animation': 0.0025,
                'smoothCamera': 0.5,
                'PortionSize': 0x2,
                'PortionAura': 1.2,
                'PortionTransparent': 0.8,
                'FoodTransparent': 0.3,
                'FoodSize': 0x2,
                'FoodShadow': 0x2,
                'zoomSpeed': 0.003,
                'soundEnabled': ![],
                'soundVolume': 0x32,
                'soundEffect': _0x22824a(0x48b)
            });
            try {
                const _0x299b62 = JSON['parse'](localStorage[_0x22824a(0x65e)]('wftSettings'));
                if (_0x299b62)
                    for (const _0x2f40e2 in _0x299b62) {
                        wftObjects[_0x22824a(0x88d)](_0x2f40e2) && (wftObjects[_0x2f40e2] = _0x299b62[_0x2f40e2]);
                    }
            } catch (_0x166909) {
                console[_0x22824a(0x5ad)](_0x22824a(0x6f8), _0x166909);
            }
            function _0x470256() {
                var _0x5462bb = _0x22824a;
                try {
                    localStorage['setItem']('wftSettings', JSON['stringify'](wftObjects));
                } catch (_0x1c6c4f) {
                    console[_0x5462bb(0x5ad)](_0x5462bb(0x335), _0x1c6c4f);
                }
            }
            $(_0x22824a(0x687))[_0x22824a(0x6f9)](),
            $(_0x22824a(0x6df))[_0x22824a(0x6f9)]();
            _0x389039[_0x22824a(0x2f1)] ? $(_0x22824a(0x82f) + _0x2133c5['userId'] + '\x22\x20style=\x22max-width:\x20220px;\x22\x20type=\x22text\x22\x20id=\x22id_customer\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22btn_copy\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22tooltiptext\x22\x20id=\x22myTooltip\x22>id\x20copy</span>Copy\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a</div>\x0a\x20\x20\x20\x20\x0a<!--\x20Headshot\x20Message\x20Display\x20-->\x0a<div\x20id=\x22headshot-message\x22></div>\x0a')[_0x22824a(0x7af)]('#mm-store') : $(_0x22824a(0x57e) + _0xe0794a[_0x22824a(0x6f4)][0x6] + _0x22824a(0x87f))[_0x22824a(0x7af)](_0x22824a(0x4dc));
            function _0x58532d() {
                var _0x4281fc = _0x22824a;
                const _0x3459be = _0xe0794a['e'] === _0x4281fc(0x838) || _0x2707c0;
                if (!_0x3459be)
                    $(_0x4281fc(0x2b0))['addClass'](_0x4281fc(0x3cf))[_0x4281fc(0x6ee)]({
                        'max-width': _0x4281fc(0x7bb),
                        'width': _0x4281fc(0x7bb)
                    }),
                    $(_0x4281fc(0x49a))[_0x4281fc(0x79e)](),
                    $(_0x4281fc(0x62f))[_0x4281fc(0x584)](_0x4281fc(0x5ce) + _0x2133c5[_0x4281fc(0x374)] + _0x4281fc(0x610) + _0x2133c5[_0x4281fc(0x374)] + _0x4281fc(0x7eb) + _0x2133c5[_0x4281fc(0x374)] + _0x4281fc(0x1c5));
                else {
                    $('#modal_wft\x20.modal-content')['removeClass'](_0x4281fc(0x3cf)),
                    $(_0x4281fc(0x49a))['show']();
                    const _0x59665a = $(_0x4281fc(0x1fb))[_0x4281fc(0x250)](_0x4281fc(0x682));
                    _0x59665a ? ($('.tab-content')[_0x4281fc(0x79e)](),
                    $('#' + _0x59665a + _0x4281fc(0x332))['show']()) : $(_0x4281fc(0x4d2))['show'](),
                    !_0x389039[_0x4281fc(0x23b)] && $(_0x4281fc(0x1b7))[_0x4281fc(0x79e)]();
                }
            }
            window[_0x22824a(0x7ec)] = function() {
                var _0x4eaa67 = _0x22824a;
                _0x58532d(),
                $(_0x4eaa67(0x20d))[_0x4eaa67(0x224)](),
                $(_0x4eaa67(0x6df))[_0x4eaa67(0x6ee)]({
                    'z-index': _0x4eaa67(0x3b3),
                    'display': _0x4eaa67(0x38c)
                }),
                $(_0x4eaa67(0x247))[_0x4eaa67(0x6ee)]('overflow', 'hidden');
            }
            ,
            window['closeSettingsModal'] = function() {
                var _0x57b553 = _0x22824a;
                $('#modal_wft')[_0x57b553(0x6ee)](_0x57b553(0x5ee), _0x57b553(0x4a2)),
                $(_0x57b553(0x20d))[_0x57b553(0x79e)](),
                $('body')['css']('overflow', '');
            }
            ,
            _0x58532d();
            function _0x100a0c() {
                var _0x880a0 = _0x22824a;
                const _0x3fc4b4 = _0xe0794a['e'] === _0x880a0(0x838) || _0x2707c0;
                !_0x3fc4b4 ? ($('.settings-sidebar,\x20.settings-layout,\x20.settings-content,\x20.settings-grid,\x20.tab-content,\x20.sidebar-item')[_0x880a0(0x79e)](),
                $(_0x880a0(0x615))[_0x880a0(0x496)](_0x880a0(0x729))[_0x880a0(0x79e)](),
                $(_0x880a0(0x66f))[_0x880a0(0x26e)](_0x880a0(0x74e))['hide'](),
                $('[id^=\x22sel_\x22]')[_0x880a0(0x79e)](),
                $(_0x880a0(0x486))['hide'](),
                $(_0x880a0(0x2e8))[_0x880a0(0x79e)](),
                $(_0x880a0(0x835))['hide'](),
                $(_0x880a0(0x688))[_0x880a0(0x79e)](),
                $(_0x880a0(0x76d))[_0x880a0(0x79e)]()) : ($(_0x880a0(0x30a))[_0x880a0(0x224)](),
                $('[id^=\x22div_\x22]')[_0x880a0(0x224)](),
                $('#eating_speed_toggle,\x20#performance-monitor-toggle,\x20#wftspeed,\x20#saveGame,\x20#pulse_effects_enabled')[_0x880a0(0x26e)](_0x880a0(0x74e))['show'](),
                $('[id^=\x22sel_\x22]')['show'](),
                $(_0x880a0(0x486))[_0x880a0(0x224)](),
                $('#backgrounds-tab,\x20.background-grid,\x20.background-item')[_0x880a0(0x224)](),
                $(_0x880a0(0x835))[_0x880a0(0x224)](),
                $(_0x880a0(0x688))[_0x880a0(0x224)](),
                $(_0x880a0(0x76d))[_0x880a0(0x224)](),
                !_0x389039[_0x880a0(0x23b)] && $(_0x880a0(0x1b7))['hide']());
            }
            $(document)[_0x22824a(0x359)](function() {
                var _0x40bd25 = _0x22824a;
                setTimeout(function() {
                    _0x100a0c();
                }, 0x64),
                $(_0x40bd25(0x24e))['click'](function() {
                    var _0x48e327 = _0x40bd25
                      , _0x1cbf7b = document[_0x48e327(0x657)](_0x48e327(0x3c9));
                    _0x1cbf7b[_0x48e327(0x4d4)](),
                    _0x1cbf7b[_0x48e327(0x42c)](0x0, 0x1869f),
                    navigator[_0x48e327(0x5d3)][_0x48e327(0x446)](_0x1cbf7b[_0x48e327(0x4a0)]),
                    $('#myTooltip')['html']('' + _0xe0794a[_0x48e327(0x6f4)][0xe] + '!'),
                    $('#myTooltip')[_0x48e327(0x6ee)]('visibility', _0x48e327(0x62d)),
                    $(_0x48e327(0x632))[_0x48e327(0x6ee)](_0x48e327(0x343), '1'),
                    setTimeout(function() {
                        var _0x47bfa1 = _0x48e327;
                        $(_0x47bfa1(0x632))[_0x47bfa1(0x6ee)]('visibility', _0x47bfa1(0x4f4)),
                        $(_0x47bfa1(0x632))[_0x47bfa1(0x6ee)](_0x47bfa1(0x343), '0');
                    }, 0x5dc);
                }),
                document[_0x40bd25(0x657)]('resetScript')[_0x40bd25(0x81b)](_0x40bd25(0x68c), async function() {
                    var _0x19cd89 = _0x40bd25;
                    localStorage[_0x19cd89(0x6e1)](),
                    sessionStorage[_0x19cd89(0x6e1)]();
                    if (window['indexedDB'] && indexedDB[_0x19cd89(0x2f9)]) {
                        let _0x4ae7c2 = await indexedDB[_0x19cd89(0x2f9)]();
                        for (let _0x3d836d of _0x4ae7c2) {
                            _0x3d836d[_0x19cd89(0x709)] && await indexedDB[_0x19cd89(0x375)](_0x3d836d[_0x19cd89(0x709)]);
                        }
                    }
                    window['openDatabase'] && console['warn'](_0x19cd89(0x311));
                    document[_0x19cd89(0x83b)]['split'](';')[_0x19cd89(0x588)](function(_0x69a761) {
                        var _0x287890 = _0x19cd89;
                        document['cookie'] = _0x69a761[_0x287890(0x42b)](/^ +/, '')[_0x287890(0x42b)](/=.*/, '=;expires=' + new Date(0x0)[_0x287890(0x6e8)]() + _0x287890(0x537));
                    });
                    if (_0x19cd89(0x866)in window) {
                        let _0x21808e = await caches[_0x19cd89(0x641)]();
                        for (let _0x4d4c10 of _0x21808e) {
                            await caches[_0x19cd89(0x231)](_0x4d4c10);
                        }
                    }
                    if (_0x19cd89(0x776)in navigator) {
                        let _0x173b5f = await navigator[_0x19cd89(0x776)]['getRegistrations']();
                        for (let _0x54feff of _0x173b5f) {
                            await _0x54feff[_0x19cd89(0x2fb)]();
                        }
                    }
                    localStorage[_0x19cd89(0x6db)]('scriptSeleccionado'),
                    location[_0x19cd89(0x2ad)]();
                }),
                $('#btn_copy')['hover'](function() {
                    var _0x602810 = _0x40bd25;
                    $(_0x602810(0x632))['css'](_0x602810(0x234), _0x602810(0x62d)),
                    $(_0x602810(0x632))['css'](_0x602810(0x343), '1');
                }, function() {
                    var _0x324ebe = _0x40bd25;
                    $(_0x324ebe(0x632))['text']() !== _0xe0794a[_0x324ebe(0x6f4)][0xe] + '!' && ($(_0x324ebe(0x632))[_0x324ebe(0x6ee)](_0x324ebe(0x234), _0x324ebe(0x4f4)),
                    $(_0x324ebe(0x632))[_0x324ebe(0x6ee)]('opacity', '0'));
                });
                if (window[_0x40bd25(0x237)])
                    return;
                window[_0x40bd25(0x237)] = !![],
                $(_0x40bd25(0x687))[_0x40bd25(0x47e)](_0x40bd25(0x68c))['on']('click', function(_0x57c567) {
                    var _0x4072f8 = _0x40bd25;
                    return _0x57c567[_0x4072f8(0x4cc)](),
                    window[_0x4072f8(0x7ec)](),
                    ![];
                });
                var _0x239e4d = $(_0x40bd25(0x6df))
                  , _0x4e2dae = _0x239e4d[_0x40bd25(0x6ee)]('display');
                $(_0x40bd25(0x247))[_0x40bd25(0x294)](_0x239e4d['detach']());
                var _0x321063 = $(_0x40bd25(0x585))[_0x40bd25(0x6ee)]({
                    'position': _0x40bd25(0x566),
                    'top': '0',
                    'left': '0',
                    'width': '100%',
                    'height': _0x40bd25(0x230),
                    'background-color': _0x40bd25(0x44f),
                    'z-index': _0x40bd25(0x77d),
                    'display': _0x40bd25(0x4a2)
                });
                _0x239e4d['before'](_0x321063);
                function _0x34cdff() {
                    var _0x4bd15d = _0x40bd25;
                    $(_0x4bd15d(0x687))[_0x4bd15d(0x2a1)] && !$(_0x4bd15d(0x687))[_0x4bd15d(0x250)]('hasClickHandler') && $(_0x4bd15d(0x687))[_0x4bd15d(0x47e)](_0x4bd15d(0x68c))['on'](_0x4bd15d(0x68c), function(_0x73275a) {
                        var _0x29b6e2 = _0x4bd15d;
                        return _0x73275a[_0x29b6e2(0x4cc)](),
                        window[_0x29b6e2(0x7ec)](),
                        ![];
                    })[_0x4bd15d(0x250)](_0x4bd15d(0x5a1), !![]);
                }
                _0x34cdff(),
                setInterval(_0x34cdff, 0x1388),
                $(_0x40bd25(0x203))[_0x40bd25(0x47e)](_0x40bd25(0x68c))['on'](_0x40bd25(0x68c), function() {
                    var _0x32d525 = _0x40bd25;
                    window[_0x32d525(0x3e7)]();
                }),
                _0x321063['on'](_0x40bd25(0x68c), function() {
                    var _0x5ea630 = _0x40bd25;
                    window[_0x5ea630(0x3e7)]();
                });
            });
            var _0x241394 = document[_0x22824a(0x657)](_0x22824a(0x54b))
              , _0x3e31d6 = document['getElementById'](_0x22824a(0x5e4))
              , _0xb065fd = document[_0x22824a(0x657)](_0x22824a(0x360))
              , _0x51ba5e = document[_0x22824a(0x657)]('div_zigzag')
              , _0x147988 = document[_0x22824a(0x657)](_0x22824a(0x543))
              , _0x12b99f = document[_0x22824a(0x657)](_0x22824a(0x470))
              , _0x1fc1a7 = document[_0x22824a(0x657)](_0x22824a(0x2bc))
              , _0x407874 = document[_0x22824a(0x657)](_0x22824a(0x4ac))
              , _0x201b24 = document[_0x22824a(0x657)](_0x22824a(0x44b))
              , _0x218736 = document[_0x22824a(0x657)](_0x22824a(0x342))
              , _0x410d79 = document[_0x22824a(0x657)](_0x22824a(0x58b))
              , _0x1af881 = [{
                'name': 'Vietnam',
                'val': 'vn'
            }, {
                'name': _0x22824a(0x20e),
                'val': 'th'
            }, {
                'name': _0x22824a(0x3f0),
                'val': 'kh'
            }, {
                'name': _0x22824a(0x1de),
                'val': 'id'
            }, {
                'name': 'Singapore',
                'val': 'sg'
            }, {
                'name': _0x22824a(0x840),
                'val': 'jp'
            }, {
                'name': _0x22824a(0x312),
                'val': 'mx'
            }, {
                'name': _0x22824a(0x28c),
                'val': 'br'
            }, {
                'name': 'Canada',
                'val': 'ca'
            }, {
                'name': _0x22824a(0x482),
                'val': 'de'
            }, {
                'name': _0x22824a(0x1f0),
                'val': 'fr'
            }, {
                'name': _0x22824a(0x337),
                'val': 'gb'
            }, {
                'name': _0x22824a(0x44e),
                'val': 'au'
            }, {
                'name': _0x22824a(0x7f7),
                'val': 'us'
            }, {
                'name': 'Portugal',
                'val': 'pt'
            }, {
                'name': _0x22824a(0x7b5),
                'val': 'tr'
            }, {
                'name': _0xe0794a[_0x22824a(0x6f4)][0x24],
                'val': 'iq'
            }];
            let _0x159da8 = document[_0x22824a(0x657)](_0x22824a(0x583));
            if (_0x159da8) {
                for (_0x26ba83 = 0x0; _0x26ba83 < _0x1af881['length']; _0x26ba83++) {
                    let _0x587bb8 = document[_0x22824a(0x3bc)](_0x22824a(0x29c));
                    _0x587bb8[_0x22824a(0x4a0)] = _0x1af881[_0x26ba83]['val'],
                    _0x587bb8['innerHTML'] = _0x1af881[_0x26ba83]['name'],
                    _0x159da8[_0x22824a(0x596)](_0x587bb8);
                }
                _0x50f988 && (_0x159da8[_0x22824a(0x4a0)] = _0x50f988),
                _0x159da8['onchange'] = function() {
                    var _0x35ca22 = _0x22824a;
                    let _0x509a35 = _0x159da8['value'];
                    _0x50f988 = _0x509a35,
                    localStorage[_0x35ca22(0x39f)]('oco', _0x509a35);
                    var _0x11a6d3 = {
                        'id_wormate': _0x2133c5[_0x35ca22(0x374)],
                        'country': _0x509a35
                    };
                    fetch(_0x35ca22(0x59f), {
                        'headers': {
                            'Content-Type': 'application/json'
                        },
                        'method': _0x35ca22(0x380),
                        'body': JSON[_0x35ca22(0x880)](_0x11a6d3)
                    }),
                    localStorage['removeItem'](_0x35ca22(0x592)),
                    window[_0x35ca22(0x373)][_0x35ca22(0x2ad)]();
                }
                ;
            }
            var _0x2707c0 = ![];
            if (_0xe0794a['cm'] === '' || _0xe0794a['cm'] === undefined)
                ;
            else {
                var _0x16f5e2 = document[_0x22824a(0x657)]('btn_in_t')
                  , _0x50a6c9 = document[_0x22824a(0x657)]('mm-action-play')
                  , _0x3b947f = document[_0x22824a(0x657)](_0x22824a(0x245));
                _0x16f5e2 && (_0x16f5e2[_0x22824a(0x811)]['display'] = _0x22824a(0x38c),
                _0x16f5e2['onclick'] = function() {
                    var _0x51f9a1 = _0x22824a;
                    _0x3b947f[_0x51f9a1(0x4a0)] = _0xe0794a['cm'],
                    _0x50a6c9[_0x51f9a1(0x68c)]();
                }
                ,
                _0x2707c0 = !![]);
            }
            if (_0xe0794a['e'] === _0x22824a(0x86d))
                ;
            else {
                _0x389039['h'] = _0xe0794a['z'] == 'b',
                _0x389039['hz'] = _0xe0794a['z'] == 'c';
                if (_0xe0794a['e'] === 'not_empty' || _0x2707c0) {
                    var _0x386f73 = ooo['Xg']['Kf']['Wg']['Ah'];
                    _0x241394 && (_0x241394['style'][_0x22824a(0x5ee)] = 'block');
                    _0x3e31d6 && (_0x3e31d6[_0x22824a(0x811)][_0x22824a(0x5ee)] = 'inline-block');
                    $(_0x22824a(0x227))[_0x22824a(0x226)]('checked', _0x389039[_0x22824a(0x7cd)]),
                    $(_0x22824a(0x227))['change'](function() {
                        var _0x5cfaa8 = _0x22824a;
                        _0x389039[_0x5cfaa8(0x7cd)] = $(this)[_0x5cfaa8(0x226)](_0x5cfaa8(0x69a)),
                        localStorage[_0x5cfaa8(0x39f)](_0x5cfaa8(0x852), JSON['stringify'](_0x389039));
                    }),
                    $('#wftspeed')[_0x22824a(0x226)](_0x22824a(0x69a), !![]),
                    $(_0x22824a(0x378))[_0x22824a(0x85b)](function() {
                        var _0x45fec6 = _0x22824a;
                        _0x389039['vp'] = $(this)[_0x45fec6(0x226)](_0x45fec6(0x69a)),
                        localStorage[_0x45fec6(0x39f)]('SaveGamewft', JSON[_0x45fec6(0x880)](_0x389039));
                    }),
                    $(_0x22824a(0x5c5))[_0x22824a(0x226)](_0x22824a(0x69a), _0x389039['cs']),
                    $('#saveGame')[_0x22824a(0x85b)](function() {
                        var _0x14d1a8 = _0x22824a;
                        _0x389039['cs'] = $(this)[_0x14d1a8(0x226)]('checked'),
                        localStorage[_0x14d1a8(0x39f)](_0x14d1a8(0x852), JSON['stringify'](_0x389039));
                    });
                    _0x389039[_0x22824a(0x23b)] ? (_0x147988 && (_0x147988[_0x22824a(0x811)][_0x22824a(0x5ee)] = _0x22824a(0x4a2)),
                    _0x389039['sc'] = 0x0,
                    _0x389039['wi'] = 0x0) : (_0x147988 && (_0x147988[_0x22824a(0x811)][_0x22824a(0x5ee)] = _0x22824a(0x6bb)),
                    _0x1fc1a7 && (_0x1fc1a7[_0x22824a(0x4a0)] = _0x389039['sc'],
                    _0x1fc1a7[_0x22824a(0x861)] = function() {
                        var _0x2c08e5 = _0x22824a;
                        _0x389039['sc'] = parseInt(_0x1fc1a7[_0x2c08e5(0x4a0)]),
                        _0x389039['sc'] == 0x1 && (_0x389039['wi'] = screen[_0x2c08e5(0x6f1)] / (screen['width'] * 0x2)),
                        _0x389039['sc'] == 0x2 && (_0x389039['wi'] = 0x0),
                        localStorage[_0x2c08e5(0x39f)](_0x2c08e5(0x852), JSON[_0x2c08e5(0x880)](_0x389039));
                    }
                    ));
                    _0x12b99f && (_0x12b99f[_0x22824a(0x811)][_0x22824a(0x5ee)] = _0x22824a(0x6bb));
                    sel_sm && (sel_sm[_0x22824a(0x4a0)] = _0x389039['sm'],
                    sel_sm['onchange'] = function() {
                        var _0x5516e1 = _0x22824a;
                        _0x389039['sm'] = parseInt(sel_sm[_0x5516e1(0x4a0)]),
                        localStorage['setItem']('SaveGamewft', JSON[_0x5516e1(0x880)](_0x389039));
                    }
                    );
                    _0x407874 && (_0x407874[_0x22824a(0x811)][_0x22824a(0x5ee)] = _0x22824a(0x6bb));
                    _0x201b24 && (_0x201b24[_0x22824a(0x4a0)] = _0x389039['to'],
                    _0x201b24[_0x22824a(0x861)] = function() {
                        var _0x326457 = _0x22824a;
                        _0x389039['to'] = parseInt(_0x201b24[_0x326457(0x4a0)]),
                        localStorage['setItem'](_0x326457(0x852), JSON[_0x326457(0x880)](_0x389039));
                    }
                    );
                    if (_0x159da8 && _0x159da8['value'] == 'iq' && _0x218736) {
                        _0x218736[_0x22824a(0x811)][_0x22824a(0x5ee)] = _0x22824a(0x6bb);
                        var _0x27f09f = $(_0x22824a(0x7f6));
                        _0x27f09f[_0x22824a(0x226)](_0x22824a(0x69a), _0x389039['iq']),
                        _0x27f09f['change'](function() {
                            var _0x2631b9 = _0x22824a;
                            this[_0x2631b9(0x69a)] ? _0x389039['iq'] = !![] : _0x389039['iq'] = ![],
                            localStorage[_0x2631b9(0x39f)](_0x2631b9(0x852), JSON[_0x2631b9(0x880)](_0x389039));
                        });
                    } else
                        _0x389039['iq'] = ![],
                        _0x218736 && (_0x218736[_0x22824a(0x811)]['display'] = 'none');
                    const _0x430d80 = localStorage[_0x22824a(0x65e)](_0x22824a(0x6a5)) === _0x22824a(0x39c);
                    $(_0x22824a(0x77c))[_0x22824a(0x226)](_0x22824a(0x69a), _0x430d80),
                    $(_0x22824a(0x77c))[_0x22824a(0x85b)](function() {
                        var _0x5d94d5 = _0x22824a;
                        const _0x5c8c54 = $(this)[_0x5d94d5(0x226)](_0x5d94d5(0x69a));
                        localStorage[_0x5d94d5(0x39f)]('showFpsCpu', _0x5c8c54),
                        window[_0x5d94d5(0x527)] && window[_0x5d94d5(0x527)][_0x5d94d5(0x589)](_0x5c8c54);
                    });
                    window[_0x22824a(0x527)] && window[_0x22824a(0x527)]['init']();
                    const _0x156aa7 = localStorage['getItem'](_0x22824a(0x72a)) === _0x22824a(0x39c) || localStorage[_0x22824a(0x65e)](_0x22824a(0x72a)) === null;
                    $(_0x22824a(0x1d5))['prop']('checked', _0x156aa7),
                    window[_0x22824a(0x21d)] = _0x156aa7,
                    $(_0x22824a(0x1d5))['change'](function() {
                        var _0xa94a7d = _0x22824a;
                        window[_0xa94a7d(0x21d)] = $(this)[_0xa94a7d(0x226)]('checked'),
                        localStorage[_0xa94a7d(0x39f)]('wftPulseEnabled', window['pulseEnabled'][_0xa94a7d(0x436)]());
                    }),
                    _0x389039[_0x22824a(0x7ae)] = _0xe0794a[_0x22824a(0x55a)];
                    _0x410d79 && (_0x410d79[_0x22824a(0x811)]['display'] = _0x22824a(0x38c));
                    _0x235639(_0x389039, oeo),
                    _0x276741['on'] = !![];
                    _0x41e416() ? (_0x389039['tt'] = _0xe0794a['tt'] == 0x1,
                    _0x386f73[_0x22824a(0x3c8)][_0x22824a(0x62d)] = _0x276741['on'] && _0x389039['mo'] == 0x1,
                    _0x386f73[_0x22824a(0x503)]['visible'] = _0x276741['on'] && _0x389039['mo'] == 0x2,
                    _0x386f73['img_3'][_0x22824a(0x62d)] = _0x276741['on'] && _0x389039['mo'] == 0x3,
                    _0x386f73['img_4'][_0x22824a(0x62d)] = _0x276741['on'] && (_0x389039['mo'] == 0x4 || _0x389039['mo'] == 0x5 || _0x389039['mo'] == 0x6)) : _0x389039['tt'] = ![];
                    var _0x4d0a17 = [{
                        'nome': _0x22824a(0x326),
                        'uri': _0x389039[_0x22824a(0x510)] + _0x22824a(0x3c1)
                    }, {
                        'nome': _0x22824a(0x3c4),
                        'uri': _0x389039['s_l'] + _0x22824a(0x41f)
                    }, {
                        'nome': 'Nightdots',
                        'uri': _0x389039[_0x22824a(0x510)] + '/get_store.phpitem=bg_sky_7.png'
                    }, {
                        'nome': _0x22824a(0x6cf),
                        'uri': _0x389039[_0x22824a(0x510)] + _0x22824a(0x693)
                    }, {
                        'nome': _0x22824a(0x5f0),
                        'uri': _0x389039[_0x22824a(0x510)] + _0x22824a(0x2ee)
                    }, {
                        'nome': _0x22824a(0x6f0),
                        'uri': _0x389039[_0x22824a(0x510)] + _0x22824a(0x4fd)
                    }, {
                        'nome': _0x22824a(0x38a),
                        'uri': _0x389039[_0x22824a(0x510)] + _0x22824a(0x434)
                    }, {
                        'nome': 'Bluemist',
                        'uri': _0x389039['s_l'] + '/get_store.phpitem=bg_sky__1.png'
                    }, {
                        'nome': _0x22824a(0x228),
                        'uri': _0x389039[_0x22824a(0x510)] + _0x22824a(0x506)
                    }, {
                        'nome': _0x22824a(0x7a1),
                        'uri': _0x389039[_0x22824a(0x510)] + _0x22824a(0x754)
                    }, {
                        'nome': _0x22824a(0x409),
                        'uri': _0x389039[_0x22824a(0x510)] + '/get_store.phpitem=bg_sky_11.png'
                    }, {
                        'nome': 'Crystalblue\x202',
                        'uri': _0x389039[_0x22824a(0x510)] + _0x22824a(0x50e)
                    }];
                    _0x389039[_0x22824a(0x752)] = _0xe0794a[_0x22824a(0x483)];
                    let _0x31e097 = $(_0x22824a(0x623));
                    _0x31e097[_0x22824a(0x2a1)] > 0x0 && (_0x31e097['empty'](),
                    _0x4d0a17[_0x22824a(0x588)](function(_0x27e730) {
                        var _0x3ca836 = _0x22824a;
                        const _0x59b852 = _0x389039[_0x3ca836(0x4b9)] === _0x27e730[_0x3ca836(0x3d2)]
                          , _0x399f10 = $(_0x3ca836(0x887) + (_0x59b852 ? _0x3ca836(0x6b6) : '') + _0x3ca836(0x84c) + _0x27e730['uri'] + '\x22\x20data-bg-name=\x22' + _0x27e730[_0x3ca836(0x4ba)] + _0x3ca836(0x4c5) + (_0x59b852 ? _0x3ca836(0x472) : _0x3ca836(0x3a6)) + _0x3ca836(0x1c0) + _0x27e730[_0x3ca836(0x3d2)] + _0x3ca836(0x29f) + _0x27e730[_0x3ca836(0x4ba)] + _0x3ca836(0x6e0) + _0x27e730[_0x3ca836(0x4ba)] + _0x3ca836(0x48d));
                        _0x399f10[_0x3ca836(0x68c)](function() {
                            var _0x5d6a58 = _0x3ca836;
                            $(_0x5d6a58(0x671))['removeClass'](_0x5d6a58(0x6b6))['css'](_0x5d6a58(0x2d3), _0x5d6a58(0x3a6)),
                            $(this)[_0x5d6a58(0x346)]('active')[_0x5d6a58(0x6ee)](_0x5d6a58(0x2d3), _0x5d6a58(0x472));
                            const _0x586db8 = $(this)['data']('bg')
                              , _0x1fdf58 = $(this)[_0x5d6a58(0x250)]('bg-name');
                            _0x389039['background'] = _0x586db8,
                            localStorage[_0x5d6a58(0x39f)](_0x5d6a58(0x852), JSON['stringify'](_0x389039)),
                            ooo && ooo['ef'] && ooo['ef'][_0x5d6a58(0x737)] && ooo['ef']['fn_o'] && (ooo['ef'][_0x5d6a58(0x737)] = new PIXI[(_0x5d6a58(0x538))](ooo['ef'][_0x5d6a58(0x6e5)](_0x586db8))),
                            $('#backgroundArena')[_0x5d6a58(0x467)](_0x586db8);
                        }),
                        _0x31e097[_0x3ca836(0x294)](_0x399f10);
                    }));
                    let _0x33e7f6 = document[_0x22824a(0x657)]('backgroundArena');
                    if (_0x33e7f6) {
                        for (_0x26ba83 = 0x0; _0x26ba83 < _0x4d0a17[_0x22824a(0x2a1)]; _0x26ba83++) {
                            let _0x508da0 = document[_0x22824a(0x3bc)](_0x22824a(0x29c));
                            _0x508da0['value'] = _0x4d0a17[_0x26ba83][_0x22824a(0x3d2)],
                            _0x508da0[_0x22824a(0x2b8)](_0x22824a(0x3b8), _0x4d0a17[_0x26ba83][_0x22824a(0x3d2)]),
                            _0x508da0[_0x22824a(0x2b8)](_0x22824a(0x31f), _0x4d0a17[_0x26ba83]['nome']),
                            _0x508da0['innerHTML'] = _0x4d0a17[_0x26ba83][_0x22824a(0x4ba)],
                            _0x33e7f6[_0x22824a(0x596)](_0x508da0);
                        }
                        _0x389039[_0x22824a(0x571)] = _0xe0794a[_0x22824a(0x730)],
                        _0x33e7f6[_0x22824a(0x4a0)] = _0x389039[_0x22824a(0x4b9)] || _0x4d0a17[0x0][_0x22824a(0x3d2)],
                        $['fn'][_0x22824a(0x427)] && $(_0x22824a(0x1ef))[_0x22824a(0x427)]({
                            'onSelected': function() {
                                var _0x63d40d = _0x22824a;
                                _0x389039[_0x63d40d(0x4b9)] = $(_0x63d40d(0x2ba))[_0x63d40d(0x467)](),
                                localStorage['setItem'](_0x63d40d(0x852), JSON[_0x63d40d(0x880)](_0x389039));
                                ooo && ooo['ef'] && ooo['ef'][_0x63d40d(0x737)] && ooo['ef'][_0x63d40d(0x6e5)] && (ooo['ef'][_0x63d40d(0x737)] = new PIXI[(_0x63d40d(0x538))](ooo['ef'][_0x63d40d(0x6e5)](_0x389039['background'])));
                                const _0x1edc2a = _0x389039['background'];
                                $(_0x63d40d(0x671))[_0x63d40d(0x617)](_0x63d40d(0x6b6))[_0x63d40d(0x6ee)](_0x63d40d(0x2d3), _0x63d40d(0x3a6)),
                                $(_0x63d40d(0x758) + _0x1edc2a + '\x22]')[_0x63d40d(0x346)](_0x63d40d(0x6b6))[_0x63d40d(0x6ee)](_0x63d40d(0x2d3), _0x63d40d(0x472));
                            }
                        });
                    }
                    const _0x530021 = [{
                        'name': 'Turquoise\x20Mouse\x20Pointer',
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x3be)
                    }, {
                        'name': _0x22824a(0x611),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x2c0)
                    }, {
                        'name': 'Pink\x20Octopus\x20Cursor',
                        'url': _0x389039[_0x22824a(0x510)] + '/images/cors-proxy.phpimg=cursors/3.png'
                    }, {
                        'name': _0x22824a(0x7c4),
                        'url': _0x389039['s_l'] + '/images/cors-proxy.phpimg=cursors/4.png'
                    }, {
                        'name': _0x22824a(0x490),
                        'url': _0x389039['s_l'] + '/images/cors-proxy.phpimg=cursors/5.png'
                    }, {
                        'name': _0x22824a(0x63d),
                        'url': _0x389039[_0x22824a(0x510)] + '/images/cors-proxy.phpimg=cursors/6.png'
                    }, {
                        'name': _0x22824a(0x5f3),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x293)
                    }, {
                        'name': _0x22824a(0x6f2),
                        'url': _0x389039['s_l'] + _0x22824a(0x5c3)
                    }, {
                        'name': _0x22824a(0x2b3),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x48e)
                    }, {
                        'name': _0x22824a(0x235),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x36b)
                    }, {
                        'name': _0x22824a(0x6bd),
                        'url': _0x389039[_0x22824a(0x510)] + '/images/cors-proxy.phpimg=cursors/11.png'
                    }, {
                        'name': _0x22824a(0x498),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x3dd)
                    }, {
                        'name': 'Three-colored\x20Glove\x20Cursor',
                        'url': _0x389039['s_l'] + _0x22824a(0x860)
                    }, {
                        'name': _0x22824a(0x350),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x61a)
                    }, {
                        'name': _0x22824a(0x501),
                        'url': _0x389039['s_l'] + '/images/cors-proxy.phpimg=cursors/15.png'
                    }, {
                        'name': _0x22824a(0x6aa),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x2d6)
                    }, {
                        'name': _0x22824a(0x4b1),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x63c)
                    }, {
                        'name': 'Roasting\x20Marshmallow\x20Cursor',
                        'url': _0x389039['s_l'] + '/images/cors-proxy.phpimg=cursors/18.png'
                    }, {
                        'name': 'White\x20Glove\x20Cursor',
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x3a8)
                    }, {
                        'name': _0x22824a(0x556),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x3ee)
                    }, {
                        'name': _0x22824a(0x75e),
                        'url': _0x389039['s_l'] + _0x22824a(0x3d8)
                    }, {
                        'name': _0x22824a(0x229),
                        'url': _0x389039['s_l'] + _0x22824a(0x775)
                    }, {
                        'name': _0x22824a(0x72b),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x509)
                    }, {
                        'name': _0x22824a(0x3f7),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x1d4)
                    }, {
                        'name': _0x22824a(0x1ee),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x29a)
                    }, {
                        'name': _0x22824a(0x7f2),
                        'url': _0x389039[_0x22824a(0x510)] + _0x22824a(0x7c2)
                    }, {
                        'name': _0x22824a(0x4b0),
                        'url': _0x389039['s_l'] + '/images/cors-proxy.phpimg=cursors/27.png'
                    }, {
                        'name': 'Heart\x20on\x20Stick\x20Cursor',
                        'url': _0x389039['s_l'] + '/images/cors-proxy.phpimg=cursors/28.png'
                    }]
                      , _0x2099b9 = localStorage[_0x22824a(0x65e)](_0x22824a(0x33b));
                    if (_0x2099b9) {
                        _0x58f7c1(_0x2099b9);
                        const _0x4c6959 = _0x530021['find'](_0x5c0333 => _0x5c0333['url'] === _0x2099b9);
                        _0x4c6959 && $(_0x22824a(0x207))['text'](_0x22824a(0x629) + _0x4c6959[_0x22824a(0x709)]);
                    }
                    const _0x46dac9 = $(_0x22824a(0x410));
                    _0x46dac9[_0x22824a(0x2a1)] > 0x0 && (_0x46dac9[_0x22824a(0x534)](),
                    _0x530021[_0x22824a(0x588)](function(_0x1c51dc) {
                        var _0x116407 = _0x22824a;
                        const _0x831419 = _0x2099b9 === _0x1c51dc['url']
                          , _0x4e3678 = $('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cursor-item\x20' + (_0x831419 ? _0x116407(0x6b6) : '') + _0x116407(0x243) + _0x1c51dc[_0x116407(0x88e)] + _0x116407(0x7cc) + _0x1c51dc['name'] + '\x22\x20style=\x22width:\x2060px;\x20height:\x2060px;\x20display:\x20inline-block;\x20margin:\x205px;\x20cursor:\x20pointer;\x20border:\x202px\x20solid\x20' + (_0x831419 ? _0x116407(0x472) : _0x116407(0x3a6)) + _0x116407(0x5e6) + _0x1c51dc[_0x116407(0x88e)] + _0x116407(0x29f) + _0x1c51dc[_0x116407(0x709)] + _0x116407(0x269));
                        _0x4e3678[_0x116407(0x68c)](function() {
                            var _0x4b093f = _0x116407;
                            $(_0x4b093f(0x2ca))['removeClass'](_0x4b093f(0x6b6))[_0x4b093f(0x6ee)]('border-color', _0x4b093f(0x3a6)),
                            $(this)[_0x4b093f(0x346)](_0x4b093f(0x6b6))[_0x4b093f(0x6ee)](_0x4b093f(0x2d3), _0x4b093f(0x472));
                            const _0x46ac8b = $(this)['data']('cursor');
                            localStorage[_0x4b093f(0x39f)](_0x4b093f(0x33b), _0x46ac8b),
                            _0x58f7c1(_0x46ac8b),
                            $(_0x4b093f(0x207))[_0x4b093f(0x440)](_0x4b093f(0x629) + _0x1c51dc['name']);
                        }),
                        _0x46dac9[_0x116407(0x294)](_0x4e3678);
                    }));
                    $(_0x22824a(0x41b))[_0x22824a(0x68c)](function() {
                        var _0x460f8a = _0x22824a;
                        localStorage[_0x460f8a(0x6db)](_0x460f8a(0x33b)),
                        $(_0x460f8a(0x60b))['css'](_0x460f8a(0x54e), _0x460f8a(0x7c7)),
                        $(_0x460f8a(0x207))[_0x460f8a(0x440)](_0x460f8a(0x87e)),
                        $(_0x460f8a(0x2ca))[_0x460f8a(0x617)](_0x460f8a(0x6b6))['css'](_0x460f8a(0x2d3), _0x460f8a(0x3a6));
                    });
                    function _0x58f7c1(_0x5f20f9) {
                        var _0x1a9757 = _0x22824a;
                        $(_0x1a9757(0x60b))['css']({
                            'cursor': 'url(' + _0x5f20f9 + '),\x20default'
                        });
                    }
                    _0x389039['c_4'] = _0xe0794a[_0x22824a(0x291)];
                    _0x389039['hz'] && (_0x5c6e52[_0x22824a(0x853)] = function(_0xc7caa6) {
                        var _0x363856 = _0x22824a;
                        !_0x389039[_0x363856(0x4d0)] && (_0x389039['z'] >= 0.5 && _0x389039['z'] <= 0x19 || _0x389039['z'] < 0.5 && _0xc7caa6[_0x363856(0x5e2)] < 0x0 || _0x389039['z'] > 0x19 && _0xc7caa6[_0x363856(0x5e2)] > 0x0) && (_0x389039['z'] = _0x389039['z'] + _0xc7caa6[_0x363856(0x5e2)] * -wftObjects['zoomSpeed'],
                        _0x389039['z'] < 0.5 && (_0x389039['z'] = 0.5));
                    }
                    );
                    if (_0x389039[_0x22824a(0x23b)]) {
                        $(_0x22824a(0x759))[_0x22824a(0x584)](_0xe0794a['mb']);
                        var _0x4fa405 = document[_0x22824a(0x657)](_0x22824a(0x284))
                          , _0x4a7db9 = document[_0x22824a(0x657)](_0x22824a(0x689))
                          , _0x506528 = document[_0x22824a(0x657)](_0x22824a(0x366))
                          , _0x17d31b = document[_0x22824a(0x657)]('joystick_position')
                          , _0x3745d1 = document[_0x22824a(0x657)]('joystick_size')
                          , _0x51e86a = document['getElementById'](_0x22824a(0x2e3));
                        _0x4fa405 && (_0x4fa405[_0x22824a(0x861)] = function() {
                            _0x37f1df(_0x4fa405),
                            _0x5a3b3c(_0x4a7db9),
                            _0x2ef35f(_0x506528),
                            _0x882233(_0x17d31b),
                            _0x4b0ba3(_0x51e86a),
                            _0x37c629(_0x3745d1);
                        }
                        ),
                        _0x4a7db9 && (_0x4a7db9['onchange'] = function() {
                            _0x37f1df(_0x4fa405),
                            _0x5a3b3c(_0x4a7db9),
                            _0x2ef35f(_0x506528),
                            _0x882233(_0x17d31b),
                            _0x4b0ba3(_0x51e86a),
                            _0x37c629(_0x3745d1);
                        }
                        ),
                        _0x506528 && (_0x506528[_0x22824a(0x861)] = function() {
                            _0x37f1df(_0x4fa405),
                            _0x5a3b3c(_0x4a7db9),
                            _0x2ef35f(_0x506528),
                            _0x882233(_0x17d31b),
                            _0x4b0ba3(_0x51e86a),
                            _0x37c629(_0x3745d1);
                        }
                        ),
                        _0x17d31b && (_0x17d31b['onchange'] = function() {
                            _0x37f1df(_0x4fa405),
                            _0x5a3b3c(_0x4a7db9),
                            _0x2ef35f(_0x506528),
                            _0x882233(_0x17d31b),
                            _0x4b0ba3(_0x51e86a),
                            _0x37c629(_0x3745d1);
                        }
                        ),
                        _0x3745d1 && (_0x3745d1[_0x22824a(0x861)] = function() {
                            _0x37f1df(_0x4fa405),
                            _0x5a3b3c(_0x4a7db9),
                            _0x2ef35f(_0x506528),
                            _0x882233(_0x17d31b),
                            _0x4b0ba3(_0x51e86a),
                            _0x37c629(_0x3745d1);
                        }
                        ),
                        _0x51e86a && (_0x51e86a['onchange'] = function() {
                            _0x37f1df(_0x4fa405),
                            _0x5a3b3c(_0x4a7db9),
                            _0x2ef35f(_0x506528),
                            _0x882233(_0x17d31b),
                            _0x4b0ba3(_0x51e86a),
                            _0x37c629(_0x3745d1);
                        }
                        ),
                        _0x389039[_0x22824a(0x365)] ? ($(_0x22824a(0x613))[_0x22824a(0x467)](_0x389039['joystick'][_0x22824a(0x69a)]),
                        $(_0x22824a(0x348))[_0x22824a(0x467)](_0x389039[_0x22824a(0x365)]['color']),
                        $('#joystick_mode')[_0x22824a(0x467)](_0x389039[_0x22824a(0x365)][_0x22824a(0x7fb)]),
                        $('#joystick_position')['val'](_0x389039[_0x22824a(0x365)][_0x22824a(0x5b1)]),
                        $(_0x22824a(0x5eb))[_0x22824a(0x467)](_0x389039['joystick'][_0x22824a(0x851)]),
                        $(_0x22824a(0x5a8))['val'](_0x389039[_0x22824a(0x365)][_0x22824a(0x283)])) : ($(_0x22824a(0x613))['val'](!![]),
                        $(_0x22824a(0x348))['val'](_0x22824a(0x707)),
                        $(_0x22824a(0x7d8))[_0x22824a(0x467)]('dynamic'),
                        $(_0x22824a(0x2e1))[_0x22824a(0x467)]('L'),
                        $(_0x22824a(0x5eb))['val'](0x64),
                        $('#joystick_pxy')['val'](0x64)),
                        typeof _0x37f1df === _0x22824a(0x3fb) && _0x4fa405 && _0x37f1df(_0x4fa405),
                        typeof _0x5a3b3c === _0x22824a(0x3fb) && _0x4a7db9 && _0x5a3b3c(_0x4a7db9),
                        typeof _0x2ef35f === _0x22824a(0x3fb) && _0x506528 && _0x2ef35f(_0x506528),
                        typeof _0x882233 === _0x22824a(0x3fb) && _0x17d31b && _0x882233(_0x17d31b),
                        typeof _0x4b0ba3 === 'function' && _0x51e86a && _0x4b0ba3(_0x51e86a),
                        typeof _0x37c629 === _0x22824a(0x3fb) && _0x3745d1 && _0x37c629(_0x3745d1);
                    }
                    function _0x37c629(_0x5b12dd) {
                        var _0x5be783 = _0x22824a;
                        !_0x389039[_0x5be783(0x365)] && (_0x389039[_0x5be783(0x365)] = {}),
                        _0x389039[_0x5be783(0x365)][_0x5be783(0x851)] = parseInt(_0x5b12dd[_0x5be783(0x4a0)]),
                        $(_0x5be783(0x476))[_0x5be783(0x440)](_0x5b12dd['value']),
                        localStorage[_0x5be783(0x39f)](_0x5be783(0x852), JSON[_0x5be783(0x880)](_0x389039));
                    }
                    function _0x4b0ba3(_0x2b26c8) {
                        var _0x5db5ac = _0x22824a;
                        !_0x389039[_0x5db5ac(0x365)] && (_0x389039['joystick'] = {}),
                        _0x389039[_0x5db5ac(0x365)][_0x5db5ac(0x283)] = parseInt(_0x2b26c8[_0x5db5ac(0x4a0)]),
                        $(_0x5db5ac(0x488))[_0x5db5ac(0x440)](_0x2b26c8[_0x5db5ac(0x4a0)]),
                        localStorage[_0x5db5ac(0x39f)](_0x5db5ac(0x852), JSON[_0x5db5ac(0x880)](_0x389039));
                    }
                    typeof _0x2806ed !== _0x22824a(0x799) && typeof _0x18ec3d !== _0x22824a(0x799) && typeof _0x1ba984 !== _0x22824a(0x799) && (typeof _0x223024 === _0x22824a(0x3fb) && _0x2806ed['on'](_0x22824a(0x437), _0x223024),
                    typeof _0x2ff872 === _0x22824a(0x3fb) && _0x18ec3d['on']('mousedown', _0x2ff872),
                    typeof _0x3a5bb3 === _0x22824a(0x3fb) && _0x1ba984['on'](_0x22824a(0x437), _0x3a5bb3)),
                    _0x389039[_0x22824a(0x646)] = _0xe0794a[_0x22824a(0x823)];
                } else
                    $(_0x22824a(0x680))[_0x22824a(0x79e)]();
                _0xe0794a[_0x22824a(0x561)] && _0xe0794a['ccc'] != 'iq' && _0xe0794a[_0x22824a(0x561)] != _0x50f988 && (localStorage[_0x22824a(0x39f)](_0x22824a(0x858), _0xe0794a['ccc']),
                localStorage[_0x22824a(0x6db)](_0x22824a(0x592)),
                window[_0x22824a(0x373)][_0x22824a(0x2ad)]()),
                !_0x50f988 && localStorage[_0x22824a(0x39f)]('oco', 'iq');
            }
            localStorage[_0x22824a(0x39f)](_0x22824a(0x852), JSON['stringify'](_0x389039)),
            $(document)[_0x22824a(0x359)](function() {
                var _0x298989 = _0x22824a;
                if ($(_0x298989(0x5d9))[_0x298989(0x2a1)] > 0x0) {
                    $(_0x298989(0x46c))[_0x298989(0x68c)](function() {
                        var _0x441f03 = _0x298989;
                        $(_0x441f03(0x46c))['removeClass'](_0x441f03(0x6b6)),
                        $(this)[_0x441f03(0x346)](_0x441f03(0x6b6)),
                        $(_0x441f03(0x2dc))[_0x441f03(0x79e)]();
                        const _0x40c15e = $(this)[_0x441f03(0x250)](_0x441f03(0x682)) + _0x441f03(0x332);
                        $('#' + _0x40c15e)[_0x441f03(0x224)]();
                    }),
                    $(_0x298989(0x4d2))['show'](),
                    $(_0x298989(0x2dc))[_0x298989(0x496)]('#game-settings-tab')[_0x298989(0x79e)]();
                    !_0x389039[_0x298989(0x23b)] && $(_0x298989(0x1b7))[_0x298989(0x79e)]();
                    function _0x4e907f() {
                        var _0x1d8bb2 = _0x298989;
                        $(_0x1d8bb2(0x7f6))['prop'](_0x1d8bb2(0x69a)) ? $(_0x1d8bb2(0x213))[_0x1d8bb2(0x346)](_0x1d8bb2(0x315)) : $('#custom-messages-container')[_0x1d8bb2(0x617)]('messages-disabled');
                    }
                    _0x4e907f(),
                    $(_0x298989(0x5eb))['on']('input', function() {
                        var _0x22e5dd = _0x298989
                          , _0x517688 = $(this)[_0x22e5dd(0x467)]();
                        $('#joystick_size_value')[_0x22e5dd(0x440)](_0x517688),
                        _0x3a2ffa(this);
                    }),
                    $(_0x298989(0x5a8))['on'](_0x298989(0x64a), function() {
                        var _0x192dff = _0x298989
                          , _0x2e9341 = $(this)[_0x192dff(0x467)]();
                        $(_0x192dff(0x488))[_0x192dff(0x440)](_0x2e9341),
                        _0x4be72a(this);
                    }),
                    $('#wftiq')[_0x298989(0x85b)](function() {
                        var _0x3b6db4 = _0x298989;
                        _0x4e907f(),
                        _0x389039['iq'] = $(this)[_0x3b6db4(0x226)](_0x3b6db4(0x69a)),
                        localStorage[_0x3b6db4(0x39f)]('SaveGamewft', JSON['stringify'](_0x389039));
                    }),
                    $('#kill_msg')[_0x298989(0x85b)](function() {
                        var _0x32b93f = _0x298989;
                        _0x389039[_0x32b93f(0x3bd)] = $(this)['val'](),
                        localStorage[_0x32b93f(0x39f)](_0x32b93f(0x852), JSON[_0x32b93f(0x880)](_0x389039));
                    }),
                    $(_0x298989(0x266))['change'](function() {
                        var _0x4ffc99 = _0x298989;
                        _0x389039['headshotMsg'] = $(this)[_0x4ffc99(0x467)](),
                        localStorage[_0x4ffc99(0x39f)]('SaveGamewft', JSON[_0x4ffc99(0x880)](_0x389039));
                    }),
                    $('#kill_show_name')[_0x298989(0x85b)](function() {
                        var _0x478d99 = _0x298989;
                        _0x389039[_0x478d99(0x7bd)] = $(this)[_0x478d99(0x226)](_0x478d99(0x69a)),
                        localStorage['setItem'](_0x478d99(0x852), JSON['stringify'](_0x389039));
                    }),
                    $(_0x298989(0x7b1))[_0x298989(0x85b)](function() {
                        var _0x31d7c8 = _0x298989;
                        _0x389039[_0x31d7c8(0x7c1)] = $(this)[_0x31d7c8(0x226)](_0x31d7c8(0x69a)),
                        localStorage['setItem'](_0x31d7c8(0x852), JSON['stringify'](_0x389039));
                    }),
                    $(_0x298989(0x50a))[_0x298989(0x85b)](function() {
                        var _0x3ae3e1 = _0x298989;
                        _0x389039[_0x3ae3e1(0x56a)] = $(this)[_0x3ae3e1(0x467)](),
                        localStorage[_0x3ae3e1(0x39f)](_0x3ae3e1(0x852), JSON[_0x3ae3e1(0x880)](_0x389039));
                    }),
                    $('#headshot_name_position')[_0x298989(0x85b)](function() {
                        var _0x105770 = _0x298989;
                        _0x389039[_0x105770(0x647)] = $(this)['val'](),
                        localStorage['setItem'](_0x105770(0x852), JSON[_0x105770(0x880)](_0x389039));
                    }),
                    $(_0x298989(0x662))['on'](_0x298989(0x64a), function() {
                        var _0x57bfa8 = _0x298989;
                        $(this)[_0x57bfa8(0x467)]() !== '' ? (_0x389039[_0x57bfa8(0x37d)] = _0x57bfa8(0x3c7),
                        _0x389039['killCustomText'] = $(this)[_0x57bfa8(0x467)]()) : _0x389039[_0x57bfa8(0x37d)] = _0x57bfa8(0x37b),
                        localStorage[_0x57bfa8(0x39f)](_0x57bfa8(0x852), JSON[_0x57bfa8(0x880)](_0x389039));
                    }),
                    $(_0x298989(0x5da))['on'](_0x298989(0x64a), function() {
                        var _0x3dbf61 = _0x298989;
                        $(this)[_0x3dbf61(0x467)]() !== '' ? (_0x389039['headshotMsgType'] = _0x3dbf61(0x3c7),
                        _0x389039[_0x3dbf61(0x575)] = $(this)[_0x3dbf61(0x467)]()) : _0x389039['headshotMsgType'] = _0x3dbf61(0x37b),
                        localStorage[_0x3dbf61(0x39f)](_0x3dbf61(0x852), JSON['stringify'](_0x389039));
                    });
                    _0x389039[_0x298989(0x3bd)] && $('#kill_msg')[_0x298989(0x467)](_0x389039[_0x298989(0x3bd)]);
                    _0x389039[_0x298989(0x529)] && $(_0x298989(0x266))[_0x298989(0x467)](_0x389039[_0x298989(0x529)]);
                    _0x389039[_0x298989(0x37d)] === _0x298989(0x3c7) && _0x389039[_0x298989(0x782)] && $('#kill_custom_text')['val'](_0x389039['killCustomText'] || '');
                    _0x389039[_0x298989(0x54f)] === _0x298989(0x3c7) && _0x389039[_0x298989(0x575)] && $(_0x298989(0x5da))[_0x298989(0x467)](_0x389039[_0x298989(0x575)] || '');
                    $(_0x298989(0x74a))[_0x298989(0x226)](_0x298989(0x69a), _0x389039[_0x298989(0x7bd)] !== ![]),
                    $(_0x298989(0x7b1))[_0x298989(0x226)](_0x298989(0x69a), _0x389039[_0x298989(0x7c1)] !== ![]),
                    $(_0x298989(0x50a))[_0x298989(0x467)](_0x389039[_0x298989(0x56a)] || _0x298989(0x295)),
                    $(_0x298989(0x3b1))[_0x298989(0x467)](_0x389039['headshotNamePos'] || 'after'),
                    $(_0x298989(0x35b))[_0x298989(0x226)](_0x298989(0x69a), wftObjects[_0x298989(0x2f6)] || _0x389039['vh']),
                    $(_0x298989(0x6a4))['val'](wftObjects['soundEffect'] || 'https://wormx.store/video/hs_2.mp3'),
                    $(_0x298989(0x211))[_0x298989(0x467)](wftObjects[_0x298989(0x62a)] || 0x32),
                    $(_0x298989(0x797))[_0x298989(0x440)](wftObjects[_0x298989(0x62a)] || 0x32);
                    let _0x6b2fac = null;
                    function _0x2053b0(_0x4229e9, _0x2fd479) {
                        var _0x519462 = _0x298989;
                        _0x6b2fac && (_0x6b2fac[_0x519462(0x6c1)](),
                        _0x6b2fac[_0x519462(0x6ac)] = 0x0),
                        _0x4229e9[_0x519462(0x2e9)] = _0x2fd479 / 0x64,
                        _0x4229e9[_0x519462(0x6ac)] = 0x0,
                        _0x4229e9[_0x519462(0x304)](),
                        _0x6b2fac = _0x4229e9;
                    }
                    $(_0x298989(0x35b))[_0x298989(0x226)]('checked', !![]),
                    $('#wftsound')[_0x298989(0x85b)](function() {
                        var _0x470765 = _0x298989;
                        wftObjects['soundEnabled'] = $(this)[_0x470765(0x226)](_0x470765(0x69a)),
                        _0x389039['vh'] = $(this)[_0x470765(0x226)](_0x470765(0x69a)),
                        _0x470256(),
                        localStorage['setItem']('SaveGamewft', JSON[_0x470765(0x880)](_0x389039));
                        if (wftObjects[_0x470765(0x2f6)]) {
                            const _0xf3c4b = document['getElementById'](_0x470765(0x644));
                            _0xf3c4b && _0x2053b0(_0xf3c4b, wftObjects[_0x470765(0x62a)]);
                        }
                    }),
                    $(_0x298989(0x6a4))['change'](function() {
                        var _0x3022f4 = _0x298989;
                        wftObjects[_0x3022f4(0x872)] = $(this)['val'](),
                        _0x470256();
                        const _0x45f416 = document[_0x3022f4(0x657)](_0x3022f4(0x644));
                        if (_0x45f416) {
                            const _0x501a37 = _0x45f416[_0x3022f4(0x2a5)](_0x3022f4(0x892));
                            _0x501a37 && (_0x501a37[_0x3022f4(0x52f)] = wftObjects[_0x3022f4(0x872)],
                            _0x45f416[_0x3022f4(0x3c3)](),
                            wftObjects[_0x3022f4(0x2f6)] && setTimeout( () => {
                                var _0x37a7b2 = _0x3022f4;
                                _0x2053b0(_0x45f416, wftObjects[_0x37a7b2(0x62a)]);
                            }
                            , 0x64));
                        }
                    }),
                    $(_0x298989(0x5b0))[_0x298989(0x85b)](function() {
                        var _0x384649 = _0x298989;
                        const _0x3ff365 = $(this)[_0x384649(0x467)]()
                          , _0x38b8bd = document[_0x384649(0x657)](_0x384649(0x841));
                        if (_0x38b8bd) {
                            const _0x556ede = _0x38b8bd[_0x384649(0x2a5)](_0x384649(0x892));
                            _0x556ede && (_0x556ede[_0x384649(0x52f)] = _0x3ff365,
                            _0x38b8bd['load'](),
                            wftObjects[_0x384649(0x2f6)] && setTimeout( () => {
                                var _0x4cab0e = _0x384649;
                                _0x2053b0(_0x38b8bd, wftObjects[_0x4cab0e(0x62a)]);
                            }
                            , 0x64));
                        }
                        !wftObjects[_0x384649(0x217)] && (wftObjects['monsterKillSound'] = {}),
                        wftObjects[_0x384649(0x217)] = _0x3ff365,
                        _0x470256();
                    }),
                    $(_0x298989(0x211))['on'](_0x298989(0x64a), function() {
                        var _0x3a2c08 = _0x298989;
                        wftObjects[_0x3a2c08(0x62a)] = parseInt($(this)[_0x3a2c08(0x467)]()),
                        $(_0x3a2c08(0x797))[_0x3a2c08(0x440)](wftObjects[_0x3a2c08(0x62a)]);
                        const _0x960438 = document[_0x3a2c08(0x421)]('audio');
                        _0x960438['forEach'](_0x130f15 => {
                            var _0x48ea80 = _0x3a2c08;
                            _0x130f15[_0x48ea80(0x2e9)] = wftObjects['soundVolume'] / 0x64;
                        }
                        );
                        if (wftObjects['soundEnabled']) {
                            const _0xb3f279 = document[_0x3a2c08(0x657)]('s_h');
                            _0xb3f279 && _0x2053b0(_0xb3f279, wftObjects['soundVolume']);
                        }
                        _0x470256();
                    });
                    !window['laserOptions'] && (window['laserOptions'] = {
                        'enabled': _0x389039['ls'] || ![],
                        'color': 0xffd700,
                        'opacity': 0.5,
                        'thickness': 0.1
                    });
                    try {
                        const _0xc501ba = JSON[_0x298989(0x762)](localStorage[_0x298989(0x65e)](_0x298989(0x4e6)));
                        _0xc501ba && (window[_0x298989(0x4e6)] = _0xc501ba);
                    } catch (_0x2fa517) {
                        console['error'](_0x298989(0x4a4), _0x2fa517);
                    }
                    $('#Laserup')['prop'](_0x298989(0x69a), window[_0x298989(0x4e6)][_0x298989(0x63a)]);
                    const _0x39bbdc = '#' + window[_0x298989(0x4e6)][_0x298989(0x25f)][_0x298989(0x436)](0x10)[_0x298989(0x34f)](0x6, '0');
                    $('#laser_color_picker')['val'](_0x39bbdc),
                    $(_0x298989(0x599))[_0x298989(0x467)](window[_0x298989(0x4e6)]['opacity'] * 0x64),
                    $(_0x298989(0x6ce))[_0x298989(0x440)](Math[_0x298989(0x728)](window[_0x298989(0x4e6)][_0x298989(0x343)] * 0x64)),
                    $('#Laserup')[_0x298989(0x85b)](function() {
                        var _0x196656 = _0x298989;
                        window[_0x196656(0x4e6)][_0x196656(0x63a)] = $(this)[_0x196656(0x226)](_0x196656(0x69a)),
                        _0x389039['ls'] = $(this)['prop'](_0x196656(0x69a)),
                        localStorage[_0x196656(0x39f)]('laserOptions', JSON[_0x196656(0x880)](window[_0x196656(0x4e6)])),
                        localStorage[_0x196656(0x39f)](_0x196656(0x852), JSON[_0x196656(0x880)](_0x389039));
                    }),
                    $(_0x298989(0x638))[_0x298989(0x85b)](function() {
                        var _0x3fcd3d = _0x298989;
                        const _0x4ba92c = $(this)[_0x3fcd3d(0x467)]();
                        window[_0x3fcd3d(0x4e6)][_0x3fcd3d(0x25f)] = parseInt(_0x4ba92c[_0x3fcd3d(0x42b)]('#', '0x')),
                        localStorage[_0x3fcd3d(0x39f)](_0x3fcd3d(0x4e6), JSON[_0x3fcd3d(0x880)](window['laserOptions']));
                    }),
                    $(_0x298989(0x599))['on'](_0x298989(0x64a), function() {
                        var _0xb5b542 = _0x298989;
                        const _0x39a4b4 = parseInt($(this)[_0xb5b542(0x467)]());
                        window[_0xb5b542(0x4e6)][_0xb5b542(0x343)] = _0x39a4b4 / 0x64,
                        $(_0xb5b542(0x6ce))[_0xb5b542(0x440)](_0x39a4b4),
                        localStorage[_0xb5b542(0x39f)](_0xb5b542(0x4e6), JSON[_0xb5b542(0x880)](window[_0xb5b542(0x4e6)]));
                    }),
                    $(_0x298989(0x37a))[_0x298989(0x68c)](function() {
                        var _0x3e185a = _0x298989;
                        window[_0x3e185a(0x4e6)] = {
                            'enabled': _0x389039['ls'],
                            'color': 0xffd700,
                            'opacity': 0.5,
                            'thickness': 0.1
                        },
                        localStorage[_0x3e185a(0x39f)]('laserOptions', JSON['stringify'](window[_0x3e185a(0x4e6)])),
                        $(_0x3e185a(0x638))[_0x3e185a(0x467)](_0x3e185a(0x3ad)),
                        $(_0x3e185a(0x599))[_0x3e185a(0x467)](0x32),
                        $(_0x3e185a(0x6ce))[_0x3e185a(0x440)](0x32);
                    }),
                    $(document)[_0x298989(0x836)](function(_0x44a532) {
                        var _0x4086a5 = _0x298989;
                        _0x44a532[_0x4086a5(0x29b)] === 0x4c && $('#Laserup')[_0x4086a5(0x226)]('checked', !$(_0x4086a5(0x334))[_0x4086a5(0x226)](_0x4086a5(0x69a)))[_0x4086a5(0x1bc)](_0x4086a5(0x85b));
                        if (_0x44a532[_0x4086a5(0x29b)] === 0x4f) {
                            let _0xb673e1 = parseInt($(_0x4086a5(0x599))[_0x4086a5(0x467)]());
                            _0xb673e1 < 0x64 && $(_0x4086a5(0x599))[_0x4086a5(0x467)](_0xb673e1 + 0xa)['trigger'](_0x4086a5(0x64a));
                        }
                        if (_0x44a532[_0x4086a5(0x29b)] === 0x50) {
                            let _0x24689c = parseInt($(_0x4086a5(0x599))['val']());
                            _0x24689c > 0xa && $(_0x4086a5(0x599))[_0x4086a5(0x467)](_0x24689c - 0xa)[_0x4086a5(0x1bc)](_0x4086a5(0x64a));
                        }
                    }),
                    $('#eating_speed_toggle')[_0x298989(0x226)](_0x298989(0x69a), wftObjects[_0x298989(0x22d)] >= 0x1),
                    $(_0x298989(0x883))[_0x298989(0x467)](wftObjects[_0x298989(0x706)]),
                    $(_0x298989(0x4b5))['text'](wftObjects[_0x298989(0x706)]),
                    $(_0x298989(0x773))['val'](wftObjects[_0x298989(0x7d3)]),
                    $(_0x298989(0x379))[_0x298989(0x440)](wftObjects[_0x298989(0x7d3)]),
                    $('#portion_size_slider')['val'](wftObjects[_0x298989(0x1b9)]),
                    $(_0x298989(0x7c9))[_0x298989(0x440)](wftObjects[_0x298989(0x1b9)]),
                    $('#portion_aura_slider')[_0x298989(0x467)](wftObjects[_0x298989(0x515)]),
                    $('#portion_aura_value')['text'](wftObjects[_0x298989(0x515)]),
                    $('#food_size_slider')[_0x298989(0x467)](wftObjects[_0x298989(0x51c)]),
                    $('#food_size_value')['text'](wftObjects[_0x298989(0x51c)]),
                    $('#food_shadow_slider')[_0x298989(0x467)](wftObjects[_0x298989(0x489)]),
                    $('#food_shadow_value')[_0x298989(0x440)](wftObjects[_0x298989(0x489)]),
                    $('#eating_speed_toggle')[_0x298989(0x85b)](function() {
                        var _0x197830 = _0x298989;
                        wftObjects[_0x197830(0x22d)] = $(this)[_0x197830(0x226)](_0x197830(0x69a)) ? 0x1 : 0.0025,
                        _0x470256();
                    }),
                    $(_0x298989(0x883))['on'](_0x298989(0x64a), function() {
                        var _0x9a7233 = _0x298989;
                        const _0x420bfa = parseFloat($(this)[_0x9a7233(0x467)]());
                        wftObjects[_0x9a7233(0x706)] = _0x420bfa,
                        $('#spin_fast_value')['text'](_0x420bfa),
                        _0x470256();
                    }),
                    $('#zoom_speed_slider')['on'](_0x298989(0x64a), function() {
                        var _0x58a02f = _0x298989;
                        const _0x2fa125 = parseFloat($(this)[_0x58a02f(0x467)]());
                        wftObjects[_0x58a02f(0x7d3)] = _0x2fa125,
                        $(_0x58a02f(0x379))[_0x58a02f(0x440)](_0x2fa125),
                        _0x470256();
                    }),
                    $(_0x298989(0x7ba))['on'](_0x298989(0x64a), function() {
                        var _0x2ddfb3 = _0x298989;
                        const _0x5e6c60 = parseFloat($(this)['val']());
                        wftObjects[_0x2ddfb3(0x1b9)] = _0x5e6c60,
                        $(_0x2ddfb3(0x7c9))[_0x2ddfb3(0x440)](_0x5e6c60),
                        _0x470256();
                    }),
                    $(_0x298989(0x84e))['on'](_0x298989(0x64a), function() {
                        var _0x5246bf = _0x298989;
                        const _0x506a81 = parseFloat($(this)[_0x5246bf(0x467)]());
                        wftObjects[_0x5246bf(0x515)] = _0x506a81,
                        $(_0x5246bf(0x546))[_0x5246bf(0x440)](_0x506a81),
                        _0x470256();
                    }),
                    $('#food_size_slider')['on'](_0x298989(0x64a), function() {
                        var _0x2c617a = _0x298989;
                        const _0x41ab4a = parseFloat($(this)[_0x2c617a(0x467)]());
                        wftObjects[_0x2c617a(0x51c)] = _0x41ab4a,
                        $('#food_size_value')[_0x2c617a(0x440)](_0x41ab4a),
                        _0x470256();
                    }),
                    $('#food_shadow_slider')['on']('input', function() {
                        var _0x149456 = _0x298989;
                        const _0x1a58f4 = parseFloat($(this)[_0x149456(0x467)]());
                        wftObjects['FoodShadow'] = _0x1a58f4,
                        $(_0x149456(0x424))[_0x149456(0x440)](_0x1a58f4),
                        _0x470256();
                    }),
                    $('.reset-btn')[_0x298989(0x68c)](function() {
                        var _0x3a8ce3 = _0x298989;
                        const _0x2788f2 = $(this)[_0x3a8ce3(0x250)](_0x3a8ce3(0x70f))
                          , _0x4c43c0 = $(this)[_0x3a8ce3(0x250)](_0x3a8ce3(0x7c7));
                        if (_0x2788f2 && _0x4c43c0 !== undefined)
                            switch (_0x2788f2) {
                            case _0x3a8ce3(0x673):
                                $('#spin_fast_slider')['val'](_0x4c43c0)[_0x3a8ce3(0x1bc)](_0x3a8ce3(0x64a));
                                break;
                            case _0x3a8ce3(0x4e1):
                                $(_0x3a8ce3(0x7ba))[_0x3a8ce3(0x467)](_0x4c43c0)[_0x3a8ce3(0x1bc)](_0x3a8ce3(0x64a));
                                break;
                            case _0x3a8ce3(0x580):
                                $(_0x3a8ce3(0x84e))[_0x3a8ce3(0x467)](_0x4c43c0)[_0x3a8ce3(0x1bc)](_0x3a8ce3(0x64a));
                                break;
                            case _0x3a8ce3(0x1d8):
                                $(_0x3a8ce3(0x61c))[_0x3a8ce3(0x467)](_0x4c43c0)['trigger'](_0x3a8ce3(0x64a));
                                break;
                            case 'food_shadow':
                                $(_0x3a8ce3(0x741))['val'](_0x4c43c0)[_0x3a8ce3(0x1bc)](_0x3a8ce3(0x64a));
                                break;
                            case _0x3a8ce3(0x47c):
                                $(_0x3a8ce3(0x773))[_0x3a8ce3(0x467)](_0x4c43c0)[_0x3a8ce3(0x1bc)]('input');
                                break;
                            }
                    });
                    function _0xa0f393() {
                        const _0x3521f2 = setInterval( () => {
                            var _0x57d344 = _0x31dd;
                            if (window[_0x57d344(0x6cd)] && window['utils'][_0x57d344(0x2a8)] && window['config'] && window['config']['prototype'] && window['savedGame'] && window['savedGame'][_0x57d344(0x2a8)]) {
                                clearInterval(_0x3521f2);
                                const _0x3089be = window[_0x57d344(0x6cd)]['prototype']['Qj'];
                                window[_0x57d344(0x6cd)][_0x57d344(0x2a8)]['Qj'] = function(_0x199017, _0x238546, _0x148520) {
                                    var _0x194315 = _0x57d344;
                                    this['Hj'] = window[_0x194315(0x84b)]['ga'](this['Hj'], this['Fj'], _0x238546, window[_0x194315(0x805)][_0x194315(0x22d)]),
                                    this['Ij'] = window['decoder']['ga'](this['Ij'], this['Gj'], _0x238546, 0.0025),
                                    this['Nj']['Bg'](this, _0x199017, _0x238546, _0x148520);
                                }
                                ;
                                const _0xcfeec = window['config'][_0x57d344(0x2a8)]['Bg'];
                                window['config'][_0x57d344(0x2a8)]['Bg'] = function(_0x29a6a7, _0x504424, _0x3ec905, _0x7b30d8) {
                                    var _0x365d8a = _0x57d344;
                                    if (!_0x7b30d8(_0x29a6a7['Hj'], _0x29a6a7['Ij'])) {
                                        this['Wh']['Cd']();
                                        return;
                                    }
                                    var _0x45ad5a = _0x29a6a7['Kj'] * (0x1 + window[_0x365d8a(0x84b)]['pa'](_0x29a6a7['Mj'] + _0x504424 / 0xc8) * 0.3);
                                    _0x29a6a7['Ej'] ? this['Wh']['Ad'](_0x29a6a7['Hj'], _0x29a6a7['Ij'], window[_0x365d8a(0x805)][_0x365d8a(0x1b9)] * _0x29a6a7['Jj'], _0x29a6a7['Lj'] * 0x1, window['wftObjects']['PortionAura'] * _0x45ad5a, window[_0x365d8a(0x805)][_0x365d8a(0x821)] * _0x29a6a7['Lj']) : this['Wh']['Ad'](_0x29a6a7['Hj'], _0x29a6a7['Ij'], window[_0x365d8a(0x805)][_0x365d8a(0x51c)] * _0x29a6a7['Jj'], _0x29a6a7['Lj'] * 0x1, window[_0x365d8a(0x805)]['FoodShadow'] * _0x45ad5a, window[_0x365d8a(0x805)][_0x365d8a(0x604)] * _0x29a6a7['Lj']);
                                }
                                ;
                                const _0x217354 = window[_0x57d344(0x255)][_0x57d344(0x2a8)]['ug'];
                                window[_0x57d344(0x255)][_0x57d344(0x2a8)]['ug'] = function(_0xf1cf23, _0x10b85a) {
                                    var _0x374cf7 = _0x57d344;
                                    const _0x122697 = _0x217354[_0x374cf7(0x5e8)](this, arguments);
                                    if (this['Fh'] && typeof this['Fh']['x'] !== _0x374cf7(0x799) && window['ooo'] && window['ooo']['Mh']) {
                                        const _0x4d2043 = window[_0x374cf7(0x4c3)]['Mh']['Oh']();
                                        _0x4d2043 && typeof _0x4d2043['_a'] !== 'undefined' && (this['Fh']['x'] = window[_0x374cf7(0x84b)]['ja'](this['Fh']['x'], _0x4d2043['_a'], _0x10b85a, window[_0x374cf7(0x805)][_0x374cf7(0x706)], 33.333));
                                    }
                                    return _0x122697;
                                }
                                ,
                                !window[_0x57d344(0x2c6)] && (window[_0x57d344(0x2c6)] = function(_0x171fb2, _0x4975bc) {
                                    var _0x4e2ae5 = _0x57d344;
                                    if (!document[_0x4e2ae5(0x657)](_0x4e2ae5(0x6ed))) {
                                        const _0x4981b6 = document['createElement'](_0x4e2ae5(0x677));
                                        _0x4981b6['id'] = 'headshot-message',
                                        _0x4981b6[_0x4e2ae5(0x811)]['position'] = 'fixed',
                                        _0x4981b6[_0x4e2ae5(0x811)][_0x4e2ae5(0x1e4)] = _0x4e2ae5(0x43a),
                                        _0x4981b6[_0x4e2ae5(0x811)]['left'] = _0x4e2ae5(0x5dd),
                                        _0x4981b6[_0x4e2ae5(0x811)][_0x4e2ae5(0x3b6)] = 'translate(-50%,\x20-50%)',
                                        _0x4981b6[_0x4e2ae5(0x811)][_0x4e2ae5(0x25f)] = _0x4975bc ? '#ff2222' : '#ffcc00',
                                        _0x4981b6[_0x4e2ae5(0x811)][_0x4e2ae5(0x329)] = _0x4e2ae5(0x386),
                                        _0x4981b6['style'][_0x4e2ae5(0x77e)] = _0x4e2ae5(0x60e),
                                        _0x4981b6['style'][_0x4e2ae5(0x6eb)] = _0x4e2ae5(0x471),
                                        _0x4981b6['style'][_0x4e2ae5(0x21f)] = '9999',
                                        _0x4981b6[_0x4e2ae5(0x811)][_0x4e2ae5(0x343)] = '0',
                                        _0x4981b6[_0x4e2ae5(0x811)][_0x4e2ae5(0x263)] = _0x4e2ae5(0x1f1),
                                        document['body']['appendChild'](_0x4981b6);
                                    }
                                    const _0x5b8e8c = _0x4975bc ? _0x389039[_0x4e2ae5(0x54f)] : _0x389039[_0x4e2ae5(0x37d)]
                                      , _0x5e059e = document[_0x4e2ae5(0x657)](_0x4e2ae5(0x6ed));
                                    let _0x18cc6b = ''
                                      , _0x21de84 = _0x4975bc ? _0x389039[_0x4e2ae5(0x7c1)] : _0x389039['showKillName']
                                      , _0x4a5ee4 = _0x4975bc ? _0x389039['headshotNamePos'] : _0x389039[_0x4e2ae5(0x56a)];
                                    _0x5b8e8c === _0x4e2ae5(0x3c7) ? _0x18cc6b = _0x4975bc ? _0x389039[_0x4e2ae5(0x575)] : _0x389039[_0x4e2ae5(0x782)] : _0x18cc6b = _0x4975bc ? _0x389039[_0x4e2ae5(0x529)] : _0x389039['killMsg'];
                                    _0x21de84 && _0x171fb2 && (_0x4a5ee4 === _0x4e2ae5(0x27e) ? _0x18cc6b = _0x171fb2 + '\x20' + _0x18cc6b : _0x18cc6b = _0x18cc6b + '\x20' + _0x171fb2);
                                    _0x5e059e[_0x4e2ae5(0x49c)] = _0x18cc6b,
                                    _0x5e059e['style'][_0x4e2ae5(0x25f)] = _0x4975bc ? _0x4e2ae5(0x870) : _0x4e2ae5(0x472),
                                    _0x5e059e[_0x4e2ae5(0x811)][_0x4e2ae5(0x343)] = '1';
                                    if (_0x4975bc && wftObjects['soundEnabled']) {
                                        const _0x59e33c = document[_0x4e2ae5(0x657)](_0x4e2ae5(0x644));
                                        _0x59e33c && (_0x59e33c[_0x4e2ae5(0x2e9)] = wftObjects[_0x4e2ae5(0x62a)] / 0x64,
                                        _0x59e33c['currentTime'] = 0x0,
                                        _0x59e33c[_0x4e2ae5(0x304)]());
                                    }
                                    setTimeout(function() {
                                        var _0x5dc97f = _0x4e2ae5;
                                        _0x5e059e[_0x5dc97f(0x811)][_0x5dc97f(0x343)] = '0';
                                    }, 0x7d0);
                                }
                                ),
                                console[_0x57d344(0x399)](_0x57d344(0x804));
                            }
                        }
                        , 0x3e8);
                    }
                    setTimeout(_0xa0f393, 0x3e8),
                    window[_0x298989(0x35d)] = function() {
                        var _0x6588f7 = _0x298989;
                        if (wftObjects[_0x6588f7(0x2f6)]) {
                            const _0x36fade = document[_0x6588f7(0x657)](_0x6588f7(0x644));
                            _0x36fade && (_0x36fade[_0x6588f7(0x2e9)] = wftObjects[_0x6588f7(0x62a)] / 0x64,
                            _0x36fade[_0x6588f7(0x6ac)] = 0x0,
                            _0x36fade['play']());
                        }
                    }
                    ,
                    $(_0x298989(0x516))[_0x298989(0x68c)](function() {
                        var _0x460dd5 = _0x298989;
                        localStorage[_0x460dd5(0x6db)]('custom_wear'),
                        localStorage[_0x460dd5(0x6db)](_0x460dd5(0x606)),
                        window['location'][_0x460dd5(0x2ad)]();
                    }),
                    $(_0x298989(0x5b4))[_0x298989(0x85b)](function(_0x70c186) {
                        var _0x37b1fa = _0x298989;
                        const _0x5b3d4b = _0x70c186['target'][_0x37b1fa(0x292)][0x0];
                        if (_0x5b3d4b) {
                            const _0x42e154 = new FileReader();
                            _0x42e154[_0x37b1fa(0x80a)] = function(_0x43fee0) {
                                var _0x4bd7ec = _0x37b1fa;
                                try {
                                    const _0x1ebd22 = _0x43fee0[_0x4bd7ec(0x428)]['result'];
                                    JSON[_0x4bd7ec(0x762)](_0x1ebd22),
                                    _0x1ebd22['indexOf'](_0x4bd7ec(0x3c5)) !== -0x1 ? localStorage['setItem'](_0x4bd7ec(0x70b), _0x1ebd22) : localStorage[_0x4bd7ec(0x39f)](_0x4bd7ec(0x606), _0x1ebd22),
                                    window['location']['reload']();
                                } catch (_0x1b56b4) {
                                    console['error'](_0x4bd7ec(0x33d), _0x1b56b4);
                                }
                            }
                            ,
                            _0x42e154[_0x37b1fa(0x7ff)](_0x5b3d4b);
                        }
                    });
                }
                window[_0x298989(0x527)] && setTimeout(function() {
                    var _0xb99409 = _0x298989;
                    window[_0xb99409(0x527)][_0xb99409(0x884)]();
                }, 0x1f4),
                setTimeout( () => {
                    var _0x196afa = _0x298989;
                    window['sectorSystem'] && typeof window[_0x196afa(0x70d)][_0x196afa(0x884)] === _0x196afa(0x3fb) && window[_0x196afa(0x70d)]['init']();
                }
                , 0x3e8),
                $('.sidebar-item[data-tab=\x27backgrounds\x27]')['on'](_0x298989(0x68c), function() {
                    var _0x21b0b2 = _0x298989;
                    window[_0x21b0b2(0x70d)] && typeof window[_0x21b0b2(0x70d)][_0x21b0b2(0x820)] === 'function' && setTimeout( () => window[_0x21b0b2(0x70d)][_0x21b0b2(0x820)](), 0x64);
                });
            });
        };
        Ysw = async function(_0x537178) {
            var _0x238a36 = _0x434858
              , _0x312f71 = await _0x537178;
            try {
                _0x389039['gg'] = [],
                _0x389039['sg'] = [];
                var _0x237306 = 0x0;
                if (_0x4d7543 && (_0x4d7543 = JSON[_0x238a36(0x762)](_0x4d7543))[_0x238a36(0x6c5)]) {
                    for (var _0x4e8d41 in _0x4d7543[_0x238a36(0x6c5)][_0x238a36(0x1d6)]) {
                        _0x4d7543[_0x238a36(0x6c5)]['textureDict'][_0x4e8d41]['file'][_0x238a36(0x4f5)](_0x238a36(0x7d5)) == -0x1 && (_0x4d7543[_0x238a36(0x6c5)][_0x238a36(0x1d6)][_0x4e8d41][_0x238a36(0x508)] = _0x238a36(0x7d5) + _0x4d7543[_0x238a36(0x6c5)][_0x238a36(0x1d6)][_0x4e8d41][_0x238a36(0x508)][_0x238a36(0x7cf)](_0x4d7543[_0x238a36(0x6c5)][_0x238a36(0x1d6)][_0x4e8d41][_0x238a36(0x508)][_0x238a36(0x2a1)] - _0x389039[_0x238a36(0x3ac)], _0x389039[_0x238a36(0x3ac)]) + _0x4d7543[_0x238a36(0x6c5)][_0x238a36(0x1d6)][_0x4e8d41][_0x238a36(0x508)][_0x238a36(0x7cf)](0x0, _0x4d7543[_0x238a36(0x6c5)][_0x238a36(0x1d6)][_0x4e8d41]['file'][_0x238a36(0x2a1)] - _0x389039[_0x238a36(0x3ac)])),
                        _0x312f71['textureDict'][_0x4e8d41] = _0x4d7543[_0x238a36(0x6c5)][_0x238a36(0x1d6)][_0x4e8d41];
                    }
                    ;for (let _0x3837cd in _0x4d7543[_0x238a36(0x6c5)][_0x238a36(0x78d)]) {
                        _0x312f71[_0x238a36(0x78d)][_0x3837cd] = _0x4d7543[_0x238a36(0x6c5)][_0x238a36(0x78d)][_0x3837cd],
                        _0x312f71[(_0x4e8d41 = _0x312f71['regionDict'][_0x3837cd])[_0x238a36(0x1b3)]][_0x4e8d41['id']] = _0x4e8d41['obj'],
                        _0x312f71[_0x4e8d41[_0x238a36(0x5cd)]][_0x238a36(0x23c)]([_0x4e8d41['id']]);
                    }
                }
                ;if (_0x214f6d) {
                    if ((_0x214f6d = JSON[_0x238a36(0x762)](_0x214f6d))[_0x238a36(0x6dc)]) {
                        var _0x135641 = 0x0
                          , _0x53c54a = ![]
                          , _0x39e47a = 0x0;
                        for (var _0x4a38f9 in _0x214f6d[_0x238a36(0x6dc)]['0']) {
                            for (var _0x42637e = _0x214f6d[_0x238a36(0x6dc)]['1'][_0x4a38f9][_0x238a36(0x609)]('|'), _0xdbb054 = 0x0; _0xdbb054 < _0x42637e[_0x238a36(0x2a1)]; _0xdbb054++) {
                                _0x312f71['textureDict']['t_wft_' + (_0x389039['g'] / 0x9 * 0x3e8 + _0x39e47a)] = {
                                    'custom': !![],
                                    'file': _0x238a36(0x7d5) + _0x42637e[_0xdbb054][_0x238a36(0x7cf)](_0x42637e[_0xdbb054][_0x238a36(0x2a1)] - _0x389039[_0x238a36(0x3ac)], _0x389039[_0x238a36(0x3ac)]) + _0x42637e[_0xdbb054][_0x238a36(0x7cf)](0x0, _0x42637e[_0xdbb054]['length'] - _0x389039['c_v'])
                                },
                                _0x39e47a++;
                            }
                            ;var _0x3ffd26 = _0x214f6d['csg']['2'][_0x4a38f9]
                              , _0x2195f6 = 0x0
                              , _0x3fcb03 = _0x238a36(0x26c)
                              , _0x4014d3 = _0x238a36(0x831)
                              , _0x5958a2 = 0x0;
                            for (var _0x4e8d41 in _0x3ffd26) {
                                _0x5958a2++;
                            }
                            ;for (var _0x4e8d41 in _0x3ffd26) {
                                if (_0x2195f6 == 0x0) {
                                    var _0x163137 = {
                                        'id': _0x389039['g'] * 0x64 + _0x135641,
                                        'base': [],
                                        'guest': ![],
                                        'g': ![],
                                        'price': 0x0,
                                        'priceBefore': 0x0,
                                        'nonbuyable': ![],
                                        'prime': _0x238a36(0x405),
                                        'glow': _0x3ffd26[_0x4e8d41]
                                    };
                                    for (var _0xdbb054 = 0x0; _0xdbb054 < _0x3ffd26[_0x4e8d41][_0x238a36(0x2a1)]; _0xdbb054++) {
                                        _0x163137[_0x238a36(0x84f)][_0x238a36(0x23c)](_0x238a36(0x74c) + (_0x389039['g'] / 0x9 * 0x3e8 + _0x237306) + '_' + (_0x3ffd26[_0x4e8d41][_0x238a36(0x2a1)] - _0xdbb054));
                                    }
                                    ;_0x312f71[_0x238a36(0x652)][_0x238a36(0x23c)](_0x163137);
                                    var _0x1c54a7 = _0x389039['sg'][_0x238a36(0x32c)](_0x163137['id']);
                                    _0x1c54a7 == -0x1 && (_0x389039['sg'][_0x238a36(0x23c)](_0x163137['id']),
                                    _0x389039['gg']['push']({
                                        's': _0x389039['g'] / 0x9 * 0x3e8 + _0x237306,
                                        'e': _0x389039['g'] / 0x9 * 0x3e8 + _0x237306 + _0x5958a2 - 0x1,
                                        't': parseInt(_0x214f6d['csg']['0'][_0x4a38f9][_0x238a36(0x7cf)](0x0, 0x1)) * 0x64,
                                        'r': _0x214f6d[_0x238a36(0x6dc)]['0'][_0x4a38f9][_0x238a36(0x7cf)](0x1, 0x1) == '1'
                                    }));
                                    if (_0x53c54a)
                                        for (var _0x23ad68 in _0x312f71[_0x238a36(0x349)]) {
                                            _0x312f71[_0x238a36(0x349)][_0x23ad68]['id'] == _0x4014d3 && _0x312f71[_0x238a36(0x349)][_0x23ad68][_0x238a36(0x1b3)][_0x238a36(0x23c)](_0x163137['id']);
                                        }
                                    else
                                        _0x312f71[_0x238a36(0x349)]['push']({
                                            'isCustom': !![],
                                            'id': _0x4014d3,
                                            'img': _0x3fcb03,
                                            'name': {
                                                'de': _0x4014d3,
                                                'en': _0x4014d3,
                                                'es': _0x4014d3,
                                                'fr': _0x4014d3,
                                                'uk': _0x4014d3
                                            },
                                            'list': [_0x163137['id']]
                                        }),
                                        _0x53c54a = !![];
                                    ;_0x135641++;
                                }
                                ;var _0x163137 = {
                                    'id': _0x389039['g'] / 0x9 * 0x3e8 + _0x237306,
                                    'base': [],
                                    'guest': ![],
                                    'g': !![],
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': ![],
                                    'prime': _0x238a36(0x405),
                                    'glow': _0x3ffd26[_0x4e8d41]
                                };
                                for (var _0xdbb054 = 0x0; _0xdbb054 < _0x3ffd26[_0x4e8d41][_0x238a36(0x2a1)]; _0xdbb054++) {
                                    _0x163137[_0x238a36(0x84f)][_0x238a36(0x23c)](_0x238a36(0x74c) + _0x163137['id'] + '_' + (_0x3ffd26[_0x4e8d41]['length'] - _0xdbb054)),
                                    _0x312f71['regionDict'][_0x238a36(0x74c) + _0x163137['id'] + '_' + (_0xdbb054 + 0x1)] = {
                                        'texture': 't_wft_' + _0x163137['id'],
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0xdbb054 || 0x0) * 0x63,
                                        'y': 0x0
                                    };
                                }
                                ;_0x312f71[_0x238a36(0x652)][_0x238a36(0x23c)](_0x163137),
                                _0x2195f6++,
                                _0x237306++;
                            }
                        }
                    } else {
                        var _0x14c253 = []
                          , _0x3fcb03 = _0x238a36(0x3e0);
                        for (let _0x1c3b32 in _0x214f6d) {
                            if (_0x1c3b32 != 'img') {
                                _0x214f6d[_0x1c3b32][_0x238a36(0x1d6)][_0x1c3b32][_0x238a36(0x508)][_0x238a36(0x4f5)](_0x238a36(0x7d5)) == -0x1 && (_0x214f6d[_0x1c3b32][_0x238a36(0x1d6)][_0x1c3b32][_0x238a36(0x508)] = _0x238a36(0x7d5) + _0x214f6d[_0x1c3b32][_0x238a36(0x1d6)][_0x1c3b32][_0x238a36(0x508)][_0x238a36(0x7cf)](_0x214f6d[_0x1c3b32][_0x238a36(0x1d6)][_0x1c3b32][_0x238a36(0x508)][_0x238a36(0x2a1)] - _0x389039[_0x238a36(0x3ac)], _0x389039[_0x238a36(0x3ac)]) + _0x214f6d[_0x1c3b32][_0x238a36(0x1d6)][_0x1c3b32][_0x238a36(0x508)][_0x238a36(0x7cf)](0x0, _0x214f6d[_0x1c3b32][_0x238a36(0x1d6)][_0x1c3b32][_0x238a36(0x508)]['length'] - _0x389039[_0x238a36(0x3ac)]));
                                _0x312f71[_0x238a36(0x1d6)][_0x1c3b32] = _0x214f6d[_0x1c3b32]['textureDict'][_0x1c3b32];
                                for (let _0x28e401 in _0x214f6d[_0x1c3b32]['regionDict']) {
                                    _0x312f71[_0x238a36(0x78d)][_0x28e401] = _0x214f6d[_0x1c3b32][_0x238a36(0x78d)][_0x28e401];
                                }
                                ;_0x312f71[_0x238a36(0x652)][_0x238a36(0x23c)](_0x214f6d[_0x1c3b32]['skin']),
                                _0x14c253[_0x238a36(0x23c)](_0x214f6d[_0x1c3b32]['skin']['id']);
                            } else
                                _0x214f6d[_0x1c3b32] != _0x238a36(0x6bc) && (_0x3fcb03 = _0x214f6d[_0x1c3b32]);
                        }
                        ;_0x312f71[_0x238a36(0x349)]['push']({
                            'isCustom': !![],
                            'id': 'customer',
                            'img': _0x3fcb03,
                            'name': {
                                'de': 'Customer',
                                'en': _0x238a36(0x37e),
                                'es': _0x238a36(0x37e),
                                'fr': _0x238a36(0x37e),
                                'uk': _0x238a36(0x37e)
                            },
                            'list': _0x14c253
                        });
                    }
                }
                ;if (Array['isArray'](_0x389039['dg']) && _0x389039['dg'][_0x238a36(0x2a1)] > 0x0)
                    for (var _0x4e8d41 in _0x389039['dg']) {
                        var _0x12dcb6 = _0x389039['dg'][_0x4e8d41]['split']('|')
                          , _0x50e9fb = {
                            'g': _0x12dcb6['0']
                        };
                        await fetch(_0x238a36(0x74b), {
                            'headers': {
                                'Content-Type': _0x238a36(0x6ef)
                            },
                            'method': _0x238a36(0x380),
                            'body': JSON[_0x238a36(0x880)](_0x50e9fb)
                        })[_0x238a36(0x864)](async function(_0x22f41e) {
                            var _0x1b02b8 = _0x238a36;
                            _0x22f41e = await _0x22f41e[_0x1b02b8(0x7b9)](),
                            _0x312f71['textureDict'][_0x1b02b8(0x2b6) + _0x12dcb6['0'] + _0x1b02b8(0x7f5)] = {
                                'custom': !![],
                                'relativePath': _0x22f41e['csg']['1']['0']
                            };
                            var _0x1f23e0 = _0x22f41e[_0x1b02b8(0x6dc)]['2']['0']
                              , _0x27d089 = 0x0;
                            for (var _0x2eda24 in _0x1f23e0) {
                                _0x27d089++;
                            }
                            ;_0x389039['sg'][_0x1b02b8(0x23c)](parseInt(_0x12dcb6['1'])),
                            _0x389039['gg']['push']({
                                's': _0x389039['g'] / 0x9 * 0x3e8 + _0x237306,
                                'e': _0x389039['g'] / 0x9 * 0x3e8 + _0x237306 + _0x27d089 - 0x1,
                                't': parseInt(_0x22f41e[_0x1b02b8(0x6dc)]['0']['0'][_0x1b02b8(0x7cf)](0x0, 0x1)) * 0x64,
                                'r': _0x22f41e[_0x1b02b8(0x6dc)]['0']['0'][_0x1b02b8(0x7cf)](0x1, 0x1) == '1'
                            });
                            var _0x476f69 = 0x0;
                            for (var _0x2eda24 in _0x1f23e0) {
                                var _0x49d224 = {
                                    'id': _0x389039['g'] / 0x9 * 0x3e8 + _0x237306,
                                    'base': [],
                                    'guest': ![],
                                    'g': !![],
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': ![],
                                    'prime': _0x1b02b8(0x405),
                                    'glow': _0x1f23e0[_0x2eda24]
                                };
                                for (var _0x39da65 = 0x0; _0x39da65 < _0x1f23e0[_0x2eda24][_0x1b02b8(0x2a1)]; _0x39da65++) {
                                    _0x49d224[_0x1b02b8(0x84f)][_0x1b02b8(0x23c)](_0x1b02b8(0x74c) + _0x49d224['id'] + '_' + (_0x1f23e0[_0x2eda24][_0x1b02b8(0x2a1)] - _0x39da65)),
                                    _0x312f71[_0x1b02b8(0x78d)][_0x1b02b8(0x74c) + _0x49d224['id'] + '_' + (_0x39da65 + 0x1)] = {
                                        'texture': _0x1b02b8(0x2b6) + _0x12dcb6['0'] + _0x1b02b8(0x7f5),
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0x39da65 || 0x0) * 0x63,
                                        'y': (_0x476f69 || 0x0) * 0x63
                                    };
                                }
                                ;_0x312f71[_0x1b02b8(0x652)][_0x1b02b8(0x23c)](_0x49d224),
                                _0x237306++,
                                _0x476f69++;
                            }
                        })['catch'](function(_0x1d8900) {});
                    }
            } catch (_0x2757ca) {
                localStorage[_0x238a36(0x6db)](_0x238a36(0x70b)),
                localStorage['removeItem'](_0x238a36(0x606)),
                window[_0x238a36(0x373)][_0x238a36(0x2ad)]();
            }
            ;return _0x312f71;
        }
        ;
        var _0xfe95ba = ![];
        _0xfe95ba && (_0xfe95ba = ![],
        s_h[_0x434858(0x6c1)]()),
        function(_0x2d90ef) {
            var _0x3e9999 = _0x434858;
            _0x2d90ef['fn'][_0x3e9999(0x427)] = function(_0x4fff4a) {
                var _0x3c8dcf = _0x3e9999;
                if (_0x48f652[_0x4fff4a])
                    return _0x48f652[_0x4fff4a][_0x3c8dcf(0x5e8)](this, Array[_0x3c8dcf(0x2a8)][_0x3c8dcf(0x7b7)]['call'](arguments, 0x1));
                else {
                    if (typeof _0x4fff4a != _0x3c8dcf(0x216) && _0x4fff4a) {
                        _0x2d90ef[_0x3c8dcf(0x5ad)]('Method\x20' + _0x4fff4a + '\x20does\x20not\x20exists.');
                        return;
                    } else
                        return _0x48f652[_0x3c8dcf(0x884)][_0x3c8dcf(0x5e8)](this, arguments);
                }
            }
            ;
            var _0x48f652 = {}
              , _0x251347 = {
                'data': [],
                'keepJSONItemsOnTop': ![],
                'width': 0x64,
                'height': null,
                'background': '#eee',
                'selectText': '',
                'defaultSelectedIndex': null,
                'truncateDescription': !![],
                'imagePosition': _0x3e9999(0x394),
                'showSelectedHTML': !![],
                'clickOffToClose': !![],
                'embedCSS': !![],
                'onSelected': function() {}
            };
            function _0x453f80(_0x546296, _0x13321c) {
                var _0x315324 = _0x3e9999, _0x3659bb, _0x1b8e9f, _0x45457e, _0x2233c1, _0x1ff95a = _0x546296[_0x315324(0x250)](_0x315324(0x1ca)), _0xfa402b = _0x546296[_0x315324(0x76b)](_0x315324(0x5a7)), _0x3bf257 = _0xfa402b[_0x315324(0x798)](_0x315324(0x51e));
                _0x546296[_0x315324(0x76b)](_0x315324(0x361)),
                _0xfa402b[_0x315324(0x798)]('.dd-pointer');
                var _0x5c2cd2 = _0x546296[_0x315324(0x76b)](_0x315324(0x2d9))['eq'](_0x13321c)
                  , _0xc52e4d = _0x5c2cd2[_0x315324(0x26e)]('li')
                  , _0x5d4d78 = _0x1ff95a[_0x315324(0x85f)]
                  , _0x5b27b9 = _0x1ff95a[_0x315324(0x85f)][_0x315324(0x250)][_0x13321c];
                _0x546296[_0x315324(0x76b)](_0x315324(0x2d9))[_0x315324(0x617)](_0x315324(0x5a0)),
                _0x5c2cd2['addClass'](_0x315324(0x5a0)),
                _0x1ff95a[_0x315324(0x2a9)] = _0x13321c,
                _0x1ff95a[_0x315324(0x1f9)] = _0xc52e4d,
                _0x1ff95a[_0x315324(0x763)] = _0x5b27b9,
                _0x5d4d78[_0x315324(0x73e)] ? _0xfa402b[_0x315324(0x584)]((_0x5b27b9['imageSrc'] ? '<img\x20class=\x22dd-selected-image' + (_0x5d4d78[_0x315324(0x895)] == 'right' ? _0x315324(0x2d5) : '') + _0x315324(0x7ab) + _0x5b27b9['imageSrc'] + _0x315324(0x4af) : '') + (_0x5b27b9['description'] ? '<small\x20class=\x22dd-selected-description\x20dd-desc' + (_0x5d4d78['truncateDescription'] ? _0x315324(0x268) : '') + '\x22\x20>' + _0x5b27b9[_0x315324(0x220)] + _0x315324(0x1bd) : '')) : _0xfa402b['html'](_0x5b27b9[_0x315324(0x440)]),
                _0x3bf257['val'](_0x5b27b9[_0x315324(0x4a0)]),
                _0x1ff95a[_0x315324(0x595)][_0x315324(0x467)](_0x5b27b9[_0x315324(0x4a0)]),
                _0x546296['data'](_0x315324(0x1ca), _0x1ff95a),
                _0x1e3a42(_0x546296),
                _0x1b8e9f = (_0x3659bb = _0x546296)['find']('.dd-select')[_0x315324(0x6ee)](_0x315324(0x6f1)),
                _0x45457e = _0x3659bb[_0x315324(0x76b)](_0x315324(0x262)),
                _0x2233c1 = _0x3659bb[_0x315324(0x76b)]('.dd-selected-image'),
                _0x45457e[_0x315324(0x2a1)] <= 0x0 && _0x2233c1[_0x315324(0x2a1)] > 0x0 && _0x3659bb[_0x315324(0x76b)](_0x315324(0x80e))[_0x315324(0x6ee)](_0x315324(0x1ed), _0x1b8e9f),
                typeof _0x5d4d78[_0x315324(0x714)] == _0x315324(0x3fb) && _0x5d4d78[_0x315324(0x714)]['call'](this, _0x1ff95a);
            }
            function _0x4d0ede(_0x6249e4) {
                var _0x139694 = _0x3e9999
                  , _0xb99133 = _0x6249e4[_0x139694(0x76b)](_0x139694(0x5ea))
                  , _0x59f542 = _0xb99133['siblings']('.dd-options')
                  , _0x9fcd84 = _0xb99133[_0x139694(0x76b)](_0x139694(0x81e))
                  , _0xe4b9bd = _0x59f542['is'](':visible');
                _0x2d90ef(_0x139694(0x837))[_0x139694(0x496)](_0x59f542)[_0x139694(0x70c)](0x32),
                _0x2d90ef('.dd-pointer')[_0x139694(0x617)](_0x139694(0x76e)),
                _0xe4b9bd ? (_0x59f542[_0x139694(0x70c)](_0x139694(0x878)),
                _0x9fcd84['removeClass'](_0x139694(0x76e))) : (_0x59f542[_0x139694(0x303)](_0x139694(0x878)),
                _0x9fcd84[_0x139694(0x346)]('dd-pointer-up')),
                function _0x4e9889(_0x30ad9b) {
                    var _0x16ed93 = _0x139694;
                    _0x30ad9b[_0x16ed93(0x76b)](_0x16ed93(0x2d9))[_0x16ed93(0x888)](function() {
                        var _0x2a2d71 = _0x16ed93
                          , _0x4a2d28 = _0x2d90ef(this)
                          , _0x554e88 = _0x4a2d28[_0x2a2d71(0x6ee)](_0x2a2d71(0x6f1))
                          , _0x150d7a = _0x4a2d28[_0x2a2d71(0x76b)](_0x2a2d71(0x431))
                          , _0x2855fb = _0x30ad9b[_0x2a2d71(0x76b)]('.dd-option-image');
                        _0x150d7a['length'] <= 0x0 && _0x2855fb[_0x2a2d71(0x2a1)] > 0x0 && _0x4a2d28[_0x2a2d71(0x76b)]('.dd-option-text')['css'](_0x2a2d71(0x1ed), _0x554e88);
                    });
                }(_0x6249e4);
            }
            function _0x1e3a42(_0x206422) {
                var _0x44438b = _0x3e9999;
                _0x206422[_0x44438b(0x76b)](_0x44438b(0x361))[_0x44438b(0x70c)](0x32),
                _0x206422[_0x44438b(0x76b)](_0x44438b(0x81e))[_0x44438b(0x617)](_0x44438b(0x76e))[_0x44438b(0x617)]('dd-pointer-up');
            }
            _0x48f652[_0x3e9999(0x884)] = function(_0x4421e3) {
                var _0x2ab10a = _0x3e9999
                  , _0x4421e3 = _0x2d90ef[_0x2ab10a(0x75a)]({}, _0x251347, _0x4421e3);
                return _0x2d90ef(_0x2ab10a(0x5bd))[_0x2ab10a(0x2a1)] <= 0x0 && _0x4421e3[_0x2ab10a(0x31b)] && _0x2d90ef(_0x2ab10a(0x425))[_0x2ab10a(0x75f)](_0x2ab10a(0x2ff)),
                this[_0x2ab10a(0x888)](function() {
                    var _0x14451f = _0x2ab10a
                      , _0x520611 = _0x2d90ef(this);
                    if (!_0x520611[_0x14451f(0x250)](_0x14451f(0x1ca))) {
                        var _0x3cf5d6 = [];
                        _0x4421e3['data'],
                        _0x520611[_0x14451f(0x76b)]('option')[_0x14451f(0x888)](function() {
                            var _0x2ca3cf = _0x14451f
                              , _0x383f83 = _0x2d90ef(this)
                              , _0x379bc9 = _0x383f83[_0x2ca3cf(0x250)]();
                            _0x3cf5d6[_0x2ca3cf(0x23c)]({
                                'text': _0x2d90ef[_0x2ca3cf(0x681)](_0x383f83[_0x2ca3cf(0x440)]()),
                                'value': _0x383f83['val'](),
                                'selected': _0x383f83['is'](_0x2ca3cf(0x4ea)),
                                'description': _0x379bc9[_0x2ca3cf(0x220)],
                                'imageSrc': _0x379bc9[_0x2ca3cf(0x4e8)]
                            });
                        });
                        _0x4421e3['keepJSONItemsOnTop'] ? _0x2d90ef['merge'](_0x4421e3[_0x14451f(0x250)], _0x3cf5d6) : _0x4421e3[_0x14451f(0x250)] = _0x2d90ef[_0x14451f(0x2bd)](_0x3cf5d6, _0x4421e3[_0x14451f(0x250)]);
                        var _0x8fb215 = _0x520611
                          , _0x3f6085 = _0x2d90ef(_0x14451f(0x2da) + _0x520611['attr']('id') + _0x14451f(0x49b));
                        _0x520611['replaceWith'](_0x3f6085),
                        (_0x520611 = _0x3f6085)[_0x14451f(0x346)]('dd-container')[_0x14451f(0x294)](_0x14451f(0x4bd))[_0x14451f(0x294)](_0x14451f(0x64c));
                        var _0x3cf5d6 = _0x520611[_0x14451f(0x76b)](_0x14451f(0x5ea))
                          , _0x15ef83 = _0x520611[_0x14451f(0x76b)](_0x14451f(0x361));
                        _0x15ef83['css']({
                            'width': _0x4421e3[_0x14451f(0x40e)]
                        }),
                        _0x3cf5d6[_0x14451f(0x6ee)]({
                            'width': _0x4421e3['width'],
                            'background': _0x4421e3[_0x14451f(0x4b9)]
                        }),
                        _0x520611[_0x14451f(0x6ee)]({
                            'width': _0x4421e3[_0x14451f(0x40e)]
                        });
                        _0x4421e3[_0x14451f(0x6f1)] != null && _0x15ef83[_0x14451f(0x6ee)]({
                            'height': _0x4421e3[_0x14451f(0x6f1)],
                            'overflow': 'auto'
                        });
                        _0x2d90ef[_0x14451f(0x888)](_0x4421e3[_0x14451f(0x250)], function(_0x2f7052, _0x3279a0) {
                            var _0x303066 = _0x14451f;
                            _0x3279a0[_0x303066(0x696)] && (_0x4421e3[_0x303066(0x784)] = _0x2f7052),
                            _0x15ef83['append'](_0x303066(0x356) + (_0x3279a0[_0x303066(0x4a0)] ? _0x303066(0x7ce) + _0x3279a0[_0x303066(0x4a0)] + _0x303066(0x4af) : '') + (_0x3279a0[_0x303066(0x6a0)] ? '\x20<img\x20class=\x22dd-option-image' + (_0x4421e3[_0x303066(0x895)] == _0x303066(0x6b2) ? '\x20dd-image-right' : '') + _0x303066(0x7ab) + _0x3279a0[_0x303066(0x6a0)] + _0x303066(0x4af) : '') + _0x303066(0x72e));
                        });
                        var _0x2f6fcc = {
                            'settings': _0x4421e3,
                            'original': _0x8fb215,
                            'selectedIndex': -0x1,
                            'selectedItem': null,
                            'selectedData': null
                        };
                        _0x520611[_0x14451f(0x250)](_0x14451f(0x1ca), _0x2f6fcc),
                        _0x4421e3[_0x14451f(0x1b2)][_0x14451f(0x2a1)] > 0x0 && _0x4421e3[_0x14451f(0x784)] == null ? _0x520611[_0x14451f(0x76b)](_0x14451f(0x5a7))[_0x14451f(0x584)](_0x4421e3[_0x14451f(0x1b2)]) : _0x453f80(_0x520611, _0x4421e3['defaultSelectedIndex'] != null && _0x4421e3['defaultSelectedIndex'] >= 0x0 && _0x4421e3[_0x14451f(0x784)] < _0x4421e3[_0x14451f(0x250)][_0x14451f(0x2a1)] ? _0x4421e3['defaultSelectedIndex'] : 0x0),
                        _0x520611['find'](_0x14451f(0x5ea))['on']('click.ddslick', function() {
                            _0x4d0ede(_0x520611);
                        }),
                        _0x520611[_0x14451f(0x76b)](_0x14451f(0x2d9))['on'](_0x14451f(0x7ad), function() {
                            var _0x3550da = _0x14451f;
                            _0x453f80(_0x520611, _0x2d90ef(this)[_0x3550da(0x26e)]('li')[_0x3550da(0x86b)]());
                        }),
                        _0x4421e3[_0x14451f(0x5f1)] && (_0x15ef83[_0x14451f(0x346)]('dd-click-off-close'),
                        _0x520611['on'](_0x14451f(0x7ad), function(_0x1eab64) {
                            var _0x52e8b2 = _0x14451f;
                            _0x1eab64[_0x52e8b2(0x62b)]();
                        }),
                        _0x2d90ef(_0x14451f(0x247))['on']('click', function() {
                            var _0x40cfe7 = _0x14451f;
                            _0x2d90ef('.dd-click-off-close')['slideUp'](0x32)[_0x40cfe7(0x798)](_0x40cfe7(0x5ea))[_0x40cfe7(0x76b)](_0x40cfe7(0x81e))[_0x40cfe7(0x617)]('dd-pointer-up');
                        }));
                    }
                });
            }
            ,
            _0x48f652[_0x3e9999(0x4d4)] = function(_0x18d39e) {
                var _0x58b0d7 = _0x3e9999;
                return this[_0x58b0d7(0x888)](function() {
                    var _0x37d907 = _0x58b0d7;
                    _0x18d39e[_0x37d907(0x86b)] !== undefined && _0x453f80(_0x2d90ef(this), _0x18d39e['index']);
                });
            }
            ,
            _0x48f652[_0x3e9999(0x6d0)] = function() {
                var _0x47463a = _0x3e9999;
                return this[_0x47463a(0x888)](function() {
                    var _0x424fca = _0x47463a
                      , _0x40d508 = _0x2d90ef(this);
                    _0x40d508[_0x424fca(0x250)](_0x424fca(0x1ca)) && _0x4d0ede(_0x40d508);
                });
            }
            ,
            _0x48f652['close'] = function() {
                var _0x1b965b = _0x3e9999;
                return this[_0x1b965b(0x888)](function() {
                    var _0x5cbe85 = _0x1b965b
                      , _0x4023a5 = _0x2d90ef(this);
                    _0x4023a5[_0x5cbe85(0x250)](_0x5cbe85(0x1ca)) && _0x1e3a42(_0x4023a5);
                });
            }
            ,
            _0x48f652[_0x3e9999(0x755)] = function() {
                var _0x53ed3f = _0x3e9999;
                return this[_0x53ed3f(0x888)](function() {
                    var _0x485276 = _0x53ed3f
                      , _0x2dcc4a = _0x2d90ef(this)
                      , _0x42b315 = _0x2dcc4a[_0x485276(0x250)](_0x485276(0x1ca));
                    if (_0x42b315) {
                        var _0x34b164 = _0x42b315[_0x485276(0x595)];
                        _0x2dcc4a[_0x485276(0x85e)]('ddslick')[_0x485276(0x832)](_0x485276(0x26f))[_0x485276(0x355)](_0x34b164);
                    }
                });
            }
            ;
        }(jQuery),
        _0x41e416() && _0xbc3655['ba'](_0x389039[_0x434858(0x510)] + _0x434858(0x640), 'mobileconfig', function() {}),
        ooo[_0x434858(0x1e0)] = function() {
            var _0xcdaf42 = _0x434858
              , _0x1377d7 = {}
              , _0x1baf96 = {
                'country': 'iq'
            };
            _0x50f988 && _0x50f988 != 'iq' && (_0x1baf96['country'] = _0x50f988),
            $[_0xcdaf42(0x4bb)](_0x389039[_0xcdaf42(0x510)] + _0xcdaf42(0x275), function(_0x552c88) {
                var _0x64ad21 = _0xcdaf42;
                _0x1377d7 = _0x552c88,
                fetch(_0x64ad21(0x80f), {
                    'headers': {
                        'Content-Type': 'application/json'
                    },
                    'method': _0x64ad21(0x380),
                    'body': JSON[_0x64ad21(0x880)](_0x1baf96)
                })[_0x64ad21(0x864)](async function(_0xf40bfa) {
                    var _0x418e3f = _0x64ad21;
                    for (let _0x6729f5 in (_0xf40bfa = await _0xf40bfa[_0x418e3f(0x7b9)]())[_0x418e3f(0x1d6)]) {
                        for (let _0x1a01f7 in _0xf40bfa[_0x418e3f(0x1d6)][_0x6729f5]) {
                            _0x1a01f7 === _0x418e3f(0x508) && (_0xf40bfa[_0x418e3f(0x1d6)][_0x6729f5][_0x1a01f7] = _0x418e3f(0x7d5) + _0xf40bfa[_0x418e3f(0x1d6)][_0x6729f5][_0x1a01f7][_0x418e3f(0x7cf)](_0xf40bfa[_0x418e3f(0x1d6)][_0x6729f5][_0x1a01f7][_0x418e3f(0x2a1)] - _0x389039['c_v'], _0x389039['c_v']) + _0xf40bfa[_0x418e3f(0x1d6)][_0x6729f5][_0x1a01f7][_0x418e3f(0x7cf)](0x0, _0xf40bfa[_0x418e3f(0x1d6)][_0x6729f5][_0x1a01f7][_0x418e3f(0x2a1)] - _0x389039[_0x418e3f(0x3ac)]));
                        }
                    }
                    ;for (let _0x46fb5c in _0xf40bfa) {
                        _0x46fb5c !== _0x418e3f(0x3f8) && (Array[_0x418e3f(0x750)](_0xf40bfa[_0x46fb5c]) ? _0x552c88[_0x46fb5c] = _0x552c88[_0x46fb5c][_0x418e3f(0x7f0)](_0xf40bfa[_0x46fb5c]) : _0x552c88[_0x46fb5c] = {
                            ..._0x552c88[_0x46fb5c],
                            ..._0xf40bfa[_0x46fb5c]
                        });
                    }
                })[_0x64ad21(0x553)](function(_0x50e9ab) {});
            });
        }
        ,
        ooo[_0x434858(0x449)] = function(_0x2bee92) {
            var _0x19b452 = _0x434858
              , _0x89868a = {};
            (function(_0x1ac442, _0x456756) {
                for (var _0x4535b7 in _0x1ac442) {
                    _0x1ac442['hasOwnProperty'](_0x4535b7) && _0x456756(_0x4535b7, _0x1ac442[_0x4535b7]);
                }
            }(_0x2bee92[_0x19b452(0x1d6)], function(_0x5a1eba, _0x4a8746) {
                var _0x20d89d = _0x19b452;
                let _0x3924c1 = _0x389039['s_l'] + _0x4a8746[_0x20d89d(0x5ab)];
                !_0x4a8746[_0x20d89d(0x3c7)] && (_0x3924c1 = _0x389039[_0x20d89d(0x510)] + _0x4a8746[_0x20d89d(0x5ab)]);
                try {
                    _0x89868a[_0x5a1eba] = new PIXI[(_0x20d89d(0x538))](_0x3924c1);
                } catch (_0x2ff814) {}
            }));
        }
        ;
    });
}()),
(function() {
    var _0x2a0094 = _0x4920b6;
    let _0x48c205 = ![]
      , _0x40e3bf = ![]
      , _0x29b0a1 = 0x0;
    function _0x3c5bf2() {
        var _0xd5535b = _0x31dd;
        if (window[_0xd5535b(0x4c3)] && window[_0xd5535b(0x4c3)]['Mh'] && typeof window[_0xd5535b(0x4c3)]['Mh']['Dq'] === _0xd5535b(0x3fb))
            return !![];
        return ![];
    }
    function _0xbc7c77() {
        var _0x545a1f = _0x31dd;
        const _0x4a4d62 = Date[_0x545a1f(0x2ef)]();
        if (_0x40e3bf || _0x4a4d62 - _0x29b0a1 < 0x3e8)
            return;
        _0x40e3bf = !![],
        _0x29b0a1 = _0x4a4d62;
        try {
            typeof window[_0x545a1f(0x507)] !== _0x545a1f(0x799) && (window[_0x545a1f(0x507)][_0x545a1f(0x33a)] = !![]),
            typeof window['ooo']['Mh']['gr'] === _0x545a1f(0x3fb) && window[_0x545a1f(0x4c3)]['Mh']['gr'](),
            setTimeout(function() {
                var _0x30863a = _0x545a1f;
                try {
                    const _0xbf1091 = document[_0x30863a(0x657)](_0x30863a(0x1ac)) ? document['getElementById'](_0x30863a(0x1ac))[_0x30863a(0x4a0)] || '' : ''
                      , _0x4206d5 = document[_0x30863a(0x657)]('port_name_s') ? document[_0x30863a(0x657)](_0x30863a(0x328))['value'] || _0x30863a(0x2cb) : 'Player';
                    window[_0x30863a(0x4c3)]['Mh']['Dq'](_0xbf1091, _0x4206d5),
                    setTimeout(function() {
                        _0x40e3bf = ![];
                    }, 0x3e8);
                } catch (_0xed94cd) {
                    _0x40e3bf = ![];
                }
            }, 0x12c);
        } catch (_0x493963) {
            _0x40e3bf = ![];
        }
    }
    function _0xf0c84c() {
        var _0xe752b8 = _0x31dd;
        _0x48c205 = !_0x48c205,
        typeof window[_0xe752b8(0x507)] !== 'undefined' && (window[_0xe752b8(0x507)][_0xe752b8(0x33a)] = _0x48c205);
    }
    document[_0x2a0094(0x81b)](_0x2a0094(0x836), function(_0x3c7674) {
        var _0x53c44c = _0x2a0094;
        (_0x3c7674['key'] === 'F8' || _0x3c7674['keyCode'] === 0x77) && _0xf0c84c();
        if (_0x48c205 && (_0x3c7674['key'][_0x53c44c(0x357)]() === 'r' || _0x3c7674[_0x53c44c(0x4ec)] === 0x52)) {
            if (_0x3c5bf2())
                _0x3c7674['preventDefault'](),
                _0x3c7674[_0x53c44c(0x62b)](),
                _0xbc7c77();
            else {}
        }
    }, !![]);
    if (!_0x3c5bf2()) {
        const _0x3096db = setInterval(function() {
            _0x3c5bf2() && clearInterval(_0x3096db);
        }, 0x3e8);
    } else {}
}());
