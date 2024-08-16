import React, { ReactElement} from "react";
import styles from "./CurrentWeather.module.css"
import { FC } from "react";
import useApi from "../../hooks/useApi";
import { WiTime5 } from "react-icons/wi";

const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const CurrentWeather: FC = () : ReactElement => {
    const {weatherData} = useApi();
  
    const dayOfWeek = days[new Date(weatherData?.dt*1000-(weatherData?.timezone*1000)).getDay()-1]
    const month = monthes[new Date(weatherData?.dt*1000-(weatherData?.timezone*1000)).getMonth()]
    const date = new Date(weatherData?.dt*1000-(weatherData?.timezone*1000)).getDate()
    const currTime = new Date(weatherData?.dt*1000-(weatherData?.timezone*1000)).toLocaleTimeString();
    console.log(currTime)

console.log(date)
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} width="72" height="72" src={`https://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="" />
             <span className={styles.temp}>{Number(weatherData?.main.temp).toFixed(0)} C&#176;</span>
             <div className={styles.date_wrapper}>
             <span className={styles.city}>{weatherData?.name}</span>
             <p className={styles.cur_date}>
          <span className={styles.day_of_week}>{dayOfWeek},</span>
          <span className={styles.month}>{month} {date}</span>
          </p>
             </div>
             <div className={styles.descr_wrapper}>
             <div className={styles.weather_descr}><img width="48" height="48" src={`https://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="" /><span className={styles.descr}>{weatherData?.weather[0].description}</span></div>
             <div className={styles.cur_time_wrapper}><WiTime5 className={styles.time_icon}/><span className={styles.curr_time}>{currTime}</span></div>
             </div>
           
           
        </div>
    )
}

export default CurrentWeather;