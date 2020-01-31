const test = require("ava")
const htmlText = require(".")

test("main", (t) => {
	t.is(htmlText(`
<!DOCTYPE html>
<html id="home" lang="en">

<body>
  <main>
    <p>Site Content.</p>
  </main>
</body>

</html>
`), "Site Content.")
})
