function _0x30cf() {
    const _0x516d0a = ['execCommand', 'description', '17772btJweS', 'copy', 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', '92pgIwLj', '125635EdIUEE', 'scrollHeight', '3277329TKeSYm', 'getElementById', '10372536PRRjTA', '18vvLaKa', '455ACEHYI', 'select', 'type', 'toString', 'value', 'ManifestFile', '41770wQmJPt', '10ebGPEk', 'style', '5489AytjHP', '53772qNXdcq', '7672257wdqXVq', 'height', 'focus', '5px', 'stringify', 'innerHTML'];
    _0x30cf = function() {
        return _0x516d0a;
    };
    return _0x30cf();
}

function _0x8176(_0x39f703, _0x15eec3) {
    const _0x30cfaa = _0x30cf();
    return _0x8176 = function(_0x817642, _0x518539) {
        _0x817642 = _0x817642 - 0x1b0;
        let _0x59d4c4 = _0x30cfaa[_0x817642];
        return _0x59d4c4;
    }, _0x8176(_0x39f703, _0x15eec3);
}(function(_0x4948cc, _0x59c432) {
    const _0x526053 = _0x8176,
        _0x592446 = _0x4948cc();
    while (!![]) {
        try {
            const _0x1cfd35 = -parseInt(_0x526053(0x1c4)) / 0x1 * (-parseInt(_0x526053(0x1cb)) / 0x2) + parseInt(_0x526053(0x1c1)) / 0x3 + -parseInt(_0x526053(0x1be)) / 0x4 * (parseInt(_0x526053(0x1bf)) / 0x5) + -parseInt(_0x526053(0x1bb)) / 0x6 * (parseInt(_0x526053(0x1c5)) / 0x7) + -parseInt(_0x526053(0x1c3)) / 0x8 + parseInt(_0x526053(0x1b3)) / 0x9 * (-parseInt(_0x526053(0x1cc)) / 0xa) + parseInt(_0x526053(0x1b1)) / 0xb * (parseInt(_0x526053(0x1b2)) / 0xc);
            if (_0x1cfd35 === _0x59c432) break;
            else _0x592446['push'](_0x592446['shift']());
        } catch (_0x1b3999) {
            _0x592446['push'](_0x592446['shift']());
        }
    }
}(_0x30cf, 0xbfa05));

function generateManifest() {
    const _0xb907d0 = _0x8176,
        _0x4c4547 = {
            'format_version': 0x2,
            'header': {
                'name': document[_0xb907d0(0x1c2)]('name')[_0xb907d0(0x1c9)],
                'description': document[_0xb907d0(0x1c2)](_0xb907d0(0x1ba))[_0xb907d0(0x1c9)],
                'uuid': uuidv4(),
                'version': [0x1, 0x0, 0x0],
                'min_engine_version': [0x1, 0x10, 0x64]
            },
            'modules': [{
                'type': document[_0xb907d0(0x1c2)](_0xb907d0(0x1c7))['value'],
                'uuid': uuidv4(),
                'version': [0x1, 0x0, 0x0]
            }]
        };
    document['getElementById']('ManifestFile')[_0xb907d0(0x1b8)] = JSON[_0xb907d0(0x1b7)](_0x4c4547, null, 0x2);
    let _0x5a7c71 = document[_0xb907d0(0x1c2)]('ManifestFile');
    _0x5a7c71[_0xb907d0(0x1b0)][_0xb907d0(0x1b4)] = _0xb907d0(0x1b6), _0x5a7c71[_0xb907d0(0x1b0)]['height'] = _0x5a7c71[_0xb907d0(0x1c0)] + 'px';
}

function uuidv4() {
    const _0x97a3c9 = _0x8176;
    return _0x97a3c9(0x1bd)['replace'](/[xy]/g, function(_0xa5aa33) {
        const _0x84f095 = _0x97a3c9;
        let _0x5ce5d7 = Math['random']() * 0x10 | 0x0,
            _0xccc471 = _0xa5aa33 == 'x' ? _0x5ce5d7 : _0x5ce5d7 & 0x3 | 0x8;
        return _0xccc471[_0x84f095(0x1c8)](0x10);
    });
}

function copyManifest() {
    const _0x52eef3 = _0x8176;
    let _0x1369e2 = document[_0x52eef3(0x1c2)](_0x52eef3(0x1ca));
    _0x1369e2[_0x52eef3(0x1b5)](), _0x1369e2[_0x52eef3(0x1c6)]();
    try {
        document[_0x52eef3(0x1b9)](_0x52eef3(0x1bc));
    } catch (_0x3236f9) {
        alert('');
    }
}

function darkmode() {
    document.getElementById('body').style.backgroundColor = "rgb(26, 26, 26)";
};

function lightmode() {
    document.getElementById('body').style.backgroundColor = "white";
};

function download() {

    var file = document.getElementById("ManifestFile").value;
    
    var s = new Blob([file], { type: "text/json;charset=utf-8" });
    saveAs(s, "manifest.json");
}
