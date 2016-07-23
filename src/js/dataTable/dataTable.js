
/*设置每一行的背景色为默认的白色*/
function setTableRowBackGroundColorToDefault() {
	$(".dataTableRow").each(function () {
		$(this).css('backgroundColor', 'white')
	})
}
/*绑定数据表格的单击事件，设置当前的行的背景色*/
function bindTableRowClick() {
	$(".dataTableRow").each(function () {
		$(this).bind("click", function () {
			setTableRowBackGroundColorToDefault();
			$(this).css('backgroundColor', 'rgba(128, 128, 128, 0.12)')

		})
	})
}
/*绑定行的双击事件*/
function bindTableRowDbClick() {
	$(".dataTableRow").each(function () {
		$(this).dblclick(function () {
			var t9 = new PopupLayer({
					trigger : "#ele9",
					popupBlk : "#blk9",
					closeBtn : "#close9",
					useOverlay : true,
					useFx : true,
					offsets : {
						x : 0,
						y : -41
					}
				});
			t9.doEffects = function (way) {
				if (way == "open") {
					this.popupLayer.css({
						opacity : 0.3
					}).show(400, function () {
						this.popupLayer.animate({
							left : ($(document).width() - this.popupLayer.width()) / 2,
							top : (document.documentElement.clientHeight -
								this.popupLayer.height()) / 2 + $(document).scrollTop(),
							opacity : 0.8
						}, 1000, function () {
							this.popupLayer.css("opacity", 1)
						}
							.binding(this));
					}
						.binding(this));
				} else {
					this.popupLayer.animate({
						left : this.trigger.offset().left,
						top : this.trigger.offset().top,
						opacity : 0.1
					}, {
						duration : 500,
						complete : function () {
							this.popupLayer.css("opacity", 1);
							this.popupLayer.hide()
						}
						.binding(this)
					});
				}
			}

		})
	})
}

/*执行初始化事件*/
$(document).ready(function () {
	bindTableRowClick();
	bindTableRowDbClick();

});
