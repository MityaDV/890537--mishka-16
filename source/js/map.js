
document.addEventListener("DOMContentLoaded", function (event) {
  ymaps.ready(init);
  var map;
  function init() {
    map = new ymaps.Map("contacts-map", {
      center: [59.764791, 30.4668216],
      zoom: 12,
      controls: []
    });
    var placemark = new ymaps.Placemark([59.764791, 30.4668216], {}, {
      iconLayout: "default#image",
      iconImageHref: "img/sprite-svg-icons/icon-map-pin",
      iconImageSize: [67, 100]
    });
    map.geoObjects.add(placemark);
  }
});
