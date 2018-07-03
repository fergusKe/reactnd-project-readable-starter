/* eslint-disable */
export const preloadImage = (images, options) => {
  let count = 0;

  images.forEach(img => {
    const imgObj = new Image();

    imgObj.onload = () => {
      loaded();
    };

    imgObj.onerror = () => {
      loaded();
    };

    imgObj.src = img;
  });

  function loaded() {
    count += 1;
    options.each && options.each(count);

    if (count === images.length) {
      options.all && options.all(count);
    }
  }
};

export const trackingGA = () => {
  const ele = document.querySelectorAll('[megais_ga]');

  for (let i = 0; i < ele.length; i += 1) {
    (function (i) {
      let item = ele[i];
      if (item.tracking) return;
      item.addEventListener('click', trackingGAEvent);
      item.tracking = true;
    })(i);
  }
};

export const trackingGAEvent = pItem => {
  const item = pItem.path.find(item => {
    return item.getAttribute('megais_ga');
  });
  const category = item.getAttribute('megais_ga');
  const action = 'click';
  if (category !== null) {
    ga('send', 'event', category, action);
  }
};

export const removeGA = pItemClass => {
  const ele = document.querySelectorAll(pItemClass + ' [megais_ga]');
  for (let i = 0; i < ele.length; i += 1) {
    (function (i) {
      let item = ele[i];
      item.removeEventListener('click', trackingGAEvent);
      item.tracking = false;
    })(i);
  }
};

export const getFormatDate = utc => {
  const date = new Date(utc);
  const year = date.getFullYear();
  let month = date.getMonth() + 1 + "";
  month = month.length === 1 ? "0" + month : month;
  let day = date.getDate() + "";
  day = day.length === 1 ? "0" + day : day;
  let hour = date.getHours() + "";
  hour = hour.length === 1 ? "0" + hour : hour;
  let minute = date.getMinutes() + "";
  minute = minute.length === 1 ? "0" + minute : minute;
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

export const sortBy = (data, value) => {
  console.log('data = ', data);
  console.log('value = ', value);
  data.sort((a, b) => {
    switch (value) {
      case 'newest':
        return a.timestamp < b.timestamp ? 1 : -1;
      case 'oldest':
        return a.timestamp > b.timestamp ? 1 : -1;
      case 'popular':
        return a.voteScore < b.voteScore ? 1 : -1;
      case "unpopular":
        return a.voteScore > b.voteScore ? 1 : -1;
      default:
        return a.timestamp < b.timestamp ? 1 : -1;
    }
  })
  return data
}
