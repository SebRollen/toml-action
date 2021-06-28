# Read TOML

A simple action to read a single field from a TOML file and output the value stored in that field.

## Inputs

## `file`

**Required** The TOML file to read from.

## `field`

**Required** The field inside the TOML file to read. Can possibly be a nested field, using the `parent.child` notation.

## Outputs

## `value`
The value stored inside `file` at key `field`.

## Example usage
```
uses: SebRollen/toml-action@v1.0.0
id: read_toml
with:
  file: 'myfile.toml'
  field: 'package.version'
```
You can now refer to the output in a later step using `steps.read_toml.outputs.value`
