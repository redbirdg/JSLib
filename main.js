class Common
{
    /**
     * await Delay(millisec);
     * @param {number} millisec
     */
    static Delay = (millisec) => new Promise(resolve => setTimeout(() => resolve(), millisec));
}

class Doc
{
    /**
     * Returns the first element that is a descendant of node that matches selectors.
     * @param {number} retry default: -1, retry times, <0 means infinite
     * @param {number} delay default: 1000, delay millisec to retry
     */
    static async Find(selectors, retry = -1, delay = 1000)
    {
        let curRetryCnt = 0;
        while (true)
        {
            const node = document.querySelector(selectors);
            if (node)
                return node;
            if (retry >= 0 && ++curRetryCnt > retry)
                return null;
            await Common.Delay(delay);
            console.log(`Not found '${selectors}', delay ${delay} ms to retry`);
        }
    }
}

export { Common, Doc };