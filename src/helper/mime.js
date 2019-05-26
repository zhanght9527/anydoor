const path = require('path')

const mimeTypes = {
    'html': 'text/html',
    'xml': 'text/xml',
    'xhtml': 'application/xhtml+xml',
    'js': 'text/javascript',
    'json': 'application/json',
    'ico': 'image/x-icon',
    'txt': 'text/plain',
    'rtf': 'application/rtf',
    'pdf': 'application/pdf',
    'word': 'application/msword',
    'png': 'image/png',
    'gif': 'image/gif',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'au': 'audio/basic',
    'mid': 'audio/midi',
    'midi': 'audio/x-midi',
    'ra': 'audio/x-pn-realaudio',
    'ram': 'audio/x-pn-realaudio',
    'mpg': 'video/mpeg',
    'mpeg': 'video/mpeg',
    'avi': 'video/x-msvideo',
    'gz': 'application/x-gzip',
    'tar': 'application/x-tar'
}

module.exports = (filePath) => {
    let ext = path.extname(filePath).split('.').pop().toLowerCase()
    if (!ext) {
        ext = filePath
    }

    return mimeTypes[ext] || mimeTypes['txt']
}