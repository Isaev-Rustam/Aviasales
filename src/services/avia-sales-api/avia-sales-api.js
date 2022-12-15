class AviaSalesApi {
  #apiBase = 'https://aviasales-test-api.kata.academy/';

  #getResource = async (url) => {
    const res = await fetch(`${this.#apiBase}${url}`);

    if (!res.ok && res.status !== 500) {
      throw new Error(`Could not fetch ${url} received ${res.stats}`);
    }

    return res.status === 500 ? {} : res.json();
  };

  getSearchId = async () => {
    const res = await this.#getResource('search');
    return res?.searchId || false;
  };

  getTickets = async (cbFirst, cbLast, cbLoad) => {
    const searchId = await this.getSearchId();
    let tickets = [];
    let once = true;
    let always = false;
    let load = 10;

    const iter = async () => {
      const res = await this.#getResource(`tickets?searchId=${searchId}`);
      if (res.stop) return;
      tickets = [...tickets, ...(res?.tickets || [])];

      if (always) {
        once = false;
        load += 3;
        cbLoad(tickets, load);
      }
      if (once) {
        once = false;
        always = true;
        cbFirst(tickets);
      }

      await iter();
    };
    await iter();
    cbLast(tickets);
    return tickets;
  };
}

export default AviaSalesApi;
