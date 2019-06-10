import React from "react";
import {PersonalInfoLayout} from "./style";
import {Avatar, Status} from "../component/module";
import {PopoverInfo, PopoverJob} from "../popover/module";

/**
 * Персональная информация.
 */
class PersonalInfo extends React.Component {
  render() {
    return (
      <PersonalInfoLayout>
        <main>
          <Avatar file="one" />
          <div className="info">
            <div className="pop">
              <h1>Вебер-Пфляумер В.В.</h1>
              <PopoverInfo />
            </div>
            <p>Казахстан, г.Караганда</p>
            <hr />
            <div className="pop">
              <p>Не работаю</p>
              <PopoverJob />
            </div>
            <hr />
            <Status className="language" width={250} height={100} />
          </div>
        </main>
      </PersonalInfoLayout>
    );
  }
}

export default PersonalInfo;
