# NewRelicChromeExtension
New Relic is not available Japanese.
You will not be able to send to the product error message in Japanese.

If you want to do it, then I think that it may be carried out in the following ways:

1. Convert to UTF-8 error message in Japanese.
2. url-encode the error message.
3. Send New Relic to the error message.

By using the above method, you could send a NewRelic without losing information in Japanese.
However, the information of Japanese you can see in NewRelic, you do not know you do not url-encode!!!
So, I have developed this extension.

By using this extension can be used as information that you can understand the error message that is url-encode the NewRelic on.

## INSTALL
1. download decode-NewRelic-ja.user.js
2. enter URL 'chrome://extensions' in the address bar of your Google Chrome
3. drag & drop the decode-NewRelic-ja.user.js onto the Chrome Window
4. visit the error page of NewRelic.
