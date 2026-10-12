import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const TxtFile = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="p-5 space-y-3 text-sm text-gray-700 leading-relaxed font-georama">
        {data.subtitle && (
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            {data.subtitle}
          </h3>
        )}

        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
        )}

        {data.description?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </>
  );
};

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile");

export default TxtFileWindow;
