const usd = document.getElementById('usd');
const eur = document.getElementById('eur');
const gbp = document.getElementById('gbp');
const cad = document.getElementById('cad');
const aud = document.getElementById('aud');

usd.addEventListener('change', function() {
    usd.value = usd.value * 1;
    gbp.value = usd.value * 0.49246;
    cad.value = usd.value * 0.98054;
    eur.value = usd.value * 0.70641;
    aud.value = usd.value * 1.13262;
}
);
gbp.addEventListener('change', function() {
    usd.value = gbp.value * 2.03032;
    gbp.value = gbp.value * 1;
    cad.value = gbp.value * 1.99169;
    eur.value = gbp.value * 1.43448;
    aud.value = gbp.value * 2.29964;
}
);
cad.addEventListener('change', function() {
    usd.value = cad.value * 1.01941;
    gbp.value = cad.value * 0.50221;
    cad.value = cad.value * 1;
    eur.value = cad.value * 0.72037;
    aud.value = cad.value * 1.15498;
}
);
eur.addEventListener('change', function() {
    usd.value = eur.value * 1.41544;
    gbp.value = eur.value * 0.69714;
    cad.value = eur.value * 1.38814;
    eur.value = eur.value * 1;
    aud.value = eur.value * 1.13262;
}
);
aud.addEventListener('change', function() {
    usd.value = aud.value * 0.88297;
    gbp.value = aud.value * 0.43497;
    cad.value = aud.value * 0.86613;
    eur.value = aud.value * 0.62382;
    aud.value = aud.value * 1;
}
);
