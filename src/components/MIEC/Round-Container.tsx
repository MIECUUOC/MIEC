type Props = {
  children?: React.ReactNode;
  footer?: string;
};

export default function RoundContainer({ children, footer }: Props) {
  return (
    <section className="wrapper bg-light">
      {/* RoundContainer Padding 15 to 12 */}
      <div className="container py-12 py-md-12">{children}</div>
      {footer && <div className="align-items-end text-muted fs-10 text-end">{footer}</div>}
    </section>
  );
}
