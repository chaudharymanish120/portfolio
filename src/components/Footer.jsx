export default function Footer() {
    return (
        <footer className="mt-20">
            <div className="text-center border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p className="text-gray-700 dark:text-gray-200">
                    &copy; Copyright {new Date().getFullYear()}, Manishfolio.in
                    <br />
                    Terms & Privacy
                </p>
            </div>
        </footer>
    )
}