function hideSearch() {
  const pathname = location.pathname;
  if (!pathname.includes("index")) {
    document
      .querySelector(".header-form")
      .removeChild(document.querySelector(".header-input"));
  }
}

function printNavBar(opts, id) {
  let template = "";
  for (const each of opts) {
    template =
      template + `<a class="nav-a" href="${each.href}">${each.title}</a>`;
  }
  const selector = document.getElementById(id);
  selector.innerHTML = template;
}

function printFooter(opts, id) {
  let template = "";
  for (const each of opts) {
    template =
      template +
      `
        <ul class="footer-ul">
        <li class="footer-main-item">
          <a class="footer-a" href="./index.html">${each.title}</a>
        </li>
        ${each.refs
          .map(
            (ref) =>
              `<li class="footer-li"><a class="footer-a" href="./index.html">${ref}</a></li>`
          )
          .join("")}
      </ul>
    `;
  }
  const selector = document.getElementById(id);
  selector.innerHTML = template;
}

async function printIcons() {
  let template = "";
  let online = await fetch("/api/sessions/online");
  online = await online.json();
  if (online.statusCode === 200) {
    template = `
      <li id="facebook" class="header-li">
        <a class="header-a" href="https://facebook.com">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/RJREFUaEPtmVuoVlUQx3//fMjESMkkSyi1XrIgUjSILlCQiBVKFIRgYFAaYWqJogVdoVCLKEXMCkQwhIioECqMMPNF8ckkugndMwpT8qlpj+wT3zlnX2avvT/kgPN2zl5z+a2Zvfas+cQIF43w+DkLcKYz2FkGzGwyMAe4GbgF8L975Yfs/59mz/cAuyX91AV8KwAzuwxYAcwFrmgY0FfAh8AGSQ6XJEkAZjYGWAesSfI6XOkJSc+m2GoMYGZ3AZuBSSkOK3SOAoslfdLEbhgg3/U3gHubOEhYu0XSQ1G9EICZTQA+Aq6NGm65zl/2eZJO1tmpBTCz84C9wHV1xjp+7hs2R9K/VXYjALuAuzsKzo/ObwAPajxwDnB1he31WRYeTwYws0eBl1oG7zv5NHBI0omhtszsSsCP1DK5Q9L7ZQ9LM2Bmfsr4bnkJpYgH+4Ckt6uUzexi4OeKNf5sqqRTRWuqALYDC1Miz3VuixyJAQA3t07Sc2GAPK1H8hpNYXhPkn8vaiUI8CdwqaR/hhoszICZvQYsrfWeWLe9akEAV3lY0qZagPzY/A0Y2wJgbNkZbmZP5aU5taH9g5JmRAA89e82NN67/Jiki4r0zcx7p+db2PYyGtTFDishM9sILG/h5Kiky0sADrT8IC6UtKPXdhHAZ8CNfQL4DiiEC/rbKGllHcDvgPc+qVKVge8Bv0OkygeS5tUBWKr1XK+fAIclTR/JAMclXVAH8HeDI/RA1qfMbJMxM/Pe3y9IETkpadDxXvQSe/8TPaO7AHgZWBaJ3nszSYPu3kUAX2RTg+uDBrsA2A3cHvS3T9INdSX0DjA/aLALgG+BKUF/uyTdUwfgY5INQYOtAMzsXKCwTS7xv0zSK3UAdReMXn2/iDw4xNkpSfuLAjAzL83RPc/8m/BWcLN82RRJ/i35X8q60a+BaQ0M9y7t13fgS0lXDY2pDGAtkDRoAvoF8JikYaVdBnA+8GvidbIfAH8Bl4QvNJ4mM1sPDGqcgiXVD4BnsvHKk0X+q+7EE4HDwIXBwAeWdQ3wI3CNJL9WDpPKuZCZ3Qp8fAYBfH50k6TPy2KIDLZeAFY1gOgyA6XTiIF4IgCjgJ0NpnNdAfgg2edKle19LUD+QjuEtxh3BjLRBUAoeI8lBDAQdPaLzJvA/TUQbQFelfRIYKNOL2kEkGdjAbANGFfiJBXARzmLJHl3GpbGADmEzzP9q3hfgacUgNezpm51tvN/hCPPFyYB9JSUt8GrfecA7yxdogA+/N0KvJj9IvNL08DDp1DEcD7NmwXMzjvGJUV6ZuajQR+t+MWk9GyP+OwUoInDrte2KqGug0mxdxYgZde61PkPoFiDQMAu40AAAAAASUVORK5CYII="
          />
        </a>
      </li>
      <li id="instagram" class="header-li">
        <a class="header-a" href="https://instagram.com">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABJdJREFUaEPtmWmolkUUx3//VtoLsj2zpLCiD+20SLRQtEB9iII+tECIVGYbBaIVpQQtJmG0QLRQEEEUpBDRIhUSCvZBW2xTW6gwK0zLD9ppzmVeee69z/PMzH3ve28X7oH3yztnzsx/zn/OMo8Y46Ixvn/GAYy2B8c9MOY8YGaHANcAlwFHAYd3CeJ74DtgMfCypF9K7GVTyMx2A+YCM4EdSxYp0N0GPA7cK+mfnHlZAMzsQuBZ4Igco8Ogsw64QdIHKVtJAGZ2NvBRylCPxs+R9GGb7VYAkTZfjODJD9zrWuC4NjqlADwBzOjR6eaanS/pziblRgBm5nz3E+i1PA28A5wOTAP2q1lwoqQf6jbSBuAm4Mke736xJA/HfWJm84BZNWtOl/RMKYDngweu7wLAZuBrYC9gcoOdfvQwsyuAN2p0n5N0YykAv/1TCwH8GL3mJ7uycrL7BJqcCZwH3FWx6UnsBEkbowfeDRHv/Jo1l0g6txSAx+KJBQDmSpqT0jez40MGfwk4Keq6p14BzgJ8rE7WSjqyFMDvDReqzs4tkvrdFzPboRJ+10n6tzrRzBbErJ7C7OMbJO1fCsByLAMPSLqvQhfnu9+dq4Bj4v9fhnj+GvCCpDUV3WWhBjo1Y52NkpyGg6Q2CpmZ1zpbMww7hydL6tM1s8sjxz1718mScKkfk7Qo6jvYz4FdEmttkuTBIA9ANJ7jgRnBtQujvnP0xYyL7/XNdZ24bmavAlcnAPwlae9sAGa2O+CXq00c4ARJGyKA+4MTtlMpMXe2JI/57rXpwFPD6gEz2yNQYVPC6GpJUyp8XtUSRQaaWiHp5Ajg6NBffJVYa7OkPUs8sCuwJWF0qSQPfX6Kh8WyI7dP+FuSH1KfmNnPwEEt622TtFMJAA+B3ly0yXJJp1UAfJtxGTv2+nHazHyud3eNIqk24LTVQqlL/Kuk7admZiuAExOgO8OfSDojgvfw+GdqXhGAmIRSHvA1p0haHTfiRVjfxcyQuwOFHonzvER4PzFna7j0O2dTKBpOecDVZkl6KOofHDKvF4AXJTbjzbu3i+vjvDs8NyTmbJHkPfkg6YZCbmy9pAM6VmPvfBtwccOGPIEtkPRe3Py+wKchQ09KACjLAwUecNWHQ8t3TwWEA7oW8NL4WA8yMdu+6YmukzfiGu6NSzIo91uotSb0wgMdm7dL8uIsW8zMaeP0yZEhVaNe2x+aYz3qzAs10eyUfigdPPl5OZ1TxHXMrZFUG2bb7sBy4JTUhgaM/wR4bfSWpM8GzjUzb84fLbTp6sskec88SNoAOGe9uhyqeCnyTUyIBwKerYcqr0u6shRATngb6oZK582U5E88RR5wznmK/z/IJEne4uYDcE0zcz7fPMoIFobQ2/i4lnqZ8xLWnxa74W83+D0oeLnSWNrnPO56afB2N7voYu4FnazdZCMJIFLp0lCv+xPgSHnC+T5Nkj85tkoWgAjCG5AHgVt7/IHDM/qcYf3AUT2Cyicm94q/KnT7iclfAJfG38eS/kidenU82wMlRkdSdxzASJ52cSIb7c3lrD9OoZxT6qXOfxP4g0B5AWE+AAAAAElFTkSuQmCC"
          />
        </a>
      </li>
      <li id="cart" class="header-li">
        <a class="header-a" href="./cart.html">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA81JREFUaEPtml2ITVEUx/9/UsjDiDFJHpQ8iAfNNCFfSV4YKUUzJOHVw0QKTT4ilDJ58UBpkq/yIIM3GV9NE0Z58aCRfGZGyseDByx3ZV/dtn3vuedjnzNz792vZ++11m//V3vts84hqmywynhRA650xWsK1xSusB2opXSFCfofTk1h3RIRkRGu9ACAXSSv2RxOhSsAWDl/A6gj+a0QupKBlXMayffVAjxEcko1pfQFkpvKAnYdWCJSD+ADgNHW8+Uk72R1yImIxvMVwHgrho0kL0YGNqf3DQCrLCPnSG7NEHgZAHvDtcpMJPklLvAGAJctI98B1JP8kQW0iBwHsNvy3UdyviueUBcPERkLYAjABMtYK0l7I1LhF5FnAOZazvaTPBQb2KT1WQDbLGO3SNqp7h3YnCuDDkfNuXgeJQW8FECPZewXgKkkVf3UhojoxqsAhUNjaCDpvC2GSmmjsK55o0XdctROsjM12r9X4KsA1lk+z5PcXCyO0MAG+giAvZbRfpKNaQGXKEdtJC8lDTwDwEuH0dkkn6cBLSKLAdyzfBUtR/l5kRQ2Kuuh0GQ5PEZyT0rArizrJbmwlP84wDsAnLKMvwMwvdiBkeRGiEg/gHmWzQ6Sh30B1wH4lMVVs0Q5aiL5xAuwSetuAKstBw8A3E5STYetWQBa7XLkejuy10ZOaQO8HsAVz3Dlmu8iuSVoclzgMQA+O66aQX59PF9BMjCzYgEblc8A2O6DIITN+ySXlDM/CWB1dLccZ57maMNuQbnX2tjARuXXWo4soMcAbnqCzJv9SPJ0GB9JAWvt22c5HiA5M0wwacxNCrjYVTOwLqYBWegjEWCT1n0Ami2AzlybpT1tKG8Xj0LDIuK6av4E0EhSuxLDYiSp8KRceXoLQNtA9tDu4QsPxD0k7WZESTeJAZu0PgFgpwewYiYPkjwQxl/SwJMBaIkaFyaIGHOzBTYqrwSgX+3SgM4e2EBr2/Soo2kfQ0zn0uEBnA8t12SbY3rG2vCze9lJwGd7aCVB4NtGooeW72CTsO8dWEROAmgDoCd4b65Oa6NPP8oFjjhrixn3Ciwi1wG0OJy3BEHHWVtqJ70Bi4j2urTn5RoPSS4qFlictUFp4xO4A4DzC57+cELS/rD+L1YRibw2S2DXy0Q+nsHci3tDCYUjr80SWDsgr3Iqj3IEUfK1UUQir80M2Ny49KeSLgu6m+SaoMBEJPLaTA6tgtuWqrVWfxID8DTodC4M1igdaW0mZSlIxSyeezuls4Apx2cNuJxdGslzagqPZPXKib3qFP4DPc5DTOx+iUAAAAAASUVORK5CYII="
          />
        </a>
      </li>
      <li id="cart" class="header-li">
        <a class="header-a" href="./profile.html">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABXtJREFUaEPtWnvonmMYvi7HlCLGmOMcZ1rMJNZii5KhRkLyh6TMyOZ8DAtjbNiclcj+kGkyOf3hMOQUyljOTHM+llJSuLzXej99PXu+3/u87/e825f97n9+/fqe+76v67mfw/3c90usZ8L1jC+GCf/fIz4c4TYiLGkUgBMAHA1gNAD/b/kWwBcAngawmOT3bfjvttlqhCWNB3AFgOMAbFBB5h8ASwBcS/L9toi3RljS5QCubwBcAC4heXMD3UqVVghLuhXArErvQw+YT/LCPm2soZ6dsKTzANySCegskgsy2VptJithSYcCeKkHwFXlRKwo9vTycsx+xb4dB+B8ADv10JtE8tVcpLMRlrQhgI8A7BEB9ziA00j+FgNebIEtADwIYFrk90+KE3wsyb9zkM5J+FwAseWXvBcleSt4S4QyneS9g0bY0d07APUegAkk/0oBK2mTIsrvAtgnGL+CpJd+35IlwpK2AfBjgMYkx5H0RCSLJO/rtwFsFCiNJBn6SLbbGZiL8LEAngi8LyM5pTYiAJJ8SE0MdI8i+WwTe906uQhPB3B3AOYBkqc3AShpEYBTA90zSN7fxF4bhJ0+XheAmUvy0iYAJTnLCpOOy0je2MReG4TPAnBXAGYpydg1U4lZkreHt0m3ZDmpcy3p48vEvxvgKpK7VLKLDJD0NYAdgp+mkVzaxF4bEfZz75sImKkkn6kDUtKRAGKH0yiS39WxFRubJcI2LMkp476Bk698N5P8IwWopM0AOLPaMRi/nOT+KTaqxuQkfDaAOyIOF5BMejlJsr7thJJl/9poTsLOkj4FsHMEcFUuvSWAhyIHlU15lYweuFy6XNaHA3iux7LyQeRc2S8lp48bl1vAVZGLint8ZA+9KSSXVS3V1N+zRbjjUJKfevNTAVSMm0lyYSZbq81kJ1xGejaAq/oEOpvkNX3aWEO9FcIl6akAnCJuVRP0L04rc+TNrV5LMeOSfBjNAXBmQtXSD/x7XOXsVSioOXHR4a1FuNubJGdNzsZcl94tUpd+EsBjJF2nblXWCuFWGdQ0Pky45oRFh0s6qEwPfWBtDcApY4o4BfWh9asTDpJvpSjVGZMtwpL8nOv0j0wyh5j8U0WC8ihJ7/O+pS/CktwvOgXAlZECXt/gAgMfuu9UFPgeIek+VCNpTFiSc2Y//cY28txcyY22Y4rykQv7taURYUl7AnB+22l71nbcp4Kvr8kk/VipJbUJl2XUFxIyqDeKbsOXZWHg90RUm5eVjl2LIsDBFTo+2Ey6Vmu1FmFJ2xVPuHeGiKz3mbsPS0j+nEgyOqx4G48AcCKAcyKF+Y6OqyzjSf6U6qsuYRfIJ0SM/+D0MUfNKQa8qKb49HeR0AX/UN4s8u6q1fCfTjLhovwyF8DFEYefl0vL793WRJKX+YtF081/Q5lD0qXiSkkiLMk9o1jLxCflgXWWVCWiIQZI2rZsw8Raq7uT9PciQ0oqYR9SYdvkz5Ksi3drTYqa9QEAXgOwaeD0eZJHVAGpJCxpEoBXIoZmkAzbK1X+svwuaSaA2yLGJpJ8fSgnKYTnAbggMPIZgDG5Cmt1Z6Fsvn8AYK9Adx5J18d6SgrhlZGDIlvZtC7ZznhJvq5uD/RXkvR7uxlhSWMA+G7tFn9WNIKkL/51JpK2L5OaMGheeR/3AjZkhCWdXDwKHg6UXyZ52Dpj2uVYkg+vQwIsJ5Fc3JRwrCu4kKQPjXUuxZcHdxZfHswIgDgBuq8p4djXdMmXfNszIukGAGEP2l/x3dSUsOvCVwfKrdSLm0yOpNr4qvZwbYNNgDfVaYPwZOfJASB/rJKt19OUrPUk1cZXeQ/3A2gQdYcJD2JUcmIajnDO2RxEW8MRHsSo5MT0L0WXpEwZzSi5AAAAAElFTkSuQmCC" />
        </a>
      </li>
      <li id="login" class="header-li">
          <img id="signout" class="header-social-img button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABYdJREFUaEPtmn3onmMUxz/fSMjrzGtewlBLkXnZsAjRWgsrymYKi+QP1P4wZBvNhoa8hPjD27Q/hjYzafL+NqxFKbXktUiYlzDFjvvo+tX9u3/3/dzX/Tz3/dw/vz2nnp6n5z7Xdc73Ptd1zrnOucQ2RtrG8DIAPNYtPrDwwMJj7A30fUmb2R7AQcCB4Xsf4Hvga+Ab/5b0c1PvuXHAZrY9cBowI3wOiwDzGbAaeB54Q9I/EWOiWBoDbGb7AzcBc4Bdo7TJZ/oVeAK4VZKvhJ6odsBmNh64AbgK2LEn7YYP/hO4P5lzqaSfup23VsBmdhawEti9W4Uixv0IXCjplQjeESy1ATazhcCCCCVc4Q8Bt5L//iW8oL2AccDxgP8uoxsl3VbGlH3eM+DgdVcA53QQ7t53uTsiSe+UKWlmpwDnArOBAzrwrwVmSfKXFkV1AN4beDsBdESOxD+AO4DbJW2J0ijFZGY7A/OBeR38wcfAZEm+x0upZ8AuIXjk94CDUxJfSuLqXElu3Z7IzA4BHg/hLW+uVZLOixFSC+AA+lBgPeAWd296jaStMUrE8JjZdsAjwKUF/PMlLS2bqzbAAfTRwFRJD5YJ7va5mV0H3FUwfookX2mFVCvgbkFUHWdmS4Drc8ZtAiZK+rtozv8l4LCa3EecnQNsnqRljQE2s0keOyU9XNVSvfCbmSc3nwL7Zeb5VlJhKOvJwmbmefKjwBJJnnj0lczsygTwQzlCZ0t6Ok+ZrgCHE9ADwBVh0kUtAXbP7fvWI0Sa1iUJTt5yr17EMzMPO350m5yS0ArgsJcvCTE6a9BxkjZn/6xk4bBf/YzqR780tQnY97Ln5G7tNM2QtKZrwKn9ukPO3mgNcLDyy8CZGb0WJ+HJz+PDqNTCOfs1zxe0Dfja5MR1d0axlZIuqAQ47NdVwJQS9/s68FoTLjrGGZqZOyiPy2naKOm4aMAd9msTuArnVIK4TKCZTQQ+yfDlxuPcyUr2a5n8Wp9HAt4tFBLSsrdI2inKwmY2F/ADgFccW6VIwH5u/j2j6FZJWc9dHIfNzOOsx1uPu61RJOAJIQFJ67lZkpeM4r10ONg/B5w0yp3WVK9fZ3TclKSXR1YC7Mxm5nHX82XPm4uo7bDkunntOk1rJU2vDHhogJl53nwfMBoTDy8QzsqAWybJa2HxSzrL3GFft2bhUPrxkq976jRNl+RVze4BhyXuebTn034OHqI2AXvxf10Gl1dIx0vKeu7qp6WCfd0mYC8Rn5wBvFzSxXkOpzSLKfZT/zm0oX3dVgEgL6V0lc+Q9GrtgIO1PV5PkuQFgb6SmW0Ejs0I3ZAcC71dk0s9Wbiv6DLCzOzO0JHIqjFTkucOYwewmc0EnslBtF5SuhIzgqVWC5vZnsCEJOB/0JT1Q2j0VumIg4Evb0kfdZJdG+AA9k3gcO/6SXq2btBm5gd6z6jyGu3e2rm3TGYtgM3M+7leAPBWyxAtkHRLmQKxz81sEXBzAf8KSRfFzNUz4HDF4S3gqByBnwOLvarYqf1RpGgoL10eWqbeQcwjb5eeKOmvfgH2I9iLLrSDwC9DQ3yNpHfLFDOzU8ONH7eaX3EqoveTjuW0Knc+erawaxIa108B55eBAX5IwGwIpVXPgf1Olt/d8m3hnxMAd35l5D5ijiRvukdTLYCHpJmZL797gF2iNajO+BtwtaQnqw+lu1y6kyAz8yXonvT0bhQqGeP158sk+a29rqhWC6c1SNI+v5TinvWYrjQbPshv/SyU9EKvczUGOLXM3QH5Up+WFAb3raDwV6HW/FjMzZ/YeRsHnLG6d/m8huzffmNv2ONwyfSL5MqSF9G/iwVRha+vgKso1hTvAHBTb3a0zDuw8GixRFN6DCzc1JsdLfP+C/rqpEz03p7YAAAAAElFTkSuQmCC" />
      </li>
    `;
    document.querySelector(".header-social").innerHTML = template;
    document.querySelector("#signout").onclick = async () => {
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };
      let response = await fetch("/api/sessions/signout", opts);
      response = await response.json();
      if (response.statusCode === 200) {
        location.replace("/");
      }
    };
  } else {
    template = `
      <li id="facebook" class="header-li">
        <a class="header-a" href="https://facebook.com">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/RJREFUaEPtmVuoVlUQx3//fMjESMkkSyi1XrIgUjSILlCQiBVKFIRgYFAaYWqJogVdoVCLKEXMCkQwhIioECqMMPNF8ckkugndMwpT8qlpj+wT3zlnX2avvT/kgPN2zl5z+a2Zvfas+cQIF43w+DkLcKYz2FkGzGwyMAe4GbgF8L975Yfs/59mz/cAuyX91AV8KwAzuwxYAcwFrmgY0FfAh8AGSQ6XJEkAZjYGWAesSfI6XOkJSc+m2GoMYGZ3AZuBSSkOK3SOAoslfdLEbhgg3/U3gHubOEhYu0XSQ1G9EICZTQA+Aq6NGm65zl/2eZJO1tmpBTCz84C9wHV1xjp+7hs2R9K/VXYjALuAuzsKzo/ObwAPajxwDnB1he31WRYeTwYws0eBl1oG7zv5NHBI0omhtszsSsCP1DK5Q9L7ZQ9LM2Bmfsr4bnkJpYgH+4Ckt6uUzexi4OeKNf5sqqRTRWuqALYDC1Miz3VuixyJAQA3t07Sc2GAPK1H8hpNYXhPkn8vaiUI8CdwqaR/hhoszICZvQYsrfWeWLe9akEAV3lY0qZagPzY/A0Y2wJgbNkZbmZP5aU5taH9g5JmRAA89e82NN67/Jiki4r0zcx7p+db2PYyGtTFDishM9sILG/h5Kiky0sADrT8IC6UtKPXdhHAZ8CNfQL4DiiEC/rbKGllHcDvgPc+qVKVge8Bv0OkygeS5tUBWKr1XK+fAIclTR/JAMclXVAH8HeDI/RA1qfMbJMxM/Pe3y9IETkpadDxXvQSe/8TPaO7AHgZWBaJ3nszSYPu3kUAX2RTg+uDBrsA2A3cHvS3T9INdSX0DjA/aLALgG+BKUF/uyTdUwfgY5INQYOtAMzsXKCwTS7xv0zSK3UAdReMXn2/iDw4xNkpSfuLAjAzL83RPc/8m/BWcLN82RRJ/i35X8q60a+BaQ0M9y7t13fgS0lXDY2pDGAtkDRoAvoF8JikYaVdBnA+8GvidbIfAH8Bl4QvNJ4mM1sPDGqcgiXVD4BnsvHKk0X+q+7EE4HDwIXBwAeWdQ3wI3CNJL9WDpPKuZCZ3Qp8fAYBfH50k6TPy2KIDLZeAFY1gOgyA6XTiIF4IgCjgJ0NpnNdAfgg2edKle19LUD+QjuEtxh3BjLRBUAoeI8lBDAQdPaLzJvA/TUQbQFelfRIYKNOL2kEkGdjAbANGFfiJBXARzmLJHl3GpbGADmEzzP9q3hfgacUgNezpm51tvN/hCPPFyYB9JSUt8GrfecA7yxdogA+/N0KvJj9IvNL08DDp1DEcD7NmwXMzjvGJUV6ZuajQR+t+MWk9GyP+OwUoInDrte2KqGug0mxdxYgZde61PkPoFiDQMAu40AAAAAASUVORK5CYII="
          />
        </a>
      </li>
      <li id="instagram" class="header-li">
        <a class="header-a" href="https://instagram.com">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABJdJREFUaEPtmWmolkUUx3//VtoLsj2zpLCiD+20SLRQtEB9iII+tECIVGYbBaIVpQQtJmG0QLRQEEEUpBDRIhUSCvZBW2xTW6gwK0zLD9ppzmVeee69z/PMzH3ve28X7oH3yztnzsx/zn/OMo8Y46Ixvn/GAYy2B8c9MOY8YGaHANcAlwFHAYd3CeJ74DtgMfCypF9K7GVTyMx2A+YCM4EdSxYp0N0GPA7cK+mfnHlZAMzsQuBZ4Igco8Ogsw64QdIHKVtJAGZ2NvBRylCPxs+R9GGb7VYAkTZfjODJD9zrWuC4NjqlADwBzOjR6eaanS/pziblRgBm5nz3E+i1PA28A5wOTAP2q1lwoqQf6jbSBuAm4Mke736xJA/HfWJm84BZNWtOl/RMKYDngweu7wLAZuBrYC9gcoOdfvQwsyuAN2p0n5N0YykAv/1TCwH8GL3mJ7uycrL7BJqcCZwH3FWx6UnsBEkbowfeDRHv/Jo1l0g6txSAx+KJBQDmSpqT0jez40MGfwk4Keq6p14BzgJ8rE7WSjqyFMDvDReqzs4tkvrdFzPboRJ+10n6tzrRzBbErJ7C7OMbJO1fCsByLAMPSLqvQhfnu9+dq4Bj4v9fhnj+GvCCpDUV3WWhBjo1Y52NkpyGg6Q2CpmZ1zpbMww7hydL6tM1s8sjxz1718mScKkfk7Qo6jvYz4FdEmttkuTBIA9ANJ7jgRnBtQujvnP0xYyL7/XNdZ24bmavAlcnAPwlae9sAGa2O+CXq00c4ARJGyKA+4MTtlMpMXe2JI/57rXpwFPD6gEz2yNQYVPC6GpJUyp8XtUSRQaaWiHp5Ajg6NBffJVYa7OkPUs8sCuwJWF0qSQPfX6Kh8WyI7dP+FuSH1KfmNnPwEEt622TtFMJAA+B3ly0yXJJp1UAfJtxGTv2+nHazHyud3eNIqk24LTVQqlL/Kuk7admZiuAExOgO8OfSDojgvfw+GdqXhGAmIRSHvA1p0haHTfiRVjfxcyQuwOFHonzvER4PzFna7j0O2dTKBpOecDVZkl6KOofHDKvF4AXJTbjzbu3i+vjvDs8NyTmbJHkPfkg6YZCbmy9pAM6VmPvfBtwccOGPIEtkPRe3Py+wKchQ09KACjLAwUecNWHQ8t3TwWEA7oW8NL4WA8yMdu+6YmukzfiGu6NSzIo91uotSb0wgMdm7dL8uIsW8zMaeP0yZEhVaNe2x+aYz3qzAs10eyUfigdPPl5OZ1TxHXMrZFUG2bb7sBy4JTUhgaM/wR4bfSWpM8GzjUzb84fLbTp6sskec88SNoAOGe9uhyqeCnyTUyIBwKerYcqr0u6shRATngb6oZK582U5E88RR5wznmK/z/IJEne4uYDcE0zcz7fPMoIFobQ2/i4lnqZ8xLWnxa74W83+D0oeLnSWNrnPO56afB2N7voYu4FnazdZCMJIFLp0lCv+xPgSHnC+T5Nkj85tkoWgAjCG5AHgVt7/IHDM/qcYf3AUT2Cyicm94q/KnT7iclfAJfG38eS/kidenU82wMlRkdSdxzASJ52cSIb7c3lrD9OoZxT6qXOfxP4g0B5AWE+AAAAAElFTkSuQmCC"
          />
        </a>
      </li>
      <li id="profile" class="header-li">
        <a class="header-a" href="./login.html">
          <img
            class="header-social-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABG5JREFUaEPtmWnIZ3MUxz9fSpaZsieMPYWJCWXkDbK8IImSpYbyhjSm0QzDMKPGOrbB4JUlopRMKMqWIklNGGvCyM5YpixNkuN+6z7TzH3+995z7//553lqzpt//e/5nXO+9/zOesUUJ01x+9kC4P/24IR5ICL2AE4BjgdOAmZUwH0NvFg8f82/kn6aCPBDAYiI3YEFwOnAIR0N+gB4DrhT0s8dz25k7w0gIhYB1wHb91VenvvDciSt6COnM4CIOAZ4Ajigj8KGMx8D50iyZ9LUCUBEXAQ8nJbendHeOF+Sr1aK0gAi4mbA12bUFMBlkh7IKGoFEBHmeQy4ICNwAnmWSVrSJi8D4B5gbpugET2f3xbcjQAi4rgip78xIuMyYv8GDpP0WR1zLYCI2KHICh8B+2Q0jZDnbWC2JMfGOGoCsNLB1MOwDYAD8C5Jrr5ExL7APGB+D3k+MleS7ckBiAi3AV/1UPYpcKqkLwedjYiDgJeLVGxAXeh7SXt2AbAcWNhFA/AjMEvSD03nSm/4anat4HMkORtuRgOvUER8A+zVEUBrxhiTFxE3AIs7yn9e0mmtAMpW4a2Ows1+oKQvMuci4tiic30zw1vhmS7J1XojjfNARNwIXNND+NZF4fk3cy4idiyC+rcMb4XnbElPtwF4FTihh/Bpkv7MnIuIacDvGd4Kz3JJV7UB+BYYGPEtCg+X9H7GqIg4Elid4a3wrJJ0VhuAgQUjoWyRpFsTfK4L1xflYWmGt8KzRtIRowKwDpjZNipGxH7AGmB6DwDrJe00KgCW+0lZyAYWwYg4FHhhiPZkQ+Hl7doA/ALs3OPtjB35C7gbWCnpO/8ZEZ7erujZmmxqyjpJnsMb0+iHgN/UZKT3JM1qA7AKOHMyWl9sPp6UdG4bAOfZWyYpgHmSPGA1XqGZQCqfV0B6t/MI4OHDtWSzkg+4eLm/Ohi4ENilx0vav9rp1jVzn3dYmzjovddJDeFlUDuTXAwsA9xWZGi1pKOrjHUALPjahNSngEskGURnKjd7DwHjuswBwhZIuiMLwK3EWmCbBquedbDXjXpZNBGxFeDEcUbDGV/HGZLWpwCUbnYuv7xGqMdGC+y909xUbkTsWtQIV/I6WiLJt2IcNc3EDjpX1rrBxsF6ct342MEDHjNdnf07iNx2HCXpn04ASi+cCLzSYIx7+oWSHswaXHnzDuTbWwK5scvNLLbuL+bdS1sM9O7Im4N3M0DKqc/b6Nkt/Isl3dTE0wqg9MTjXromjHsHMO/rvtOS1pbDi/uX3cqPH3OSrcptkq5s05kFYL77Ep5o05d57nnE13JcyuwcA9UDEeGs5Ow0KnIn6/X6M1kFKQ9UAs/z8qPA3lklST63L+dJcjecps4AypjYFvDq++q0pnpGZ7Klku7tI6sXgDFF5ZbNGzxX0epXyTZ7nLH8JWaFpF/bmOueDwWgcrU8dfnzqmuHr9lmk1PZpbqm+DPrS337pyqQCQPQ9w0Oe24LgGHf4LDnp7wH/gPFkFlAiYY45gAAAABJRU5ErkJggg=="
          />
        </a>
      </li>
    `;
    document.querySelector(".header-social").innerHTML = template;
  }
}

export { hideSearch, printNavBar, printFooter, printIcons };
