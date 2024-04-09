type Props = {
  children?: React.ReactNode;
  footer?: string;
};

export default function RoundContainer({ children, footer }: Props) {
  return (
    <section className="wrapper bg-light">
      <div className="container py-15 py-md-15">{children}</div>
      {footer && <div className="align-items-end text-muted fs-10 text-end">{footer}</div>}
    </section>
  );
}
