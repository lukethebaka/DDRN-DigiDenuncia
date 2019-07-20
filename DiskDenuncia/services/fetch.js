const URI = 'https://api-dd.herokuapp.com';
const apiPath = '/api/';

export default {
  async getAtuacao() {
    try {
      let response = await fetch(URI + apiPath + 'atuacaos');
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch(e) {
      console.log(e)
    }
  },

  async postAtuacao(data) {
    try {
      let response = await fetch(URI + apiPath + 'atuacaos', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json());
      console.log('Atuação adicionada com sucesso');
    } catch(e) {
      console.error(e);
    }
  },
  
  async getMap(data) {
    try {
      let response = await fetch(
        'https://nominatim.openstreetmap.org/search?q=' + data + '&state=Rio%20Grande%20do%20Norte&format=json&limit=1',
      );
      let responseJson = await response.json();
      alert(JSON.stringify(responseJson[0].display_name));
      return JSON.stringify(responseJson[0].display_name);
    } catch (error) {
      console.error(error);
    }
  },
  
  async getCadastro(id) {
    try {
      let response = await fetch(URI + apiPath + 'cadastros/' + id);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch(e) {
      console.log(e)
    }
  },

  async postCadastro(data) {
    try {
      let response = await fetch(URI + apiPath + 'cadastros', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json());
      console.log('Cadastro adicionada com sucesso');
    } catch(e) {
      console.error(e);
    }
  },
  
  async getCategorias() {
    try {
      let response = await fetch(URI + apiPath + 'categoria');
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch(e) {
      console.log(e)
    }
  },

  async getCategoria(id) {
    try {
      let response = await fetch(URI + apiPath + 'categoria/' + id);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch(e) {
      console.log(e)
    }
  },

  async postCategoria(data) {
    try {
      let response = await fetch(URI + apiPath + 'categoria', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json());
      console.log('Categoria adicionada com sucesso');
    } catch(e) {
      console.error(e);
    }
  },

  async getDenuncia(id) {
    try {
      let response = await fetch(URI + apiPath + 'denuncias/' + id);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch(e) {
      console.log(e)
    }
  },

  async getDenuncias() {
    try {
      let response = await fetch(URI + apiPath + 'denuncias');
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch(e) {
      console.log(e)
    }
  },

  async getDenunciasByCategoria(categoria_id) {
    try {
      let response = await fetch(URI + apiPath + 'denuncias/' + categoria_id);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch(e) {
      console.log(e)
    }
  },

  async putDenuncia(data) {
    try {
      let response = await fetch(URI + apiPath + 'denuncias', {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json());
      console.log('Denúncia editada com sucesso');
    } catch(e) {
      console.error(e);
    }
  },

  async deleteDenuncia(id) {
    try {
      let response = await fetch(URI + apiPath + 'denuncias/' + id, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json());
      console.log('Denúncia deletada com sucesso');
    } catch(e) {
      console.error(e);
    }
  },

  async postDenuncia(data) {
    try {
      let response = await fetch(URI + apiPath + 'denuncias', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json());
      console.log('Denúncia adicionada com sucesso');
    } catch(e) {
      console.error(e);
    }
  },

  async getEnderecos() {
    try {
      let response = await fetch(URI + apiPath + 'enderecos');
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch(e) {
      console.log(e)
    }
  },

  async postEnderecos(data) {
    try {
      let response = await fetch(URI + apiPath + 'enderecos', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json());
      console.log('Enderecos adicionada com sucesso');
    } catch(e) {
      console.error(e);
    }
  },
}
