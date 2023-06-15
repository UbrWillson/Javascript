export class CookiesManager {

    static setCookie(key, val, exp) {
        let _key = encodeURIComponent(key);
        let _val = encodeURIComponent(val);
        let _exp = parseInt(exp) * 24 * 3600;
        // next
        let cookie_string = `${_key}=${_val}`;
        if (_exp > 0) {
            cookie_string += `; max-age=${_exp}`;
        }
        // next
        document.cookie = cookie_string;
        let message = `recording: ${key}=${val} - succesfully saved on ${_exp} days!`;
        alert(message);
    }

    static getCookies() {
        let cookies = document.cookie;
        console.log(cookies);
        let parts = cookies.split(';');
        console.log(parts);
        let display_html = '';
        // next
        for (let item of parts) {
            let params = item.trim().split('=');
            let _key = decodeURIComponent(params[0]);
            let _val = decodeURIComponent(params[1]);
            // next
            display_html += `
                <tr>
                    <td>${_key}</td>
                    <td>${_val}</td>
                </tr>
            `;
        }
        // next
        return display_html;
    }

}