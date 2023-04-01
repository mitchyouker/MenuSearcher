export default function TimePicker({
  hour, min
}: {
  hour: number;
  min: number;
}) {
  let daytime:string = "am";
  if (hour > 12) {
    daytime = "pm";
    hour = hour-12;
  }

  return (
    <div className="flex">
        <select name="hours" className="bg-transparent text-lg appearance-none outline-none border-none focus:ring-none p-1 bg-none text-right dark:text-white" defaultValue={hour}>
          <option className="dark:text-black" value="1">1</option>
          <option className="dark:text-black" value="2">2</option>
          <option className="dark:text-black" value="3">3</option>
          <option className="dark:text-black" value="4">4</option>
          <option className="dark:text-black" value="5">5</option>
          <option className="dark:text-black" value="6">6</option>
          <option className="dark:text-black" value="7">7</option>
          <option className="dark:text-black" value="8">8</option>
          <option className="dark:text-black" value="9">9</option>
          <option className="dark:text-black" value="10">10</option>
          <option className="dark:text-black" value="11">11</option>
          <option className="dark:text-black" value="12">12</option>
        </select>
        <span className="text-lg mt-1 dark:text-white">:</span>
        <select name="minutes" className="bg-transparent text-lg appearance-none outline-none border-none focus:ring-none p-1 bg-none dark:text-white" defaultValue={min}>
          <option className="dark:text-black" value="0">00</option>
          <option className="dark:text-black" value="15">15</option>
          <option className="dark:text-black" value="30">30</option>
          <option className="dark:text-black" value="45">45</option>
        </select>
        <select name="ampm" className="bg-transparent text-lg appearance-none outline-none border-none focus:ring-none p-1 bg-none dark:text-white" defaultValue={daytime}>
          <option className="dark:text-black" value="am">AM</option>
          <option className="dark:text-black" value="pm">PM</option>
        </select>
      </div>
  );
}
