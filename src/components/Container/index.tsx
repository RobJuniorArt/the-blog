type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen">
      <div className="bg-amber-400 max-w-5xl mx-auto px-8">{children}</div>
    </div>
  );
}
