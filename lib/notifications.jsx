/**
 * quasar
 *
 * Copyright (c) 2015 Glipcode http://glipcode.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions
 * of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

Notifications = new Mongo.Collection('notifications');

let Schema = {};

Schema.Notification = new SimpleSchema({
  // receiver of the notification
  owner: {
    type: String,
  },

  // originator of the notification
  from: {
    type: String,
    optional: true,
  },

  // the type of notification
  type: {
    type: String,
  },

  roomId: {
    type: String,
    optional: true
  },

  url: {
    type: String,
    optional: true
  },

  viewed: {
    type: Boolean,
    defaultValue: false
  },

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  },
});

Notifications.attachSchema(Schema.Notification);

// restrict modification access to authorized users
Notifications.allow({
  insert(userId, notification) {
    return notification.owner === userId ||
      (Roles.userIsInRole(userId, ['manage-users','admin']));
  },

  update(userId, notification, fields, modifier) { // TODO : make this more restrictive based on the fields
    return notification.owner === userId ||
      (Roles.userIsInRole(userId, ['manage-users','admin']));
  },

  remove(userId, notification, fields, modifier) {
    return notification.owner === userId ||
      (Roles.userIsInRole(userId, ['manage-users','admin']));
  },

  fetch: ['owner'],
});
