import React from "react"
import { Stage, Layer, Rect, Group, Circle, Text } from 'react-konva'

/* Прогресс-бар с указателями и текстом.
Показывает информацию используемых по сей день ЯП.
*/
class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightCursor: 3,
      color: ["#EF5350", "#FFD54F", "#1E88E5", "#7986CB"],
      rating: [0.35, 0.13, 0.24, 0.27],
      language: ["Java", "JS", "Python", "Kotlin"]
    };
  }

  componentDidMount() {
    this.setState({
      heightProgress: this.props.height * 0.1
    });
  }

  componentWillUpdate(){
    this.render();
  }

  /* Создание прогресс-бара ЯП. */
  createProgress() {
    var array = [];
    var cursorSize = 0;

    for (let i = 0; i < this.state.color.length; i++) {
      const color = this.state.color[i];
      const rating = this.state.rating[i];

      array.push(
        <Rect
          key={i}
          x={(this.props.width - this.state.heightProgress) * cursorSize}
          width={(this.props.width - this.state.heightProgress) * rating}
          height={this.state.heightProgress}
          fill={color}
        />
      );

      cursorSize += rating;
    }

    return <Group>{array}</Group>;
  }

  /* Создание курсора от прогресс-бара к тексту. */
  createCursor() {
    var array = [];
    var cursorSize = 0;
    var state = this.state;
    var props = this.props;

    /* Вычисление у линии Y. */
    function rectY(index) {
      if (index % 2 === 0) {
        return state.heightProgress * 2;
      } else {
        return props.height / 2 + state.heightProgress / 2;
      }
    }

    /* Вычисление у текста Y. */
    function textY(index) {
      if (index % 2 === 0) {
        return state.heightProgress * 0.4;
      } else {
        return (
          props.height - state.heightProgress * 2 + state.heightProgress * 0.4
        );
      }
    }

    for (let i = 0; i < state.color.length; i++) {
      const color = state.color[i];
      const rating = state.rating[i];
      const language = state.language[i];

      array.push(
        <Group key={i}>
          <Rect
            y={rectY(i)}
            x={
              ((props.width - state.heightProgress) * rating) / 2 +
              (props.width - state.heightProgress) * cursorSize +
              state.heightProgress / 2 -
              state.heightCursor / 2
            }
            width={state.heightCursor}
            height={
              props.height / 2 -
              state.heightProgress / 2 -
              state.heightProgress * 2
            }
            fill={color}
          />
          <Text
            y={textY(i)}
            x={
              (props.width - state.heightProgress) * cursorSize +
              state.heightProgress / 2 -
              state.heightCursor / 2
            }
            width={(props.width - state.heightProgress) * rating}
            align="center"
            text={language}
            fontSize={state.heightProgress * 1.3}
            fill={color}
            fontFamily="sans-serif"
            fontStyle="Bold"
          />
        </Group>
      );

      cursorSize += rating;
    }

    return <Group>{array}</Group>;
  }

  render() {
    return (
      <Stage width={this.props.width} height={this.props.height}>
        <Layer>
          <Group
            y={this.props.height / 2 - this.state.heightProgress / 2}
            x={this.state.heightProgress / 2}
          >
            <Circle
              y={this.state.heightProgress / 2}
              radius={this.state.heightProgress / 2}
              fill={this.state.color[0]}
            />
            <Circle
              y={this.state.heightProgress / 2}
              x={this.props.width - this.state.heightProgress}
              radius={this.state.heightProgress / 2}
              fill={this.state.color[3]}
            />
            {this.createProgress()}
          </Group>
          {this.createCursor()}
        </Layer>
      </Stage>
    );
  }
}

export default Status;