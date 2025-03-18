import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Card = () => {
    const [sequence] = useState<Array<string | number>>(["System Theme Detector", 5000, "Highly Supported On Windows", 5000, "Highly Supported On Macbook", 5000]);
    const [zyztemFeatures] = useState<Array<{id: number; _title: string;}>>([
        {
            id: 1,
            _title: "Detects system theme in real-time"
        },
        {
            id: 2,
            _title: "Works across Windows, macOS, and modern browsers"
        },
        {
            id: 3,
            _title: "Auto-updates on theme change"
        },
        {
            id: 4,
            _title: "Ideal for dark mode toggles in web apps"
        }
    ]);

    const systemThemeHandler = window.matchMedia("(prefers-color-scheme: dark)") as MediaQueryList;

    const [themeStatus, setThemeStatus] = useState<boolean>(systemThemeHandler.matches);

    const gotoThemeSettings = (e: React.MouseEvent<HTMLButtonElement>) => {
        const handler = e.currentTarget as HTMLButtonElement;
        const currentHandler = handler.dataset.name;
        switch(currentHandler) {
            case "window":
                location.href = "ms-settings:personalization-colors";
                break;
            case "ios":
                location.href = "x-apple.systempreferences:com.apple.preference.appearance";
                break;
            default:
                return;
        }
    }

    systemThemeHandler.addEventListener("change", (e) => setThemeStatus(e.matches));

    const handleBrightness = (e: React.FormEvent<HTMLInputElement>) => {
        const inputVal = e.currentTarget.value;
        document.body.style.filter = `brightness(${+inputVal}%)`;
    }

    useEffect(() => {
        document.documentElement.className = systemThemeHandler.matches ? "dark" : "";
        setThemeStatus(systemThemeHandler.matches);
    }, [systemThemeHandler.matches])
    return(
        <div className="w-full px-10 py-5">
            <div className="w-full md:w-[45%] px-8 md:px-15 py-10 mx-auto rounded-lg shadow-[0px_0px_8px_rgba(225,225,225,0.8)] dark:shadow-[0px_0px_5px_rgba(0,0,0,0.6)] backdrop-blur-[150px]">
                <div className="flex flex-col gap-y-5">
                    <div className="text-center font-[1000] text-[20px]">{themeStatus ? "DARK MODE ACTIVE🥶" : "LIGHT MODE ACTIVE😇"}</div>
                    <div className="flex flex-col gap-y-3">
                        <TypeAnimation sequence={sequence} wrapper="div" cursor={true} repeat={Infinity} className="text-[15px] md:text-[18px] uppercase font-[550] text-center" />
                        <div className="text-[13.5px] font-[500]">System Theme Detector is a lightweight tool that detects whether a user's operating system is set to light mode or dark mode. It helps developers and users automatically adjust their application's UI to match the system’s theme preference.</div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <div className="text-[15px] font-bold">Features</div>
                        <div className="flex flex-col gay-y-1">
                            {zyztemFeatures.map(({id, _title}) => (
                                <div className="text-[15px] font-[500]" key={id}>✅ {_title}</div>
                            ))}
                        </div>
                    </div>
                    <button onClick={gotoThemeSettings} data-name="window" className="py-2 px-4 text-[14px] md:text-base font-[550] text-slate-100 bg-blue-400 border">CHANGE WINDOWs THEME</button>
                    <button onClick={gotoThemeSettings} data-name="ios" className="py-2 px-4 text-[14px] md:text-base font-[550] text-slate-100 bg-blue-400 border">CHANGE MACs THEME</button>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-[14px] font-[500]">Adjust Brightness</div>
                        <input onInput={handleBrightness} type="range" min={0} max={150} defaultValue={100} />
                    </div>
                    <div className="flex gap-x-3 items-center">
                        <div className="w-[30px] h-[30px] rounded-full border text-black bg-slate-100 flex justify-center items-center font-bold">{themeStatus ? "D" : "L"}</div>
                        <div className="text-[15.5px] font-[550]">CURRENT STATUS: <span className="text-blue-500 font-bolder">{themeStatus ? "DARK MODE" : "LIGHT MODE"}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;