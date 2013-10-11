// ==UserScript==
// @name           decode-NewRalic-ja
// @author         mapyo
// @namespace      http://mapyo.jp
// @description    "Convert Japanese error message that is encoded url of New Relic"
// @include        https://rpm.newrelic.com/*
// ==/UserScript==

(function() {

	// 追加用の要素作成
	function createErrorMessageElement(value) {
		var element = document.createElement('p');
		element.innerText = value;

		return element;
	}

	var newRelicUrl = location.href;
	// エラー詳細画面
	if(newRelicUrl.match(/traced_errors/i)) {
		var errorMessageElement = document.getElementsByClassName("error_message");
		var errorMessage = errorMessageElement[0].innerText;
		if(errorMessage.indexOf("%") > -1) {
			var decodeMessage = decodeURIComponent(errorMessage);
			var addMessage = decodeMessage.replace(/<\/?[^>]+>/gi, "");
			var element = createErrorMessageElement(addMessage);
			// 作った要素を追加する
			errorMessageElement[0].parentNode.insertBefore(element, errorMessageElement[0]);
		}
	}

	// エラー一覧画面
	if(newRelicUrl.match(/traced_errors/i)) {
		var errorMessageElement = document.getElementsByClassName("error_message");
		for (var i=0; i<errorMessageElement.length; i++) {
			//if(typeof(v.childNodes[1]) == "undefined") { continue; }
			var anchor = errorMessageElement[i].childNodes[1];
			var errorMessage = anchor.innerText;
			// urlエンコードされているっぽかったらデコードする
			if(errorMessage.indexOf("%") > -1) {
				// 空白が何故か入っているので除去してエンコード
				var decodeMessage = decodeURIComponent(errorMessage.replace(/\s+/g, ""));
				// aタグの内容を書き換える
				anchor.innerText = decodeMessage;
			}
		}
	}
})();
