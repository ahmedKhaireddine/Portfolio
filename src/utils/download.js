export const download = (url, file_name) => {
    const link = document.createElement('a')
    link.href = url
    link.download = file_name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}