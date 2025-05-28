    
import AccountToggle from "./AccountToggle"
import SearchBar from "./SearchBar";

export default function Navbar(){
    return(
        <div>
            <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32x-48px)] min-w-[220px]">
                <AccountToggle />
                <SearchBar />

            </div>
            
        </div>
    );

};