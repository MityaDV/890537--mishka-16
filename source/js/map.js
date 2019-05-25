  ymaps.ready(init);

  function init() {
    var map = new ymaps.Map("contacts-map", {
      center: [59.93944115603922, 30.32302403991186],
      zoom: 15,
      controls: []
    });
    var placemark = new ymaps.Placemark([59.938633647616214, 30.32304549758399], {}, {
      iconLayout: "default#image",
      iconImageHref: "img/sprite-svg-icons/icon-map-pin.svg",
      iconImageSize: [67, 100]
    });
    map.geoObjects.add(placemark);
  }
