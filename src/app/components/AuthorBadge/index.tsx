import Link from "next/link";

const AuthorBadge = () => {
  return (
    <>
      <Link
        href="https://raduan.me"
        className="font-bold text-sm fixed bottom-0 right-0 border p-2 rounded-tl-xl bg-white border-dashed border-slate-300 hover:bg-slate-50 hover:border-solid transition-all z-50"
        target="_blank"
      >
        By <span className="text-secondary underline">Raduan</span>
      </Link>
    </>
  );
};

export default AuthorBadge;
