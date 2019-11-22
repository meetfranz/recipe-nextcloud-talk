import path from 'path';

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const direct = document.querySelectorAll('.app-navigation-entry-utils-counter.highlighted').length;
    const indirect = document.querySelectorAll('.app-navigation-entry-utils-counter:not(.highlighted)').length;

    Franz.setBadge(direct, indirect);
  };

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'service.css'));
};
