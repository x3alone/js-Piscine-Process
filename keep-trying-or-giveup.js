function retry(count, cb) {
    return async function (...arg) {
        while (true) {
            try {
                return await cb(...arg)
            } catch (e) {
                if (count == 0) throw e
                count--
            }
        }
    }
}
function timeout(delay, cb) {
    return async function (...arg) {
        let start = new Date()
        let result = await cb(...arg)
        if (new Date() - start <= delay) return result
        throw new Error('timeout')
    }
}