export default function MainHeader({text} : {text: string}) {
    return (
      <div className="text-center mb-16 md:mb-40">
        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-black-primary mb-6 leading-15 whitespace-pre-line">
          {text}
        </h1>
      </div>
    );
}