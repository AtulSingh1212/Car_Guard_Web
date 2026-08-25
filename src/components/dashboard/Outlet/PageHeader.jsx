export const Card = ({ children, className = "" }) => (
    <div className={`bg-[#141625] border border-[#2a2d3d] rounded-2xl ${className}`}>{children}</div>
);

export const PageHeader = ({ title, subtitle, action }) => (
    <div className="flex items-start justify-between flex-wrap gap-4 mb-7">
        <div>
            <h1 className="text-white text-3xl font-extrabold mb-1.5">{title}</h1>
            {subtitle && <p className="text-gray-400 text-[14px] max-w-[560px]">{subtitle}</p>}
        </div>
        {action}
    </div>
);