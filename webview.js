import path from 'path';

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let direct = 0;
    const notificationWrapper = document.querySelector(
      '.notifications .notification-wrapper'
    );

    if (notificationWrapper) {
      direct = notificationWrapper.querySelectorAll(
        '.notification[object_type="chat"], .notification[object_type="room"'
      ).length;
    }

    let indirect = 0;

    document.querySelectorAll('.app-navigation-entry__counter').forEach(
      function(counter) {
        indirect += Number(counter.textContent);
      }
    );
    Franz.setBadge(direct, indirect);
  };

  Franz.loop(getMessages);
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};
