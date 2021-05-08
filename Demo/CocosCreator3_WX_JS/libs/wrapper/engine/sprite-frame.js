"use strict";

if (cc.SpriteFrame) {
  cc.SpriteFrame.prototype._checkPackable = function () {
    var dynamicAtlas = cc.internal.dynamicAtlasManager;
    if (!dynamicAtlas) return;
    var texture = this._texture;

    if (!(texture instanceof cc.Texture2D) || texture.isCompressed) {
      this._packable = false;
      return;
    }

    var w = this.width;
    var h = this.height;

    if (!texture.image || w > dynamicAtlas.maxFrameSize || h > dynamicAtlas.maxFrameSize) {
      this._packable = false;
      return;
    } // HACK: Can't tell if it's a Canvas or an Image by instanceof on WeChat.


    if (texture.image && texture.image.getContext) {
      this._packable = true;
    }
  };
}