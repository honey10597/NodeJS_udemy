const fs = require("fs")

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    console.log(url + "--------" + method)

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter title</title></head>')
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">SEND</button></form></body>'
        )
        res.write('</html>')
        return res.end()
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on('da ta', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            // fs.writeFileSync('message.txt', message);
            // res.statusCode = 302;
            // res.setHeader('Location', '/')
            // return res.end()
            fs.writeFileSync("message.txt", message, err => {
                res.statusCode = 302;
                res.setHeader("Location", "/")
                return res.end()
            })
        })
    }

    res.setHeader("Content-Type", "text/html")
    res.write('<html>')
    res.write('<head><title>Enter title</title></head>')
    res.write('<body>hello from node js server</body>')
    res.write('</html>')
    return res.end()
}

module.exports = {
    handler: requestHandler
}