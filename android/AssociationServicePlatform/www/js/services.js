var am = angular.module('starter.services', [])

am.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '奥巴马',
    lastText: '美国总统',
    face: 'img/aobama.jpg'
  }, {
    id: 1,
    name: '普京',
    lastText: '俄罗斯总统',
    face: 'img/pujing.jpg'
  }, {
    id: 2,
    name: '索罗斯',
    lastText: '国际金融巨鳄',
    face: 'img/suoluosi.jpg'
  }, {
    id: 3,
    name: '乔布斯',
    lastText: '乔大爷，苹果创始人',
    face: 'img/qiaobusi.jpg'
  }, {
    id: 4,
    name: '扎克尔伯格',
    lastText: '一个了不起的年轻人',
    face: 'img/zhakeerboge.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

am.factory('Groups', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var groups = [{
    id: 0,
    name: '协会1',
    description: '协会1的简介'
  }, {
    id: 1,
    name: '协会2',
    description: '协会2的简介'
  }, {
    id: 2,
    name: '协会3',
    description: '协会3的简介'
  }, {
    id: 3,
    name: '协会4',
    description: '协会4的简介'
  }, {
    id: 4,
    name: '协会5',
    description: '协会5的简介'
  }];

  return {
    all: function() {
      return groups;
    },
    remove: function(group) {
      groups.splice(groups.indexOf(group), 1);
    },
    get: function(groupid) {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i].id === parseInt(chatId)) {
          return groups[i];
        }
      }
      return null;
    }
  };
});



am.factory('News', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var news = [{
    id: 0,
    title: '新闻1',
    description: '新闻1的简介'
  }, {
    id: 1,
    title: '新闻2',
    description: '新闻2的简介'
  }, {
    id: 2,
    title: '新闻3',
    description: '新闻3的简介'
  }, {
    id: 3,
    title: '新闻4',
    description: '新闻4的简介'
  }, {
    id: 4,
    title: '新闻5',
    description: '新闻5的简介'
  }];

  return {
    all: function() {
      return news;
    },
    remove: function(n) {
      title.splice(title.indexOf(n), 1);
    },
    get: function(newid) {
      for (var i = 0; i < news.length; i++) {
        if (news[i].id === parseInt(newid)) {
          return news[i];
        }
      }
      return null;
    }
  };
});