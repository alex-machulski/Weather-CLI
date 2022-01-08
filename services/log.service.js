import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' Error: ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' Success: ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [City] - для установки города
        -h - для вывода помощи
        -t [API_KEY] - для сохранения токена`
    );
};

const printWeather = (response, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${response.name}
        ${icon}  ${response.weather[0].description}
        Температура: ${response.main.temp} (ощущается как: ${response.main.feels_like})
        Влажность: ${response.main.humidity}%
        Скорость ветра: ${response.wind.speed} м/с`
    );
};

export { printError, printSuccess, printHelp, printWeather };