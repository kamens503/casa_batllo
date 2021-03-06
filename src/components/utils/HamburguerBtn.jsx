export default function HamburguerBtn(props) {
    const { onClick } = props;
    return(<div class="relative z-[100] lg:hidden flex items-center justify-center" id="burguer-menu">
    <input type="checkbox" id="checkbox2" class="checkbox2 visuallyHidden" />
    <label htmlFor="checkbox2" onClick={onClick}>
        <div class="hamburger hamburger2">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
        </div>
    </label>
</div>)
}