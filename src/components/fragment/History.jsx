import React from "react";
import axios from "axios";
import {List, Card, Icon} from "antd";
import {CardRepository} from "../card/module";
import {HistoryLayout, CardLayout, ListLayout} from "./style";

/**
 * Фрагмент истории в open-source.
 */
class History extends React.Component {
  state = {data: [], contributions: "?", repositories: "?"};

  componentDidMount() {
    this.getAllRepositories();
  }

  /**
   * Метод просто делает магию.
   * Проводит поиск по сайту на историю пользовательских репозиториев.
   */
  async getAllRepositories() {
    const list = [];
    const data = await Promise.all([
      this.getMyRepositories(),
      this.getOtherRepositories()
    ]);

    data.forEach(arr =>
      arr.forEach(obj => {
        let repository = {
          organization: obj.organization,
          site: obj.site,
          name: obj.name,
          language: obj.language,
          updated_at: obj.updated_at,
          description: obj.description,
          fork: obj.fork
        };

        list.push(repository);
      })
    );

    list.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    this.setState({repositories: list.length});

    this.setState({data: list});
  }

  /**
   * Метод делает запрос серверу и возвращает личные репозитории.
   */
  async getMyRepositories() {
    // Лого сайта.
    const site =
      "https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png";
    const json = await axios
      .get("https://api.github.com/users/FromSi/repos?sort=updated")
      .then(resp => resp.data);

    // Добавление логотипа сайта.
    json.map(obj => (obj.site = site));

    return json;
  }

  /**
   * Метод содержит методы, чтобы сделать запрос и получить с организаций
   * репозитории, проверяет где пользователь имел причастность и выдает репозитории
   * связанные с этим пользователем.
   *
   * P.S. Пишу "спасибо" JS за то, что плох в ассинхронном деле! Лучше корутины Kotlin'а юзать.
   */
  async getOtherRepositories() {
    /**
     * Метод принимает ссылку на тех, кто работал с репозиторием данной ссылки.
     * Через этот метод происходит проверка ПРИЧАСТНОСТИ пользователя к этому репозиторию.
     * @param {String} url - ссылка на участников репозитория.
     */
    async function isCheckRepository(url) {
      const json = await axios.get(url).then(resp => resp.data);
      // Урод в семье.
      let bool = false;

      json.forEach(obj => {
        if ("FromSi" === obj.login) {
          // А я не могу использовать return, как в норм языка. Вот с переменными работаем.
          bool = true;
        }
      });

      return bool;
    }

    /**
     * Метод принимает название организации и берет репозитории с организации.
     * @param {String} org - название организации.
     */
    async function getOrgRepositories(org) {
      // Список репозиториев с которыми пользователь работал.
      const objs = [];
      const json = await axios
        .get(`https://api.github.com/orgs/${org}/repos`)
        .then(resp => resp.data);

      // Вообще я это должен решать через всякие sort() но там ... с async.
      for (let i = 0; i < json.length; i++) {
        const obj = json[i];
        let bool = await isCheckRepository(obj.contributors_url);

        if (bool) {
          objs.push(obj);
        }
      }

      return objs;
    }

    // Ссылка на сайт.
    const site =
      "https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png";
    // Готовые репозитории.
    const data = [];
    const json = await axios
      .get(`https://api.github.com/users/FromSi/orgs`)
      .then(resp => resp.data);

    // Тут я тоже хотел что-то из sort() или map() был использовать, но полный ... с async.
    for (let i = 0; i < json.length; i++) {
      const obj = json[i];
      const orgRepositories = await getOrgRepositories(obj.login);

      for (let j = 0; j < orgRepositories.length; j++) {
        const repository = orgRepositories[j];
        repository.site = site;
        repository.organization = obj.avatar_url;
        data.push(repository);
      }
    }

    return data;
  }

  render() {
    /**
     * Создание заголовка.
     */
    function createTitle(state) {
      return (
        <HistoryLayout>
          <h1>История</h1>
          <div className="statistic">
            <div>
              <Icon
                style={{fontSize: 14, color: "#EF5350"}}
                size={14}
                type="book"
                theme="filled"
              />
              <p style={{color: "#EF5350"}}>{state.repositories}</p>
            </div>
          </div>
        </HistoryLayout>
      );
    }

    return (
      <CardLayout >
        {createTitle(this.state)}
        <ListLayout
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <CardRepository
                organization={item.organization}
                site={item.site}
                title={item.name}
                name={item.language}
                date={item.updated_at}
                description={item.description}
                fork={item.fork}
              />
            </List.Item>
          )}
        />
      </CardLayout>
    );
  }
}

export default History;
